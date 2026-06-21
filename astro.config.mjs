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
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/swim-coach-demo/'),
      serialize: (item) => {
        const url = item.url;
        // Homepage = highest priority
        if (url === 'https://winstonkoh87.com/' || url === 'https://winstonkoh87.com') {
          return { ...item, priority: 1.0, changefreq: EnumChangefreq.DAILY };
        }
        // Core pages
        if (/\/(services|about|writing|portfolio|athena)\//.test(url)) {
          return { ...item, priority: 0.9, changefreq: EnumChangefreq.WEEKLY };
        }
        // Articles (high-value content)
        if (/\/articles\//.test(url)) {
          return { ...item, priority: 0.8, changefreq: EnumChangefreq.MONTHLY };
        }
        // Projects
        if (/\/projects\//.test(url)) {
          return { ...item, priority: 0.6, changefreq: EnumChangefreq.MONTHLY };
        }
        // Default
        return { ...item, priority: 0.5, changefreq: EnumChangefreq.MONTHLY };
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});