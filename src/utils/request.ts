import axios from "axios";

const service = axios.create({
  baseURL: "/lark/treasure/chest/",
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // 设置请求头 Authorization
    const token: string = JSON.parse(
      window.localStorage.getItem("lark__Access-Token") || "{}"
    ).value;
    config.headers["Authorization"] = token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status != "OK") {
      console.log({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });
      if (
        res.status === 50008 ||
        res.status === 50012 ||
        res.status === 50014
      ) {
        console.log(
          "You have been logged out, try to login again.",
          "Log out",
          {
            confirmButtonText: "Relogin",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        );
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
