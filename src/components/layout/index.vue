<!-- 左右布局，右侧固定 -->
<template>
  <div class="i-layout">
    <div class="i-layout__left">
      <div class="i-layout__left-inner" :style="lstyle">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="i-layout__right" :style="style">
      <div class="i-layout__right-inner" :style="rstyle">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    props: {
      leftPadding: String,
      rightPadding: String,
      showBackground: {
        default: true,
        type: Boolean
      },
      width: {
        type: Number,
        default: 315
      },
      marginRight: {
        type: Number,
        default: 20
      }
    },
    computed: {
      lstyle () {
        return ({
          padding: `${this.leftPadding}`,
          background: this.showBackground ? '' : 'transparent',
          marginRight: `${this.width + this.marginRight}px`
        })
      },
      rstyle () {
        return ({
          padding: `${this.rightPadding}`
        })
      },
      style () {
        return ({ width: `${this.width}px` })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-layout {
    @extend .clearfix;
    &__right {
      @extend .floatright;
      width: $content-right-width;
      margin-left: -$content-right-width;
      background: $content-background;
      border-radius: $content-border-radius;
      &-inner {
        position: relative;
        padding: $content-right-padding;
      }
    }
    &__left {
      @extend .floatleft;
      width: 100%;
      &-inner {
        position: relative;
        margin-right: $content-right-margin-left + $content-right-width;
        background: $content-background;
        border-radius: $content-border-radius;
        padding: $content-left-padding;
      }
    }
  }
</style>
