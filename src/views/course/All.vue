<!-- 全部课程 -->
<template>
  <div class="i-course-all">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        label=""
        width="70"
        :filters="[
          { text: '按课程等级', value: '1' },
          { text: '按课程类型', value: '2' },
          { text: '按校区', value: '3' },
          { text: '按教师', value: '4' }
        ]"
        :filter-method="filterTag"
        :filter-multiple="false"
        filter-placement="top-start">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="课程类型"
        :formatter="formatter"
      ></el-table-column>
      <el-table-column
        prop="level"
        label="课程等级"
        :formatter="formatter"
        sortable
      ></el-table-column>
      <el-table-column
        prop="classroom"
        label="班级"
      ></el-table-column>
      <el-table-column
        prop="number"
        label="学生人数"
        sortable
      ></el-table-column>
      <el-table-column
        prop="address"
        label="校区"
        :formatter="formatter"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        sortable
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
              <router-link to="/course/detail">调整课程安排</router-link>
              <a href="javascript:void(0)">删除</a>
            </div>
            <div class="el-icon-more i-course-popover" slot="reference"></div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import all from '../../mock/course/all'

  export default {
    methods: {
      formatter (row, column) {
        if (column.property === 'type') {
          return '类型' + row.type
        } else if (column.property === 'level') {
          return '等级' + row.level
        } else {
          return '校区' + row.address
        }
      },
      filterTag (value, row) {
        return row.tag === value
      },
      getData () {
        this.tableData = all.getData()
      }
    },
    data () {
      return {
        tableData: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getData()
      })
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-course-all {
    margin: 20px auto;
    background: #fff;
    padding: 6px;
    border-radius: 4px;
    max-width: @--main-width;
    .el-table__header-wrapper {
      .el-table__column-filter-trigger {
        margin-top: 2px;
      }
      .el-icon-arrow-down {
        background-size: 23px 15px;
        background-repeat: no-repeat;
        display: inline-block;
        width: 23px;
        height: 15px;
      }
      .el-icon-arrow-down:before {
        content: '';
      }
    }
    .el-table {
      background-color: transparent;
      border: none;
    }
    .el-table:after, .el-table:before {
      background-color: transparent;
    }
    .el-table td, .el-table th.is-leaf {
      border-bottom: none;
    }
  }
  .i-course-popover {
    transform: rotate(90deg);
    float: right;
    cursor: pointer;
    padding: 5px;
  }
</style>
