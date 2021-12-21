<template>
  <div class="base-modal-container">
    <!-- 遮罩层 -->
    <transition name="fade-modal" appear>
      <div v-if="syncedVisible" class="base-modal-mask" />
    </transition>

    <!-- 主内容区域 -->
    <transition
      name="zoom-modal"
      appear
      @after-enter="handleOpen"
      @after-leave="handleClose"
    >
      <div v-if="syncedVisible" class="base-modal-wrapper">
        <div class="base-modal">
          <!-- 主内容区域默认插槽 -->
          <div class="base-modal-body">
            <slot />
          </div>
          <!-- 关闭按钮 -->
          <div class="base-modal-close-btn" @click="close"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import "./polyfill-global-this.js";
import { CSSProperties } from "@/assets/styles";
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component({ name: "BaseModal" })
/** 基础弹窗组件 */
export default class BaseModal extends Vue {
  /** 弹窗是否可见 */
  @PropSync("visible", { default: undefined })
  syncedVisible!: boolean;
  /** 弹窗默认是否可见（非受控） */
  @Prop({ default: true })
  defaultVisible!: boolean;
  /** 是否显示遮罩层 */
  @Prop({ default: true })
  mask!: boolean;
  /** 关闭时是否卸载节点 */
  @Prop({ default: true })
  unmountOnClose!: boolean;
  /** 点击遮罩层是否可以关闭弹窗 */
  @Prop({ default: false })
  maskClosable!: boolean;
  /** 是否隐藏关闭按钮 */
  @Prop({ default: false })
  closable!: false;
  /** 弹窗的挂载容器 */
  @Prop({ default: "body" })
  container!: string | HTMLElement | null | undefined;
  /** 遮罩层的样式 */
  @Prop({ default: () => ({}) })
  maskStyle!: CSSProperties;
  /** 弹窗的样式 */
  @Prop({ default: () => ({}) })
  modalStyle!: CSSProperties;

  /**
   * 关闭弹窗
   */
  close() {
    this.syncedVisible = false;
  }

  /**
   * 处理弹窗打开事件
   */
  handleOpen() {
    if (this.syncedVisible) {
      this.$emit("open");
    }
  }
  /**
   * 处理弹窗关闭事件
   */
  handleClose() {
    if (!this.syncedVisible) {
      this.$emit("close");
    }
  }
}
</script>

<style lang="scss" scoped>
/** 外层容器样式 */
.base-modal-container {
  // 遮罩层样式
  .base-modal-mask {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1d212999;
  }

  // 主内容区域样式
  .base-modal-wrapper {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
  }
}

/** modal 框样式 */
.base-modal {
  position: relative;
  top: 100px;
  width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  line-height: 1.5715;
  text-align: left;
  white-space: initial;

  .base-modal-body {
    position: relative;

    // padding: 24px 20px;
  }

  .base-modal-close-btn {
    position: absolute;
    right: 0;
    left: 0;
    width: 24px;
    height: 24px;
    margin: 16px auto 0;
    background-image: url("@/assets/icon/icon-circle-close.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    cursor: pointer;
  }
}

/** 动画效果 */
.zoom-modal-enter,
.zoom-modal-leave-to {
  opacity: 0;
  transform: scale(0.5, 0.5);
}

.zoom-modal-enter-active,
.zoom-modal-leave-active {
  transition: opacity 0.4s cubic-bezier(0.3, 1.3, 0.3, 1),
    transform 0.4s cubic-bezier(0.3, 1.3, 0.3, 1);
}

.fade-modal-enter,
.fade-modal-leave-to {
  opacity: 0;
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.4s cubic-bezier(0.3, 1.3, 0.3, 1);
}
</style>
