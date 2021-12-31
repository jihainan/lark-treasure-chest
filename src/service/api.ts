import request from "@/utils/request";
import { BaseResponse, InfoResponse } from "./model";

/**
 * 获取资源
 * @param {String} userId  资源地址
 * @return {Promise<object>}
 */
export const getInfo = (userId: string): InfoResponse =>
  request({
    url: "/api/v1/message/query",
    method: "post",
    data: { userId },
  });

/**
 * 将资源标记为已读
 * @param {String} messageId 消息ID
 * @param {String} userId 用户ID
 * @return {Promise<object>}
 */
export const markAsRead = (
  messageId: string,
  userId: string
): BaseResponse<boolean> =>
  request({
    url: "api/v1/message/mark",
    method: "post",
    data: {
      messageId,
      userId,
    },
  });
