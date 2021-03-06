import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import html from "vite-plugin-html";
// import legacy from "@vitejs/plugin-legacy";
import proxy from "./proxy";
import build from "./build";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lark/treasure/",
  plugins: [
    createVuePlugin({
      jsx: true,
      jsxOptions: {
        functional: true,
        injectH: true,
        vModel: true,
        vOn: true,
      },
    }),
    html({
      inject: {
        data: {
          title: "Lark Treasure Chest",
        },
      },
    }),
    // legacy({
    //   targets: ["chrome >= 49"],
    // }),
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
  build,
});
