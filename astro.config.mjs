import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://szacho.github.io',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), sitemap(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })],
});