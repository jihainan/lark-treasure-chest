<template>
  <div class="treasure-chest-module single-img-container">
    <img :src="info.imgSrc" :alt="info.imgAlt" draggable="false" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { SingleImg } from "@/service/model";

@Component
/** single img component */
export default class TestA extends Vue {
  @Prop({
    default: () => ({
      imgSrc: "https://fakeimg.pl/300x1600/ff0000?text=World&font=lobster",
      imgAlt: "Happy Every Day !",
    }),
  })
  info!: SingleImg;
}
</script>

<style lang="scss" scoped>
.single-img-container {
  width: 100%;
  border-radius: 4px;

  // 提取为公共属性
  user-select: none;

  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 200px;
    border-radius: 4px;
  }
}
</style>
