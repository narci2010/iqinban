<!-- 新增学生 -->
<template>
  <div class="i-container" :style="style">
    <i-menubar title="创建班级" :show-search="false" :show-filter="false"></i-menubar>
    <div class="i-content is-menubar">
      <div class="form__pane">
        <el-form class="i-form" style="width:550px;" label-position="top" label-width="" :model="information">
          <el-form-item label="班级名称" required>
            <el-input style="width:550px;" v-model="information.name"></el-input>
          </el-form-item>
          <el-form-item label="班级ID" required>
            <el-input style="width:550px;" v-model="information.name"></el-input>
          </el-form-item>
          <el-form-item label="班级类型" required>
            <el-select style="width: 550px" v-model="option" placeholder="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程等级" required>
            <el-select style="width: 550px" v-model="option" placeholder="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任课教师" required>
            <el-input style="width:550px;" v-model="information.name"></el-input>
          </el-form-item>
          <el-form-item label="绑定教材">
            <el-input style="width:550px;margin-bottom: 15px;" v-model="information.name"></el-input>
            <el-button style="width: 550px;height:40px;" @click="visible = true"><i class="iconfont icon-plus"></i>新增教材</el-button>
          </el-form-item>
          <el-form-item label="学生">
            <div class="i-form__form">
              <div class="i-form__form-item" v-for="i in 6" :key="i">
                <img :src="src" alt="ico">
                <span>某某某</span>
              </div>
              <div class="i-form__form-add">
                <i class="iconfont icon-plus"></i>
                <span>新增学生</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" :row="2" style="width:550px;" v-model="information.name"></el-input>
          </el-form-item>
          <div class="i-form__btns" style="margin-top: 55px">
            <el-button class="i-button__done" style="width: 250px;height: 40px;">保存</el-button>
            <el-button class="i-button__cancel" style="width: 250px;height: 40px;">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
    <i-layer width="1095px" :height="height" offset-top="10%" title="绑定教材" :cls="cls" :show-done="showDone"
             @on-done="onDone" @on-cancel="onCancel" @on-hide="onHide" :visible="visible">
      <div class="i-search-input__large form__pane-search" id="pane_search">
        <i class="el-icon-search"></i>
        <input type="text" title="" placeholder="" v-model="keyword" @input="change">
      </div>
      <a href="javascript:" v-show="showLink" class="form__pane-link" @click="openLayer">显示“{{ keyword }}”的全部教材</a>
      <div class="layer-pane" v-if="show">
        <div class="layer-pane__title">搜索结果</div>
        <div class="layer-pane__body">
          <div class="layer-pane__left">
            <div class="layer-pane__item" v-for="i in 6" :key="i" :class="{ 'is-active': i === 1 }">
              <div class="i-list__item">
                <img alt="banner" :src="banner">
                <h1>某某某某某某某某教材</h1>
                <p>某某等级</p>
                <p>某某类型</p>
                <div>10个课件</div>
                <span>最后修改：2017-03-10</span>
              </div>
            </div>
          </div>
          <div class="layer-pane__right">
            <div class="layer-pane__preview-title">预览</div>
            <div class="layer-pane__preview-item" v-for="i in 6" :key="i">
              <el-popover
                placement="bottom"
                title=""
                width="86"
                :offset="-20"
                trigger="click"
                popper-class="i-popover">
                <div class="i-popover__content">
                  <a class="i-popover__item" href="javascript:">删除</a>
                </div>
                <a href="javascript:" slot="reference" class="layer-pane__preview-more"><i class="iconfont icon-morecopy_px"></i></a>
              </el-popover>
              <p>某某某某某某某某课件</p>
              <span>最后修改：2017-03-16</span>
              <img alt="ico" :src="banner">
              <em>预览课件</em>
              <div>共3个知识点 5首练习曲</div>
            </div>
          </div>
        </div>
      </div>
    </i-layer>
  </div>
</template>

<script>
  import IMenubar from '@/components/menubar'
  import ILayer from '@/components/layer'
  import src from '@/assets/img/ico.jpg'
  import _ from 'lodash'
  import { domMixins } from '@/mixins/dom'
  import banner from '@/assets/img/banner.png'

  export default {
    name: 'ClassroomAdd',
    components: {
      IMenubar,
      ILayer
    },
    mixins: [domMixins],
    computed: {
      style () {
        let color = '#f5f5f7'
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      }
    },
    methods: {
      change: _.debounce(function () {
        if ([...this.keyword.trim()].length !== 0) {
          this.showLink = true
        } else {
          this.showLink = false
        }
      }, 1000),
      onCancel () {
        this.visible = false
      },
      onDone () {
        this.visible = false
      },
      onHide () {
        let $search = document.querySelector('#pane_search')
        this.cls = 'classroom-layer'
        this.showDone = false
        this.height = '560px'
        this.show = false
        this.showLink = true
        this.removeClass($search, 'form__pane-search-open')
      },
      openLayer () {
        let $search = document.querySelector('#pane_search')
        this.showDone = true
        this.height = '930px'
        this.show = true
        this.showLink = false
        this.addClass($search, 'form__pane-search-open')
        this.cls = 'classroom-layer__open'
      }
    },
    data () {
      return {
        information: {
          name: ''
        },
        src: src,
        banner: banner,
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          }
        ],
        option: '',
        keyword: '',
        cls: 'classroom-layer',
        height: '560px',
        showDone: false,
        showLink: false,
        show: false, // 是否显示搜索内容
        visible: false // 是否显示绑定教材Layer
      }
    }
  }
