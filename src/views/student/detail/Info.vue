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
      <span>按等级</span>
      <el-select style="margin: 0" class="i-select" size="mini" v-model="value" placeholder="">
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
        <i-section value="某某某某某" v-for="(item, index) in statics" :key="index" :label="item.label" :split="item.split">
          <a href="javascript:" v-if="item.label === '当前课程等级'">编辑</a>
        </i-section>
      </div>
    </i-layout>

  </div>
</template>

<script>
  import ILayout from '@/components/layout'
  import ISection from '@/components/section'
  import { mapGetters } from 'vuex'
  import data from '../../../mock/data'
  import echarts from 'echarts'
  import countTo from 'vue-count-to'

  export default {
    name: 'StudentDetailInfo',
    components: {
      countTo,
      ILayout,
      ISection
    },
    computed: {
      ...mapGetters([
        'timeOptions',
        'typeOptions',
        'statics'
      ])
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
        value1: '学生'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

