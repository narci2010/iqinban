<!-- 全部学生 -->
<template>
  <div class="i-student-all">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        label=""
        width="50"
        :filters="[
          { text: '按课程等级', value: '1' },
          { text: '按班级', value: '2' },
          { text: '按校区', value: '3' },
          { text: '按教师', value: '4' }
        ]"
        :filter-method="filterTag"
        :filter-multiple="false"
        filter-placement="top-start">
        <template scope="scope">
          <div class="i-student-table-ico"></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        prop="level"
        label="课程等级"
        :formatter="formatter"
        sortable
        width="115"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="琴龄"
        sortable
        width="90"
      ></el-table-column>
      <el-table-column
        prop="classroom"
        label="班级"
      ></el-table-column>
      <el-table-column
        prop="number"
        label="主管教师"
      ></el-table-column>
      <el-table-column
        prop="tel"
        label="联系方式"
        width="130"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="校区"
        :formatter="formatter"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="入学时间"
        sortable
        width="115"
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
              <router-link to="/student/detail">查看</router-link>
              <a href="javascript:void(0)">添加到班级</a>
              <a href="javascript:void(0)">变更主管教师</a>
              <a href="javascript:void(0)">冻结账号</a>
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
  import all from '../../mock/student/all'

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
