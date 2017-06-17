<template>
  <div class="i-information">
    <el-form class="i-form" :label-position="labelPosition" label-width="80px" style="width: 550px;" :model="information">
      <el-form-item label="机构名称">
        <el-input v-model="information.name"></el-input>
      </el-form-item>
      <el-form-item label="机构LOGO">
        <el-row :gutter="15">
          <el-popover
            placement="right"
            width="60"
            popper-class="i-popover"
            trigger="click"
            v-for="i in 3" :key="i">
            <div class="i-info-popover">
              <a href="javascript:">删除</a>
              <a href="javascript:">重新上传</a>
            </div>
            <el-col :span="8" slot="reference" style="padding: 0 7.5px">
              <div class="i-info-logo">
                <!-- images -->
                <div class="i-info-logo-upload" v-if="i === 1"></div>
                <div class="i-info-logo-default" v-else></div>
              </div>
            </el-col>
          </el-popover>
        </el-row>
      </el-form-item>
      <!-- 图片上传输入框 -->
      <el-form-item label="机构规模">
        <el-select v-model="information.region" placeholder="" style="width: 550px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="information.type"></el-input>
      </el-form-item>
      <el-form-item label="机构规模">
        <el-input v-model="information.region"></el-input>
      </el-form-item>
      <el-form-item label="机构邮箱">
        <el-input v-model="information.type"></el-input>
      </el-form-item>
      <el-form-item label="机构地址">
        <el-input v-model="information.region"></el-input>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="information.type"></el-input>
      </el-form-item>
      <el-form-item label="负责人联系方式">
        <el-input v-model="information.region"></el-input>
      </el-form-item>
      <el-form-item label="负责人联系邮箱">
        <el-input v-model="information.type"></el-input>
      </el-form-item>
      <el-form-item label="工作安排">
        <div class="i-info-timepicker" v-for="(time,index) in times" :key="index">
          <div class="i-info-timepicker-label">{{ time }}</div>
          <div class="i-info-timepicker-picker">
            <el-time-select
              style="width: 200px;"
              placeholder=""
              :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
            </el-time-select>
          </div>
          <div class="i-info-timepicker-border"></div>
          <div class="i-info-timepicker-picker">
            <el-time-select
              placeholder=""
              style="width: 200px;"
              :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
            </el-time-select>
          </div>
        </div>
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
</template>
<script>
  export default {
    data () {
      return {
        labelPosition: 'top',
        information: {
          name: '',
          region: '',
          type: ''
        },
        options: [{
          value: 1,
          label: '小型规模'
        }, {
          value: 2,
          label: '中型规模'
        }, {
          value: 3,
          label: '大型规模'
        }],
        times: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";
  @import "../../assets/v2/images";

  .i-information {
    width: 100%;
    .el-input__inner {
      border-radius: 2px;
    }
    .i-info-logo {
      height: 170px;
      border: 1px dashed #CCCCDD;
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      .i-info-logo-default {
        width: 50px;
        height: 50px;
        margin: auto;
        left: 0;
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        background-size: contain;
      }
      .i-info-logo-upload {
        width: 100%;
        height: 100%;
        background-image: url('../../assets/img/upload.jpg');
        background-size: contain;
      }
    }
  }
  .i-info-popover {
    a {
      display: block;
      color: #A9AAC4;
      font-size: 14px;
      line-height: 28px;
      &:hover, &:active {
        color: #5399FB
      }
    }
  }
  /* 时间选择器 */
  .i-info-timepicker {
    clear: both;
    margin-bottom: 25px;
    &:before, &:after {
      clear: both;
      display: table;
      content: '';
    }
    > div {
      float: left;
      position: relative;
      &.i-info-timepicker-label {
        width: 80px;
        padding-left: 10px;
        color: #495B72;
      }
      &.i-info-timepicker-picker {
        width: 200px;
      }
      &.i-info-timepicker-border {
        width: 60px;
        height: 40px;
        &:before {
          width: 10px;
          height: 1px;
          background: #495B72;
          position: absolute;
          content: '';
          left: 25px;
          top: 18px;
        }
      }
    }
  }
</style>
