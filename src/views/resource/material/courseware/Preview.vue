<!-- 预览课件 -->
<template>
  <div class="i-courseware">
    <div class="i-secondary-menu i-third-menu">
      <i-secondary title="某某某某某某课件" :show-search="false" style="border-top: 1px solid #c6cad1;">
        <div slot="sup" class="i-courseware-menu">
          共<em>5</em>个知识点
        </div>
        <div slot="left">
          <router-link to="/resource/detail">
            <el-button type="primary" size="mini" class="i-small-primary-button">返回教材</el-button>
          </router-link>
          <router-link :to="{name: 'RMatNew', params: { type: 'edit' }}">
            <el-button type="primary" size="mini" class="i-small-primary-button">编辑</el-button>
          </router-link>
        </div>
      </i-secondary>
    </div>
    <div class="i-material-pane i-student-plan">
      <div class="i-pane">
        <div class="i-pane-left">
          <div class="i-courseware-inner">
            <i-label title="课件名称" content="某某某某某某某课件"></i-label>
            <i-label style="margin-top: 50px" title="知识点"></i-label>
            <el-row :gutter="20" class="i-knowledge">
              <el-col :span="12" v-for="i in 4" :key="i">
                <div class="i-knowledge-item">
                  <h3>知识点1</h3>
                  <div class="i-knowledge-item-top">
                    <i class="iconfont icon-player"></i>
                    <p>
                      <span>测试-210.mov</span>
                      <span>04:22</span>
                    </p>
                  </div>
                  <div class="i-knowledge-item-mid">
                    <span>
                      <i class="iconfont icon-fill222"></i>
                      <em>单选题-基础乐理-3级</em>
                    </span>
                  </div>
                  <div class="i-knowledge-item-bot">
                    <el-tag class="i-tag" color="#20a0ff">标签一</el-tag>
                    <el-tag class="i-tag" color="#20a0ff">标签二</el-tag>
                    <el-tag class="i-tag" color="#20a0ff">标签三</el-tag>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin: 10px 0 20px">
              <el-col :span="12">
                <el-button type="primary" class="i-button i-confirm" style="width: 250px;" @click="showDialog">组合并预览</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="i-pane-right">
          <i-course-ware></i-course-ware>
        </div>
      </div>
    </div>
    <!-- 组合预览 -->
    <el-dialog
      title=""
      :before-close="beforeClose"
      :visible.sync="showPreviewDialog"
      top="10%"
      custom-class="i-dialog i-dialog__large">
      <span slot="title" class="i-material-dialog-title">
        某某某某某某某课件<span>共5个知识点</span><span>2017-03-10</span>
      </span>
      <div class="i-material-dialog-content">
        <div class="i-material-dialog-tag">
          <el-tag style="margin-right: 10px" v-for="i in 7" :key="i" class="i-tag" color="#20a0ff">标签一</el-tag>
        </div>
        <video id="videoElement" class="centeredVideo" controls autoplay width="100%" height="526">
          Your browser is too old which doesn't support HTML5 video.
        </video>
        <div class="i-video-sections">
          <div class="i-video-section" v-for="i in 5" :key="i">
            <h4>知识点{{ i }}</h4>
            <div class="i-video-section-pane">
              <a href="javascript:void(0)">
                <span>测试-210.mov</span>
                <span><em>00：00</em><i class="iconfont icon-triangle-right"></i></span>
              </a>
              <a href="javascript:void(0)">
                <span>单选题-基础乐理-3级</span>
                <span><em>03：32</em><i class="iconfont icon-triangle-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ISecondary from '../../../../components/secondary'
  import ILabel from '../../../../components/label'
  import ICourseWare from '../../../../components/courseware'

  import flvjs from 'flv.js/dist/flv.min'

  export default {
    components: {
      ISecondary,
      ILabel,
      ICourseWare
    },
    methods: {
      computedHeight () {
        let $ico = document.querySelector('#CourseWareIco')
        let width = $ico.clientWidth
        $ico.style.height = parseInt(width / 56 * 33) + 'px'
        let vm = this
        window.addEventListener('resize', function () {
          vm.computedHeight()
        })
      },
      loadPlayer () {
        this.unloadPlayer()
        let element = document.querySelector('#videoElement')
        let width = element.clientWidth
        element.style.height = width / 16 * 9 + 'px'
        this.player = flvjs.createPlayer({
          type: 'mp4',
          url: 'http://192.168.31.192:8000/video/t.mov'
        })
        this.player.attachMediaElement(element)
        this.player.load()
      },
      showDialog () {
        this.showPreviewDialog = true
        this.$nextTick(() => {
          this.loadPlayer()
        })
      },
      unloadPlayer () {
        if (typeof this.player !== 'undefined') {
          if (this.player !== null) {
            this.player.unload()
            this.player.detachMediaElement()
            this.player.destroy()
            this.player = null
          }
        }
      },
      beforeClose () {
        this.player.pause()
        this.showPreviewDialog = false
      }
    },
    mounted () {
      this.computedHeight()
    },
    data () {
      return {
        showPreviewDialog: false,
        player: null
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/v2/base";

  .i-courseware {
    .centeredVideo {
      margin-top: 20px;
    }
    .i-video-sections {
      margin: 20px 0 10px;
      .i-video-section {
        h4 {
          margin: 0;
          font-weight: normal;
          font-size: 14px;
          line-height: 36px;
        }
        .i-video-section-pane {
          .clearfix;
          > a {
            border: 1px solid #C9C9DC;
            border-radius: 2px;
            float: left;
            height: 42px;
            line-height: 42px;
            margin-right: 50px;
            position: relative;
            font-size: 14px;
            color: #2C2C2C;
            width: 300px;
            > span {
              float: left;
              padding-left: 36px;
              & + span {
                float: right;
                padding-left: 0;
                padding-right: 15px;
              }
              em {
                font-style: normal;
                float: left;
                margin-right: 5px;
              }
              i {
                color: #D8D8D8;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
  .i-courseware-menu {
    em {
      color: #0087FB;
      font-style: normal;
    }
  }
</style>
