import BaseModalClass from "@/components/base-modal";
import { getInfo, markAsRead } from "@/service/api";
import { ContentTypeEnum, ContentTypes } from "@/service/model";
import { CreateElement, VNode } from "vue";
// 导入所有组件
import SingleImg from "./modules/single-img.vue";
import SingleVideo from "./modules/single-video.vue";
import SingleCase from "./modules/single-case.vue";
import CaseListVertical from "./modules/case-list-vertical.vue";
import CaseListHorizontal from "./modules/case-list-horizontal.vue";
import VersionUpdate from "./modules/version-update.vue";
import CollectInfo from "./modules/collect-info.vue";

// 内容组件map
const componentMap = {
  SingleImg,
  SingleVideo,
  SingleCase,
  CaseListVertical,
  CaseListHorizontal,
  VersionUpdate,
  CollectInfo,
};

/**
 * treasure chest 启动类
 * 基于策略模式和工程模式
 */
export default class TreasureChest extends BaseModalClass {
  /**
   * @constructor
   * @param {String} resourceUrl 请求后端资源的服务地址
   * @param {String} labelName 挂载节点标记名称
   * @param {Function} onclose 处理关闭事件的函数
   * @param {Function} onopen 处理打开事件的函数
   */
  constructor(
    resourceUrl: string,
    labelName?: string,
    onclose?: () => void,
    onopen?: () => void
  ) {
    // 覆盖关闭事件的处理函数 增加标记为已读的方法
    const oncloseOverwrite = () => {
      onclose && onclose();
      this._markAsRead();
    };
    super(labelName, oncloseOverwrite, onopen);
    this._resourceUrl = resourceUrl;
  }
  /** 请求后端数据的地址 */
  private _resourceUrl: string;
  /** 消息内容 */
  private _info: ContentTypes | undefined;
  /** 消息内容的类型 */
  private _infoType: ContentTypeEnum | undefined;
  /**
   * 启动方法
   */
  public startUp(): void {
    this._requestInfo()
      .then((result) => {
        result && this.start(this._setDefaultSlot);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  /**
   * 根据消息类型和消息内容设置显示的内容
   * @param {CreateElement} h 自动注入的方法
   * @return {VNode}
   */
  private _setDefaultSlot = (h: CreateElement): VNode => {
    if (this._infoType && this._info) {
      const componentName = ContentTypeEnum[this._infoType];
      return h(componentMap[componentName], {
        props: { info: this._info },
      });
    }
    return h();
  };
  /**
   * 请求后端资源
   */
  private async _requestInfo(): Promise<boolean> {
    try {
      const res = await getInfo(this._resourceUrl);
      // const res = {
      //   data: {
      //     payload: {
      //       content: {
      //         id: "K3FH2371",
      //         imgSrc:
      //           "http://10.11.24.129:8080/group1/M00/00/06/CgsYh2HJWLuAMJoqAHZi9qHTdP4163.jpg_res_h_?h=800&q=100",
      //         imgAlt: "测试图片",
      //       },
      //       type: 1,
      //     },
      //   },
      // };
      this._info = res.data.payload.content;
      this._infoType = res.data.payload.type;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * 将记录标记为已读
   */
  private _markAsRead(): void {
    if (this._info?.id) {
      markAsRead(this._info.id, this._resourceUrl);
    }
  }
}
