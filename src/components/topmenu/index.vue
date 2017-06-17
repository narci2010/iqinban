<template>
  <div class="i-topmenu">
    <div class="i-topmenu-inner">
      <h3 class="i-topmenu-title">{{ title }}</h3>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-topmenu {
    clear: both;
    background: #fff;
    height: @--topmenu-height;
    border-bottom: @--topmenu-border;
    &:after, &:before {
      display: table;
      content: '';
      clear: both;
    }
    .i-topmenu-inner {
      max-width: @--main-width;
      margin: 0 auto;
      > h3 {
        margin: 0;
        line-height: @--topmenu-height;
      }
    }
  }
</style>
