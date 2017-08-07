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
            <div class="i-data__title floatleft">学生完成各等级耗时</div>
            <div class="i-chart" id="home_ach"></div>
          </div>
        </div>
      </div>
      <div slot="right">
        <i-section value="某某某某某" v-for="(item, index) in teacherStatics" :key="index" :label="item.label" :split="item.split">
          <a href="javascript:" v-if="item.label === '教师类型'" @click="visible = true">编辑</a>
          <el-tooltip popper-class="i-tooltip" content="上传相关证书及照片以通过认证" placement="top-start">
            <a href="javascript:" v-if="item.label === '所获荣誉'">
              认证<i class="iconfont icon-help"></i>
            </a>
          </el-tooltip>
          <el-tooltip popper-class="i-tooltip" content="已上传相关证书照片并通过认证" placement="top">
            <a href="javascript:" v-if="item.label === '教育经历'">
              <i class="iconfont icon-anquan"></i>
            </a>
          </el-tooltip>
        </i-section>
      </div>
    </i-layout>
    <i-layer width="766px" height="1125px" offset-top="10%" title="编辑教师信息/教师信息初始化"
             @on-done="onDone" @on-cancel="onCancel" background="#fff" :visible="visible">
      <div class="layer__pane" style="width: 550px;margin: 0 auto;">
        <i-card title="教师类型">
          <el-select style="width: 550px" slot="body" v-model="option" placeholder="">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </i-card>
        <i-card title="教学范围">
          <span slot="sup" style="font-size: 12px;color: #9e9ebc;">（请选择所能教授的最高等级）</span>
          <div slot="body">
            <i-checkbox style="width:550px;" type="button" :split="true" :items="levels"></i-checkbox>
          </div>
        </i-card>
        <i-card title="可教学时间">
          <div slot="body">
            <i-checkbox style="margin-left: 10px;width:550px;" v-for="(item, index) in weeks"
                        :key="index" type="button" :label="item" :items="items"></i-checkbox>
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
  import ICheckbox from '@/components/checkbox'
  import { mapGetters } from 'vuex'
  import data from '../../../mock/data'
  import echarts from 'echarts'
  import countTo from 'vue-count-to'

  export default {
    name: 'TeacherDetailInfo',
    components: {
      countTo,
      ILayout,
      ISection,
      ILayer,
      ICard,
      ICheckbox
    },
    computed: {
      ...mapGetters([
        'timeOptions',
        'typeOptions',
        'teacherStatics',
        'weeks',
        'items'
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
        visible: true,
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          }
        ],
        option: '',
        textarea: '',
        levels: ['一级', '二级', '三级', '四级', '五级', '六级', '七级', '八级', '九级']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layer__pane {
    padding: 61px 0;
    height: 840px;
  }
</style>
<style lang="scss">
  .layer__pane {
    .el-input__inner {
      height: 46px;
    }
    .el-textarea__inner {
      border-radius: 2px;
      height: 145px;
    }
  }
</style>

