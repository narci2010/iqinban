<!-- 新增学生 -->
<template>
  <div class="i-container" :style="style">
    <i-menubar title="新增学生" :show-search="false" :show-filter="false">
      <el-button style="width:141px;" slot="ctrl" size="small" @click="visible = true"
                 class="i-button__ctrl i-button__primary">查看学生申请(12)</el-button>
    </i-menubar>
    <div class="i-content is-menubar">
      <div class="i-search-input__large">
        <i class="el-icon-search"></i>
        <input type="text" title="" placeholder="" v-model="keyword" @input="change">
      </div>
      <div class="i-table__panel" style="margin-top: 20px" v-if="tableData.length !== 0">
        <el-table class="i-table" :data="tableData" stripe>
          <el-table-column
            label=""
            prop="col0"
            width="70">
            <template scope="scope">
              <img :src="src" class="i-table__ico">
            </template>
          </el-table-column>
          <el-table-column
            label="用户名"
            prop="col1"
          ></el-table-column>
          <el-table-column
            label="真实姓名"
            prop="col2"
          ></el-table-column>
          <el-table-column
            label="ID"
            prop="col3"
          ></el-table-column>
          <el-table-column
            label="性别"
            prop="col4"
          ></el-table-column>
          <el-table-column
            label="城市"
            prop="col5"
          ></el-table-column>
          <el-table-column
            label="琴龄"
            prop="col6"
          ></el-table-column>
          <el-table-column label="">
            <template scope="scope">
              <el-button style="width:100px;" size="mini"
                         class="i-button__ctrl i-button__ctrl-mini i-button__primary">发送邀请</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <i-layer width="1057px" height="562px" offset-top="10%" title="学生申请" done-text="完成" :show-cancel="false"
             @on-done="onDone" @on-show="onShow" :visible="visible">
      <el-table class="i-table" style="margin: 36px 0 21px;" :data="reqData" height="370" stripe>
        <el-table-column
          label=""
          prop="col0"
          width="70">
          <template scope="scope">
            <img :src="src" class="i-table__ico">
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="col1"
        ></el-table-column>
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
        ></el-table-column>
        <el-table-column
          label="城市"
          prop="col5"
        ></el-table-column>
        <el-table-column
          label="教育经历"
          width="120"
          prop="col6"
        ></el-table-column>
        <el-table-column label="" width="240">
          <template scope="scope">
            <el-button style="width:80px;" size="mini"
                       class="i-button__ctrl i-button__ctrl-mini i-button__danger" @click="refuse($event, scope)">拒绝</el-button>
            <el-button style="width:80px;margin-left: 30px" size="mini"
                       class="i-button__ctrl i-button__ctrl-mini i-button__primary" @click="accept($event, scope)">接受</el-button>
          </template>
        </el-table-column>
      </el-table>
    </i-layer>
    <i-messagebox width="379px" height="150px" :visible="show">
      <div class="messagebox">
        <div class="messagebox__content">已接收某某某的申请！是否为学生绑定主管教师</div>
        <div class="messagebox__footer">
          <a href="javascript:" @click="onGo">立即前往</a>
          <a href="javascript:" @click="show = false">暂不绑定</a>
        </div>
      </div>
    </i-messagebox>
  </div>
</template>

<script>
  import IMenubar from '../../components/menubar'
  import ILayer from '../../components/layer'
  import IMessagebox from '../../components/messagebox'
  import _ from 'lodash'
  import { domMixins } from '../../mixins/dom'
  import { createData } from '../../mock/table'
  import src from '../../assets/img/ico.jpg'

  export default {
    name: 'StudentAdd',
    components: {
      IMenubar,
      ILayer,
      IMessagebox
    },
    mixins: [domMixins],
    methods: {
      change: _.debounce(function () {
        if (this.keyword.trim().length === 0) {
          this.tableData = []
        } else {
          let num = Math.ceil(Math.random() * 15)
          createData(num).then(data => {
            this.tableData = data
          })
        }
      }, 1000),
      onShow () {
        let num = Math.ceil(Math.random() * 10)
        createData(num).then(data => {
          this.reqData = data
        })
      },
      onDone () {
        this.visible = false
      },
      onGo () {
        this.show = false
      },
      refuse (e, scope) {
        e.target.textContent = '已拒绝'
        let node = e.target
        if (e.target.tagName === 'SPAN') {
          node = e.target.parentNode
        }
        node.nextElementSibling.setAttribute('disabled', true)
        node.setAttribute('disabled', true)
        console.log(scope)
      },
      accept (e, scope) {
        e.target.textContent = '已接收'
        let node = e.target
        if (e.target.tagName === 'SPAN') {
          node = e.target.parentNode
        }
        node.setAttribute('disabled', true)
        node.previousElementSibling.setAttribute('disabled', true)
        this.show = true
        console.log(scope)
      }
    },
    computed: {
      style () {
        let color = '#f5f5f7'
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      }
    },
    data () {
      return {
        keyword: '',
        src: src,
        visible: false, // 是否显示教师申请
        show: false, // 是否绑定教师MessageBox
        tableData: [],
        reqData: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-search-input__large {
    width: 100%;
    height: 52px;
    border: 1px solid #cdcdde;
    border-radius: 4px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 40px;
    > i {
      font-size: 26px;
      color: #9e9ebc;
      padding: 0 16px;
      line-height: 50px;
      position: relative;
      z-index: 10;
    }
    > input {
      position: absolute;
      left: 0;
      height: 50px;
      padding: 0;
      width: 100%;
      border: none;
      background: none;
      outline: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      text-indent: 50px;
      color: #9e9ebc;
      font-size: 22px;
    }
  }
  .messagebox {
    &__content {
      margin-top: 38px;
      font-size: 14px;
      color: rgba(54, 72, 97, 0.9);
      text-align: center;
    }
    &__footer {
      margin-top: 40px;
      text-align: center;
      > a {
        color: #4993fa;
        font-size: 14px;
        margin-right: 86px;
        display: inline-block;
        &:last-child {
          margin-right: 0;
          color: rgba(54, 72, 97, 0.9);
        }
      }
    }
  }
</style>
