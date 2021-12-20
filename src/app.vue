<template>
  <div class="app">
    <button @click="triggerTreasureChest">触发</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TreasureChest from "@/components/base-modal";

@Component
/** root component */
export default class App extends Vue {
  /** 触发消息百宝箱 */
  triggerTreasureChest() {
    const instance = TreasureChest.open(
      "lak1",
      this.onModalClosed,
      this.onModalOpened
    );
    setTimeout(() => {
      instance.stop();
    }, 2000);
  }
  /**
   * 关闭弹出框
   */
  onModalClosed() {
    console.log("弹窗关闭了");
  }
  /** */
  onModalOpened() {
    console.log("打开了");
  }
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
