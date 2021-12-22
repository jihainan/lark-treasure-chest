import { AxiosPromise } from "axios";

/**
 * 服务相关的所有数据模型
 */
/** 基础数据类型 */
export enum ResponseStatusEnum {
  "OK",
}
export enum ContentTypeEnum {
  /** 仅包含一张图片 */
  SingleImg = 1,
  /** 仅包含一个视频 */
  SingleVedio = 2,
  /** 包含标题、标题和说明文字 */
  SingleCase = 3,
  /** 包含标题和列表[动画 + 说明文字] 横版 */
  CaseListVertical = 4,
  /** 包含标题和列表[动画 + 说明文字] 纵版 */
  CaseListHorizontal = 5,
  /** 版本更新包含标题、版本、文字、按钮 */
  VersionUpdate = 6,
  /** 收集用户信息包含操作信息加操作按钮 */
  CollectInfo = 7,
}

export type BaseResponse<T> = AxiosPromise<{
  status: ResponseStatusEnum;
  payload: T;
}>;
export interface DataPayload<T> {
  type: ContentTypeEnum;
  content: T;
}

export interface SingleImg {
  id?: string;
  // 图片资源地址
  imgSrc: string;
  // 图片资源占位文字
  imgAlt: string;
}
export interface SingleVedio {
  id?: string;
  // 视频资源地址
  vedioSrc: string;
  // 视频资源占位文字
  vedioAlt: string;
  // 视频封面图片地址
  vedioPoster: string;
}

/** 应用级别的数据类型 */
export type DataResponse<T> = BaseResponse<DataPayload<T>>;
export type ContentTypes = SingleImg | SingleVedio;
export type InfoResponse = DataResponse<ContentTypes>;
