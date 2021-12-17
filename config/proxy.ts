export default {
  // 选项写法
  "/api": {
    target: "http://localhost:7777",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
  // 正则表达式写法
  "^/fallback/.*": {
    target: "http://jsonplaceholder.typicode.com",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/fallback/, ""),
  },
  // // 使用 proxy 实例
  // "/api": {
  //   target: "http://jsonplaceholder.typicode.com",
  //   changeOrigin: true,
  //   configure: (proxy, options) => {
  //     // proxy 是 'http-proxy' 的实例
  //   },
  // },
};
