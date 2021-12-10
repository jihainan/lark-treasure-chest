<template>
  <div class="base-modal-container">
    <div>
      {{ message }}
    </div>

    <div>
      {{ message }}
    </div>
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
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
