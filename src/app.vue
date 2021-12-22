<template>
  <div class="app">
    <button @click="testTreasureChest">触发</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseModalClass from "@/components/base-modal";
import TreasureChest from "./components/treasure-chest";

@Component
/** root component */
export default class App extends Vue {
  /** 触发消息百宝箱 */
  triggerTreasureChest() {
    BaseModalClass.open("lak1", this.onModalClosed, this.onModalOpened);
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
  /**
   * 测试 TreasureChest 启动类
   */
  testTreasureChest() {
    new TreasureChest("/api/v1/message/").startUp();
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
