// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://winstonkoh87.github.io',
  trailingSlash: 'never', // Clean URLs (no trailing slash)
  build: {
    format: 'directory' // Generates page/index.html instead of page.html for clean URL support
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(), // Enforces fresh timestamp on build
      // Custom entry point for handling images would go here if supported via strict xml
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});