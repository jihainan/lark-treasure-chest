import request from "@/utils/request";

export const getUserInfo = (data: any) =>
  request({
    url: "/user/info",
    method: "get",
    params: data,
  });
