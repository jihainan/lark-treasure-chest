// vite 配置中的build部分
import { resolve } from "path";
export default {
  lib: {
    entry: resolve(__dirname, "../src/components/base-modal/index.ts"),
    name: "lark-treasure-chest",
    fileName: (format) => `lark-treasure-chest.${format}.js`,
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
};
