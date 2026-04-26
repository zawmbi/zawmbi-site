import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://zawmbi.github.io',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  adapter: cloudflare()
});