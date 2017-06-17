<template>
  <div class="i-schedule">
    <i-calendar
      :list="course"
      :today="today"
      :index="day"
      :weeks="weeks"
      @on-item-click="onItemClick"
      @on-prev-week="onPrevWeek"
      @on-next-week="onNextWeek">
    </i-calendar>
    <el-row :gutter="20" class="i-tabs-datagrid">
      <el-col :span="6" v-for="info in courseInfo" :key="info.id">
        <div class="i-t-d-items">
          <el-popover
            placement="right"
            width="361"
            trigger="click">
            <div class="i-t-d-popover" style="margin-top: 15px;">
              <el-form class="i-form" label-position="top" label-width="80px" style="width: 321px;margin-left:20px;">
                <el-form-item label="上课时间">
                  <div class="i-schedule-timepicker">
                    <div class="i-schedule-timepicker-picker">
                      <el-time-select
                        style="width: 120px;"
                        placeholder=""
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                      </el-time-select>
                    </div>
                  </div>
                  <div class="i-schedule-timepicker">
                    <div class="i-schedule-timepicker-picker">
                      <el-time-select
                        style="width: 120px;"
                        placeholder=""
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                      </el-time-select>
                    </div>
                    <div class="i-schedule-timepicker-border"></div>
                    <div class="i-schedule-timepicker-picker">
                      <el-time-select
                        placeholder=""
                        style="width: 120px;"
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                      </el-time-select>
                    </div>
                    <div class="i-schedule-timepicker-label"></div>
                  </div>
                </el-form-item>
                <el-form-item label="作业提交时间">
                  <div class="i-schedule-timepicker">
                    <div class="i-schedule-timepicker-picker">
                      <el-time-select
                        style="width: 120px;"
                        placeholder=""
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                      </el-time-select>
                    </div>
                    <div class="i-schedule-timepicker-border"></div>
                    <div class="i-schedule-timepicker-picker">
                      <el-time-select
                        placeholder=""
                        style="width: 120px;"
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                      </el-time-select>
                    </div>
                    <div class="i-schedule-timepicker-label">前</div>
                  </div>
                  <div class="i-switch">
                    <div class="i-switch-label" style="margin-right: 12px">重复</div>
                    <div class="i-switch-switch" style="float: left">
                      <el-switch :width="58" v-model="value" on-text="" off-text="" on-color="#4993FA" off-color="#CDCDDE"></el-switch>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-row :gutter="50">
                    <el-col :span="24">
                      <el-button type="primary" class="i-button i-cancel" style="width: 321px;">完成</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-form>
            </div>
            <div slot="reference">
              <span>{{ info.index }}</span>
              <span>{{ info.name }}</span>
              <span>{{ info.classroom }}</span>
              <span>{{ info.time }}</span>
            </div>
          </el-popover>
          <img alt="ico" src="../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
          <el-popover
            placement="bottom"
            popper-class="i-popover"
            width="80"
            :offset="-30"
            trigger="click">
            <div class="i-t-d-popover">
              <router-link :to="{ name: 'Course', params: { courseId: info.id }}">进入课程页面</router-link>
              <router-link :to="{ name: 'ClassRoom', params: { courseId: info.id }}">进入班级主页</router-link>
              <router-link :to="{ name: 'Teacher', params: { courseId: info.id }}">进入教师主页</router-link>
            </div>
            <div class="i-t-d-items-more" slot="reference">
              <a href="javascript:void(0);" class="el-icon-more"></a>
            </div>
          </el-popover>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ICalendar from '../../components/calendar'
  import c from '../../utils/calendar'

  import schedule from '../../mock/home/schedule'

  export default {
    components: {
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
        this.getCourseInfo(item)
      },
      getCourseInfo () {
        this.courseInfo = schedule.getUserInfo()
      },
      createData () {
        let self = this
        self.course = []
        schedule.createData().forEach(item => {
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
        courseInfo: [],
        value: false
      }
    },
    mounted () {
      this.createData()
      this.getCourseInfo()
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-schedule {
    width: 100%;
    padding-top: 20px;
    .i-tabs-datagrid {
      margin-bottom: 20px;
      margin-top: 20px;
      .i-t-d-items {
        background: #fff;
        border-radius: 2px;
        margin-top: 20px;
        position: relative;
        padding: 20px;
        transition: all .5s;
        color: #7B8695;
        span {
          display: block;
          font-size: 12px;
          line-height: 22px;
        }
        img {
          display: block;
          width: 32px;
          height: 32px;
          border-radius: 100%;
        }
        .i-t-d-items-more {
          position: absolute;
          right: 0;
          top: 0;
          transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          a {
            width: 100%;
            height: 100%;
            padding: 10px 10px;
            display: block;
            color: #606E84;
          }
        }
        &:hover {
          .box-shadow;
        }
      }
    }
  }
  .el-input__inner {
    border-radius: 2px !important;
  }
  .i-schedule-timepicker {
    margin-bottom: 10px;
    clear: both;
    &:before, &:after {
      clear: both;
      display: table;
      content: '';
    }
    .i-schedule-timepicker-picker {
      float: left;
      position: relative;
      width: 120px;
    }
    .i-schedule-timepicker-border {
      float: left;
      position: relative;
      width: 50px;
      height: 30px;
      &:before {
        position: absolute;
        content: '';
        left: 20px;
        top: 18px;
        width: 10px;
        height: 1px;
        background: #14243C;
      }
    }
    .i-schedule-timepicker-label {
      float: left;
      width: 30px;
      position: relative;
      text-align: right;
    }
  }
</style>
