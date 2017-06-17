<!-- 教材详细，教材编辑 -->
<template>
  <div>
    <div class="i-secondary-menu i-third-menu">
      <i-secondary style="border-top: 1px solid #c6cad1" title="约翰汤普森钢琴基础教程" :show-search="false"></i-secondary>
    </div>
    <div class="i-material-pane i-student-plan">
      <i-title title="基本信息" :height="20" padding="0"></i-title>
      <div class="outer-box">
        <transition name="slide">
          <i-card v-if="show" ref="editCard">
            <el-form slot="content" :model="material" label-width="100px" class="i-material-form">
              <el-form-item label="教材名称" prop="name">
                {{ material.name }}
              </el-form-item>
              <el-form-item label="教材等级" prop="level">
                {{ material.level }}
              </el-form-item>
              <el-form-item label="教材类型" prop="type">
                {{ material.type }}
              </el-form-item>
              <el-form-item label="教材简介" prop="summary">
                {{ material.summary }}
              </el-form-item>
              <el-form-item label="创建时间" prop="date">
                {{ material.date }}
              </el-form-item>
            </el-form>
            <el-button slot="button" type="text" @click="edit()">编辑</el-button>
          </i-card>
        </transition>
        <transition name="slide">
          <i-card v-if="!show" ref="saveCard" padding="33px 30px 20px">
            <el-form slot="content" :model="material" ref="materialForm" label-width="100px" style="width: 400px" class="i-material-form-1">
              <el-form-item label="教材名称" prop="name" style="margin-bottom: 40px">
                <el-input v-model="material.name" style="width: 250px"></el-input>
              </el-form-item>
              <el-form-item label="教材等级" prop="level">
                <el-select v-model="material.level" placeholder="" style="width: 300px">
                  <el-option label="英皇1级" value="1"></el-option>
                  <el-option label="英皇2级" value="2"></el-option>
                  <el-option label="英皇3级" value="3"></el-option>
                </el-select>
                <router-link to="">自定义教材等级</router-link>
              </el-form-item>
              <el-form-item label="教材类型" prop="type">
                <el-select v-model="material.type" placeholder="" style="width: 300px">
                  <el-option label="类型1" value="1"></el-option>
                  <el-option label="类型2" value="2"></el-option>
                  <el-option label="类型3" value="3"></el-option>
                </el-select>
                <router-link to="">自定义教材类型</router-link>
              </el-form-item>
              <el-form-item label="教材简介" prop="summary" style="margin-bottom: 0">
                <el-input :maxlength="140" type="textarea" :rows="8" v-model="material.summary"></el-input>
                <span>字数限制在140个字符内</span>
              </el-form-item>
            </el-form>
            <el-button slot="button" type="text" @click="save()" style="color:red">保存</el-button>
            <div slot="left" class="i-card-slot-left">
              <span>图片上传大小说明：</span>
              <em>建议尺寸 560*330，限制大小在5M以内</em>
              <span>图片上传格式说明：</span>
              <em>仅限jpg、bmp、png格式</em>
            </div>
          </i-card>
        </transition>
      </div>
      <i-title title="课件" padding="0">
        <div slot="content">
          <el-button class="i-button i-small-primary-button" type="primary" size="mini" @click="showImportCourseWareDialog=true">引入课件</el-button>
          <router-link :to="{name: 'RMatNew', params: { type: 'new' }}">
            <el-button class="i-button i-small-primary-button" type="primary" size="mini">创建课件</el-button>
          </router-link>
        </div>
        <div slot="label">共<span style="color:#0061EB">{{ courseware.length }}</span>个</div>
      </i-title>
      <!-- 课件 -->
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in courseware" :key="index">
          <div class="i-material-courseware">
            <div class="i-material-inner">
              <el-popover
                placement="bottom"
                popper-class="i-popover"
                width="60"
                :offset="-15"
                trigger="click">
                <div class="i-t-d-popover">
                  <router-link :to="{name: 'RMatNew', params: { type: 'edit' }}" style="text-align: center">编辑</router-link>
                  <a href="javascript:void(0);" style="text-align: center">删除</a>
                </div>
                <div class="i-t-d-items-more" slot="reference">
                  <a href="javascript:void(0);" class="el-icon-more"></a>
                </div>
              </el-popover>
              <h4>{{ item.name }}</h4>
              <p>创建时间：{{ item.date }}</p>
              <router-link to="/resource/preview">
                <div class="i-material-courseware-ico" :style="style">
                  <i class="iconfont icon-picture"></i>
                  <span>预览课件</span>
                </div>
              </router-link>
              <div class="i-material-courseware-footer">
                <span>{{ item.level }}</span>
                <span>{{ item.total }}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <i-title title="试卷" padding="0">
        <div slot="content">
          <el-button class="i-button i-small-primary-button" type="primary" size="mini" @click="showImportPaperDialog = true">引入试卷</el-button>
          <router-link :to="{name: 'RPapNew', params: { type: 'new' }}">
            <el-button class="i-button i-small-primary-button" type="primary" size="mini">创建试卷</el-button>
          </router-link>
        </div>
        <div slot="label">共<span style="color:#0061EB">{{ papers.length }}</span>个</div>
      </i-title>
      <!-- 试卷 -->
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in papers" :key="index">
          <div class="i-material-paper">
            <div class="i-material-inner">
              <el-popover
                placement="bottom"
                popper-class="i-popover"
                width="60"
                :offset="-15"
                trigger="click">
                <div class="i-t-d-popover">
                  <router-link style="text-align: center" :to="{name: 'RPapNew', params: { type: 'edit' }}">
                    编辑
                  </router-link>
                  <a href="javascript:;" style="text-align: center">删除</a>
                </div>
                <div class="i-t-d-items-more" slot="reference">
                  <a href="javascript:void(0);" class="el-icon-more"></a>
                </div>
              </el-popover>
              <router-link to="/resource/paper/preview">
                <h4>{{ item.name }}</h4>
                <span>{{ item.level }}</span>
                <span>考试时长：{{ item.time }}</span>
                <p>
                  <span>创建时间：{{ item.date }}</span>
                  <span>共<em>{{ item.total }}</em>题</span>
                </p>
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 引入课件 -->
      <el-dialog
        title="引入课件"
        :visible.sync="showImportCourseWareDialog"
        top="10%"
        custom-class="i-dialog i-dialog__large">
        <div class="i-material-dialog-content">
          <div class="i-material-dialog-inner">
            <el-input placeholder="课件名 / 标签 / 等级 / 类型" v-model="input">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="课件名" value="1"></el-option>
                <el-option label="标签" value="2"></el-option>
                <el-option label="等级" value="3"></el-option>
                <el-option label="类型" value="4"></el-option>
              </el-select>
              <el-button slot="append" icon="search" @click="loadTemplate"></el-button>
            </el-input>
            <h4>模板</h4>
            <el-row :gutter="20">
              <el-col :span="6" v-for="(item, index) in courseware" :key="index">
                <div class="i-material-courseware">
                  <div class="i-material-inner">
                    <h4>{{ item.name }}</h4>
                    <p>创建时间：{{ item.date }}</p>
                    <div class="i-material-courseware-ico" :style="style">
                      <i class="iconfont icon-picture"></i>
                    </div>
                    <div class="i-material-courseware-footer">
                      <span>{{ item.level }}</span>
                      <span>{{ item.total }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-dialog>
      <!-- 引入试卷 -->
      <el-dialog
        title="引入试卷"
        :visible.sync="showImportPaperDialog"
        top="10%"
        custom-class="i-dialog i-dialog__large">
        <div class="i-material-dialog-content">
          <div class="i-material-dialog-inner">
            <el-input placeholder="试卷名 / 标签 / 等级 / 类型" v-model="input">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="试卷名" value="1"></el-option>
                <el-option label="标签" value="2"></el-option>
                <el-option label="等级" value="3"></el-option>
                <el-option label="类型" value="4"></el-option>
              </el-select>
              <el-button slot="append" icon="search" @click="loadTemplate"></el-button>
            </el-input>
            <h4>模板</h4>
            <el-row :gutter="20">
              <el-col :span="6" v-for="(item, index) in papers" :key="index">
                <div class="i-material-paper i-material-paper-reverse">
                  <div class="i-material-inner">
                    <h4>{{ item.name }}</h4>
                    <span>{{ item.level }}</span>
                    <span>考试时长：{{ item.time }}</span>
                    <p>
                      <span>创建时间：{{ item.date }}</span>
                      <span>共<em>{{ item.total }}</em>题</span>
                    </p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import ITitle from '../../../components/title'
  import ICard from '../../../components/card'
  import ILabel from '../../../components/label'
  import ISecondary from '../../../components/secondary'

  import { toolMixins } from '../../../mixins/tools'
  import Edit from '../../../mock/resource/edit'

  export default {
    components: {
      ITitle,
      ICard,
      ILabel,
      ISecondary
    },
    mixins: [toolMixins],
    computed: {
      style () {
        let clientWidth = this.client().w
        clientWidth = clientWidth > 1057 ? 1057 : clientWidth
        return {
          height: Math.floor((clientWidth - 60) / 4 / this.scale) - 20 + 'px'
        }
      }
    },
    methods: {
      save () {
        this.show = !this.show
        this.$box.style.height = this.computedHeight
      },
      edit () {
        this.show = !this.show
        this.$box.style.height = this.height + 'px'
      },
      computeHeight () {
        let { $box, height } = {
          $box: document.querySelector('.outer-box'),
          height: 0
        }
        height = this.$refs.editCard.$el.clientHeight + 'px'
        this.computedHeight = height
        this.$box = $box
        $box.style.height = height
        let vm = this
        window.addEventListener('resize', function () {
          vm.computeHeight()
        })
      },
      getCourseWare () {
        this.courseware = Edit.getCourseWareList()
      },
      getPapers () {
        this.papers = Edit.getCoursePaperList()
      },
      loadTemplate () {
        // 载入模板
      }
    },
    data () {
      return {
        scale: 56 / 33, // 上传课件封面比例
        courseware: [], // 课件
        papers: [], // 试卷
        show: true, // 是否显示课件基本信息编辑
        height: 540, // 课件保存 saveCard 高度
        $box: null, // outer-box，用于动画切换
        computedHeight: 0, // 课件编辑 editCard 高度
        showImportCourseWareDialog: false, // 是否显示引入课件对话框
        showImportPaperDialog: false, // 是否显示引入试卷对话框
        material: Edit.material,
        input: '', // 引入课件输入框
        select: '1' // 引入课件select
      }
    },
    mounted () {
      // layout
      this.computeHeight()
      // 初始化
      this.getCourseWare()
      this.getPapers()
    }
  }
</script>

<style lang="less">
  @import "../../../assets/v2/base";
  @import "../../../assets/v2/icon";

  .i-material-pane {
    .outer-box {
      position: relative;
      margin-bottom: 20px;
      .i-card-slot-left {
        text-align: left;
        span, em {
          display: block;
          font-style: normal;
          color: #667385;
          font-size: 12px;
        }
        span {
          margin-top: 30px;
        }
        em {
          margin-top: 5px;
        }
      }
    }
    .i-material-form.el-form,
    .i-material-form-1.el-form {
      .el-form-item {
        float: left;
        width: 100%;
        position: relative;
        margin-bottom: 10px;
        color: #485B72;
        .el-form-item__label {
          color: #000000;
        }
      }
    }
    .i-material-form-1.el-form {
      .el-form-item {
        margin-bottom: 22px;
        .el-textarea__inner {
          border-radius: 2px;
          line-height: 1.6;
          color: #546478;
        }
        .el-input__inner {
          color: #546478;
        }
        .el-form-item__content {
          > a {
            display: block;
            float: right;
            font-size: 12px;
            color: #3493FA;
            transition: all .3s;
            &:hover {
              color: darken(#3493FA, 20%);
            }
          }
          > span {
            float: right;
            font-size: 12px;
            color: #FF0000;
          }
        }
      }
    }
    .i-material-courseware {
      background: #fff;
      margin-bottom: 20px;
      position: relative;
      border-radius: 2px;
      transition: all .5s;
      -ms-transition: all .5s;
      &:hover {
        .box-shadow;
      }
      .i-material-inner {
        padding: 10px;
      }
      h4 {
        margin: 0;
        font-weight: normal;
        font-size: 14px;
      }
      p {
        margin: 0;
        color: #565656;
        font-size: 14px;
        line-height: 32px;
      }
      .i-material-courseware-ico {
        background: #FBFDFE;
        cursor: pointer;
        display: table;
        text-align: center;
        width: 100%;
        position: relative;
        &:hover {
          background: rgba(0,0,0,0.25);
          i {
            display: none;
          }
          span {
            display: table-cell;
          }
        }
        i {
          color: #D5D6E2;
          font-size: 42px;
          vertical-align: middle;
          display: table-cell;
        }
        span {
          display: none;
          vertical-align: middle;
          color: #fff;
          font-size: 14px;
        }
      }
      .i-material-courseware-footer {
        .clearfix;
        width: 100%;
        height: 26px;
        line-height: 26px;
        background: rgba(0, 0, 0, 0.25);
        margin-top: -26px;
        font-size: 13px;
        position: relative;
        z-index: 10;
        span {
          float: left;
          padding-left: 5px;
          color: #FFFFFF;
          & + span {
            float: right;
            padding: 0 5px 0 0;
          }
        }
      }
    }
    .i-material-paper {
      background: #ffffff;
      position: relative;
      border-radius: 2px;
      margin-bottom: 20px;
      cursor: pointer;
      &.i-material-paper-reverse {
        background: #EFEFF4;
      }
      &:hover {
        .box-shadow;
      }
      .i-material-inner {
        padding: 10px;
      }
      h4 {
        margin: 0 0 10px 0;
        font-size: 14px;
        font-weight: normal;
        color: #093B5F;
      }
      span {
        display: block;
        font-size: 12px;
        color: #616F82;
        line-height: 24px;
      }
      p {
        margin: 5px 0 0;
        font-size: 12px;
        color: #616F82;
        .clearfix;
        span {
          float: left;
          & + span {
            float: right;
          }
          em {
            font-style: normal;
            color: #0061EB;
          }
        }
      }
    }

    /* transition */
    .slide-enter-active {
      transition: all .3s linear;
      transition-delay: .1s;
    }
    .slide-leave-active {
      transition: all .3s linear;
    }
    .slide-enter, .slide-leave-active {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
</style>
