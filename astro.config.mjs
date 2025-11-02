// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yoursite.com', // Cambia esto a tu dominio

  // Integraciones
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  // Configuración de compilación optimizada
  build: {
    inlineStylesheets: 'auto',
  },

  // Compresión de imágenes y assets
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },

  // Prefetch automático para mejor rendimiento
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Configuración de compresión
  compressHTML: true,
});
