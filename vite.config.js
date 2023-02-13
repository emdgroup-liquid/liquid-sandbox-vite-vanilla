import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    copy({
      targets: [
        {
          src: "node_modules/@emdgroup-liquid/liquid/dist/liquid/assets/*",
          dest: "public/liquid/assets",
        },
      ],
      hook: "buildStart",
    }),
  ],
});
