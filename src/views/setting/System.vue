<template>
  <div class="i-system">
    <el-form class="i-form" :label-position="labelPosition" label-width="80px" style="width: 550px;" :model="information">
      <el-form-item label="教学功能模块">
        <div class="i-switch">
          <div class="i-switch-label">使用成套教材作为教学资料</div>
          <div class="i-switch-switch">
            <el-switch :width="58" v-model="value1" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-switch">
          <div class="i-switch-label">阶段性考试</div>
          <div class="i-switch-switch">
            <el-switch :width="58" v-model="value2" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="课程表">
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
      <el-form-item label="账号冻结上限">
        <el-select v-model="information.name" placeholder="" style="width: 300px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="等级体系">
        <el-select v-model="information.name" placeholder="" style="width: 550px;">
          <el-option
            v-for="item in levels"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
        value1: false,
        value2: true,
        labelPosition: 'top',
        information: {
          name: ''
        },
        times: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        options: [{
          value: 1,
          label: '1小时'
        }, {
          value: 2,
          label: '2小时'
        }, {
          value: 3,
          label: '3小时'
        }],
        levels: [{
          value: 1,
          label: '初级'
        }, {
          value: 2,
          label: '中级'
        }, {
          value: 3,
          label: '高级'
        }]
      }
    }
  }
</script>
<style lang="less">
  .i-system {
    width: 100%;
    .el-input__inner {
      border-radius: 2px;
    }
  }
</style>
