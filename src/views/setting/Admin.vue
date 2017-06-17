<template>
  <div class="i-admin">
    <el-form class="i-form" :label-position="labelPosition" label-width="80px" style="width: 550px;" :model="information">
      <el-form-item label="代办事项">
        <div class="i-section i-section-header">
          <div class="i-section-left">学生</div>
          <div class="i-section-middle">异常状态提醒</div>
          <div class="i-section-right">异常状态提醒</div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时学习课件</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时完成作业</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时完成考试</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-section i-section-header">
          <div class="i-section-left">教师</div>
          <div class="i-section-middle"></div>
          <div class="i-section-right"></div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时完成考试</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时布置学习内容</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时批改作业</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
          </div>
        </div>
        <div class="i-section">
          <div class="i-section-left">未按时布置考试</div>
          <div class="i-section-middle">
            <el-select v-model="information.name" placeholder="" style="width: 278px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="i-section-right">
            <el-switch class="i-switch" v-model="information.value1" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
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
          value1: false
        },
        options: [
          {
            value: 1,
            label: '超时1小时'
          }, {
            value: 2,
            label: '超时2小时'
          }, {
            value: 3,
            label: '超时3小时'
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-section {
    clear: both;
    width: 100%;
    margin-bottom: 15px;
    &:before, &:after {
      content: '';
      display: table;
      clear: both;
    }
    .i-section-left, .i-section-middle {
      float: left;
    }
    .i-section-left {
      width: 142px;
      padding-left: 10px;
      color: #848D9D;
    }
    &.i-section-header {
      margin-top: 20px;
      .i-section-left {
        color: #000;
      }
    }
    .i-section-middle {
      width: 278px;
    }
    .i-section-right {
      float: right;
    }
  }
</style>
