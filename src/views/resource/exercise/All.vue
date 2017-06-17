<!-- 全部习题 -->
<template>
  <div class="i-exercise-pane">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        label=""
        width="70"
        :filters="[
          { text: '按课程等级', value: '1' },
          { text: '按班级', value: '2' },
          { text: '按校区', value: '3' },
          { text: '按教师', value: '4' }
        ]"
        :filter-method="filterTag"
        :filter-multiple="false"
        filter-placement="bottom-start">
      </el-table-column>
      <el-table-column
        prop="type"
        label="习题类型"
        sortable
      ></el-table-column>
      <el-table-column
        prop="summary"
        label="题干"
        width="320"
      ></el-table-column>
      <el-table-column
        prop="point"
        label="考察要点"
        sortable
      ></el-table-column>
      <el-table-column
        prop="level"
        label="习题等级"
        sortable
        width="115"
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
              <router-link to="/student/detail">编辑</router-link>
              <a href="javascript:void(0)">删除</a>
            </div>
            <div class="el-icon-more i-student-popover" slot="reference"></div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import all from '../../../mock/resource/all'

  export default {
    methods: {
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
      this.getData()
    }
  }
</script>

<style lang="less">
  .i-exercise-pane {
    background: #fff;
    padding: 5px;
    border-radius: 2px;
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
  }
</style>
