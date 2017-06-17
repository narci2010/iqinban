<template>
  <div class="i-card">
    <div class="i-card-inner" :style="style">
      <div class="i-card-left">
        <div class="i-card-inner">
          <i class="iconfont icon-picture" v-show="show"></i>
          <img :src="src" v-show="!show">
        </div>
        <slot name="left"></slot>
      </div>
      <div class="i-card-right">
        <slot name="content"></slot>
      </div>
      <div class="i-card-opr">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: ''
      },
      padding: {
        type: String,
        default: '33px 30px'
      }
    },
    computed: {
      show () {
        return this.src === '' || this.src == null
      },
      style () {
        return {
          padding: this.padding
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/v2/base";
  @import "../../assets/v2/icon";

  .i-card {
    background: #fff;
    margin-top: 20px;
    position: absolute;
    width: 100%;
    border-radius: 2px;
    .i-card-inner {
      .clear;
      .clearfix;
      position: relative;
    }
    .i-card-opr {
      position: absolute;
      right: 15px;
      top: 0;
    }
    .i-card-left {
      float: left;
      position: relative;
      text-align: center;
      width: 560px;
      .i-card-inner {
        background: #EFEFF4;
        height: 330px;
        line-height: 330px;
        padding: 0;
      }
      i {
        color: #CECEDD;
        font-size: 60px;
        display: block;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .i-card-right {
      margin-left: 560px;
    }
  }
</style>
