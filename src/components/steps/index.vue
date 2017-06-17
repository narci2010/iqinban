<template>
  <div class="i-steps">
    <div class="i-steps-title" v-html="title"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-steps {
    .clear;
    .clearfix;
    .i-steps-title {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 25px;
      font-weight: bold;
    }
    margin-bottom: 46px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
