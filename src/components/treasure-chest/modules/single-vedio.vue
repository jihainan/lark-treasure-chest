<template>
  <div class="single-vedio-container">
    <!-- <img :src="info.imgSrc" :alt="info.imgAlt" draggable="false" /> -->
    <video autoplay loop :poster="info.vedioPoster" width="500">
      <source :src="info.vedioSrc" type="video/mp4" />
      <p>{{ info.vedioAlt }}</p>
    </video>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

/**
 * props 参数类型
 */
export interface SingleVedioProps {
  // 视频资源地址
  vedioSrc: string;
  // 视频资源占位文字
  vedioAlt: string;
  // 视频封面图片地址
  vedioPoster: string;
}
@Component
/** single img component */
export default class TestA extends Vue {
  @Prop({
    default: () => ({
      vedioSrc: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      imgAlt: "Happy Every Day !",
      vedioPoster: "https://fakeimg.pl/500x500/282828/eae0d0/",
    }),
  })
  info!: SingleVedioProps;
}
</script>

<style lang="scss" scoped>
.single-vedio-container {
  width: 100%;
  border-radius: 4px;

  // 提取为公共属性
  user-select: none;

  video {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
</style>
