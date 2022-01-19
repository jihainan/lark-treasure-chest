export default {
  // 选项写法
  "/lark/treasure/chest": {
    // target: "http://localhost:7776",
    target: "http://10.11.24.129:7777",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/lark\/treasure\/chest/, "/"),
  },
  // 正则表达式写法
  "^/fallback/.*": {
    target: "http://jsonplaceholder.typicode.com",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/fallback/, ""),
  },
  // // 使用 proxy 实例
  "/api": {
    target: "http://jsonplaceholder.typicode.com",
    changeOrigin: true,
    // configure: (proxy, options) => {
    //   // proxy 是 'http-proxy' 的实例
    // },
  },
};
