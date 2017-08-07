<!-- 学生-默认页面 -->
<template>
  <div class="i-container" :style="style">
    <i-menubar title="全部学生" sup="共345人">
      <el-button slot="ctrl" size="small" class="i-button__ctrl i-button__primary" @click="go">新增学生</el-button>
      <div slot="pane">
        <div class="i-checkbox__clear">
          <a href="javascript:">清空</a>
        </div>
        <i-checkbox :items="items" :checked-item="checkedItem" label="课程等级："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="入学时间："></i-checkbox>
        <i-checkbox :items="items" :checked-item="checkedItem" label="培养目标："></i-checkbox>
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
            <a class="i-popover__item" href="javascript:">按班级</a>
            <a class="i-popover__item" href="javascript:">按校区</a>
            <a class="i-popover__item" href="javascript:">按教师</a>
          </div>
          <a href="javascript:" class="i-table__filter i-filter" slot="reference"></a>
        </el-popover>
        <el-table class="i-table" :data="tableData" stripe @row-click="rowClick">
          <el-table-column
            label=""
            prop="col0"
            width="80">
            <template scope="scope">
              <img :src="src" class="i-table__ico">
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            prop="col1"
          ></el-table-column>
          <el-table-column
            label="课程等级"
            prop="col2"
            sortable
          ></el-table-column>
          <el-table-column
            label="琴龄"
            prop="col3"
            sortable
          ></el-table-column>
          <el-table-column
            label="班级"
            prop="col4"
          ></el-table-column>
          <el-table-column
            label="主管教师"
            prop="col5"
          ></el-table-column>
          <el-table-column
            label="联系方式"
            prop="col6"
          ></el-table-column>
          <el-table-column
            label="入学时间"
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
                  <a class="i-popover__item" href="javascript:" @click="add(scope)">添加到班级</a>
                  <a class="i-popover__item" href="javascript:" @click="change(scope)">变更主管教师</a>
                  <a class="i-popover__item" href="javascript:" @click="freeze(scope)">冻结 / 解冻</a>
                  <a class="i-popover__item" href="javascript:" @click="del(scope)">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="i-table__more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 账户解冻 -->
    <i-messagebox width="331px" height="231px" :visible="showFreezed">
      <div class="messagebox">
        <div class="messagebox__title">账户冻结中</div>
        <div class="messagebox__body">
          <span>冻结开始时间：2017-3-10</span>
          <span>冻结结束时间：2017-5-20</span>
        </div>
        <span class="messagebox__tip">提示：请在与学生和教师协商完成后解冻</span>
        <el-button class="i-button__done" style="width: 120px;height: 36px;" @click="showFreezed = false">保存</el-button>
        <el-button class="i-button__cancel" style="width: 120px;height: 36px;margin-left: 17px;" @click="showFreezed = false">取消</el-button>
      </div>
    </i-messagebox>
    <!-- 账户冻结 -->
    <i-messagebox width="331px" height="271px" :visible="showFreeze">
      <div class="messagebox">
        <div class="messagebox__title">选择冻结时间</div>
        <div class="messagebox__body">
          <el-checkbox-group
            v-model="checkItem" :min="0" :max="1">
            <el-checkbox class="messagebox__checkbox" v-for="item in freezes" :label="item.label" :key="item.value" :value="item.value">{{ item.label }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <span class="messagebox__tip">提示：请在与学生和教师协商完成后确认</span>
        <el-button class="i-button__done" style="width: 120px;height: 36px;" @click="showFreeze = false">保存</el-button>
        <el-button class="i-button__cancel" style="width: 120px;height: 36px;margin-left: 17px;" @click="showFreeze = false">取消</el-button>
      </div>
    </i-messagebox>
  </div>
</template>

<script>
  import IMenubar from '../../components/menubar'
  import ICheckbox from '../../components/checkbox'
  import IMessagebox from '../../components/messagebox'
  import { mapGetters } from 'vuex'
  import { createData } from '../../mock/table'
  import src from '../../assets/img/ico.jpg'

  export default {
    name: 'Student',
    components: {
      IMenubar,
      ICheckbox,
      IMessagebox
    },
    computed: {
      style () {
        let color = '#f5f5f7'
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      },
      ...mapGetters([
        'freezes'
      ])
    },
    methods: {
      rowClick (row, event, column) {
        if (column.property) {
          this.$router.push({
            path: '/student/detail'
          })
        }
      },
      go () {
        this.$router.push({
          path: '/student/add'
        })
      },
      add (scope) {
        console.log(scope)
      },
      change (scope) {
        console.log(scope)
      },
      freeze (scope) {
        this.count++
        if (this.count % 2 === 0) {
          this.showFreezed = true
        } else {
          this.showFreeze = true
        }
      },
      del (scope) {
        console.log(scope)
      }
    },
    data () {
      return {
        keyword: '',
        count: 1,
        tableData: [],
        items: ['参数1', '参数2', '参数3', '参数4', '参数5', '参数6', '参数7', '参数8', '参数9'],
        checkedItem: ['参数1', '参数7'],
        src: src,
        showFreeze: false, // 选择冻结时间
        showFreezed: false, // 账号解冻
        checkItem: ['一个月']
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
  @import "../../assets/scss/base";

  .messagebox {
    padding: 0 34px;
    &__title {
     font-size: 16px;
      font-weight: 500;
      color: #0d2039;
      margin: 21px 25px;
      text-align: center;
    }
    &__body {
      font-size: 12px;
      color: rgba(54, 72, 97, 0.9);
      padding: 15px 0;
      @extend .clearfix;
      span {
        display: block;
        text-align: center;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-checkbox {
        float: left;
        color: rgba(54, 72, 97, 0.9);
        margin-right: 35px;
        margin-bottom: 5px;
        &+.el-checkbox {
          margin-left: 0;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
    &__tip {
      font-size: 12px;
      color: #f84651;
      text-align: center;
      display: block;
      margin-bottom: 10px;
    }
  }
</style>
<style lang="scss">
  .messagebox__checkbox {
    .el-checkbox__label {
      font-size: 12px;
      padding-left: 10px;
    }
  }
</style>
