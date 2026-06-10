import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zawmbi.com',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },


});