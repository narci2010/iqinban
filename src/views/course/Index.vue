<!-- 课程-默认页面 -->
<template>
  <div class="i-container" :style="style">
    <i-menubar title="全部课程" sup="共84个">
      <el-button slot="ctrl" size="small" class="i-button__ctrl i-button__primary" @click="visible = true">创建课程</el-button>
      <div slot="pane">
        <div class="i-checkbox__clear">
          <a href="javascript:">清空</a>
        </div>
        <i-checkbox :items="items" :checked-item="checkedItem" label="课程等级："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="创建时间："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="课程类型："></i-checkbox>
      </div>
    </i-menubar>
    <div class="i-content is-menubar">
      <div class="i-table__panel">
        <el-popover
          placement="bottom"
          title=""
          width="98"
          :offset="20"
          trigger="click"
          popper-class="i-popover">
          <div class="i-popover__content">
            <a class="i-popover__item" href="javascript:">按课程等级</a>
            <a class="i-popover__item" href="javascript:">按课程类型</a>
            <a class="i-popover__item" href="javascript:">按教师</a>
          </div>
          <a href="javascript:" class="i-table__filter i-filter" slot="reference"></a>
        </el-popover>
        <el-table class="i-table" :data="tableData" stripe @row-click="rowClick">
          <el-table-column
            label=""
            prop="col9"
            width="80">
          </el-table-column>
          <el-table-column
            label="课程名"
            prop="col1"
          ></el-table-column>
          <el-table-column
            label="课程类型"
            prop="col3"
          ></el-table-column>
          <el-table-column
            label="课程等级"
            prop="col2"
            sortable
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
            label="学生人数"
            prop="col6"
            sortable
          ></el-table-column>
          <el-table-column
            label="创建时间"
            prop="col7"
            sortable
            width="120"
          ></el-table-column>
          <el-table-column label="">
            <template scope="scope">
              <el-popover
                placement="bottom"
                title=""
                width="112"
                :offset="-35"
                trigger="click"
                popper-class="i-popover">
                <div class="i-popover__content">
                  <a class="i-popover__item" href="javascript:" @click="del(scope)">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="i-table__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <i-pagination></i-pagination>
    </div>
    <!-- 删除 -->
    <i-messagebox width="331px" height="150px" :visible="show">
      <div class="messagebox">
        <div class="messagebox__body">
          <span>删除后讲无法恢复，确认进行该操作吗？</span>
          <el-checkbox class="messagebox__checkbox1" label="不再提醒" value="不再提醒">不再提醒</el-checkbox>
        </div>
        <a href="javascript:" @click="show = false">确定</a>
        <a href="javascript:" @click="show = false">取消</a>
      </div>
    </i-messagebox>
    <i-layer width="1095px" height="auto" offset-top="10%" title="创建课程" cls="course-layer" :show-done="showDone"
             @on-done="onDone" @on-cancel="onCancel" :done-text="doneText" :visible="visible">
      <div class="course-layer__tip">
        无需为课程指定教师和教材，简便地针对每个学生定制个性化课程。
      </div>
      <el-steps class="course-layer__steps" :space="200" :active="active" :center="true" style="margin-top: 58px">
        <el-step title="选择班级"></el-step>
        <el-step title="选择学生"></el-step>
        <el-step title="前往创建"></el-step>
      </el-steps>
      <div class="course-layer__result">
        <div class="course-layer__item" v-for="(item, index) in classroom" :key="index">
          <p>班级名</p>
          <span>班级类型</span>
          <span>课程等级</span>
          <span>教师名</span>
          <a href="javascript:" @click="back">重新选择</a>
        </div>
        <div class="course-layer__item course-layer__other" v-for="(item, index) in students" :key="index">
          <p>学生名</p>
          <span>xxxx-xx-xx</span>
          <img alt="ico" :src="src">
          <a href="javascript:" @click="back">重新选择</a>
        </div>
      </div>
      <div class="i-search-input__large form__pane-search" id="pane_search" v-show="showSearch">
        <i class="el-icon-search"></i>
        <input type="text" title="" placeholder="" v-model="keyword" @input="change">
      </div>
      <span class="course-layer__noresult" v-show="noresult">找不到您想要的班级？<router-link to="/classroom/add">前往创建</router-link></span>
      <div class="course-layer__step1" v-show="showStep1">
        <div class="course-layer__title">搜索结果</div>
        <div class="course-layer__body">
          <el-table class="i-table" :data="dataStep1" height="456" stripe style="margin-top:10px;">
            <el-table-column
              label=""
              prop="col9"
              width="80">
            </el-table-column>
            <el-table-column
              label="班级名"
              prop="col1"
              sortable
            ></el-table-column>
            <el-table-column
              label="课程等级"
              prop="col2"
              sortable
            ></el-table-column>
            <el-table-column
              label="班级类型"
              prop="col3"
            ></el-table-column>
            <el-table-column
              label="教师"
              prop="col4"
            ></el-table-column>
            <el-table-column
              label="学生人数"
              prop="col5"
              sortable
            ></el-table-column>
            <el-table-column
              label="创建时间"
              prop="col7"
              sortable
            ></el-table-column>
            <el-table-column label="" width="180">
              <template scope="scope">
                <el-button style="width:60px;" size="mini"
                           class="i-button__ctrl i-button__ctrl-mini i-button__primary-text">查看</el-button>
                <el-button style="width:60px;" size="mini"
                           class="i-button__ctrl i-button__ctrl-mini i-button__primary" @click="select(scope)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="course-layer__step2" v-show="showStep2">
        <div class="course-layer__title">搜索结果</div>
        <div class="course-layer__body">
          <el-table class="i-table" :data="dataStep2" height="456" stripe style="margin-top:10px;">
            <el-table-column
              label=""
              prop="col0"
              width="80">
              <template scope="scope">
                <img alt="ico" :src="src" class="i-table__ico">
              </template>
            </el-table-column>
            <el-table-column
              label="真实姓名"
              prop="col1"
              sortable></el-table-column>
            <el-table-column
              label="ID"
              prop="col2"
            ></el-table-column>
            <el-table-column
              label="性别"
              prop="col3"
            ></el-table-column>
            <el-table-column
              label="年龄"
              prop="col4"
              sortable
            ></el-table-column>
            <el-table-column
              label="进班时间"
              prop="col7"
              sortable
            ></el-table-column>
            <el-table-column label="" width="180">
              <template scope="scope">
                <el-button style="width:60px;" size="mini"
                           class="i-button__ctrl i-button__ctrl-mini i-button__primary-text">查看</el-button>
                <el-button style="width:60px;" size="mini"
                           class="i-button__ctrl i-button__ctrl-mini i-button__primary" @click="add(scope)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="course-layer__step3" v-show="showStep3">
        <div class="course-layer__tip" style="margin: 50px 0 20px;font-size: 18px;">
          开始创建课程后不能更改班级和学生，请确认选择无误。
        </div>
      </div>
    </i-layer>
  </div>
