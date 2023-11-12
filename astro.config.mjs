import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  output: 'server',
  adapter: vercel ({
    webAnalytics: {
      enable: true,
    },
  }),
  integrations: [react(), tailwind()]
});