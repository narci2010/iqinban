<template>
  <div class="i-course">
    <div class="i-secondary-menu">
      <i-tabbar
        title="全部课程"
        num="84"
        unit="课"
        button-text="创建课程"
        link="/course/add">
        <div class="i-course-tabbar-pane" slot="pane">
          <i-checkbox-group>
            <i-checkbox
              v-for="i in 4" :key="i"
              :index = "i-1"
              :label="names[i-1]"
              :is-indeterminate="isIndeterminate[i-1]"
              :check-all="checkAll[i-1]"
              :items="cities[i-1]"
              :on-handle-check-all-change="handleCheckAllChange"
              :on-handle-checked-change="handleCheckedChange"
              :on-handle-check-all-clear="handleCheckAllClear"
              @onIndeterminateChange="onIndeterminateChange"
              @onCheckAllChange="onCheckAllChange"
            ></i-checkbox>
          </i-checkbox-group>
        </div>
      </i-tabbar>
    </div>
    <div class="i-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import ITabbar from '../../components/tabbar'
  import ICheckboxGroup from '../../components/checkboxgroup'
  import ICheckbox from '../../components/checkbox'
  import course from '../../mock/course/course'
  import { checkboxMixins } from '../../mixins/checkbox'

  const name = ['课程等级：', '创建时间：', '课程类型：', '校区：']

  export default {
    components: {
      ITabbar,
      ICheckboxGroup,
      ICheckbox
    },
    mixins: [checkboxMixins],
    data () {
      return {
        keyword: '',
        checkAll: [false, false, false, false],
        isIndeterminate: [true, true, true, true],
        cities: course.cityOptions,
        names: name
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-course {
    .i-course-tabbar-pane {
      clear: both;
      max-width: 810px;
      margin: auto;
      .i-course-tabbar-pane-header {
        line-height: 42px;
        text-align: right;
      }
      .i-course-tabbar-pane-item {
        line-height: 36px;
        clear: both;
        .i-s-t-pane-label {
          float: left;
          width: 80px;
          text-align: left;
        }
        .i-s-t-pane-check {
          float: left;
          margin-left: 12px;
        }
      }
    }
    .i-content {
      margin: 0;
      width: 100%;
    }
  }
  .i-course-content {
    max-width: @--main-width;
    margin: 20px auto;
    position: relative;
    .clear;
    .clearfix;
    .i-course-left {
      float: left;
      position: relative;
      width: 724px;
      margin-right: 20px;
      .i-course-pane {
        .clear;
        .clearfix;
        padding: 33px 40px;
        background: #fff;
        margin-top: 20px;
        .i-course-pane-label {
          font-size: 14px;
          line-height: 14px;
          margin: 28px 0 11px 0;
          color: #6C7A8B;
        }
        .i-course-switch {
          font-size: 14px;
          color: #6C7A8B;
          margin: 23px 0 10px 0;
        }
        .i-course-pane-input {
          .clear;
          .clearfix;
        }
        .i-course-pane-divide {
          display: inline-block;
          position: relative;
          margin: 0 10px;
          width: 8px;
          &:before {
            position: absolute;
            content: '';
            width: 8px;
            height: 1px;
            background: #333;
            top: -5px;
          }
        }
        .i-course-pane-title {
          font-size: 14px;
          line-height: 14px;
          margin-bottom: 15px;
        }
        .i-course-section {
          border: 1px solid #CDCDDE;
          height: 245px;
          margin: 10px 0;
          position: relative;
          .i-course-opr {
            position: absolute;
            width: 100%;
            text-align: right;
            bottom: 9px;
            > a {
              padding: 10px;
              float: right;
              background-repeat: no-repeat;
              background-position: center center;
              margin-right: 10px;
              &.i-course-delete {
                width: 12px;
                height: 16px;
                padding: 10px 12px;
                background-size: 12px 16px;
              }
              &.i-course-edit {
                width: 16px;
                height: 16px;
                background-size: 16px 16px;
              }
            }
          }
          .i-course-ico {
            position: absolute;
            top: 14px;
            left: 22px;
            width: 15px;
            height: 17px;
            background-size: 15px 17px;
            background-repeat: no-repeat;
          }
          .i-course-title {
            text-align: center;
            margin: 23px 0 26px 0;
            font-size: 14px;
            line-height: 14px;
          }
          .i-course-pane-inner {
            .clear;
            .clearfix;
            .i-course-pane-left {
              float: left;
              width: 21px;
              margin: 0 15px 0 19px;
              > i {
                display: block;
                width: 21px;
                height: 14px;
                margin-top: 3px;
                background-size: 21px 14px;
                background-repeat: no-repeat;
              }
            }
            .i-course-pane-right {
              float: left;
              .i-course-item {
                .clear;
                .clearfix;
                margin-bottom: 31px;
                > span {
                  display: block;
                  font-size: 14px;
                  line-height: 20px;
                  color: #9AA3AF;
                }
              }
            }
          }
        }
      }
    }
    .i-course-right {
      position: absolute;
      right: 0;
      background: #fff;
      left: 744px;
      padding: 43px 40px;
      .i-course-section {
        padding: 0;
        margin: 0;
        position: relative;
        .i-course-btn-edit {
          position: absolute;
          top: -10px;
          right: 0;
        }
        .i-course-label {
          font-size: 14px;
          line-height: 14px;
          margin: 0 0 13px 0;
          padding: 0;
        }
        .i-course-content {
          padding: 0;
          margin: 0 0 18px 0;
          > span {
            color: #778394;
            font-size: 13px;
            line-height: 13px;
          }
          > a {
            color: #5596DF;
            text-decoration: underline;
            font-size: 13px;
            line-height: 13px;
          }
        }
        .i-course-divide {
          height: 2px;
          background: #E4E4ED;
          margin: 12px 0 33px 0;
        }
      }
    }
  }
</style>
