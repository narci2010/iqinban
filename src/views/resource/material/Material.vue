<!-- 教材首页 -->
<template>
  <div class="i-material" id="Material">
    <div class="i-secondary-menu i-third-menu">
      <i-tabbar
        class="i-small-tabbar"
        title="全部教材"
        num="20"
        unit="个"
        button-text="创建教材"
        link="/resource/add">
        <div class="i-student-tabbar-pane" slot="pane">
          <i-checkbox-group>
            <i-checkbox
              v-for="i in 2" :key="i"
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
  import ITabbar from '../../../components/tabbar'
  import ICheckboxGroup from '../../../components/checkboxgroup'
  import ICheckbox from '../../../components/checkbox'
  import { checkboxMixins } from '../../../mixins/checkbox'

  import options from '../../../mock/options'

  const name = ['教材等级：', '教材类型：']

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
        cities: options.options,
        names: name
      }
    }
  }
</script>
<style lang="less">
  @import "../../../assets/v2/base";

  .i-material {
    padding-top: 25px;
    .i-material-pane {
      max-width: @--main-width;
      margin: 0 auto;
    }
    // 课件
    .i-courseware {
      .i-courseware-inner {
        background: #ffffff;
        padding: 30px 33px;
        margin-bottom: 60px;
        h3 {
          margin: 0;
          font-weight: normal;
          padding: 0 0 32px;
        }
      }
      /* 知识点 */
      .i-knowledge {
        .i-knowledge-item {
          &.i-knowledge-btn {
            height: 419px;
            position: relative;
            text-align: center;
            .i-knowledge-item__inner {
              .middle;
              padding: 0 15px;
              a {
                display: block;
                border: #CFD1D2 1px solid;
                color: #787979;
                font-size: 14px;
                padding: 7px 0;
                border-radius: 2px;
                transition: all .3s;
                &:first-child {
                  margin-bottom: 20px;
                }
                &:hover {
                  border-color: #20a0ff;
                  color: #20a0ff;
                }
                i {
                  font-size: 14px;
                  display: inline-block;
                  margin-right: 5px;
                }
              }
            }
          }
          padding: 15px;
          border: 1px solid #C3C4D8;
          margin-bottom: 25px;
          border-radius: 2px;
          h3 {
            font-size: 16px;
            font-weight: normal;
            text-align: center;
            line-height: 32px;
            padding: 0;
            margin: 5px 0 15px;
          }
          .i-knowledge-item-top {
            background: #EFEFF4;
            height: 150px;
            position: relative;
            text-align: center;
            width: 100%;
            i {
              .middle;
              display: inline-block;
              margin-top: -15px;
              text-align: center;
              font-size: 42px;
              color: #B2B2B6;
            }
            p {
              background: rgba(0, 0, 0, 0.25);
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              color: #fff;
              position: absolute;
              width: 100%;
              margin: 0;
              .clearfix;
              bottom: 0;
              > span {
                float: left;
                padding-left: 10px;
                & + span {
                  padding-right: 10px;
                  float: right;
                }
              }
            }
          }
          .i-knowledge-item-mid {
            position: relative;
            background: #EFEFF4;
            height: 95px;
            margin-top: 20px;
            span {
              .middle;
              text-align: center;
            }
            i {
              display: block;
              font-size: 32px;
              color: #BBBBBF;
            }
            em {
              display: block;
              font-style: normal;
              color: #4C4C4C;
              font-size: 12px;
              line-height: 12px;
              margin-top: 10px;
            }
          }
          &.i-knowledge-item-reverse {
            background: #F5F5F7;
            h3 {
              line-height: 20px;
              margin: 0 0 7px;
              font-size: 13px;
            }
            .i-knowledge-item-top {
              height: 120px;
              background: #ffffff;
              p {
                height: 24px;
                line-height: 24px;
                background: #EFEFF4;
                color: #575757;
              }
            }
            .i-knowledge-item-mid {
              background: #ffffff;
              height: 80px;
              i {
                font-size: 28px;
              }
            }
          }
          .i-knowledge-item-bot {
            .clearfix;
            margin: 20px 0 10px;
          }
          .i-knowledge-item-opr {
            text-align: right;
            line-height: 0;
          }
        }
      }
    }
    // 试卷
    .i-paper {
      margin-bottom: 33px;
      .i-paper__label {
        font-size: 15px;
        font-weight: 500;
        margin: 10px 0;
      }
      .i-paper__pane {
        margin-top: 15px;
        position: relative;
        .clearfix;
        color: #4f4f4f;
        font-size: 15px;
        line-height: 24px;
        .i-paper__opr {
          position: absolute;
          right: 0;
          bottom: -45px;
          > a {
            .clearfix;
            display: inline-block;
            line-height: 39px;
            color: #5D5D5D;
            margin-right: 6px;
            &:nth-child(2) {
              margin-right: 20px;
            }
            &:first-child, &:last-child {
              margin-right: 0;
            }
            i, span {
              float: left;
            }
            i {
              color: #4594FA;
              font-size: 18px;
              &.iconfont {
                margin-right: 6px;
              }
            }
            span {
              font-size: 13px;
            }
          }
        }
        .i-paper__label {
          color: #000;
        }
        .i-paper__left {
          float: left;
          width: 24px;
        }
        .i-paper__right {
          position: relative;
          margin-left: 24px;
        }
        .i-radio.el-radio {
          display: block;
          margin-bottom: 5px;
          color: #4f4f4f;
          & + .i-radio {
            margin-left: 0;
          }
          .el-radio__label {
            margin-left: 10px;
          }
          .el-radio__input.is-disabled .el-radio__inner {
            cursor: default;
            background-color: #fff;
          }
          .el-radio__input.is-disabled.is-checked .el-radio__inner {
            background-color: #20a0ff;
            border-color: #20a0ff;
            cursor: default;
          }
          .el-radio__input.is-disabled+.el-radio__label {
            color: #4f4f4f;
            cursor: default;
          }
        }
        .i_paper__audio {
          audio {
            width: 420px;
          }
        }
        .i_paper__img {
          width: 420px;
          margin-bottom: 10px;
          img {
            max-width: 418px;
            display: block;
            border: 1px solid #eaeaea;
          }
        }
      }
    }
  }
  /* dialog */
  .i-dialog {
    .i-material-dialog-title {
      span {
        display: inline-block;
        margin-left: 45px;
        color: #616977;
        font-size: 15px;
        & + span {
          margin-left: 25px;
        }
      }
    }
    /* dialog */
    .i-material-dialog-content {
      .i-material-dialog-inner {
        padding: 0 10%;
      }
      .el-select .el-input {
        width: 110px;
      }
      .i-material-courseware {
        background: #EFEFF4;
        .i-material-courseware-ico {
          &:hover {
            background: #fff;
            i {
              display: table-cell;
            }
          }
        }
      }
    }
  }
</style>
