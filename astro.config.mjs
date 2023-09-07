import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://view-transitions-bcna.vercel.app/',
  integrations: [tailwind(), react(), prefetch(), sitemap()]
});