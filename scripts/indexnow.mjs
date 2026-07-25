#!/usr/bin/env node
/**
 * IndexNow — Ping Bing/Yandex with new/updated URLs after build.
 * 
 * Usage: node scripts/indexnow.mjs
 * 
 * Reads the sitemap from dist/sitemap-index.xml, extracts all URLs,
 * and submits them to IndexNow-compatible search engines.
 * 
 * Requires: INDEXNOW_KEY env var or public/{key}.txt file
 */

import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const HOST = 'winstonkoh87.com';

// Generate or load IndexNow key
function getOrCreateKey() {
    const keyFile = join(ROOT, 'public', 'indexnow-key.txt');

    if (existsSync(keyFile)) {
        return readFileSync(keyFile, 'utf-8').trim();
    }

    // Generate a random key (32 hex chars)
    const key = Array.from({ length: 32 }, () =>
        Math.floor(Math.random() * 16).toString(16)
    ).join('');

    // Write key file to public/ (will be deployed as static asset)
    writeFileSync(keyFile, key);
    // Also write the verification file
    writeFileSync(join(ROOT, 'public', `${key}.txt`), key);

    console.log(`🔑 Generated new IndexNow key: ${key}`);
    console.log(`   Key file: public/indexnow-key.txt`);
    console.log(`   Verification: public/${key}.txt`);

    return key;
}

// Extract URLs from sitemap XML files
function extractUrlsFromSitemap() {
    const urls = [];

    // Check for sitemap index first
    const sitemapIndexPath = join(DIST, 'sitemap-index.xml');
    const sitemapPath = join(DIST, 'sitemap-0.xml');

    const filesToParse = [];

    if (existsSync(sitemapIndexPath)) {
        // Read the index to find sub-sitemaps
        const indexXml = readFileSync(sitemapIndexPath, 'utf-8');
        const locMatches = indexXml.match(/<loc>(.*?)<\/loc>/g) || [];

        for (const locTag of locMatches) {
            const loc = locTag.replace(/<\/?loc>/g, '');
            // Convert URL to local path
            const filename = loc.split('/').pop();
            const localPath = join(DIST, filename);
            if (existsSync(localPath)) {
                filesToParse.push(localPath);
            }
        }
    }

    // Fallback: try sitemap-0.xml directly
    if (filesToParse.length === 0 && existsSync(sitemapPath)) {
        filesToParse.push(sitemapPath);
    }

    for (const file of filesToParse) {
        const xml = readFileSync(file, 'utf-8');
        const urlMatches = xml.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];

        for (const urlTag of urlMatches) {
            const url = urlTag.replace(/<\/?loc>/g, '');
            if (!url.includes('sitemap')) {
                urls.push(url);
            }
        }
    }

    return urls;
}

// Submit to IndexNow API
async function submitToIndexNow(urls, key) {
    if (urls.length === 0) {
        console.log('⚠️  No URLs found in sitemap. Skipping IndexNow submission.');
        return;
    }

    const engines = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
    ];

    const payload = {
        host: HOST,
        key: key,
        keyLocation: `https://${HOST}/${key}.txt`,
        urlList: urls.slice(0, 10000) // IndexNow max 10k per request
    };

    console.log(`\n📡 Submitting ${urls.length} URLs to IndexNow...`);

    let accepted = 0;

    for (const engine of engines) {
        try {
            const response = await fetch(engine, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(payload)
            });

            const ok = response.ok || response.status === 202;
            if (ok) accepted++;
            console.log(`${ok ? '✅' : '❌'} ${engine} → ${response.status} ${response.statusText}`);

            // The reason lives in the body. Discarding it is why this step
            // reported "complete" for months while every submission 403'd.
            if (!ok) {
                const body = await response.text().catch(() => '');
                if (body) console.log(`   ${body.trim().slice(0, 300)}`);
                if (response.status === 403) {
                    console.log('   → 403 is usually NOT a bad key. If the key file resolves,');
                    console.log(`      check it: https://${HOST}/${key}.txt`);
                    console.log('      then verify domain ownership in Bing Webmaster Tools using');
                    console.log('      XML file verification (BingSiteAuth.xml at the site root).');
                    console.log('      Importing the site from Google Search Console does NOT');
                    console.log('      grant IndexNow authorization.');
                }
            }
        } catch (error) {
            console.log(`❌ ${engine} → Error: ${error.message}`);
        }
    }

    return { accepted, total: engines.length };
}

// Main
async function main() {
    console.log('🔍 IndexNow Post-Build Submission');
    console.log(`   Host: ${HOST}`);
    console.log(`   Dist: ${DIST}\n`);

    if (!existsSync(DIST)) {
        console.log('⚠️  dist/ directory not found. Run `npm run build` first.');
        process.exit(1);
    }

    const key = getOrCreateKey();
    const urls = extractUrlsFromSitemap();

    console.log(`📄 Found ${urls.length} URLs in sitemap:`);
    urls.forEach(url => console.log(`   ${url}`));

    const result = await submitToIndexNow(urls, key);

    // "complete" is not "succeeded". This printed a green tick on every build
    // while 0 of 2 engines accepted anything.
    if (!result || result.total === 0) {
        console.log('\n⚠️  IndexNow: nothing submitted.');
        return;
    }
    if (result.accepted === result.total) {
        console.log(`\n✅ IndexNow: ${result.accepted}/${result.total} engines accepted ${urls.length} URLs.`);
        return;
    }

    console.log(`\n❌ IndexNow: ${result.accepted}/${result.total} engines accepted. ${urls.length} URLs NOT submitted.`);
    console.log('   The deploy is fine — indexing is best-effort and does not gate the build.');
    console.log('   Pass --strict to make this exit non-zero in CI.');

    if (process.argv.includes('--strict')) process.exitCode = 1;
}

main().catch(console.error);
