<!-- 代办事项 -->
<template>
  <div class="i-content i-done">
    <el-row :gutter="40">
      <el-col :span="8">
        <div class="i-done__header">
          <p>教师<span>8</span></p>
          <el-popover
            placement="bottom"
            title=""
            width="85"
            :offset="-20"
            trigger="click"
            popper-class="i-popover__small">
            <div class="i-popover__content">
              <a class="i-popover__item" href="javascript:">全部提醒</a>
              <a class="i-popover__item" href="javascript:">全部忽略</a>
            </div>
            <a href="javascript:" slot="reference"><i class="iconfont icon-morecopy_px"></i> </a>
          </el-popover>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="i-done__header">
          <p>学生<span>6</span></p>
          <el-popover
            placement="bottom"
            title=""
            width="85"
            :offset="-20"
            trigger="click"
            popper-class="i-popover__small">
            <div class="i-popover__content">
              <a class="i-popover__item" href="javascript:">全部提醒</a>
              <a class="i-popover__item" href="javascript:">全部忽略</a>
            </div>
            <a href="javascript:" slot="reference"><i class="iconfont icon-morecopy_px"></i> </a>
          </el-popover>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="i-done__header">
          <p>机构<span>29</span></p>
          <el-popover
            placement="bottom"
            title=""
            width="85"
            :offset="-20"
            trigger="click"
            popper-class="i-popover__small">
            <div class="i-popover__content">
              <a class="i-popover__item" href="javascript:">全部忽略</a>
            </div>
            <a href="javascript:" slot="reference"><i class="iconfont icon-morecopy_px"></i> </a>
          </el-popover>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="8" class="i-done__col">
        <div class="i-done__item" v-for="i in 8" :class="{'is-active': i === 1}" :key="i">
          <p>任务超期</p>
          <span>张三未对英皇二级B班进行点名<br>原定课程时间：2017.2.9，14：00-15：00</span>
          <img :src="src"><img :src="src">
          <div class="i-done__toolbar">
            <span>2017.2.9</span>
            <a href="javascript:">提醒</a>
            <a href="javascript:">忽略</a>
            <a href="javascript:">处理</a>
          </div>
          <div class="i-done__tip" v-if="i === 1">
            已提醒
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="i-done__col">
        <div class="i-done__item" v-for="i in 8" :key="i">
          <p>任务超期</p>
          <span>张三未对英皇二级B班进行点名<br>原定课程时间：2017.2.9，14：00-15：00</span>
          <img :src="src"><img :src="src">
          <div class="i-done__toolbar">
            <span>2017.2.9</span>
            <a href="javascript:">提醒</a>
            <a href="javascript:">忽略</a>
            <a href="javascript:">处理</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="i-done__col">
        <div class="i-done__item" v-for="i in 8" :key="i">
          <p>任务超期</p>
          <span>张三未对英皇二级B班进行点名<br>原定课程时间：2017.2.9，14：00-15：00</span>
          <div class="i-done__toolbar">
            <span>2017.2.9</span>
            <a href="javascript:">提醒</a>
            <a href="javascript:">忽略</a>
            <a href="javascript:">处理</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import src from '../../assets/img/ico.jpg'

  export default {
    name: 'HomeDone',
    data () {
      return {
        src: src
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-done {
    &__header {
      background: $home-done-col-background;
      height: $home-done-col-header-height;
      line-height: $home-done-col-header-height;
      border-radius: $home-done-col-border-radius;
      position: relative;
      p {
        margin-left: $home-done-padding;
        font-size: $home-done-col-header-fontsize;
        color: $home-done-col-header-color;
        > span {
          color: $home-done-col-header-color2;
          margin-left: $home-done-col-header-gap;
        }
      }
      a {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 15px;
        color: $home-done-col-header-color;
      }
    }
    &__col {
      margin-top: $home-done-margin;
      border-right: 1px solid $home-done-border-color;
      &:last-child {
        border: none;
      }
    }
    &__item {
      margin-top: $home-done-margin;
      height: $home-done-item-height;
      border-radius: $home-done-col-border-radius;
      padding: $home-done-padding;
      line-height: 24px;
      position: relative;
      transition: all .3s linear;
      &:first-child {
        margin-top: 0;
      }
      &.is-active, &:hover {
        background: $home-done-col-background;
        a {
          display: inline-block;
        }
      }
      p {
        font-size: $home-done-item-title-fontsize;
        font-weight: $home-done-item-title-fontweight;
        color: $home-done-col-header-color;
      }
      > span {
        color: $home-done-item-content-color;
        font-size: $home-done-item-content-fontsize;
        margin-top: 5px;
        display: block;
      }
      > img {
        display: inline-block;
        width: $home-done-item-ico-size;
        height: $home-done-item-ico-size;
        border-radius: 100%;
        margin-right: 10px;
        margin-top: 10px;
      }
    }
    &__toolbar {
      position: absolute;
      bottom: $home-done-padding;
      left: $home-done-padding;
      right: $home-done-padding;
      text-align: right;
      > span {
        color: $home-done-item-footer-time-color;
        font-size: $home-done-item-footer-time-fontsize;
        font-family: $home-done-item-footer-time-fontfamily;
        float: left;
      }
      > a {
        font-size: $home-done-item-tool-fontsize;
        color: $home-done-item-tool-color;
        transition: all .15s linear;
        margin-left: 15px;
        display: none;
        &:hover {
          color: $home-done-item-tool-active-color;
        }
      }
    }
    &__tip {
      @extend .middle-center;
      width: $home-done-tip-width;
      height: $home-done-tip-height;
      background: $home-done-tip-background;
      border-radius: $home-done-tip-border-radius;
      box-shadow: $home-done-tip-box-shadow;
      color: $home-done-tip-color;
      text-align: center;
      line-height: $home-done-tip-height;
      font-size: $home-done-tip-fontsize;
    }
  }
</style>
