<template>
  <div class="treasure-chest-module case-list-vertical-container">
    <div class="case-list-title">更新版本</div>
    <ul class="case-list">
      <li v-for="item in info.caseList" :key="item.id">
        <div class="word">{{ item.caseTitle }}</div>
        <img :src="item.caseImgSrc" :alt="item.caseImgAlt" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { CaseListVertical } from "@/service/model";

@Component
/** case list vertical component */
export default class TestCaseVertical extends Vue {
  @Prop({
    default: () => ({}),
  })
  info!: CaseListVertical;
}
</script>

<style lang="scss" scoped>
.case-list-vertical-container {
  display: flex;
  overflow: hidden;
  width: 443px;
  height: 554px;
  max-height: 554px;
  flex-direction: column;

  .case-list-title {
    width: 100%;
    height: 96px;
    padding-left: 31px;
    background-image: linear-gradient(342deg, #2f54eb 0%, #597ef7 100%);

    // border-radius: 3px 3px 0 0;
    color: #fff;
    font-size: 40px;
    font-stretch: normal;
    font-weight: normal;
    line-height: 96px;
    text-align: left;
  }

  .case-list {
    overflow: auto;
    flex: 1;
    padding: 0 30px;

    > li {
      height: 325px;

      .word {
        color: #666;
        font-size: 20px;
        font-weight: normal;
        line-height: 48px;

        &::before {
          display: inline-block;
          width: 5px;
          height: 5px;
          border: 1px #666 solid;
          margin-right: 8px;
          border-radius: 50%;
          content: " ";
          vertical-align: middle;
        }
      }

      img {
        width: 100%;
        height: 277px;
      }
    }
  }
}
</style>
