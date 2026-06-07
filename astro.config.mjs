// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://nexlinksmart.github.io',
  base: process.env.GITHUB_ACTIONS ? '/IEWAH_Website' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
