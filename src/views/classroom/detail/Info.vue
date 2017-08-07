<!-- 基本信息统计 -->
<template>
  <div class="i-content i-data is-menubar is-tabbar">
    <div class="i-data__header">
      <span>按时间</span>
      <el-select class="i-select" size="mini" v-model="value" placeholder="">
        <el-option
          v-for="item in timeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <i-layout style="margin-top: 20px" :width="240" :show-background="false" left-padding="0" right-padding="30px">
      <div slot="left">
        <div class="i-data__row" style="margin-top: 0">
          <div class="i-data__cell floatleft width-217">
            <div class="i-data__cell-row">
              <div class="i-data__cell-col is-full">
                <span>上课课时</span>
                <p><countTo :startVal='0' :endVal='3056' :duration='3000'></countTo></p>
              </div>
              <div class="i-data__cell-col is-full">
                <span>上课次数</span>
                <p><countTo :startVal='0' :endVal='5367' :duration='3000'></countTo></p>
              </div>
            </div>
          </div>
          <div class="i-data__cell floatright width-560">
            <div class="i-data__title floatleft">上课情况</div>
            <div class="i-data__indicator floatright">
              <el-select class="i-select" size="mini" v-model="value1" placeholder="">
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="i-chart" id="home_users"></div>
          </div>
        </div>
        <div class="i-data__row">
          <div class="i-data__cell floatleft width-560">
            <div class="i-data__title floatleft">课程情况</div>
            <div class="i-data__indicator floatright">
              <el-select class="i-select" size="mini" v-model="value1" placeholder="">
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="i-chart" id="home_info"></div>
          </div>
          <div class="i-data__cell floatright width-217">
            <div class="i-data__cell-row">
              <div class="i-data__cell-col is-full">
                <span style="margin-left: -10%">课后任务完成准时率</span>
                <p><countTo :startVal='0' :endVal='90' suffix="%" :duration='3000'></countTo></p>
              </div>
              <div class="i-data__cell-col is-full">
                <span>提交作业数</span>
                <p><countTo :startVal='0' :endVal='367' :duration='3000'></countTo></p>
              </div>
            </div>
          </div>
        </div>
        <div class="i-data__row">
          <div class="i-data__cell">
            <div class="i-data__title floatleft">完成各等级耗时</div>
            <div class="i-chart" id="home_ach"></div>
          </div>
        </div>
      </div>
      <div slot="right">
        <i-section value="某某某某某" v-for="(item, index) in classroomCard" :key="index" :type="item.type" :link="item.link" :label="item.label" :split="item.split">
          <a href="javascript:" v-if="item.label === '班级名'" @click="visible = true">编辑</a>
          <a href="javascript:" v-if="item.label === '绑定教材'">编辑</a>
        </i-section>
      </div>
    </i-layout>
    <i-layer width="659px" height="598px" offset-top="10%"  title="编辑班级信息"
             @on-done="onDone" @on-cancel="onCancel" background="#fff" :visible="visible">
      <div class="layer__pane">
        <i-card title="教师类型">
          <div slot="body">
            <el-input placeholder="" class="layer__pane-input-large" placeholder="教材名1（默认）"></el-input>
            <el-button style="width: 550px;height:50px;margin-top: 15px">新增教材</el-button>
          </div>
        </i-card>
        <i-card title="备注">
          <el-input slot="body" type="textarea" :rows="2" placeholder="" v-model="textarea"></el-input>
        </i-card>
      </div>
    </i-layer>
  </div>
</template>

<script>
  import ILayout from '@/components/layout'
  import ISection from '@/components/section'
  import ILayer from '@/components/layer'
  import ICard from '@/components/card'
  import { mapGetters } from 'vuex'
  import data from '../../../mock/data'
  import echarts from 'echarts'
  import countTo from 'vue-count-to'

  export default {
    name: 'ClassroomDetailInfo',
    components: {
      countTo,
      ILayout,
      ISection,
      ILayer,
      ICard
    },
    computed: {
      ...mapGetters([
        'timeOptions',
        'typeOptions',
        'classroomCard'
      ])
    },
    methods: {
      onDone () {
        this.visible = false
      },
      onCancel () {
        this.visible = false
      }
    },
    mounted () {
      let option = data.lineOption
      let myChart = echarts.init(document.getElementById('home_users'))
      myChart.setOption(option)
      myChart = echarts.init(document.getElementById('home_info'))
      myChart.setOption(option)
      myChart = echarts.init(document.getElementById('home_ach'))
      myChart.setOption(option)
    },
    data () {
      return {
        value: '全部时间',
        value1: '学生',
        visible: false,
        textarea: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layer__pane {
    width: 550px;
    margin: 41px auto;
    text-align: left;
  }
</style>
<style lang="scss">
  .layer__pane {
    &-input-large {
      .el-input__inner {
        height: 50px;
      }
    }
    .el-textarea__inner {
      height: 145px;
      border-radius: 2px;
    }
  }
</style>