</template>

<script>
  import IMenubar from '@/components/menubar'
  import ICheckbox from '@/components/checkbox'
  import IMessagebox from '@/components/messagebox'
  import IPagination from '@/components/pagination'
  import ILayer from '@/components/layer'
  import { createData } from '@/mock/table'
  import { domMixins } from '@/mixins/dom'
  import _ from 'lodash'
  import src from '@/assets/img/ico.jpg'

  export default {
    name: 'Course',
    components: {
      IMenubar,
      ICheckbox,
      IMessagebox,
      IPagination,
      ILayer
    },
    mixins: [domMixins],
    computed: {
      style () {
        let color = '#f5f5f7'
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      }
    },
    methods: {
      rowClick (row, event, column) {
        if (column.property) {
          this.$router.push({
            path: '/course/detail'
          })
        }
      },
      del (scope) {
        this.show = true
      },
      change: _.debounce(function () {
        if (this.active === 1) {
          this.noresult = false
          this.showStep1 = true
          let $search = document.querySelector('#pane_search')
          this.showDone = true
          this.addClass($search, 'form__pane-search-open')
          let num = Math.ceil(Math.random() * 20)
          createData(num).then(data => {
            this.dataStep1 = data
          })
        } else if (this.active === 2) {
          let num = Math.ceil(Math.random() * 20)
          createData(num).then(data => {
            this.dataStep2 = data
          })
        }
      }, 1000),
      onDone () {
        if (this.active === 1) {
          this.showStep1 = false
          this.showStep2 = true
          this.active = 2
          let num = Math.ceil(Math.random() * 20)
          createData(num).then(data => {
            this.dataStep2 = data
          })
        } else if (this.active === 2) {
          this.showStep2 = false
          this.showStep3 = true
          this.active = 3
          this.showSearch = false
          this.doneText = '开始创建'
        } else {
          this.showStep1 = false
          this.showStep2 = false
          this.showStep3 = false
          this.active = 1
          this.showSearch = true
          this.doneText = '确认'
          this.visible = false
          let $search = document.querySelector('#pane_search')
          this.showDone = false
          this.removeClass($search, 'form__pane-search-open')
          this.$router.push({
            path: '/course/add'
          })
        }
      },
      onCancel () {
        this.visible = false
      },
      back () {
        this.showStep1 = true
        this.showStep2 = false
        this.showStep3 = false
        this.active = 1
        this.classroom = []
      },
      select (scope) {
        this.classroom.push(scope.row)
      },
      add (scope) {
        this.students.push(scope.row)
      }
    },
    data () {
      return {
        keyword: '',
        src: src,
        doneText: '确认',
        tableData: [],
        dataStep1: [],
        dataStep2: [],
        classroom: [],
        students: [],
        items: ['参数1', '参数2', '参数3', '参数4', '参数5', '参数6', '参数7', '参数8', '参数9'],
        checkedItem: ['参数1', '参数7'],
        showDone: false,
        active: 1,
        noresult: true,
        showStep1: false,
        showStep2: false,
        showStep3: false,
        showSearch: true,
        show: false, // 是否显示MessageBox
        visible: false // 是否显示Layer
      }
    },
    mounted () {
      createData(50).then(data => {
        this.tableData = data
      })
    }
  }
