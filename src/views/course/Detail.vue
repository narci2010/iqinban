<!-- 课程调整 -->
<template>
  <div class="i-course-detail">
    <div class="i-secondary-menu">
      <i-top-menu title="课程名称"></i-top-menu>
    </div>
    <div class="i-course-content">
      <div class="i-course-left">
        <i-calendar
          :list="course"
          :today="today"
          :index="day"
          :weeks="weeks"
          @on-item-click="onItemClick"
          @on-prev-week="onPrevWeek"
          @on-next-week="onNextWeek"
          :small="true"
        ></i-calendar>
        <div class="i-course-pane">
          <div class="i-course-pane-title">课程安排</div>
          <el-row :gutter="20">
            <el-col :span="8" v-for="i in 5" :key="i">
              <div class="i-course-section">
                <div class="i-course-ico"></div>
                <div class="i-course-title">课时{{ i }}</div>
                <div class="i-course-pane-inner">
                  <div class="i-course-pane-left">
                    <i class="i-course-ico1"></i>
                  </div>
                  <div class="i-course-pane-right">
                    <div class="i-course-item">
                      <span>每周三</span>
                      <span>9:30 ~ 11:00</span>
                    </div>
                    <div class="i-course-item">
                      <span>周六</span>
                      <span>22：00 前</span>
                    </div>
                  </div>
                </div>
                <div class="i-course-opr">
                  <a href="javascript:;" class="i-course-delete"></a>
                  <a href="javascript:;" class="i-course-edit"></a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="i-course-pane">
          <div class="i-course-pane-title" style="margin-bottom: 0">考试安排</div>
          <div class="i-course-pane-label">开始时间</div>
          <div class="i-course-pane-input">
            <el-date-picker
              v-model="value1"
              align="right"
              type="date"
              placeholder=""
              style="width: 200px"
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
              style="width:200px;float: left;"
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
        </div>
      </div>
      <div class="i-course-right">
        <div class="i-course-section" v-for="(value, key, index) in list">
          <h4 class="i-course-label">{{ labels[index].label }}</h4>
          <div class="i-course-content">
            <span v-if="labels[index].type === 'text'">{{ value }}</span>
            <a href="javascript:;" v-else>{{ value }}</a>
          </div>
          <div class="i-course-divide" v-if="index===7"></div>
          <div class="i-course-btn-edit" v-if="index===8">
            <el-button type="text">编辑</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ITopMenu from '../../components/topmenu'
  import ICalendar from '../../components/calendar'

  import c from '../../utils/calendar'
  import detail from '../../mock/course/detail'

  const labels = [
    { label: '课程名', type: 'text' },
    { label: '班级名', type: 'link' },
    { label: '课程类型', type: 'text' },
    { label: '课程等级', type: 'text' },
    { label: '教师', type: 'link' },
    { label: '学生', type: 'link' },
    { label: '创建日期', type: 'text' },
    { label: '校区', type: 'text' },
    { label: '绑定教材', type: 'text' },
    { label: '当前进度', type: 'text' },
    { label: '备注', type: 'text' }
  ]

  export default {
    components: {
      ITopMenu,
      ICalendar
    },
    methods: {
      onPrevWeek () {
        this.today = c.transWeek(-1)
        this.createData()
      },
      onNextWeek () {
        this.today = c.transWeek(1)
        this.createData()
      },
      onItemClick (item) {
        //
      },
      createData () {
        let self = this
        self.course = []
        detail.createData().forEach(item => {
          item.course.forEach(o => {
            if (o.active) {
              o.text = '<span>课程名一</span><span>课程名二</span><span>课程名三</span><span>课程名四五六七</span><p>共4节</p>'
            }
          })
          self.course.push(item)
        })
      }
    },
    data () {
      return {
        course: [],
        today: c.formatDate(),
        weeks: c.weeks,
        day: c.getDay(),
        labels: labels,
        value: '',
        switcher: false,
        options: detail.options,
        list: detail.list,
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
        },
        value1: '',
        value2: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.createData()
      })
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-course-detail {
    width: 100%;
  }
</style>
