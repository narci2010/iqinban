<!-- 课程表 -->
<template>
  <div class="i-content">
    <i-calendar :items="course" @on-change="onChange" @cell-click="cellClick"></i-calendar>
    <div class="i-schedule">
      <el-row :gutter="18">
        <el-col v-for="i in 7" :span="6" :key="i">
          <div class="i-schedule__item">
            <el-popover
              placement="bottom"
              title=""
              width="104"
              :offset="-20"
              trigger="click"
              popper-class="i-popover__small">
              <div class="i-popover__content i-popover__content-small">
                <a class="i-popover__item" href="javascript:">进入课程页面</a>
                <a class="i-popover__item" href="javascript:">进入班级主页</a>
                <a class="i-popover__item" href="javascript:">进入教师主页</a>
              </div>
              <a href="javascript:" slot="reference"><i class="iconfont icon-morecopy_px"></i> </a>
            </el-popover>
            <div class="i-schedule__item-inner box-shadow-side">
              <el-popover
                placement="right"
                title=""
                width="358"
                :offset="60"
                trigger="click"
                popper-class="i-popover__small">
                <div class="i-popover__content i-popover__content-small">
                  <span class="i-popover__item">上课时间</span>
                  <span class="i-popover__item">
                    <el-date-picker
                      style="width: 120px;"
                      type="date"
                      size="small"
                      placeholder="">
                    </el-date-picker>
                  </span>
                  <span class="i-popover__item i-popover__picker">
                    <el-time-select
                      style="width: 120px;"
                      size="small"
                      :picker-options="datePickerOptions"
                      placeholder="">
                    </el-time-select>
                    <span></span>
                    <el-time-select
                      style="width: 120px;"
                      size="small"
                      :picker-options="datePickerOptions"
                      placeholder="">
                    </el-time-select>
                  </span>
                  <span class="i-popover__item">作业提交时间</span>
                  <span class="i-popover__item">
                    <el-time-select
                      style="width: 120px;"
                      size="small"
                      :picker-options="datePickerOptions"
                      placeholder="">
                    </el-time-select>
                    <span></span>
                    <el-time-select
                      style="width: 120px;"
                      size="small"
                      :picker-options="datePickerOptions"
                      placeholder="">
                    </el-time-select>
                    <em>前</em>
                  </span>
                  <span class="i-popover__item">
                    <em style="margin-left: 0">重复</em>
                    <el-switch style="margin-left: 10px" class="i-switch i-switch__small" :width="48" v-model="value" on-text="" off-text=""></el-switch>
                  </span>
                  <span class="i-popover__item i-popover__picker">
                    <el-button style="width:150px;height: 36px;margin-right: 6px" class="i-button__done">保存</el-button>
                    <el-button style="width:150px;height: 36px;" class="i-button__cancel">取消</el-button>
                  </span>
                </div>
                <div slot="reference">
                  <span>课程名</span>
                  <span>乐理基础</span>
                  <p>英皇1班</p>
                  <p>9:00~11:30</p>
                  <img :src="src">
                </div>
              </el-popover>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ICalendar from '../../components/calendar'
  import src from '../../assets/img/ico.jpg'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Schedule',
    components: {
      ICalendar
    },
    computed: {
      ...mapGetters([
        'datePickerOptions'
      ])
    },
    methods: {
      onChange (year, month) {
        return new Promise((resolve, reject) => {
          this.course = [1, 1, 1, 1, 1, 1]
        })
      },
      cellClick () {
        alert(1)
      }
    },
    data () {
      return {
        src: src,
        value: false, // switch test data
        course: [1, 1, 1, 1, 1, 1] // 模拟课程
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-schedule {
    margin-top: $schedule-margin;
    &__item {
      border-radius: $schedule-border-radius;
      height: $schedule-height;
      margin-top: $schedule-margin;
      position: relative;
      z-index: 1;
      &-inner {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: $schedule-padding;
        background: $schedule-background;
      }
      a {
        position: absolute;
        right: 0;
        top: 5px;
        padding: 12px;
        color: $schedule-color;
        z-index: 10;
      }
      span, p {
        line-height: $schedule-lineheight;
      }
      span {
        display: block;
        font-size: $schedule-fontsize;
        color: $schedule-color;
      }
      p {
        font-size: $schedule-fontsize;
        color: $schedule-bot-color;
      }
      img {
        display: block;
        border-radius: 100%;
        width: $schedule-ico-size;
        height: $schedule-ico-size;
        margin-top: $schedule-ico-margin;
      }
    }
  }
</style>
<style lang="scss">
  // element-ui reset
  .el-input__inner {
    border-radius: 2px;
  }
  .i-popover__item {
    > span {
      display: inline-block;
      position: relative;
      margin: 0 15px;
      width: 10px;
      &:before {
        position: absolute;
        content: '';
        background: #0d2039;
        width: 10px;
        height: 1px;
        top: -5px;
      }
    }
    > em {
      font-style: normal;
      display: inline-block;
      margin-left: 15px;
    }
  }
</style>