</script>

<style lang="scss">
  .form__pane {
    .i-form {
      .el-textarea__inner {
        height: 145px;
        border-radius: 2px;
      }
      &__form {
        border-radius: 2px;
        border: solid 1px #cdcddf;
        padding-bottom: 26px;
        &:before, &:after {
          content: '';
          clear: both;
          display: table;
        }
        &-item, &-add {
          float: left;
          position: relative;
          width: 50px;
          margin: 26px 0 0 30px;
          > img , > i {
            width: 50px;
            height: 50px;
            display: block;
            border-radius: 100%;
            border: 1px solid #cdcddf;
            box-sizing: border-box;
          }
          > i {
            font-size: 28px;
            text-align: center;
            line-height: 50px;
            color: #cdcddf;
          }
          > span {
            text-align: center;
            display: block;
            font-size: 12px;
            line-height: 14px;
            margin-top: 10px;
            color: rgba(54, 72, 97, 0.9);
          }
        }
      }
    }
    &-search {
      margin:0 auto;
      width:696px;
      transition: all 0.65s ease-in-out;
      &-open {
        margin-right: 6px;
        width: 240px;
        height: 32px;
        float: right;
        > i {
          font-size: 16px;
          line-height: 30px;
          padding: 0 8px;
        }
        > input {
          height: 30px;
          line-height: 30px;
          text-indent: 32px;
          font-size: 16px;
        }
      }
    }
    &-link {
      font-size: 18px;
      font-weight: 300;
      color: #4993fa;
      margin: 10px 0 0 196px;
      display: block;
    }
  }
  .classroom-layer {
    .i-layer__title {
      margin-top: 110px;
      margin-bottom: 90px;
    }
    .i-layer__footer {
      margin-bottom: 81px;
      margin-top: 121px;
    }
    &__open {
      .i-layer__title {
        margin-top: 40px;
        margin-bottom: 37px;
      }
    }
  }
  .layer-pane {
    height: 730px;
    margin-left: 48px;
    position: relative;
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
      height: 690px;
      width: 100%;
      overflow: hidden;
      position: relative;
    }
    &__left {
      position: absolute;
      left: 0;
      top: 10px;
      bottom: 0;
      overflow-y: auto;
      overflow-x: hidden;
      width: 712px;
    }
    &__right {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      overflow-y: auto;
      overflow-x: hidden;
      width: 266px;
    }
    &__item {
      float: left;
      position: relative;
      width: 332px;
      height: 354px;
      background: #fff;
      margin-right: 30px;
      margin-bottom: 30px;
      z-index: 0;
      &.is-active {
        &:after {
          z-index: 11;
          position: absolute;
          content: '\e641';
          font-family: 'iconfont';
          bottom: 11px;
          right: 11px;
          font-size: 21px;
          color: #4993fa;
        }
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
    &__preview {
      &-title {
        font-size: 14px;
        font-weight: 300;
        color: rgba(54, 72, 97, 0.9);
        line-height: 20px;
        margin-left: 5px;
        margin-top: 15px;
      }
      &-item {
        background: #fff;
        margin-top: 15px;
        position: relative;
        padding: 7px 7px 11px 6px;
        > img {
          display: block;
          width: 100%;
        }
        > p {
          font-size: 14px;
          font-weight: 500;
          color: #0d2039;
          line-height: 20px;
        }
        > span {
          font-size: 14px;
          color: rgba(54, 72, 97, 0.9);
          display: block;
          line-height: 20px;
          margin: 5px 0;
        }
        > div {
          height: 25px;
          opacity: 0.72;
          background-color: #4a4a4a;
          position: absolute;
          bottom: 11px;
          left: 6px;
          right: 7px;
          text-align: center;
          font-size: 14px;
          color: #ffffff;
          line-height: 25px;
        }
        > em {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          text-align: center;
          margin: 0 auto;
          font-style: normal;
          font-size: 16px;
          color: #ffffff;
          line-height: 22px;
        }
      }
      &-more {
        position: absolute;
        top: 0;
        right: 0;
        color: rgba(54, 72, 97, 0.9);
        padding: 10px 5px;
      }
    }
  }
</style>
