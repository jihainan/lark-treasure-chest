<template>
  <div class="treasure-chest-module single-case-container">
    <div class="case-head">{{ info.caseTitle }}</div>
    <div class="case-wrapper">
      <img :src="info.caseBgSrc" :alt="info.caseAlt" class="case-wrapper-bg" />
    </div>
    <div class="case-footer">
      {{ info.caseDescribe }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { SingleCase } from "@/service/model";

@Component
/** single case component */
export default class TestCase extends Vue {
  @Prop({
    default: () => ({
      caseTitle: "",
      caseBgSrc: "",
      caseAlt: "",
      caseDescribe: "",
    }),
  })
  info!: SingleCase;
}
</script>

<style lang="scss" scoped>
.single-case-container {
  display: flex;
  overflow: auto;
  width: 562px;
  height: 552px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  border-radius: 4px;

  .case-head {
    height: 42px;
    color: #000;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 42px;
  }

  .case-wrapper {
    width: 100%;
    height: 361px;
    margin-top: 24px;
    margin-bottom: 20px;
    border-radius: 10px;

    .case-wrapper-bg {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: fill;
    }
  }

  .case-footer {
    color: #595959;
    font-size: 18px;
    font-stretch: normal;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 20px;
  }
}
</style>
