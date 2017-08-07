<!-- 添加注释 -->
<template>
  <div class="i-tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabbar'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-tabbar {
    position: $tabbar-position;
    width: 100%;
    height: $tabbar-height;
    background: $tabbar-background;
    box-shadow: $tabbar-box-shadow;
    text-align: center;
    z-index: $tabbar-zindex;
    overflow: hidden;
    &-item {
      line-height: $tabbar-height;
      display: inline-block;
      margin: $tabbar-margin;
      font-size: $tabbar-fontsize;
      color: $tabbar-color;
      transition: color $tabbar-transition-duration $tabbar-transition-timing;
      &:hover, &.is-active {
        color: $tabbar-hover-color;
      }
    }
  }
</style>
