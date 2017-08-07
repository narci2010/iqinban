<!-- 文档 -->
<template>
  <div class="i-content is-menubar is-tabbar">
    <div class="i-doc__header">
      <i class="i-filter"></i>
      <span style="float: left;margin-top: -3px;margin-left: 25px">
        <i-checkbox style="width: auto;" :items="items"></i-checkbox>
      </span>
      <span style="float: left;height: 23px;background: #cdcdde;width:1px;margin-top: 13px;margin-left: 40px;"></span>
      <span style="float: left;margin-top: -3px;margin-left: 25px">
        <i-checkbox style="width: auto;" :items="items1"></i-checkbox>
      </span>
    </div>
    <div class="i-table__panel" style="margin-top: 10px">
      <el-table class="i-table" :data="tableData" stripe>
        <el-table-column
          label=""
          prop=""
          width="20">
        </el-table-column>
        <el-table-column
          label="文档名"
          prop="col1"
        ></el-table-column>
        <el-table-column
          label="类型"
          prop="col3"
        ></el-table-column>
        <el-table-column
          label="课程等级"
          prop="col2"
          sortable
        ></el-table-column>
        <el-table-column
          label="学生"
          prop="col4"
        ></el-table-column>
        <el-table-column
          label="状态"
          prop="col5"
        ></el-table-column>
        <el-table-column
          label="分数"
          prop="col5"
          sortable
        ></el-table-column>
        <el-table-column
          label="提交时间"
          prop="col7"
          sortable
        ></el-table-column>
        <el-table-column
          label="批改时间"
          prop="col7"
        ></el-table-column>
        <el-table-column label="">
          <template scope="scope">
            <el-popover
              placement="bottom"
              title=""
              width="66"
              :offset="-15"
              trigger="click"
              popper-class="i-popover__small">
              <div class="i-popover__content">
                <a class="i-popover__item" href="javascript:">导出</a>
                <a class="i-popover__item" href="javascript:">删除</a>
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
  import ICheckbox from '@/components/checkbox'
  import { createData } from '@/mock/table'

  export default {
    name: 'ClassroomDetailDoc',
    components: {
      ICheckbox
    },
    data () {
      return {
        items: ['试卷', '作业'],
        items1: ['已批改', '未批改'],
        tableData: []
      }
    },
    mounted () {
      createData(30).then(data => {
        this.tableData = data
      })
    }
  }
</script>

<style lang="scss" scoped>
  .i-doc {
    &__header {
      height: 50px;
      border-radius: 2px;
      background: #fff;
      i {
        float: left;
        padding: 18px 13px;
        margin-left: 17px;
      }
    }
  }
</style>
