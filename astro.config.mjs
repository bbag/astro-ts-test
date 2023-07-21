import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/integrations-guide/vercel
import vercel from '@astrojs/vercel/serverless';

// https://docs.astro.build/en/guides/integrations-guide/vue
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    integrations: [vue()],
    site: 'https://www.atlantapuzzletours.com'
});