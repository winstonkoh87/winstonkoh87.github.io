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

    for (const engine of engines) {
        try {
            const response = await fetch(engine, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(payload)
            });

            const statusEmoji = response.ok || response.status === 202 ? '✅' : '❌';
            console.log(`${statusEmoji} ${engine} → ${response.status} ${response.statusText}`);
        } catch (error) {
            console.log(`❌ ${engine} → Error: ${error.message}`);
        }
    }
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

    await submitToIndexNow(urls, key);

    console.log('\n✅ IndexNow submission complete.');
}

main().catch(console.error);
