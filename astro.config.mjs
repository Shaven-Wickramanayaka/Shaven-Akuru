// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://shaven-wickramanayaka.github.io",
  base: "/shaven-akuru",
  trailingSlash: 'never',
  build:{
    assetsPrefix: './'
  }
  vite: {
    plugins: [tailwindcss()],
  },
});
