<template>
  <div class="i-secondary-tab">
    <div class="i-secondary-tab-inner">
      <div class="i-secondary-tab-left">
        <div class="i-secondary-tab-title">{{ title }}</div>
        <div class="i-secondary-tab-sup">{{ sup }}<slot name="sup"></slot></div>
      </div>
      <div class="i-secondary-tab-right">
        <span style="display: inline-block;height: 25px;" v-show="showSearch">
          <el-input
            style="width: 140px;"
            size="mini"
            placeholder=""
            icon="search"
            v-model="keyword"
            :on-icon-click="handleIconClick">
          </el-input>
        </span>
        <span style="display: inline-block" v-show="show">
          <slot name="left"></slot>
        </span>
        <span style="display: inline-block;">
          <slot name="right"></slot>
        </span>
        <el-button type="primary" size="mini" class="i-button i-danger" style="width: 80px;">删除</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      sup: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: true
      },
      showSearch: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleIconClick () {
        console.log(this.keyword)
      }
    },
    data () {
      return {
        keyword: ''
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-secondary-tab {
    height: @--topmenu-height;
    border-bottom: @--topmenu-border;
    background: #fff;
    margin-top: -1px;
    .i-secondary-tab-inner {
      max-width: @--main-width;
      margin: 0 auto;
      .clear;
      .clearfix;
      .el-input--mini .el-input__inner {
        height: 25px;
      }
      .el-input.el-input--mini {
        vertical-align: middle;
        .el-input__inner {
          height: 25px;
        }
      }
      .el-button--mini {
        width: 80px;
        height: 25px;
        line-height: 23px;
        padding: 0;
        border-radius: 2px;
      }
      .el-button+.el-button {
        margin-left: 0;
      }
      .i-small-text-button {
        color: #bfcbd9;
        &.active {
          color: #287cec;
        }
      }
      .el-button--mini.active {
        color: #287cec;
        border-color: #287cec;
      }
      .i-secondary-tab-left {
        float: left;
        .i-secondary-tab-title {
          font-size: 18px;
          float: left;
          line-height: @--topmenu-height;
        }
        .i-secondary-tab-sup {
          font-size: 12px;
          float: left;
          color: #BCBCD0;
          margin-left: 14px;
          line-height: @--topmenu-height + 5;
        }
      }
      .i-secondary-tab-right {
        float: right;
        margin-top: 15px;
      }
    }
  }

  @-moz-document url-prefix() {
    .i-secondary-tab {
      .i-secondary-tab-inner {
        .el-input.el-input--mini {
          .el-input__inner {
            height: 24px;
            margin-top: -1px;
          }
        }
      }
    }
  }
</style>
