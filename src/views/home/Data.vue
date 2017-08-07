<!-- 数据统计 -->
<template>
  <div class="i-content i-data">
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
    <div class="i-data__row">
      <div class="i-data__cell floatleft width-442">
        <div class="i-data__cell-row">
          <div class="i-data__cell-col">
            <span>学生</span>
            <p><countTo :startVal='0' :endVal='3056' :duration='3000'></countTo></p>
          </div>
          <div class="i-data__cell-col">
            <span>教师</span>
            <p><countTo :startVal='0' :endVal='184' :duration='3000'></countTo></p>
          </div>
        </div>
        <div class="i-data__cell-row">
          <div class="i-data__cell-col">
            <span>班级</span>
            <p><countTo :startVal='0' :endVal='367' :duration='3000'></countTo></p>
          </div>
          <div class="i-data__cell-col">
            <span>课程</span>
            <p><countTo :startVal='0' :endVal='2345' :duration='3000'></countTo></p>
          </div>
        </div>
      </div>
      <div class="i-data__cell floatright width-595">
        <div class="i-data__title floatleft">人员组织</div>
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
      <div class="i-data__cell floatleft width-595">
        <div class="i-data__title floatleft">教学实践</div>
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
      <div class="i-data__cell floatright width-442">
        <div class="i-data__cell-row">
          <div class="i-data__cell-col">
            <span>课时</span>
            <p><countTo :startVal='0' :endVal='3056' :duration='3000'></countTo></p>
          </div>
          <div class="i-data__cell-col">
            <span>课时学习时间</span>
            <p><countTo :startVal='0' :endVal='4567' :duration='3000'></countTo></p>
          </div>
        </div>
        <div class="i-data__cell-row">
          <div class="i-data__cell-col">
            <span>教学人次</span>
            <p><countTo :startVal='0' :endVal='2367' :duration='3000'></countTo></p>
          </div>
          <div class="i-data__cell-col">
            <span>提交作业</span>
            <p><countTo :startVal='0' :endVal='12345' :duration='3000'></countTo></p>
          </div>
        </div>
      </div>
    </div>
    <div class="i-data__row">
      <div class="i-data__cell floatleft width-442">
        <div class="i-data__title floatleft">教学资源</div>
        <div class="i-chart" id="home_res"></div>
      </div>
      <div class="i-data__cell floatright width-595">
        <div class="i-data__title floatleft">教学实践</div>
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
        <div class="i-chart" id="home_ach"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import data from '../../mock/data'
  import echarts from 'echarts'
  import countTo from 'vue-count-to'

  export default {
    name: 'HomeData',
    components: {
      countTo
    },
    computed: {
      ...mapGetters([
        'timeOptions',
        'typeOptions'
      ])
    },
    mounted () {
      let option = data.lineOption
      let option1 = data.barOption
      let myChart = echarts.init(document.getElementById('home_users'))
      myChart.setOption(option)
      myChart = echarts.init(document.getElementById('home_info'))
      myChart.setOption(option)
      myChart = echarts.init(document.getElementById('home_res'))
      myChart.setOption(option1)
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
