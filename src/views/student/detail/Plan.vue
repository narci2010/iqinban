<!-- 教学计划 -->
<template>
  <div class="i-content is-menubar is-tabbar">
    <i-card title="主管教师">
      <div slot="button">
        <el-button size="mini" class="i-button__ctrl i-button__ctrl-mini i-button__primary">添加</el-button>
      </div>
      <div slot="body">
        <el-row :gutter="20">
          <el-col v-for="i in 4" :key="i" :span="6">
            <div class="card__item-t" :class="{ 'is-freezed': i === 2 }">
              <img alt="ico" :src="src">
              <p>
                <span>某某某</span>
                <span>2016.03.01-2017.02.01</span>
              </p>
              <el-popover
                placement="bottom"
                title=""
                width="104"
                :offset="-20"
                trigger="click"
                popper-class="i-popover i-popover__small">
                <div class="i-popover__content i-popover__content-small">
                  <a class="i-popover__item" href="javascript:">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="card__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </div>
          </el-col>
        </el-row>
      </div>
    </i-card>
    <i-card title="班级">
      <div slot="button">
        <el-button size="mini" class="i-button__ctrl i-button__ctrl-mini i-button__primary">加入班级</el-button>
        <el-button size="mini" class="i-button__ctrl i-button__ctrl-mini i-button__primary-text">显示全部</el-button>
      </div>
      <div slot="body">
        <el-row :gutter="20">
          <el-col v-for="i in 4" :key="i" :span="6">
            <div class="card__item-b">
              <span>班级某</span>
              <span>乐理基础</span>
              <em>某老师</em>
              <em>某某课程</em>
              <el-popover
                placement="bottom"
                title=""
                width="104"
                :offset="-20"
                trigger="click"
                popper-class="i-popover i-popover__small">
                <div class="i-popover__content i-popover__content-small">
                  <a class="i-popover__item" href="javascript:">进入课程主页</a>
                  <a class="i-popover__item" href="javascript:">进入教师主页</a>
                  <a class="i-popover__item" href="javascript:">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="card__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </div>
          </el-col>
        </el-row>
      </div>
    </i-card>
    <i-calendar :items="course" @on-change="onChange" @cell-click="cellClick" style="margin-top: 50px"></i-calendar>
    <div class="i-table__panel" style="margin-top: 40px">
      <el-table class="i-table" :data="tableData" stripe>
        <el-table-column
          label=""
          prop=""
          width="20">
        </el-table-column>
        <el-table-column
          label="课程名"
          prop="col1"
        ></el-table-column>
        <el-table-column
          label="课程类型"
          prop="col2"
        ></el-table-column>
        <el-table-column
          label="课程等级"
          prop="col3"
        ></el-table-column>
        <el-table-column
          label="班级"
          prop="col4"
        ></el-table-column>
        <el-table-column
          label="教师"
          prop="col5"
        ></el-table-column>
        <el-table-column
          label="开始时间"
          prop="col6"
          sortable
        ></el-table-column>
        <el-table-column
          label="当前进度"
          prop="col7"
        ></el-table-column>
        <el-table-column label="">
          <template scope="scope">
            <el-popover
              placement="bottom"
              title=""
              width="114"
              :offset="-35"
              trigger="click"
              popper-class="i-popover__small">
              <div class="i-popover__content">
                <a class="i-popover__item" href="javascript:">进入课程首页</a>
                <a class="i-popover__item" href="javascript:">进入班级主页</a>
                <a class="i-popover__item" href="javascript:">进入教师主页</a>
              </div>
              <a href="javascript:" slot="reference" class="i-table__more"><i class="iconfont icon-morecopy_px"></i></a>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import ICalendar from '@/components/calendar'
  import ICard from '@/components/card'
  import { createData } from '@/mock/table'
  import src from '@/assets/img/ico.jpg'

  export default {
    name: 'StudentDetailPlan',
    components: {
      ICalendar,
      ICard
    },
    methods: {
      onChange (year, month) {
        return new Promise((resolve, reject) => {
          this.course = [1, 1, 1, 1, 1, 1]
        })
      },
      cellClick () {
        this.getData()
      },
      getData () {
        let num = Math.ceil(Math.random() * 8)
        createData(num).then(data => {
          this.tableData = data
        })
      }
    },
    data () {
      return {
        tableData: [],
        src: src,
        course: [1, 1, 1, 1, 1, 1] // 模拟课程
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
  .card__more {
    color: #7e8795;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 6px;
  }
  .card__item-t, .card__item-b {
    background: #fff;
    height: 100px;
    border-radius: 2px;
    position: relative;
    &.is-freezed {
      > p {
        > span {
          color: #9e9ebc;
        }
      }
      > img {
        opacity: 0.5;
      }
      &:after {
        position: absolute;
        content: '已冻结';
        font-size: 12px;
        color: rgba(52, 167, 217, 0.9);
        right: 28px;
        top: 43px;
      }
    }
    > img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      float: left;
      margin: 30px 0 0 30px;
    }
    > p {
      margin-left: 90px;
      padding-top: 30px;
      > span {
        display: block;
        font-size: 12px;
        color: rgba(54, 72, 97, 0.9);
        margin-bottom: 10px;
        & + span {
          color: #9e9ebc;
        }
      }
    }
  }
  .card__item-b {
    height: 155px;
    padding: 30px 40px;
    box-sizing: border-box;
    > span {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
      color: rgba(54, 72, 97, 0.9);
      display: block;
    }
    > em {
      font-style: normal;
      font-size: 14px;
      color: #9e9ebc;
      display: block;
      line-height: 17px;
      margin-bottom: 10px;
    }
  }
</style>
