<!-- 创建课件， 编辑课件 -->
<template>
  <div class="i-courseware">
    <div class="i-secondary-menu i-third-menu">
      <i-top-menu :title="title"></i-top-menu>
    </div>
    <div class="i-material-pane i-student-plan">
      <div class="i-pane">
        <div class="i-pane-left">
          <div class="i-courseware-inner">
            <el-form ref="form" label-position="top" :model="form" label-width="80px">
              <el-form-item label="课件名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="知识点" style="margin-top: 33px">
                <el-row :gutter="20" class="i-knowledge">
                  <el-col :span="12" v-for="i in total" :key="i">
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
                      <div class="i-knowledge-item-opr">
                        <a href="javascript:void(0);" class="i-icon-edit"></a>
                        <a href="javascript:void(0);" class="i-icon-delete"></a>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="i-knowledge-item i-knowledge-btn">
                      <div class="i-knowledge-item__inner">
                        <a href="javascript:void(0);" @click="showImportDialog = true">
                          <i class="iconfont icon-import"></i><span>引入知识点</span>
                        </a>
                        <a href="javascript:void(0);" @click="index += 1">
                          <i class="iconfont icon-plus1"></i><span>新建知识点</span>
                        </a>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item style="margin-top: -45px">
                <div class="i-knowledge-form" v-for="i in index" :key="i">
                  <div class="i-knowledge-form__inner">
                    <el-input class="i-knowledge-form__input" v-model="name" placeholder=""></el-input>
                    <div class="i-knowledge-form__label">
                      <span>素材</span><i class="iconfont icon-wenhaoweiwanchengyanzheng"></i>
                    </div>
                    <i-progress :percentage="50" filename="测试-210.mov"></i-progress>
                    <div class="i-knowledge-form__row">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-import"></i><span>引入素材</span>
                          </a>
                        </el-col>
                        <el-col :span="12">
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-export"></i><span>上传素材</span>
                          </a>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="i-knowledge-form__label">
                      <span>习题（可选）</span><i class="iconfont icon-wenhaoweiwanchengyanzheng"></i>
                    </div>
                    <div class="i-knowledge-form__row">
                      <el-row :gutter="10">
                        <el-col :span="8">
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-import"></i><span>引入习题</span>
                          </a>
                        </el-col>
                        <el-col :span="8">
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-export"></i><span>上传习题</span>
                          </a>
                        </el-col>
                        <el-col :span="8">
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-plus1"></i><span>新建习题</span>
                          </a>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="i-knowledge-form__label">
                      <span>标签（可选）</span><i class="iconfont icon-wenhaoweiwanchengyanzheng"></i>
                    </div>
                    <div class="i-knowledge-form__tag">
                      <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        :closable="true"
                        class="i-tag"
                        color="#20a0ff"
                        style="margin-left: 5px"
                        :close-transition="false"
                        @close="handleClose(tag)"
                      >
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="mini"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else size="small" class="button-new-tag" @click="showInput">+ 新标签</el-button>
                    </div>
                    <div style="margin: 45px 0 20px">
                      <el-row :gutter="50">
                        <el-col :span="12">
                          <el-button type="primary" class="i-button i-confirm" style="width: 100%;" @click="total += 1">保存</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button class="i-button i-normal" style="width: 100%;" @click="index -= 1">取消</el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="i-pane-right">
          <i-courseware></i-courseware>
        </div>
      </div>
    </div>
    <!-- 引入知识点 -->
    <el-dialog
      title="引入知识点"
      :visible.sync="showImportDialog"
      top="10%"
      custom-class="i-dialog i-dialog__large">
      <div class="i-material-dialog-content">
        <div class="i-material-dialog-inner">
          <el-input placeholder="知识点名 / 课件名 / 标签 / 等级 / 类型" v-model="input">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="知识点名" value="1"></el-option>
              <el-option label="柯建明" value="2"></el-option>
              <el-option label="标签" value="3"></el-option>
              <el-option label="等级" value="4"></el-option>
              <el-option label="类型" value="5"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
          </el-input>
          <h4>模板</h4>
          <el-row :gutter="20" class="i-knowledge">
            <el-col :span="8" v-for="i in 9" :key="i">
              <div class="i-knowledge-item i-knowledge-item-reverse">
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
                  <el-tag class="i-tag" color="#fff" style="color: #575757;">标签一</el-tag>
                  <el-tag class="i-tag" color="#fff" style="color: #575757;">标签二</el-tag>
                  <el-tag class="i-tag" color="#fff" style="color: #575757;">标签三</el-tag>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ITopMenu from '../../../../components/topmenu'
  import ILabel from '../../../../components/label'
  import IProgress from '../../../../components/progress'
  import ICourseware from '../../../../components/courseware'

  export default {
    components: {
      ITopMenu,
      ILabel,
      IProgress,
      ICourseware
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
      handleClose (tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },
      showInput () {
        this.inputVisible = true
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    },
    mounted () {
      let type = this.$route.params.type
      if (type === 'edit') {
        this.total = 3
        this.title = '某某某某某某某某课件'
      } else if (type === 'new') {
        this.index = 1
      }
      this.computedHeight()
    },
    data () {
      return {
        form: {
          name: '',
          knowledge: []
        },
        total: 0,
        index: 0,
        title: '创建课件',
        input: '',
        select: '1',
        name: '知识点1',
        showImportDialog: false,
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/v2/base";

  .i-courseware {
    .el-form-item__label {
      color: #000;
    }
    .i-knowledge-form {
      border: 1px solid #C3C4D8;
      border-radius: 2px;
      margin-top: 33px;
      .button-new-tag, .input-new-tag {
        margin-left: 0;
        height: 24px;
        line-height: 22px;
        border-radius: 2px;
        padding-top: 0;
        padding-bottom: 0;
        width: 68px;
      }
      .i-knowledge-form__inner {
        padding: 15px 25px;
        .i-knowledge-form__input .el-input__inner {
          border-color: #D7D8D9;
          height: 42px;
          padding: 6px 10px;
          text-align: center;
          font-size: 16px;
          font-weight: 500;
        }
        .i-knowledge-form__tag {
          border: #CFD1D2 1px solid;
          border-radius: 2px;
        }
        .i-knowledge-form__label {
          color: #A4A4A4;
          font-size: 16px;
          margin-top: 20px;
          i {
            font-size: 20px;
            display: inline-block;
            margin-left: 12px;
            color: #4993FA;
          }
        }
        .i-knowledge-form__row {
          .clearfix;
          a {
            display: block;
            border: #CFD1D2 1px solid;
            color: #787979;
            font-size: 14px;
            height: 42px;
            line-height: 42px;
            border-radius: 2px;
            transition: all .3s;
            text-align: center;
            &:hover {
              border-color: #20a0ff;
              color: #20a0ff;
            }
            i {
              font-size: 14px;
              display: inline-block;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>
