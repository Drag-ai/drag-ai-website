// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://drag-ai.com',
  vite: {
    plugins: [tailwindcss()]
  },
  trailingSlash: "always",
  integrations: [sitemap()],
});

// Made with Bob
