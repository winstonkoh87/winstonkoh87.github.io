// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { EnumChangefreq } from 'sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://winstonkoh87.com',
  trailingSlash: 'always', // Enforce trailing slash for GitHub Pages directory-based routing
  build: {
    format: 'directory' // Generates page/index.html instead of page.html for clean URL support
  },
  integrations: [
    sitemap({
      changefreq: EnumChangefreq.WEEKLY,
      filter: (page) => !page.includes('/404'),
      lastmod: new Date('2026-08-29'),
      serialize: (item) => {
        const url = item.url;
        const lastmod = '2026-08-29';
        // Homepage = highest priority
        if (url === 'https://winstonkoh87.com/' || url === 'https://winstonkoh87.com') {
          return { ...item, priority: 1.0, changefreq: EnumChangefreq.DAILY, lastmod };
        }
        // Core pages
        if (/\/(services|about|writing|portfolio|athena)\//.test(url)) {
          return { ...item, priority: 0.9, changefreq: EnumChangefreq.WEEKLY, lastmod };
        }
        // Articles (high-value content)
        if (/\/articles\//.test(url)) {
          return { ...item, priority: 0.8, changefreq: EnumChangefreq.MONTHLY, lastmod };
        }
        // Projects
        if (/\/projects\//.test(url)) {
          return { ...item, priority: 0.6, changefreq: EnumChangefreq.MONTHLY, lastmod };
        }
        // Default
        return { ...item, priority: 0.5, changefreq: EnumChangefreq.MONTHLY, lastmod };
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});