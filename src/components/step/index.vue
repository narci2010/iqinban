<!-- 添加注释 -->
<template>
  <div class="i-step">
    <div class="i-step__title">二月 2017</div>
    <div class="i-step__pane">
      <div class="i-step__item" v-for="i in 3" :key="i">
        <div class="i-step__indicator"></div>
        <div class="i-step__timeline">02.07</div>
        <div class="i-step__content">
          <div class="i-step__content-title">提交作业</div>
          <div class="i-step__content-body">英皇2级 第五节(一对一)</div>
          <div class="i-step__content-footer">22:34</div>
        </div>
      </div>
      <div class="i-step__item">
        <div class="i-step__indicator"></div>
        <div class="i-step__timeline">02.07</div>
        <div class="i-step__content">
          <div class="i-step__content-title" style="color:#f84651">课程取消</div>
          <div class="i-step__content-body">英皇2级 第五节(一对一)</div>
          <div class="i-step__content-footer">09:30 - 11:30</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Step'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-step {
    margin-bottom: $step-margin;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      font-size: $step-font-size;
      font-weight: $step-title-fontweight;
      margin-bottom: $step-title-margin;
      color: $step-title-color;
    }
    &__pane {
      @extend .clearfix;
    }
    &__item {
      height: $step-item-height;
      &:last-child {
        .i-step__indicator {
          &:after {
            display: none;
          }
        }
      }
    }
    &__indicator {
      float: left;
      width: $step-indicator-size;
      height: $step-indicator-size;
      border: 1px solid $step-indicator-color;
      box-sizing: border-box;
      border-radius: $step-indicator-size;
      position: relative;
      &:after {
        position: absolute;
        width: 1px;
        height: $step-indicator-height;
        content: '';
        background: $step-indicator-color;
        left: 6px;
        top: $step-indicator-size - 1;
      }
    }
    &__timeline {
      float: left;
      margin-left: $step-timeline-margin;
      color: $step-timeline-color;
      font-size: $step-font-size;
      line-height: $step-font-size;
    }
    &__content {
      float: left;
      margin-left: $step-content-margin;
      * {
        font-size: $step-font-size;
        line-height: $step-font-size;
        margin-bottom: $step-item-margin;
      }
      &-title {
        font-weight: $step-item-title-font-weight;
        color: $step-item-title-color;
      }
      &-body {
        color: $step-content-color;
      }
      &-footer {
        color: $step-footer-color;
      }
    }
  }
</style>
