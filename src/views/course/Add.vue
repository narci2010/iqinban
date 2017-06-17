<!-- 新增课程 -->
<template>
  <div class="i-course-add">
    <div class="i-secondary-menu">
      <i-top-menu title="创建课程"></i-top-menu>
    </div>
    <div class="i-course-content">
      <div class="i-course-left">
        <div class="i-course-pane">
          <el-form class="i-form" :label-position="labelPosition" label-width="80px" style="width: 550px;" :model="information">
            <el-form-item label="机构名称">
              <el-input v-model="information.name"></el-input>
            </el-form-item>
            <el-form-item label="课程安排">
              <el-row :gutter="20" v-show="show">
                <el-col :span="8" v-for="i in 3" :key="i">
                  <div class="i-course-add-input" @click="show=!show">添加课时</div>
                </el-col>
              </el-row>
              <div class="i-course-add-pane" v-show="!show">
                <div class="i-course-add-title">课时1</div>
                <div class="i-course-add-section">
                  <div class="i-course-add-label">
                    <i class="i-course-ico1"></i><span>上课时间</span>
                  </div>
                  <div class="i-course-add-form">
                    <el-date-picker
                      v-model="value1"
                      align="right"
                      type="date"
                      placeholder=""
                      style="width: 200px;margin-right: 40px"
                      :picker-options="pickerOptions">
                    </el-date-picker>
                    <el-select style="width:103px;" v-model="value" placeholder="">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <span class="i-course-pane-divide"></span>
                    <el-select style="width:103px;" v-model="value" placeholder="">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="i-course-add-section">
                  <div class="i-course-add-label">
                    <i class="i-course-ico"></i><span>作业提交时间</span>
                  </div>
                  <div class="i-course-add-form">
                    <el-date-picker
                      v-model="value1"
                      align="right"
                      type="date"
                      placeholder=""
                      style="width: 200px;margin-right: 40px"
                      :picker-options="pickerOptions">
                    </el-date-picker>
                    <el-select style="width:103px;" v-model="value" placeholder="">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="">
                  <el-button type="primary" size="small" class="i-button i-cancel" style="width: 100%;" @click="show=!show">完成</el-button>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="">
              <div class="i-course-pane-title" style="margin-bottom: 0">考试安排</div>
              <div class="i-course-pane-label">开始时间</div>
              <div class="i-course-pane-input">
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder=""
                  style="width: 180px"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
              <div class="i-course-pane-label">截止时间</div>
              <div class="i-course-pane-input">
                <el-date-picker
                  v-model="value2"
                  align="right"
                  type="date"
                  placeholder=""
                  style="width:180px;float: left;"
                  :picker-options="pickerOptions">
                </el-date-picker>
                <el-select style="width:90px;margin-left: 20px;" v-model="value" placeholder="">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="i-course-pane-divide"></span>
                <el-select style="width:90px;margin-left: 0" v-model="value" placeholder="">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span class="i-course-pane-divide"></span>
                <el-select style="width:90px;margin-left:0" v-model="value" placeholder="">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <div class="i-course-switch">
                  <span>提醒教师布置考场</span>
                  <el-switch class="i-switch" v-model="switcher" :width="58" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
                </div>
                <el-select style="width:200px;" v-model="value" placeholder="">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item label="添加备注">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4}"
                placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-row :gutter="50">
                <el-col :span="12">
                  <el-button type="primary" class="i-button i-confirm" style="width: 250px;">确认</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="primary" class="i-button i-cancel" style="width: 250px;" @click="show=!show">取消</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="i-course-right">
        <div class="i-course-right-inner">
          <div class="i-course-section" v-for="(value, key, index) in list">
            <h4 class="i-course-label">{{ labels[index].label }}</h4>
            <div class="i-course-content">
              <span v-if="labels[index].type === 'text'">{{ value }}</span>
              <a href="javascript:;" v-else>{{ value }}</a>
            </div>
          </div>
        </div>
        <div class="i-course-right-inner i-course-card">
          <h2>某某某班</h2>
          <span>创建日期：xxxx-xx-x x</span>
          <el-button type="primary" class="i-button i-cancel" style="width: 100%;">访问班级主页</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ITopMenu from '../../components/topmenu'
  import add from '../../mock/course/add'

  const list = [
    { label: '课程类型', type: 'text' },
    { label: '课程等级', type: 'text' },
    { label: '教师', type: 'link' },
    { label: '学生', type: 'link' },
    { label: '绑定教材', type: 'text' },
    { label: '校区', type: 'text' }
  ]

  export default {
    components: {
      ITopMenu
    },
    data () {
      return {
        labelPosition: 'top',
        information: {
          name: ''
        },
        show: true,
        value: '',
        switcher: false,
        options: add.options,
        labels: list,
        list: add.list,
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-course-add {
    width: 100%;
    .i-course-content {
      .i-course-left {
        .i-course-pane {
          margin-top: 0;
          .el-textarea__inner {
            border-radius: 2px;
          }
        }
        .i-course-add-pane {
          border: 1px solid #bfcbd9;
          border-radius: 2px;
          padding: 32px 29px;
          .i-course-add-title {
            font-size: 14px;
            line-height: 14px;
            margin-bottom: 26px;
            text-align: center;
          }
          .i-course-add-section {
            margin-bottom: 25px;
            .i-course-add-label {
              .clear;
              .clearfix;
              > i {
                display: block;
                width: 17px;
                height: 15px;
                background-size: 17px 15px;
                float: left;
              }
              > span {
                float: left;
                line-height: 16px;
                color: #4A4A4A;
                font-size: 14px;
                margin-bottom: 5px;
              }
            }
          }
        }
      }
      .i-course-right {
        background: transparent;
        padding: 0;
        .i-course-right-inner {
          background: #fff;
          padding: 43px 40px;
          & + .i-course-right-inner {
            margin-top: 20px;
          }
          &.i-course-card {
            h2 {
              margin: 15px 0 29px 0;
              font-size: 24px;
              padding: 0;
              text-align: center;
            }
            > span {
              color: #647183;
              display: block;
              font-size: 14px;
              line-height: 14px;
              margin-bottom: 45px;
              text-align: center;
            }
          }
        }
      }
    }
    .i-course-add-input {
      border: 1px dashed #CECEDF;
      height: 220px;
      line-height: 220px;
      text-align: center;
      font-size: 14px;
      color: #4D4D4D;
      cursor: pointer;
    }
  }
</style>
