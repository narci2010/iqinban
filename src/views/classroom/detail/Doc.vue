<!-- 文档 -->
<template>
  <div class="i-student-doc">
    <div class="i-student-doc-inner">
      <div class="i-student-doc-section">
        <el-dropdown trigger="click" menu-align="start">
          <span class="el-dropdown-link">
            <i class="i-icon-sort el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="i-student-doc-section">
        <el-checkbox-group v-model="checkList" class="i-student-doc-checkbox-group">
          <el-checkbox label="全部"></el-checkbox>
          <el-checkbox label="作业"></el-checkbox>
          <el-checkbox label="试卷"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="i-student-doc-inner">
      <el-table
        :data="tableData"
        :border="false"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="文档名">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="level"
          sortable
          width="150"
          label="课程等级">
        </el-table-column>
        <el-table-column
          prop="classroom"
          label="班级">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="教师">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="score"
          sortable
          label="分数">
        </el-table-column>
        <el-table-column
          prop="starttime"
          sortable
          width="150"
          label="提交时间">
        </el-table-column>
        <el-table-column
          prop="endtime"
          width="150"
          label="批改时间">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import doc from '../../../mock/classroom/doc'

  export default {
    data () {
      return {
        tableData: doc.tableData,
        checkList: []
      }
    }
  }
</script>
