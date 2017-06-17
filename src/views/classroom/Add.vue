<!-- 创建班级 -->
<template>
  <div class="i-classroom-add">
    <div class="i-secondary-menu">
      <i-top-menu title="创建班级"></i-top-menu>
    </div>
    <div class="i-classroom-add-pane">
      <div class="i-classroom-inner">
        <el-form class="i-form" :label-position="labelPosition" label-width="80px" style="width: 550px;" :model="information">
          <el-form-item label="班级名称" class="i-form-item">
            <el-input v-model="information.name"></el-input>
          </el-form-item>
          <el-form-item label="班级类型" class="i-form-item">
            <el-select v-model="information.value" placeholder="" style="width: 550px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程等级" class="i-form-item">
          <span class="i-form-tip i-form-left">
            <i class="el-icon-warning"></i>
          </span>
            <el-popover
              placement="right"
              popper-class="i-popover"
              width="290"
              :offset="30"
              trigger="click">
              <div class="i-t-d-popover" style="padding: 20px 5px 0 5px">
                <el-form class="i-form" label-position="top" label-width="80px" :model="information">
                  <el-form-item label="等级名称" class="i-form-item">
                    <el-input v-model="information.name"></el-input>
                  </el-form-item>
                  <el-form-item label="内容" class="i-form-item">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox v-for="i in 9" :key="i" :label="'等级' + i">等级{{ i }}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" class="i-button i-cancel" style="width: 100%;">完成</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <span class="i-form-tip i-form-right" slot="reference">
              <a href="javascript:;" class="i-form-link">自定义课程等级</a>
            </span>
            </el-popover>
            <el-select v-model="information.value" placeholder="" style="width: 550px">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任课教师" class="i-form-item">
            <el-input v-model="information.name"></el-input>
          </el-form-item>
          <el-form-item label="绑定教材" class="i-form-item">
          <span class="i-form-tip i-form-left">
            <i class="el-icon-warning"></i>
          </span>
            <el-input v-model="information.name" placeholder="教材名1(默认)"></el-input>
            <el-button>
              <i class="el-icon-plus"></i> 新增教材
            </el-button>
          </el-form-item>
          <el-form-item label="学生" class="i-form-item">
          <span class="i-form-tip i-form-right">
            <i class="el-icon-warning"></i>
          </span>
            <span class="i-form-tip i-form-right" style="margin-right: 25px">
            <a href="javascript:;" class="i-form-link">自动导入</a>
          </span>
            <div class="i-r-button-group">
              <div class="i-r-button" v-for="i in 6">
                <img src="../../assets/img/3e44582895189ec04d7ab61670341baf.jpg"/>
              </div>
              <a class="i-r-button i-r-button-add" href="javascript:;"></a>
            </div>
          </el-form-item>
          <el-form-item label="校区" class="i-form-item">
            <el-input v-model="information.name"></el-input>
          </el-form-item>
          <el-form-item label="备注" class="i-form-item">
            <el-input
              style="width:550px;"
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 6}"
              placeholder=""
              v-model="information.name">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-row :gutter="50">
              <el-col :span="12">
                <el-button type="primary" class="i-button i-confirm" style="width: 250px;">确认</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" class="i-button i-cancel" style="width: 250px;">取消</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import ITopMenu from '../../components/topmenu'
  import add from '../../mock/classroom/add'

  export default {
    components: {
      ITopMenu
    },
    data () {
      return {
        labelPosition: 'top',
        information: {
          name: '',
          value: 1
        },
        checkList: [],
        options: add.createOptions('类型'),
        options1: add.createOptions('等级')
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-popover {
    .el-checkbox {
      &+.el-checkbox {
        margin-left: 0;
      }
      margin-right: 44px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  .i-classroom-add {
    .i-classroom-add-pane {
      background: #fff;
      border-radius: 2px;
      max-width: @--main-width;
      margin: 20px auto 60px;
    }
    .i-classroom-inner {
      padding: 33px 40px;
      .i-form-item {
        position: relative;
        .i-form-tip {
          position: absolute;
          top: -35px;
          cursor: pointer;
          color: #6BA2FB;
          > a {
            color: #6ba2fb;
          }
          &:hover {
            color: darken(#6BA2FB, 10%);
            > a {
              color: darken(#6BA2FB, 10%);
            }
          }
          &.i-form-left {
            left: 0;
            margin-left: 65px;
          }
          &.i-form-right {
            right: 0;
          }
        }
        .el-textarea__inner {
          border-radius: 2px;
        }
        .el-button {
          margin-top: 15px;
          width: 550px;
          color: #616F82;
          &:focus, &:hover {
            color: #20a0ff;
            border-color: #20a0ff;
          }
        }
        .i-r-button-group {
          .clear;
          .clearfix;
          padding-bottom: 29px;
          border: 1px solid #BFCBDA;
          width: 100%;
          border-radius: 2px;
          .i-r-button {
            float: left;
            position: relative;
            width: 58px;
            height: 58px;
            border-radius: 100%;
            overflow: hidden;
            margin: 29px 0 0 29px;
            &.i-r-button-add {
              border: 1px solid #BFCBDA;
              .box-sizing;
              position: relative;
              &:before {
                position: absolute;
                content: '';
                background: #bfcbda;
                width: 32px;
                height: 2px;
                top: 28px;
                left: 13px;
                transform: rotateX(45deg);
                -ms-transform: rotateX(45deg);
              }
              &:after {
                position: absolute;
                content: '';
                background: #bfcbda;
                height: 32px;
                width: 2px;
                left: 28px;
                top: 13px;
                transform: rotateY(45deg);
                -ms-transform: rotateY(45deg);
              }
              &:hover, &:focus {
                color: #20a0ff;
                border-color: #20a0ff;
                &:before {
                  background: #20a0ff;
                }
                &:after {
                  background: #20a0ff;
                }
              }
            }
            > img {
              display: block;
              width: 100%;
              height: 100%;
              transition: all .3s;
              &:hover {
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }
</style>
