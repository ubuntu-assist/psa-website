import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Every page is still prerendered (see src/routes/+layout.js); only the
    // /api/* form endpoints (Resend emails) run as Vercel serverless functions.
    adapter: adapter({ runtime: 'nodejs22.x' }),
    prerender: {
      entries: ['*'],
      handleHttpError: 'warn',
      handleMissingId: 'warn'
    }
  }
};

export default config;
