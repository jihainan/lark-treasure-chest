import { CSSProperties } from "@/assets/styles";

export interface BaseModalConfig {
  /**
   * 是否显示关闭按钮
   */
  closable?: boolean;
  /**
   * 是否显示遮罩层
   */
  mask?: boolean;
  /**
   * 点击遮罩层是否可以关闭
   */
  maskClosable?: boolean;
  /**
   * 遮罩层的样式
   */
  maskStyle?: CSSProperties;
  /**
   * 点击关闭按钮的回调函数
   */
  onClose?: () => void;
}

export interface BaseModalReturn {
  /**
   * 关闭对话框
   */
  close: () => void;
}

export interface BaseModalMethod {
  /**
   * 打开对话框
   */
  open: (config: BaseModalConfig) => BaseModalReturn;
}
