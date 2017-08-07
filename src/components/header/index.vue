<!-- 主页 -->
<template>
  <div class="i-header">
    <div class="i-header__inner">
      <div class="i-logo"></div>
      <el-menu :default-active="activeIndex" router class="i-menu" mode="horizontal">
        <el-menu-item index="/"><span>主页</span></el-menu-item>
        <el-menu-item index="/classroom"><span>班级</span></el-menu-item>
        <el-menu-item index="/teacher"><span>教师</span></el-menu-item>
        <el-menu-item index="/student"><span>学生</span></el-menu-item>
        <el-menu-item index="/course"><span>课程</span></el-menu-item>
        <el-menu-item index="/resource"><span>课程资源</span></el-menu-item>
        <el-menu-item index="/setting"><span>设置</span></el-menu-item>
      </el-menu>
      <div class="i-toolbar">
        <transition name="open">
          <div class="i-search" v-if="show">
            <input type="text" placeholder="" id="keywords" title="" v-model="keywords" @blur="show = false" @input="search">
            <transition name="slide">
              <div class="i-search__pane" v-if="showPane">
                <div class="i-search-item">
                  <div class="i-search__pane-left"><span>学生</span></div>
                  <div class="i-search__pane-right">
                    <a href="javascript:" class="i-search-col-5" v-for="i in 5" :key="i">某某某</a>
                  </div>
                </div>
                <div class="i-search-item">
                  <div class="i-search__pane-left is-active"><span>教师</span></div>
                  <div class="i-search__pane-right">
                    <a href="javascript:" class="i-search-col-5" v-for="i in 5" :key="i">某某某</a>
                  </div>
                </div>
                <div class="i-search-item">
                  <div class="i-search__pane-left"><span>班级</span></div>
                  <div class="i-search__pane-right">
                    <a href="javascript:" class="i-search-col-4" v-for="i in 5" :key="i">某某某班</a>
                  </div>
                </div>
                <div class="i-search-item">
                  <div class="i-search__pane-left"><span>课程</span></div>
                  <div class="i-search__pane-right">
                    <a href="javascript:" class="i-search-col-3" v-for="i in 10" :key="i">某某某课程</a>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
        <a class="i-toolbar-item el-icon-search" href="javascript:" @click="showSearch"></a>
        <el-popover
          placement="bottom"
          title=""
          width="100"
          :offset="-20"
          trigger="click"
          popper-class="i-popover">
          <div class="i-popover__content">
            <a class="i-popover__item" href="javascript:">新增学生</a>
            <a class="i-popover__item" href="javascript:">新增教师</a>
            <a class="i-popover__item" href="javascript:">创建班级</a>
            <a class="i-popover__item" href="javascript:">创建课程</a>
          </div>
          <a class="i-toolbar-item el-icon-plus" href="javascript:" slot="reference"></a>
        </el-popover>
        <el-popover
          placement="bottom"
          title=""
          width="305"
          :offset="-20"
          trigger="click"
          popper-class="i-popover">
          <div class="i-popover__content i-header__msg">
            <div class="i-header__msg-item" v-for="i in 50" :key="i" :class="{'is-active': i === 1}">
              这是一条通知消息，该消息有系统测试推送服务器推送
              <p v-if="i === 1">2min</p>
              <p v-else>2d</p>
            </div>
          </div>
          <div class="i-toolbar-item" slot="reference">
            <el-badge :value="110" :max="99">
              <a class="el-icon-message" href="javascript:"></a>
            </el-badge>
          </div>
        </el-popover>
        <el-popover
          placement="bottom"
          title=""
          width="109"
          :offset="-20"
          trigger="click"
          popper-class="i-popover">
          <div class="i-popover__content">
            <div class="i-popover__title">机构名</div>
            <a class="i-popover__item" href="javascript:">管理员</a>
            <a class="i-popover__item" href="javascript:">设置</a>
            <a class="i-popover__item" href="javascript:">系统日志</a>
            <a class="i-popover__item" href="javascript:">帮助</a>
            <a class="i-popover__item" href="javascript:">联系我们</a>
            <a class="i-popover__item" href="javascript:">申请账号</a>
            <a class="i-popover__item" href="javascript:">登出</a>
          </div>
          <div class="i-toolbar-dropdown" slot="reference">
            <img alt="" :src="src">
            <span>李小曼</span>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import src from '../../assets/img/ico.jpg'

  export default {
    name: '',
    methods: {
      search: _.debounce(function () {
        this.showPane = [...this.keywords].length !== 0
        this.$emit('on-search', this.keywords)
        console.log(this.keywords)
      }, 500),
      showSearch () {
        this.show = !this.show
        setTimeout(function () {
          document.getElementById('keywords').focus()
        }, 300)
      }
    },
    computed: {
      activeIndex () {
        let route = this.$route.path
        if (route.indexOf('/home') !== -1) {
          return '/'
        } else {
          return '/' + route.split('/')[1]
        }
      }
    },
    data () {
      return {
        show: false,
        showPane: false,
        keywords: '',
        src: src
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../../assets/scss/base";

  .i-header {
    position: $header-position;
    height: $header-height;
    background-color: $header-background;
    @extend .clearfix;
    width: 100%;
    z-index: $header-zindex;
    &__inner {
      max-width: $header-width;
      margin: 0 auto;
      @media screen and (max-width: 1279px) {
        margin: 0 $header-margin;
      }
      > .i-logo {
        margin: $header-logo-margin;
      }
      > .i-menu {
        float: left;
        position: relative;
        &.el-menu {
          background: none;
          background: transparent;
        }
        &.el-menu--horizontal .el-menu-item {
          color: $header-color;
          font-size: $header-menu-fontsize;
          height: $header-height;
          line-height: $header-height;
        }
        & .el-menu-item, .el-submenu__title {
          padding: 0 15px;
          border-bottom: none;
          & > span {
            line-height: $header-height;
            height: $header-height;
            box-sizing: border-box;
            display: inline-block;
            transition: border $header-transition-duration $header-transition-function;
          }
        }
        &.el-menu--horizontal>.el-menu-item:hover,
        &.el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
        &.el-menu--horizontal>.el-submenu:hover .el-submenu__title {
          color: $header-color;
        }
        &.el-menu--horizontal .el-menu-item:hover,
        &.el-menu--horizontal .el-submenu__title:hover {
          background-color: transparent;
          border-bottom: none;
        }
        &.el-menu--horizontal>.el-menu-item:hover>span,
        &.el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
        &.el-menu--horizontal>.el-submenu:hover .el-submenu__title {
          border-bottom: 5px solid #fff;
        }
        .el-menu-item.is-active>span {
          color: #fff;
          border-bottom: 5px solid #fff;
        }
      }
      > .i-toolbar {
        float: right;
        position: relative;
        .i-search {
          margin-top: ($header-height - $header-search-height) / 2 - 2;
          float: left;
          position: relative;
          margin-right: -36px;
          border: 1px solid $header-search-border-color;
          width: $header-search-width;
          @media screen and (max-width: 1279px) {
            width: 130px;
          }
          height: $header-search-height;
          border-radius: $main-border-radius;
          > input {
            border: none;
            outline: none;
            display: block;
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
            line-height: $header-search-height;
            height: $header-search-height;
            padding: 0 10px;
            width: $header-search-width - 50;
            background: none;
            color: $header-color;
            font-size: $header-search-fontsize;
          }
          &__pane {
            position: absolute;
            background: $header-search-pane-background;
            width: $header-search-pane-width;
            max-height: $header-search-pane-height;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
            margin-top: 10px;
            padding: 15px 0;
            overflow: auto;
            > .i-search-item {
              @extend .clearfix;
              &:last-child {
                .i-search__pane-right {
                  border: none;
                }
              }
            }
            &-left {
              width: 89px;
              float: left;
              text-align: center;
              line-height: 32px;
              padding: 5px 0;
              span {
                font-size: $header-search-pane-fontsize;
                width: 50px;
                height: 25px;
                line-height: 25px;
                color: $header-search-pane-left-color;
                border-radius: 2px;
                display: inline-block;
              }
              &.is-active {
                span {
                  color: $header-search-pane-left-hover-color;
                  background: $header-search-pane-left-hover-background;
                }
              }
            }
            &-right {
              margin-left: 89px;
              padding: 5px 0;
              border-bottom: 1px solid $header-search-pane-right-border-color;
              a {
                display: inline-block;
                line-height: 32px;
                color: $header-search-pane-right-color;
                font-size: $header-search-pane-fontsize;
                transition: color $header-transition-duration $header-transition-function;
                &.i-search-col-3 {
                  width: 33.333333%;
                }
                &.i-search-col-4 {
                  width: 25%;
                }
                &.i-search-col-5 {
                  width: 20%;
                }
                &:hover {
                  color: $header-search-pane-right-hover-color;
                }
              }
            }
          }
        }
        a {
          color: #fff;
          display: block;
          line-height: 24px;
          font-size: $header-mixin-fontsize;
        }
        .i-toolbar-item {
          float: left;
          padding: 0 13px;
          margin-top: $header-height / 4;
          line-height: $header-height / 2;
          .el-badge__content {
            border: none;
          }
        }
        .i-toolbar-dropdown {
          float: left;
          position: relative;
          margin-left: 20px;
          margin-top: $header-height / 4;
          line-height: $header-height / 2;
          cursor: pointer;
          img {
            width: $header-ico-size;
            height: $header-ico-size;
            border-radius: 100%;
            display: inline-block;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            font-size: $header-mixin-fontsize;
            color: $header-color;
          }
        }
      }
    }
    &__msg {
      max-height: $header-msg-height;
      overflow: auto;
      &-item {
        margin-left: $header-msg-margin;
        padding: $header-msg-padding;
        border-bottom: $header-msg-border-color 1px solid;
        color: $header-msg-color2;
        font-size: $header-msg-fontsize;
        position: relative;
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &.is-active {
          color: $header-msg-color;
          &:before {
            position: absolute;
            content: '';
            left: 0;
            top: 15px;
            width: $header-msg-indicator-size;
            height: $header-msg-indicator-size;
            background: $header-msg-indicator-background;
            border-radius: $header-msg-indicator-size;
          }
        }
        > p {
          color: $header-msg-color2;
          font-size: $header-msg-fontsize2;
          text-align: right;
        }
      }
    }
  }
  // transitions
  .open-enter-active {
    transform-origin: 100% 50%;
    animation: open-search .5s;
  }
  .open-leave-active {
    transform-origin: 95% 50%;
    animation: open-search .5s reverse;
  }
  @keyframes open-search {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .slide-enter-active {
    transform-origin: 0 0;
    animation: slide-search .5s;
  }
  .slide-leave-active {
    transform-origin: 0 0;
    animation: slide-search .5s reverse;
  }
  @keyframes slide-search {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }
</style>
<style lang="scss">
  .i-header {
    .el-badge__content {
      border: none;
    }
  }
</style>
