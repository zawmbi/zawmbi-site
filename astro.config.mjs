import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zawmbi.github.io',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },


});