import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apurvaschoolsengaon.org', // Placeholder, update later if needed
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'mr',
    locales: ['en', 'mr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
