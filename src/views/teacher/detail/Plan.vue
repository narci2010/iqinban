<!-- 教学计划 -->
<template>
  <div class="i-student-plan">
    <i-title title="主管教师" :height="60">
      <el-button slot="content" class="i-button i-small-primary-button" type="primary" size="mini">添加</el-button>
    </i-title>
    <el-row :gutter="20">
      <el-col :span="6" v-for="i in 4" :key="i">
        <div class="i-student-plan-item">
          <img alt="ico" src="../../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
          <div class="i-student-plan-section">
            <div class="i-student-plan-section-inner">
              <span>某某某</span>
              <span>周三 9:30~11:00</span>
            </div>
          </div>
          <el-popover
            placement="bottom"
            popper-class="i-popover"
            width="80"
            :offset="-30"
            trigger="click">
            <div class="i-t-d-popover">
              <a href="javascript:;">删除</a>
              <a href="javascript:;">进入教师主页</a>
            </div>
            <div class="i-t-d-items-more" slot="reference">
              <a href="javascript:void(0);" class="el-icon-more"></a>
            </div>
          </el-popover>
        </div>
      </el-col>
    </el-row>
    <i-title title="课程" :height="60">
      <div slot="content">
        <el-button class="i-button i-small-primary-button" type="primary" size="mini">添加</el-button>
        <el-button class="i-button i-small-primary-button" type="primary" size="mini">显示全部</el-button>
      </div>
    </i-title>
    <el-row :gutter="20">
      <el-col :span="6" v-for="i in 4" :key="i">
        <div class="i-student-plan-item" style="height: 180px;">
          <div class="i-student-plan-section" style="left: 41px;">
            <p>第一课</p>
            <p>乐理基础</p>
            <p>英皇1班</p>
            <p>某某</p>
          </div>
          <el-popover
            placement="bottom"
            popper-class="i-popover"
            width="80"
            :offset="-30"
            trigger="click">
            <div class="i-t-d-popover">
              <a href="javascript:;">进入班级主页</a>
              <a href="javascript:;">进入课程主页</a>
              <a href="javascript:;">进入教师主页</a>
              <a href="javascript:;">删除</a>
            </div>
            <div class="i-t-d-items-more" slot="reference">
              <a href="javascript:void(0);" class="el-icon-more"></a>
            </div>
          </el-popover>
        </div>
      </el-col>
    </el-row>
    <i-calendar
      style="margin-top: 40px"
      :list="course"
      :today="today"
      :index="day"
      :weeks="weeks"
      @on-item-click="onItemClick"
      @on-prev-week="onPrevWeek"
      @on-next-week="onNextWeek">
    </i-calendar>
    <div class="i-student-plan-table">
      <el-table
        :data="courseInfo"
        stripe
        :border="false"
        style="width: 100%;">
        <el-table-column
          prop="name"
          label="课程名"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="课程类型"
        ></el-table-column>
        <el-table-column
          prop="level"
          label="课程等级"
        ></el-table-column>
        <el-table-column
          prop="classroom"
          label="班级"
        ></el-table-column>
        <el-table-column
          prop="teacher"
          label="教师"
        ></el-table-column>
        <el-table-column
          prop="starttime"
          label="开始日期"
        ></el-table-column>
        <el-table-column
          prop="process"
          label="当前进度"
        ></el-table-column>
        <el-table-column
          label="">
          <template scope="scope">
            <el-popover
              placement="bottom"
              popper-class="i-popover"
              width="80"
              :offset="-30"
              trigger="click">
              <div class="i-t-d-popover">
                <a href="javascript:void(0)">进入课程主页</a>
                <a href="javascript:void(0)">进入班级主页</a>
                <a href="javascript:void(0)">进入教师主页</a>
              </div>
              <div class="el-icon-more i-student-popover" slot="reference"></div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import ICalendar from '../../../components/calendar'
  import ITitle from '../../../components/title'
  import c from '../../../utils/calendar'
  import plan from '../../../mock/teacher/plan'

  export default {
    components: {
      ITitle,
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
        this.courseInfo = plan.getUserInfo()
      },
      createData () {
        let self = this
        self.course = []
        plan.createData().forEach(item => {
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
      this.$nextTick(() => {
        this.createData()
        this.getCourseInfo()
      })
    }
  }
</script>
