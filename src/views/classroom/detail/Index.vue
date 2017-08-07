<!-- 学生详细-默认 -->
<template>
  <div class="i-container" :style="style">
    <i-tabbar ref="tabbar">
      <i-tabbar-item link="/classroom/detail" name="教学计划"></i-tabbar-item>
      <i-tabbar-item link="/classroom/detail/info" name="基本信息统计"></i-tabbar-item>
      <i-tabbar-item link="/classroom/detail/record" name="教学记录"></i-tabbar-item>
      <i-tabbar-item link="/classroom/detail/doc" name="文档"></i-tabbar-item>
    </i-tabbar>
    <i-menubar title="某某某班" sup="班级类型" :has-tabbar="hasTabbar" :show-filter="false">
      <span slot="ctrl">
        <el-button size="small" class="i-button__ctrl i-button__primary" @click="visible = true">新增学生</el-button>
        <el-button size="small" class="i-button__ctrl i-button__danger">删除</el-button>
      </span>
    </i-menubar>
    <router-view></router-view>
    <i-layer width="1095px" :height="height" offset-top="10%" :title="title" :cls="cls" :show-done="showDone"
             @on-done="onDone" @on-cancel="onCancel" @on-hide="onHide" :visible="visible">
      <div class="i-search-input__large form__pane-search" id="pane_search">
        <i class="el-icon-search"></i>
        <input type="text" title="" placeholder="教师名 / 教师ID \ 学生名 / 学生ID" v-model="keyword" @input="change">
      </div>
      <div class="layer-pane" v-if="show">
        <div class="layer-pane__title">搜索结果</div>
        <div class="layer-pane__body">
          <el-table class="i-table" :data="tableData" height="456" stripe style="margin-top:10px;">
            <el-table-column
              label=""
              prop="col0"
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column
              label="姓名"
              prop="col1"
            ></el-table-column>
            <el-table-column
              label="课程等级"
              prop="col2"
            ></el-table-column>
            <el-table-column
              label="琴龄"
              prop="col3"
            ></el-table-column>
            <el-table-column
              label="主管教师"
              prop="col4"
            ></el-table-column>
            <el-table-column
              label="性别"
              prop="col5"
            ></el-table-column>
            <el-table-column
              label="联系方式"
              width="120"
              prop="col6"
            ></el-table-column>
            <el-table-column
              label="入学时间"
              prop="col7"
            ></el-table-column>
            <el-table-column label="" width="180">
              <template scope="scope">
                <el-button style="width:60px;float: right" size="mini"
                           class="i-button__ctrl i-button__ctrl-mini i-button__primary-text">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </i-layer>
  </div>
</template>

<script>
  import ITabbar from '@/components/tabbar/tabbar'
  import ITabbarItem from '@/components/tabbar/tabbar-item'
  import IMenubar from '@/components/menubar'
  import ISection from '@/components/section'
  import ILayer from '@/components/layer'
  import { createData } from '@/mock/table'
  import { mapGetters } from 'vuex'
  import { scrollMixins } from '@/mixins/scroll'
  import { domMixins } from '@/mixins/dom'
  import src from '@/assets/img/ico.jpg'
  import _ from 'lodash'

  export default {
    name: 'ClassroomDetail',
    components: {
      ITabbar,
      ITabbarItem,
      IMenubar,
      ISection,
      ILayer
    },
    mixins: [scrollMixins, domMixins],
    computed: {
      style () {
        let color = '#f5f5f7'
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      },
      ...mapGetters([
        'card'
      ])
    },
    methods: {
      showPopover () {
        this.text = '隐藏名片'
      },
      hidePopover () {
        this.text = '显示名片'
      },
      change: _.debounce(function () {
        this.openLayer()
      }, 1000),
      onHide () {
        this.cls = 'classroom-layer'
        this.showDone = false
        this.height = '560px'
        this.show = false
        this.showLink = true
        this.title = '新增学生\\新增教师'
        let $search = document.querySelector('#pane_search')
        this.removeClass($search, 'form__pane-search-open')
      },
      openLayer () {
        this.showDone = true
        this.height = '800px'
        this.show = true
        this.showLink = false
        this.cls = 'classroom-layer__opened'
        this.title = '新增学生'
        let $search = document.querySelector('#pane_search')
        this.addClass($search, 'form__pane-search-open')
        let num = Math.ceil(Math.random() * 20)
        createData(num).then(data => {
          this.tableData = data
        })
      },
      onDone () {
        this.visible = false
      },
      onCancel () {
        this.visible = false
      }
    },
    data () {
      return {
        text: '显示名片',
        src: src,
        keyword: '',
        show: false,
        visible: false,
        showDone: false,
        height: '560px',
        cls: 'classroom-layer',
        title: '新增学生\\新增教师',
        tableData: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-carte {
    padding: 30px 40px;
    text-align: center;
    > img {
      display: inline-block;
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
    > h1 {
      font-size: 26px;
      line-height: 26px;
      margin-top: 20px;
      color: #0d2039;
    }
    > p {
      font-size: 20px;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 30px;
      color: rgba(54, 72, 97, 0.9);
    }
  }
  .layer-pane {
    width: 1020px;
    margin: 0 auto;
    &__title {
      float: left;
      font-size: 14px;
      line-height: 30px;
      font-weight: 300;
      color: rgba(54, 72, 97, 0.9);
      margin-left: 8px;
    }
    &__body {
      &:before, &:after {
        display: table;
        content: '';
        clear: both;
      }
    }
  }
</style>
