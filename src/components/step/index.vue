<template>
  <div class="i-step">
    <div class="i-step-timeline">{{ timeline }}</div>
    <div class="i-step-pane">
      <div class="i-step-title" v-html="title"></div>
      <div class="i-step-content" v-html="content"></div>
      <div class="i-step-sup" v-html="sup"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      timeline: String,
      title: String,
      content: String,
      sup: String
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-step {
    .clear;
    .clearfix;
    position: relative;
    height: 89px;
    &:before {
      width: 16px;
      height: 16px;
      position: absolute;
      content: '';
      .box-sizing;
      border: 2px solid #6B7483;
      border-radius: 100%;
    }
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 75px;
      background: #6B7483;
      top: 16px;
      left: 7px;
    }
    &:last-child:after {
      display: none;
    }
    .i-step-timeline {
      float: left;
      font-size: 16px;
      line-height: 16px;
      margin-left: 36px;
      margin-right: 30px;
      color: #9FAEC3;
    }
    .i-step-pane {
      float: left;
      font-size: 16px;
      line-height: 16px;
      .i-step-title {
        color: #7D8999;
        margin-bottom: 9px;
      }
      .i-step-content {
        margin-bottom: 11px;
      }
      .i-step-sup {
        color: #9FAEC3;
      }
      span {
        display: inline-block;
        margin-right: 13px;
        & + span {
          margin-right: 31px;
        }
      }
    }
  }
</style>
