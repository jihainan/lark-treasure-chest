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
   * @param {String} userId 系统用户唯一标识
   * @param {String} labelName 挂载节点标记名称
   * @param {Function} onclose 处理关闭事件的函数
   * @param {Function} onopen 处理打开事件的函数
   */
  constructor(
    // resourceUrl: string,
    userId: string,
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
    this._userId = userId;
  }
  /** 用户ID */
  private _userId: string;
  /** 消息内容 */
  private _info: ContentTypes | undefined;
  /** 消息内容的类型 */
  private _infoType: ContentTypeEnum | undefined;
  /** 消息ID */
  private _infoId: string | undefined;
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
      const res = await getInfo(this._userId);
      // const res = {
      //   data: {
      //     payload: {
      //       content: {
      //         // single-img
      //         id: "K3FH2371",
      //         imgSrc:
      //           "http://10.11.24.129:8080/group1/M00/00/06/CgsYh2HJWLuAMJoqAHZi9qHTdP4163.jpg_res_h_?h=460&q=0",
      //         imgAlt: "测试图片",

      //         // single-case
      //         // id: "K3FH2371",
      //         // caseTitle: "【新功能】接收任务",
      //         // caseBgSrc:
      //         //   "http://localhost:8080/group1/M00/00/07/CgsYh2HWgg-AHSAKAAEo5dXqTG0872.jpg_res_h_?h=502&q=301",
      //         // caseAlt: "测试图片",
      //         // caseDescribe: "功能更新",

      //         // caseList: [
      //         //   {
      //         //     id: "0",
      //         //     caseTitle: "解释文字0",
      //         //     caseImgSrc:
      //         //       "http://10.11.24.129:8080/group1/M00/00/07/CgsYh2HWg2mAEwmOAABtXH57SyA634.jpg_res_h_?h=369&q=277",
      //         //     caseImgAlt: "测试图片0",
      //         //     caseDescribe: "文字描述0",
      //         //   },
      //         //   {
      //         //     id: "1",
      //         //     caseTitle: "解释文字1",
      //         //     caseImgSrc:
      //         //       "http://10.11.24.129:8080/group1/M00/00/07/CgsYh2HWg2mAEwmOAABtXH57SyA634.jpg_res_h_?h=369&q=277",
      //         //     caseImgAlt: "测试图片1",
      //         //     caseDescribe: "文字描述1",
      //         //   },
      //         //   {
      //         //     id: "2",
      //         //     caseTitle: "解释文字2",
      //         //     caseImgSrc:
      //         //       "http://10.11.24.129:8080/group1/M00/00/07/CgsYh2HWg2mAEwmOAABtXH57SyA634.jpg_res_h_?h=369&q=277",
      //         //     caseImgAlt: "测试图片2",
      //         //     caseDescribe: "文字描述2",
      //         //   },
      //         //   {
      //         //     id: "3",
      //         //     caseTitle: "解释文字3",
      //         //     caseImgSrc:
      //         //       "http://10.11.24.129:8080/group1/M00/00/07/CgsYh2HWg2mAEwmOAABtXH57SyA634.jpg_res_h_?h=369&q=277",
      //         //     caseImgAlt: "测试图片3",
      //         //     caseDescribe: "文字描述3",
      //         //   },
      //         //   {
      //         //     id: "4",
      //         //     caseTitle: "解释文字4",
      //         //     caseImgSrc:
      //         //       "http://10.11.24.129:8080/group1/M00/00/07/CgsYh2HWg2mAEwmOAABtXH57SyA634.jpg_res_h_?h=369&q=277",
      //         //     caseImgAlt: "测试图片4",
      //         //     caseDescribe: "文字描述4",
      //         //   },
      //         // ],
      //       },
      //       type: 1,
      //     },
      //   },
      // };
      this._info = res.data.payload.content;
      this._infoType = res.data.payload.type;
      this._infoId = res.data.payload.id;
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
    if (this._infoId) {
      markAsRead(this._infoId, this._userId);
    }
  }
}
