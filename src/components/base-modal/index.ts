import Vue from "vue";
import BaseModal from "./base-modal.vue";
/**
 * Treasure Chest 启动类
 */
export default class TreasureChest {
  /**
   * @constructor
   * @param {String} labelName 挂载节点标记名称
   * @param {Function} onclose 处理关闭事件的函数
   * @param {Function} onopen 处理打开事件的函数
   */
  constructor(labelName?: string, onclose?: () => void, onopen?: () => void) {
    this._label = labelName ?? this._label;
    this._onclose = onclose ?? this._onclose;
    this._onopen = onopen ?? this._onopen;
  }
  /** 挂载节点的标记名称 */
  private _label: string = "lark-treasure-chest";
  /** 内部组件实例 */
  private _modal!: Vue;
  /** 处理内部组件关闭事件的方法 */
  private _onclose: () => void = () => {
    console.log("closed");
  };
  /** 处理内部组件打开事件的方法 */
  private _onopen: () => void = () => {
    console.log("opened");
  };

  /**
   * 可以直接调用的静态启动方法
   * @param {String} labelName 挂载节点标记名称
   * @param {Function} onclose 处理关闭事件的函数
   * @param {Function} onopen 处理打开事件的函数
   */
  static open(labelName?: string, onclose?: () => void, onopen?: () => void) {
    new this(labelName, onclose, onopen).start();
  }

  /**
   * 启动 Treasure Chest
   */
  public start(): void {
    this._modal = this._getComponent();
    this._getMountNode().appendChild(this._modal.$el);
    this._setComponentVisible();
    // 设置组件的监听事件
    this._setComponentEventOpen();
    this._setComponentEventClose();
  }

  /**
   * 停止 Treasure Chest 并移除节点
   */
  public stop(): void {}

  /**
   * 获取 Vue Component 组件实例
   * @return {BaseModal}
   */
  private _getComponent(): BaseModal {
    return new BaseModal().$mount();
  }
  /**
   * 设置内部组件实例的 visible 属性和更新事件
   */
  private _setComponentVisible(): void {
    this._modal.$props.visible = true;
    this._modal.$on("update:visible", (visible) => {
      this._modal.$props.visible = visible;
    });
  }
  /**
   * 设置内部组件事件处理函数
   */
  private _setComponentEventOpen(): void {
    this._modal.$on("open", this._onopen);
  }
  /**
   * 设置内部组件事件处理函数
   */
  private _setComponentEventClose(): void {
    this._modal.$on("close", () => {
      // 移除节点
      document.body.removeChild(this._getMountNode());
      this._onclose();
    });
  }
  /**
   * 获取挂载节点
   * @return {HTMLElement}
   */
  private _getMountNode(): HTMLElement {
    let mountNode = document.getElementById(this._label);
    if (!mountNode) {
      const newMountNode = document.createElement("div");
      newMountNode.id = this._label;
      // 将新节点挂载到body
      mountNode = document.body.appendChild(newMountNode);
    }
    return mountNode;
  }
}
