<!-- title -->
<template>
  <div class="i-title">
    <div class="i-title-left" :style="style">
      {{ title }}
      <span>
        <slot name="label"></slot>
      </span>
    </div>
    <div class="i-title-right">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      height: Number,
      padding: {
        type: String,
        default: '0'
      }
    },
    computed: {
      style () {
        return {
          height: this.height + 'px',
          lineHeight: this.height + 'px',
          padding: this.padding
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-title {
    .clear;
    .clearfix;
    .i-title-left {
      float: left;
      height: 60px;
      line-height: 60px;
      color: #000;
      font-size: 16px;
      span {
        display: inline-block;
        color: #9998B9;
        font-size: 14px;
      }
    }
    .i-title-right {
      float: right;
      margin-top: 16px;
      margin-right: 23px;
    }
  }
</style>
