<template>
  <div class="treasure-chest-module single-video-container">
    <!-- <img :src="info.imgSrc" :alt="info.imgAlt" draggable="false" /> -->
    <video autoplay loop :poster="info.videoPoster" width="500">
      <source :src="info.videoSrc" type="video/mp4" />
      <p>{{ info.videoAlt }}</p>
    </video>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { SingleVideo } from "@/service/model";

@Component
/** single img component */
export default class TestA extends Vue {
  @Prop({
    default: () => ({
      videoSrc: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      imgAlt: "Happy Every Day !",
      videoPoster: "https://fakeimg.pl/500x500/282828/eae0d0/",
    }),
  })
  info!: SingleVideo;
}
</script>

<style lang="scss" scoped>
.single-video-container {
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
