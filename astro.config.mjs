// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://nexlinksmart.github.io',
  base: '/IEWAH_Website',
  vite: {
    plugins: [tailwindcss()],
  },
});
