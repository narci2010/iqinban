<template>
  <div id="app">
    <div class="i-header">
      <div class="i-header-inner">
        <div class="i-logo"></div>
        <el-menu :default-active="activeIndex" router class="i-menu" mode="horizontal">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/classroom">班级</el-menu-item>
          <el-menu-item index="/teacher">教师</el-menu-item>
          <el-menu-item index="/student">学生</el-menu-item>
          <el-menu-item index="/course">课程</el-menu-item>
          <el-menu-item index="/resource">课程资源</el-menu-item>
          <el-menu-item index="/setting">设置</el-menu-item>
        </el-menu>
        <div class="i-toolbar">
          <a class="i-toolbar-item el-icon-search" href="javascript:" @click="show = true"></a>
          <a class="i-toolbar-item el-icon-plus" href="javascript:"></a>
          <div class="i-toolbar-item">
            <el-badge :value="110" :max="99">
              <a class="el-icon-message" href="javascript:"></a>
            </el-badge>
          </div>
          <div class="i-toolbar-dropdown">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <img alt="" src="./assets/img/3e44582895189ec04d7ab61670341baf.jpg">
                <span>下拉菜单
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>管理员账户</el-dropdown-item>
                <el-dropdown-item>系统</el-dropdown-item>
                <el-dropdown-item>账户计划与升级</el-dropdown-item>
                <el-dropdown-item>帮助</el-dropdown-item>
                <el-dropdown-item>联系我们</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="i-container">
      <router-view></router-view>
    </div>
    <i-search :show="show" @on-show-change="onShowChange"></i-search>
  </div>
</template>

<script>
  import ISearch from './components/search'
  // import { login } from './api/user/login'

  export default {
    name: 'app',
    components: {
      ISearch
    },
    methods: {
      onShowChange (val) {
        this.show = val
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
        show: false
      }
    },
    mounted () {
//    let res = login('org@qq.com', '123456', null, null, 'Org0')
//    console.log(res)
    }
  }
</script>

<style lang="less">
  @import "assets/v2/style";

  .i-header {
    width: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background: @--header-background;
    height: @--header-height;
    .i-header-inner {
      height: 100%;
      margin: auto;
      max-width: @--base-width;
    }
    .i-logo {
      float: left;
      position: relative;
      line-height: @--header-height;
      margin: 0 36px 0 36px;
      width: 113px;
      height: @--header-height;
      color: #fff;
      background-size: 113px 25px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .i-menu {
      float: left;
      position: relative;
      &.el-menu {
        background: none;
        background: transparent;
      }
      &.el-menu--horizontal .el-menu-item {
        color: #f1f1f1;
        height: @--header-height;
        line-height: @--header-height;
      }
      &.el-menu--horizontal>.el-menu-item:hover,
      &.el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
      &.el-menu--horizontal>.el-submenu:hover .el-submenu__title {
        color: #fff;
      }
      &.el-menu--horizontal .el-menu-item:hover,
      &.el-menu--horizontal .el-submenu__title:hover {
        background-color: transparent;
      }
      &.el-menu--horizontal>.el-menu-item:hover,
      &.el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
      &.el-menu--horizontal>.el-submenu:hover .el-submenu__title {
        border-bottom: 5px solid #fff;
      }
      .el-menu-item.is-active {
        color: #fff;
        border-bottom: 5px solid #fff;
      }
    }
    .i-toolbar {
      float: right;
      position: relative;
      .i-searchbar {
        margin-top: 11px;
        float: left;
      }
      a {
        color: #fff;
        display: block;
        line-height: 24px;
      }
      .i-toolbar-item {
        float: left;
        margin-right: 25px;
        line-height: @--header-height;
      }
      .i-toolbar-dropdown {
        margin-right: 35px;
        float: left;
        position: relative;
        margin-top: 24px;
        cursor: pointer;
        .el-dropdown-link {
          color: #fff;
          img {
            width: 28px;
            border-radius: 100%;
            float: left;
            height: 28px;
          }
          span {
            float: left;
            line-height: 28px;
            margin-left: 5px;
          }
        }
      }
    }
  }

  /* 二级菜单 固定位置 */
  .i-secondary-menu {
    position: fixed;
    width: 100%;
    top: @--header-height;
    z-index: 100;
    &.i-third-menu {
      top: @--header-height + @--topmenu-height + 1;
    }
  }

  .i-container {
    padding-top: @--header-height + @--topmenu-height;
  }


  /* 弹出层 */

  .i-popover.el-popover {
    min-width: 20px;
    padding: 5px 10px;
    &[x-placement^=right] {
      margin-left: 0;
    }
  }


  /* button */

  .i-button.el-button {
    padding: 13px 15px;
    border-radius: 2px;
    border: none;
    &.i-confirm {
      background: #1fd8a9;
      border: 1px solid #1fd8a9;
      &:hover {
        background: lighten(#1fd8a9, 10%);
      }
    }
    &.i-cancel {
      background: #4993fa;
      border: 1px solid #4993fa;
      &:hover {
        background: lighten(#2993fa, 10%);
      }
    }
    &.i-normal {
      border: 1px solid #D5D7D8;
      &:hover {
        border-color: #20a0ff;
      }
    }
    &.i-danger {
      background: #f84651;
      &:hover,
      &:focus {
        background: lighten(#f84651, 5%);
      }
    }
  }

  /* switch */
  .i-switch {
    clear: both;
    margin-bottom: 6px;
    &:before,
    &:after {
      clear: both;
      display: table;
      content: '';
    }
    .i-switch-label {
      float: left;
      color: #4A5A70;
    }
    .i-switch-switch {
      float: right;
    }
    .el-switch__core {
      width: 68px !important;
      border-radius: 4px;
      .el-switch__button {
        border-radius: 4px;
        height: 18px;
        width: 28px;
        top: -1px;
        left: -1px;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.45);
      }
    }
  }

  /* form */
  .i-form {
    .el-form-item__label {
      color: #1f3048;
    }
  }

  /* pane */
  .i-pane {
    max-width: @--main-width;
    margin: 0 auto;
    .clear;
    .clearfix;
    position: relative;
    .i-pane-left {
      float: left;
      position: relative;
      width: 725px;
    }
    .i-pane-right {
      position: absolute;
      right: 0;
      top: 0;
      left: 745px;
    }
  }

  /* popover */
  .i-t-d-popover {
    a {
      display: block;
      text-align: left;
      color: #A9AAC4;
      font-size: 13px;
      line-height: 28px;
      &:hover, &:active {
        color: #5399FB;
      }
    }
  }

  /* tag */
  .i-tag {
    &.el-tag {
      border-radius: 2px;
    }
  }
</style>
