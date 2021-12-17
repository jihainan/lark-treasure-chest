import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import html from "vite-plugin-html";
import legacy from "@vitejs/plugin-legacy";
import proxy from "./proxy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lark/treasure/",
  plugins: [
    createVuePlugin(),
    html({
      inject: {
        data: {
          title: "Lark Treasure Chest",
        },
      },
    }),
    legacy({
      targets: ["chrome >= 49"],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3001,
    cors: true,
    proxy,
  },
  build: {
    outDir: "dist",
  },
});
