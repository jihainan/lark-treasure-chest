<template>
  <div class="single-img-container">
    <img :src="info.imgSrc" :alt="info.imgAlt" draggable="false" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

/**
 * props 参数类型
 */
export interface SingleImgProps {
  // 图片资源地址
  imgSrc: string;
  // 图片资源占位文字
  imgAlt: string;
}
@Component
/** single img component */
export default class TestA extends Vue {
  @Prop({
    default: () => ({
      imgSrc: "https://fakeimg.pl/300x1600/ff0000?text=World&font=lobster",
      imgAlt: "Happy Every Day !",
    }),
  })
  info!: SingleImgProps;
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
    border-radius: 4px;
  }
}
</style>
