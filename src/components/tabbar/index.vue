<template>
  <div class="i-tabbar" :id="id">
    <div class="i-tabbar-inner">
      <div class="i-tabbar-left">
        <h3>{{ title }}</h3>
        <span>共<em>{{ num }}</em>{{ unit }}</span>
      </div>
      <div class="i-tabbar-right">
        <span style="display:inline-block;height: 25px; line-height: 25px;">
          <el-input
            style="width: 140px;"
            size="mini"
            placeholder=""
            icon="search"
            v-model="keyword"
            :on-icon-click="handleIconClick">
        </el-input>
        </span>
        <el-button size="mini" class="i-small-text-button" @click="showPane" :id="btnId">筛选器</el-button>
        <el-button type="primary" size="mini" class="i-small-primary-button" @click="go">{{ buttonText }}</el-button>
        <span style="display: inline-block">
          <slot name="button"></slot>
        </span>
      </div>
      <div class="i-tabbar-pane">
        <slot name="pane"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import { toolMixins } from '../../mixins/tools'

  export default {
    mixins: [toolMixins],
    props: {
      title: {
        type: String,
        default: '全部'
      },
      num: {
        type: [String, Number],
        default: 0
      },
      unit: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: '创建'
      },
      link: {
        type: String,
        default: '/'
      }
    },
    methods: {
      showPane () {
        let pane = document.querySelector('#' + this.id)
        let btn = document.querySelector('#' + this.btnId)
        this.toggleClass(btn, 'active')
        this.toggleClass(pane, 'active')
      },
      hidePane () {
        let pane = document.querySelector('#' + this.id)
        let btn = document.querySelector('#' + this.btnId)
        this.removeClass(btn, 'active')
        this.removeClass(pane, 'active')
      },
      handleIconClick () {
        console.log(this.keyword)
      },
      go () {
        this.hidePane()
        this.$router.push({
          path: this.link
        })
      }
    },
    data () {
      return {
        id: 'i_tabbar_' + this.uuid(),
        btnId: 'i_button_' + this.uuid(),
        keyword: ''
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-tabbar {
    clear: both;
    background: #fff;
    height: @--topmenu-height;
    border-bottom: @--topmenu-border;
    text-align: center;
    transition: all .5s;
    overflow: hidden;
    &.active {
      height: 258px;
    }
    &.i-small-tabbar.active {
      height: 188px;
    }
    .i-tabbar-inner {
      max-width: @--main-width;
      margin: 0 auto;
      clear: both;
      line-height: @--topmenu-height;
      &:after, &:before {
        display: table;
        content: '';
        clear: both;
      }
    }
    .i-tabbar-left {
      float: left;
      height: @--topmenu-height;
      h3 {
        float: left;
        margin: 0;
        font-size: 18px;
      }
      span {
        float: left;
        margin-left: 12px;
        font-size: 12px;
        color: #9F9FBD;
        line-height: @--topmenu-height + 5px;
        em {
          font-style: normal;
          color: #1C81ED;
        }
      }
    }
    .i-tabbar-right {
      float: right;
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
      .i-small-text-button {
        color: #bfcbd9;
      }
      .i-small-primary-button {
        margin-left: 0;
        background: #287cec;
        border-color: #287cec;
        * {
          color: #fff;
        }
        &:hover,&:focus {
          background: lighten(#287cec, 5%);
        }
      }
      .el-button--mini.active {
        color: #287cec;
        border-color: #287cec;
      }
    }
    .i-tabbar-pane {
      clear: both;
      &:before, &:after {
        display: table;
        content: '';
        clear: both;
      }
    }
  }
  @-moz-document url-prefix() {
    .i-tabbar {
      .i-tabbar-right {
        .el-input.el-input--mini {
          .el-input__inner {
            height: 24.5px;
            margin-top: -1.5px;
          }
        }
      }
    }
  }
</style>
