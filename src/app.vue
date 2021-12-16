<template>
  <div class="app">
    <button @click="triggerTreasureChest">触发</button>
    <base-modal
      ref="treasureChest"
      :visible.sync="baseModalVisible"
      @open="onModalOpened"
      @close="onModalClosed"
    >
      sdfslfkj
    </base-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseModal from "@/components/base-modal/base-modal.vue";

@Component({ components: { BaseModal } })
/** root component */
export default class App extends Vue {
  baseModalVisible: boolean = false;
  /** 触发消息百宝箱 */
  triggerTreasureChest() {
    this.baseModalVisible = true;
    console.log(this.$refs.treasureChest);
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
