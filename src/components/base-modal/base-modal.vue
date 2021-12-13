<template>
  <div class="base-modal-container">
    <div>
      {{ message }}
    </div>

    <div>{{ message }}123</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "BaseModal" })
/** 基础弹窗组件 */
export default class BaseModal extends Vue {
  public message: string = "121212";
}
</script>

<style lang="scss" scoped>
.base-modal-container {
  background-color: #f00;
  height: 100%;
  width: 100%;
}
</style>
