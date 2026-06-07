// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // URL to your GitHub Pages site (change "kenrett" to your GitHub username if different)
  site: 'https://kenrett.github.io',
  // Base path of your project. Set to '/<repo-name>' (e.g., '/ken-rettberg'). 
  // If you are deploying to username.github.io (the root domain), you can delete or comment this line out.
  base: '/ken-rettberg',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});