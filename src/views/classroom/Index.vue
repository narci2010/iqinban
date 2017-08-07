<!-- 班级-默认主页 -->
<template>
  <div class="i-container" :style="style">
    <i-menubar title="全部班级" sup="共345个" size="large">
      <el-button slot="ctrl" size="small" class="i-button__ctrl i-button__primary" @click="go">创建班级</el-button>
      <div slot="pane">
        <div class="i-checkbox__clear">
          <a href="javascript:">清空</a>
        </div>
        <i-checkbox :items="items" :checked-item="checkedItem" label="课程等级："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="创建时间："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="班级规模："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="班级类型："></i-checkbox>
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
            <a class="i-popover__item" href="javascript:">按班级类型</a>
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
            sortable
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
            width="120"
          ></el-table-column>
          <el-table-column label="">
            <template scope="scope">
              <el-popover
                placement="bottom"
                title=""
                width="86"
                :offset="-20"
                trigger="click"
                popper-class="i-popover">
                <div class="i-popover__content">
                  <a class="i-popover__item" href="javascript:">新增学生</a>
                  <a class="i-popover__item" href="javascript:">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="i-table__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import IMenubar from '../../components/menubar'
  import ICheckbox from '../../components/checkbox'
  import { createData } from '../../mock/table'
  import src from '../../assets/img/ico.jpg'

  export default {
    name: 'Classroom',
    components: {
      IMenubar,
      ICheckbox
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
            path: '/classroom/detail'
          })
        }
      },
      go () {
        this.$router.push({
          path: '/classroom/add'
        })
      }
    },
    data () {
      return {
        keyword: '',
        tableData: [],
        items: ['参数1', '参数2', '参数3', '参数4', '参数5', '参数6', '参数7', '参数8', '参数9'],
        checkedItem: ['参数1', '参数7'],
        src: src
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
</style>

