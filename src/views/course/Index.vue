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
  </div>
</template>

<script>
  import IMenubar from '@/components/menubar'
  import ICheckbox from '@/components/checkbox'
  import IMessagebox from '@/components/messagebox'
  import IPagination from '@/components/pagination'
  import { createData } from '@/mock/table'

  export default {
    name: 'Student',
    components: {
      IMenubar,
      ICheckbox,
      IMessagebox,
      IPagination
    },
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
      }
    },
    data () {
      return {
        keyword: '',
        tableData: [],
        items: ['参数1', '参数2', '参数3', '参数4', '参数5', '参数6', '参数7', '参数8', '参数9'],
        checkedItem: ['参数1', '参数7'],
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
</style>