</script>

<style lang="scss" scoped>
  .messagebox {
    padding: 0 34px;
    &__body {
      font-size: 14px;
      color: rgba(54, 72, 97, 0.9);
      margin-top: 39px;
      span {
        display: block;
        text-align: left;
        margin-bottom: 10px;
      }
      .el-checkbox {
        color: #9e9ebc;
        margin-bottom: 5px;
      }
    }
    > a {
      display: block;
      float: left;
      width: 50%;
      color: #f84651;
      text-align: center;
      font-size: 14px;
      line-height: 54px;
      &:last-child {
        color: #4993fa;
      }
    }
  }
</style>
<style lang="scss">
  .messagebox__checkbox1 {
    .el-checkbox__label {
      font-size: 12px;
      padding-left: 5px;
    }
  }
  .course-layer {
    min-height: 710px;
    .i-layer__title {
      margin: 60px 0 17px;
    }
    .i-layer__footer {
      margin: 30px auto 45px;
    }
    &__tip {
      height: 28px;
      font-size: 20px;
      color: #9e9ebc;
      text-align: center;
    }
    &__steps {
      margin-bottom: 48px;
      .el-step__title {
        margin-left: -7%;
      }
      .el-step:last-child {
        .el-step__title {
          margin-left: -20%;
        }
      }
    }
    .form__pane-search {
      margin-top: 92px;
      &-open {
        margin-top: 0;
      }
    }
    &__noresult {
      display: block;
      margin-top: 20px;
      margin-bottom: 102px;
      font-size: 14px;
      color: #9e9ebc;
      text-align: center;
      line-height: 20px;
      > a {
        color: #4993fa;
      }
    }
    &__title {
      font-size: 14px;
      font-weight: 300;
      line-height: 30px;
      color: rgba(54, 72, 97, 0.9);
      float: left;
      margin-left: 5px;
    }
    &__body {
      &:before, &:after {
        display: table;
        content: '';
        clear: both;
      }
    }
    &__item {
      width: 316px;
      height: 158px;
      margin: 0 auto 25px;
      border-radius: 2px;
      padding-left: 32px;
      box-sizing: border-box;
      background-color: #ffffff;
      box-shadow: 0 1px 4px 0 rgba(14, 33, 58, 0.3);
      font-size: 18px;
      line-height: 18px;
      position: relative;
      &.course-layer__other {
        > p {
          padding-top: 30px;
        }
      }
      > p {
        color: rgba(54, 72, 97, 0.9);
        padding-top: 22px;
      }
      > span {
        display: block;
        color: #9e9ebc;
        margin-top: 12px;
      }
      > a {
        position: absolute;
        right: 20px;
        color: #4993fa;
        top: 50%;
        transform: translateY(-50%);
      }
      > img {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin-top: 14px;
      }
    }
  }
</style>
