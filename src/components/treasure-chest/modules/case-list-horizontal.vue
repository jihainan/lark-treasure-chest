<template>
  <div class="treasure-chest-module case-list-horizontal-container">
    <div class="case-list-title">更新版本</div>
    <div
      @mouseover="suspend"
      @mouseout="_autoPlay"
      @blur="suspend"
      @focus="_autoPlay"
    >
      <transition-group
        class="case-list-ul"
        name="fade"
        mode="in-out"
        v-if="info.caseList"
      >
        <li
          v-for="(item, index) in info.caseList"
          :key="item.id"
          v-show="curIndex === index"
        >
          <div class="word">{{ item.caseTitle }}</div>
          <img :src="item.caseImgSrc" :alt="item.caseImgAlt" />
          <div class="describe">{{ item.caseDescribe }}</div>
        </li>
      </transition-group>
      <!-- 操作按钮部分(底部导航器) -->
      <ul class="option-list" v-if="info.caseList">
        <li
          class="option-list-item"
          :class="curIndex === index ? 'cur-option-style' : ''"
          v-for="(item, index) in info.caseList"
          :key="item.id"
          @click="jump(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { CaseListHorizontal } from "@/service/model";

@Component
/** case list horizontal component */
export default class TestCaseHorizontal extends Vue {
  @Prop({
    default: () => ({}),
  })
  info!: CaseListHorizontal;
  @Prop({ default: 3000 })
  timeout?: number;
  @Prop({
    default: "fade",
    validator: function (value) {
      const arr = ["fade", "translate"];
      return arr.includes(value);
    },
  })
  animation?: string;

  private timer: any;
  curIndex: number = 0;

  /**
   * 轮播初始化
   */
  created() {
    this._autoPlay();
  }

  /**
   * 自动播放图片
   */
  _autoPlay() {
    // 开启定时器之前需要先清除一下，防止bug
    clearInterval(this.timer);
    this.timer = setInterval(this._nextClick, this.timeout as number);
  }

  /**
   * 切换下一个 banner 图片
   */
  private _nextClick() {
    this.curIndex++;
    if (this.curIndex >= this.info!.caseList!.length) {
      this.curIndex = 0;
    }
  }

  /**
   * 暂停的方法
   */
  suspend() {
    clearInterval(this.timer);
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * 点击底部原点按钮调整方法
   */
  jump(index: number) {
    this.curIndex = index;
  }
}
</script>

<style lang="scss" scoped>
.case-list-horizontal-container {
  display: flex;
  overflow: hidden;
  width: 593px;
  height: 500px;
  max-height: 554px;
  flex-direction: column;

  .case-list-title {
    width: 100%;
    height: 96px;
    padding-left: 31px;
    background-image: linear-gradient(342deg, #2f54eb 0%, #597ef7 100%);
    border-radius: 3px 3px 0 0;
    color: #fff;
    font-size: 40px;
    font-stretch: normal;
    font-weight: normal;
    line-height: 96px;
    text-align: left;
  }

  .case-list-ul {
    display: flex;
    width: 100%;
    padding: 0 30px;

    > li {
      width: 533px;
      min-width: 533px;
      margin-right: 30px;

      // /* 实现动画的两组类(淡入淡出) */
      &.fade-enter-active {
        opacity: 1;
        transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
      }

      &.fade-leave-active {
        opacity: 0;
        transform: translateX(-533px);
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
      }

      &.fade-enter {
        /* .fade-leave-active for below version 2.1.8 */
        opacity: 0;
        transform: translateX(533px);
      }

      .word {
        color: #666;
        font-size: 16px;
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

      .describe {
        padding: 0 8px;
        color: #595959;
        font-size: 14px;
        font-stretch: normal;
        font-weight: normal;
        line-height: 30px;
      }

      img {
        width: 100%;
        height: 277px;
        border-radius: 10px;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 16%);
      }
    }
  }

  .option-list {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .option-list-item {
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1px solid #999;
      margin: 0 3px;
      border-radius: 50%;
      cursor: pointer;

      &.cur-option-style {
        background-color: rgb(98 122 228);
      }
    }
  }
}
</style>
