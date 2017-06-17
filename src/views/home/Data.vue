<!-- 数据统计 -->
<template>
  <div class="i-data">
    <div class="i-done-charts">
      <div class="i-done-charts-title">
        <div class="i-done-dropdown">
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
        <div class="i-done-dropdown" style="margin-right: 30px">
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
      <el-row :gutter="20" class="i-el-row">
        <el-col :span="10">
          <div class="i-el-col">
            <div class="i-el-col-title">学生</div>
            <div class="i-el-col-sub">456</div>
          </div>
          <div class="i-el-col">
            <div class="i-el-col-title">班级</div>
            <div class="i-el-col-sub">34</div>
          </div>
          <div class="i-el-col">
            <div class="i-el-col-title">教师</div>
            <div class="i-el-col-sub">126</div>
          </div>
          <div class="i-el-col">
            <div class="i-el-col-title">课程</div>
            <div class="i-el-col-sub">260</div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="i-el-col i-el-col-2x">
            <!-- 人员组织 -->
            <div class="i-chart-pane">
              <div class="i-chart-header">
                <div class="i-chart-header-left">人员组织</div>
                <div class="i-chart-header-right">
                  <el-select v-model="value" style="width: 100px;" size="small" placeholder="学生">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div id="home_users" class="i-chart"></div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="i-el-row">
        <el-col :span="14">
          <div class="i-el-col i-el-col-2x">
            <!-- 教学实践 -->
            <div class="i-chart-pane">
              <div class="i-chart-header">
                <div class="i-chart-header-left">教学实践</div>
                <div class="i-chart-header-right">
                  <el-select v-model="value" style="width: 100px;" size="small" placeholder="学生">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div id="home_info" class="i-chart"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="i-el-col">
            <div class="i-el-col-title">课时</div>
            <div class="i-el-col-sub">3,400</div>
          </div>
          <div class="i-el-col">
            <div class="i-el-col-title">教学人次</div>
            <div class="i-el-col-sub">5,600</div>
          </div>
          <div class="i-el-col">
            <div class="i-el-col-title">课件学习时间</div>
            <div class="i-el-col-sub">12,123</div>
          </div>
          <div class="i-el-col">
            <div class="i-el-col-title">提交作业</div>
            <div class="i-el-col-sub">13,456</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="i-el-row">
        <el-col :span="10">
          <div class="i-el-col i-el-col-2x">
            <!-- 教学资源 -->
            <div class="i-chart-pane">
              <div class="i-chart-header">
                <div class="i-chart-header-left">教学资源</div>
                <div class="i-chart-header-right">
                  <div class="i-tooltip">
                    <div class="i-tooltip-label">原创</div>
                    <div class="i-tooltip-square" style="background: #4993fa"></div>
                  </div>
                  <div class="i-tooltip">
                    <div class="i-tooltip-label">使用</div>
                    <div class="i-tooltip-square" style="background: #d8d8d8"></div>
                  </div>
                </div>
              </div>
              <div id="home_res" class="i-chart"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="i-el-col i-el-col-2x">
            <!-- 教学成果 -->
            <div class="i-chart-pane">
              <div class="i-chart-header">
                <div class="i-chart-header-left">教学实践</div>
                <div class="i-chart-header-right">
                  <el-select v-model="value" style="width: 100px;" size="small" placeholder="学生">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div id="home_ach" class="i-chart"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  // 引入echarts
  import echarts from 'echarts/lib/echarts'
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/bar')
  require('echarts/lib/component/tooltip')

  import data from '../../mock/home/data'

  export default {
    methods: {
      chart () {
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
        options: data.options,
        times: data.times,
        levels: data.levels
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-data {
    width: 100%;
    padding-top: 20px;
    /* 数据统计 */
    .i-done-charts {
      padding: 0;
      .i-done-charts-title {
        width: 100%;
        margin-bottom: 30px;
        clear: both;
        &:after, &:before {
          content: '';
          display: table;
          clear: both;
        }
        .i-done-dropdown {
          float: right;
          & > span {
            color: #808B9B;
            line-height: 28px;
            display: inline-block;
            font-size: 14px;
            vertical-align: top;
          }
          .el-button--small {
            border-radius: 2px;
          }
        }
      }
      .i-el-row {
        /*<!--margin-top: @padding30;-->*/
        margin-bottom: 20px;
        .i-el-col {
          background: #fff;
          border-radius: 5px;
          float: left;
          position: relative;
          height: 150px;
          width: 50%;
          &.i-el-col-2x {
            height: 300px;
            width: 100%;
          }
          .i-el-col-title {
            color: #58647A;
            margin-top: 41px;
            margin-left: 64px;
            line-height: 12px;
          }
          .i-el-col-sub {
            font-size: 28px;
            margin-left: 64px;
            color: #078CFA;
            margin-top: 21px;
          }
        }
      }
      .i-chart-pane {
        position: relative;
        height: 100%;
        .i-chart-header {
          height: 50px;
          .i-chart-header-left {
            color: #425871;
            line-height: 60px;
            float: left;
            position: relative;
            padding-left: 30px;
          }
          .i-chart-header-right {
            float: right;
            margin-top: 15px;
            padding-right: 30px;
            .el-button--text {
              border: 1px solid #9F9EBC;
              color: #9F9EBC;
            }
            .el-button--small {
              border-radius: 2px;
              padding: 7px 7px;
            }
            .i-tooltip {
              margin-top: 7px;
              float: right;
              margin-left: 22px;
              position: relative;
              line-height: 16px;
              font-size: 14px;
              .i-tooltip-label {
                color: #7A7A7A;
                float: right;
                margin-left: 3px;
              }
              .i-tooltip-square {
                width: 15px;
                height: 15px;
                float: right;
              }
            }
          }
        }
        .i-chart {
          position: absolute;
          top: 50px;
          bottom: 0;
          width: 100%;
        }
      }
    }
  }
</style>
