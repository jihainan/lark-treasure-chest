import request from "@/utils/request";
import { BaseResponse, InfoResponse } from "./model";

/**
 * 获取资源
 * @param {String} resourceUrl  资源地址
 * @return {Promise<object>}
 */
export const getInfo = (resourceUrl: string): InfoResponse =>
  request({
    url: resourceUrl,
    method: "get",
  });

/**
 * 将资源标记为已读
 * @param {String} infoId 数据ID
 * @param {String} resourceUrl 资源地址
 * @return {Promise<object>}
 */
export const markAsRead = (
  infoId: string,
  resourceUrl: string
): BaseResponse<boolean> =>
  request({
    url: resourceUrl,
    method: "put",
    data: { infoId },
  });
