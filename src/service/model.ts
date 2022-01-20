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
  SingleVideo = 2,
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
  id?: string;
  type: ContentTypeEnum;
  content: T;
}

export interface SingleImg {
  // 图片资源地址
  imgSrc: string;
  // 图片资源占位文字
  imgAlt: string;
}
export interface SingleVideo {
  id?: string;
  // 视频资源地址
  videoSrc: string;
  // 视频资源占位文字
  videoAlt: string;
  // 视频封面图片地址
  videoPoster: string;
}
// 单功能-更新动态
export interface SingleCase {
  id?: string;
  // case标题文字
  caseTitle: string;
  // case背景资源地址
  caseBgSrc: string;
  // case资源占位文字
  caseAlt: string;
  // case功能更新描述文字
  caseDescribe: string;
}
// 多功能-更新动态-竖向
export interface CaseListVertical {
  /* case list */
  caseList?: Array<{
    id: string;
    caseTitle: string;
    caseImgSrc: string;
    caseImgAlt: string;
  }>;
}
// 多功能-更新动态-横向
export interface CaseListHorizontal {
  /* case list */
  caseList?: Array<{
    id: string;
    caseTitle: string;
    caseImgSrc: string;
    caseImgAlt: string;
    caseDescribe: string;
  }>;
}
/** 应用级别的数据类型 */
export type DataResponse<T> = BaseResponse<DataPayload<T>>;
export type ContentTypes =
  | SingleImg
  | SingleVideo
  | SingleCase
  | CaseListVertical;
export type InfoResponse = DataResponse<ContentTypes>;
