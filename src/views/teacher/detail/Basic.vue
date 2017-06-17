<!-- 基本统计信息 -->
<template>
  <div class="i-student-basic">
    <div class="i-s-basic-oprbar">
      <div class="i-student-dropdown">
        <span>按等级</span>
        <el-select v-model="value" style="width: 100px;" size="small" placeholder="">
          <el-option
            v-for="item in levels"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="i-student-dropdown" style="margin-right: 30px">
        <span>按时间</span>
        <el-select v-model="value" style="width: 100px;" size="small" placeholder="">
          <el-option
            v-for="item in times"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="i-s-basic-pane">
      <div class="i-s-basic-pane-left">
        <el-row :gutter="20" class="i-s-basic-row">
          <el-col :span="6">
            <div class="i-s-basic-section">
              <div class="i-s-basic-section-inner">
                <span>上课课时</span>
                <span>3,056</span>
              </div>
            </div>
            <div class="i-s-basic-section">
              <div class="i-s-basic-section-inner">
                <span>上课人数</span>
                <span>5,367</span>
              </div>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="i-s-basic-section i-s-basic-section-2x">
              <i-title :height="60" title="上课情况">
                <el-select slot="content" v-model="value" style="width: 100px;" size="small" placeholder="学生">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </i-title>
              <div id="chart1" style="height:240px"></div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="i-s-basic-row">
          <el-col :span="18">
            <div class="i-s-basic-section i-s-basic-section-2x">
              <i-title :height="60" title="课后情况">
                <el-select slot="content" v-model="value" style="width: 100px;" size="small" placeholder="学生">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </i-title>
              <div id="chart2" style="height:240px"></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="i-s-basic-section">
              <div class="i-s-basic-section-inner">
                <span>课后任务完成准时率</span>
                <span>90%</span>
              </div>
            </div>
            <div class="i-s-basic-section">
              <div class="i-s-basic-section-inner">
                <span>批改作业数</span>
                <span>367</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="i-s-basic-row">
          <el-col :span="24">
            <div class="i-s-basic-section i-s-basic-section-2x">
              <i-title :height="60" title="学生完成各等级耗时"></i-title>
              <div id="chart3" style="height:240px"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="i-s-basic-pane-right">
        <div class="i-s-basic-pane-right-inner">
          <i-label
            v-for="(item, index) in list"
            :title="item.label"
            :type="item.type"
            :key="'label'+index"
            :show-divide="item.showDivide"
            :show-link="item.showLink"
            :content="item.content">
            <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
          </i-label>
        </div>
      </div>
    </div>
    <!-- dialog -->
    <el-dialog
      title=""
      :visible.sync="dialogFormVisible"
      :show-close="false"
      top="10%"
      custom-class="i-dialog"
      :close-on-click-modal="false">
      <div class="i-dialog-title">教师初始化/编辑教师信息</div>
      <el-form :model="form" label-position="top" style="width:550px;margin:0 auto;">
        <el-form-item label="校区" label-width="80px">
          <el-select v-model="value" placeholder="" style="width:550px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前课程等级" label-width="80px">
          <el-select v-model="value" placeholder="" style="width:550px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教学范围" label-width="80px">
          <i-checkbox-group :show="false">
            <i-checkbox
              :is-indeterminate="true"
              :check-all="false"
              button="button"
              :items="checkArr"
              :on-handle-check-all-change="handleCheckAllChange"
              :on-handle-checked-change="handleCheckedChange"
              :on-handle-check-all-clear="handleCheckAllClear"
              @onIndeterminateChange="onIndeterminateChange"
              @onCheckAllChange="onCheckAllChange"
            ></i-checkbox>
          </i-checkbox-group>
        </el-form-item>
        <el-form-item label="可教学时间" label-width="80px">
          <i-checkbox-group :show="false">
            <i-checkbox
              style="margin-bottom: 15px"
              v-for="(item, index) in weeks"
              :label="item"
              :index="index"
              :key="'weeks'+index"
              :is-indeterminate="true"
              :check-all="false"
              button="link"
              :items="checkWeekArr"
              :on-handle-check-all-change="handleCheckAllChange"
              :on-handle-checked-change="handleCheckedChange"
              :on-handle-check-all-clear="handleCheckAllClear"
              @onIndeterminateChange="onIndeterminateChange"
              @onCheckAllChange="onCheckAllChange"
            ></i-checkbox>
          </i-checkbox-group>
        </el-form-item>

        <el-form-item label="备注" label-width="80px">
          <el-input
            type="textarea"
            :autosize="{ minRows: 6, maxRows: 6}"
            placeholder=""
            v-model="value">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="50" style="margin-top: 35px">
            <el-col :span="12">
              <el-button type="primary" class="i-button i-confirm" style="width: 250px;" @click="dialogFormVisible = false">确认</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" class="i-button i-cancel" style="width: 250px;" @click="dialogFormVisible = false">取消</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import ITitle from '../../../components/title'
  import ILabel from '../../../components/label'
  import ICheckboxGroup from '../../../components/checkboxgroup'
  import ICheckbox from '../../../components/checkbox'
  import basic from '../../../mock/teacher/basic'
  import { checkboxMixins } from '../../../mixins/checkbox'
  import echarts from 'echarts/lib/echarts'
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/bar')
  require('echarts/lib/component/tooltip')

  export default {
    components: {
      ITitle,
      ILabel,
      ICheckbox,
      ICheckboxGroup
    },
    mixins: [checkboxMixins],
    methods: {
      chart () {
        let option = basic.option
        let myChart = echarts.init(document.getElementById('chart1'))
        myChart.setOption(option)
        myChart = echarts.init(document.getElementById('chart2'))
        myChart.setOption(option)
        myChart = echarts.init(document.getElementById('chart3'))
        myChart.setOption(option)
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.chart()
      })
    },
    data () {
      return {
        value: '1',
        form: {
          name: ''
        },
        dialogFormVisible: false,
        options: basic.options,
        list: basic.list,
        levels: basic.levels,
        times: basic.times,
        checkArr: basic.checks,
        checkWeekArr: basic.checkWeeks,
        weeks: basic.weeks
      }
    }
  }
</script>
