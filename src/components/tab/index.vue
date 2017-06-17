<template>
  <div class="i-tab">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      activeIndex: {
        type: Number,
        default: -1
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-tab {
    clear: both;
    font-size: 0;
    text-size-adjust: none;
    background: #fff;
    height: @--topmenu-height;
    border-bottom: @--topmenu-border;
    text-align: center;
    &:after, &:before {
      display: table;
      content: '';
      clear: both;
    }
  }
</style>
