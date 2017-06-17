<!-- 编辑试卷，新建试卷 -->
<template>
  <div class="i-paper">
    <div class="i-secondary-menu i-third-menu">
      <i-top-menu :title="title"></i-top-menu>
    </div>
    <div class="i-material-pane i-student-plan">
      <div class="i-pane">
        <div class="i-pane-left">
          <div class="i-paper__inner">
            <el-form ref="form" label-position="top" label-width="80px">
              <el-form-item class="i-paper__item" label="试卷名称">
                <el-input v-model="name" :maxlength="15"></el-input>
                <span class="i-tip" style="color: #FF0924">试卷名称不可为空，字数15个字符以内</span>
              </el-form-item>
              <el-form-item class="i-paper__item" label="试卷说明">
                <el-input type="textarea" :rows="4" v-model="desc" :maxlength="200"></el-input>
                <span class="i-tip" style="color: #2B92FA">字数200个字符以内</span>
              </el-form-item>
              <el-form-item class="i-paper__item" label="试题">
                <div class="i-paper__pane i-paper__exer" v-for="(item, index) in papers" :key="index" @click="activeEdit(index)">
                  <div class="i-paper__left">
                    <div class="i-paper__label">{{ index + 1 }}.</div>
                  </div>
                  <div class="i-paper__right">
                    <div class="i-paper__label">{{ item.label }}</div>
                    <div class="i-paper__pane">
                      <div class="i_paper__audio" v-if="index === 1">
                        <audio :src="src" controls="controls">
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                      <div class="i_paper__img" v-if="index === 1">
                        <img src="../../../../assets/img/20121116_20120621224205954.png">
                      </div>
                      <el-radio
                        v-for="(radio, index) in item.radio"
                        class="i-radio"
                        :disabled="true"
                        :key="index"
                        v-model="item.answer"
                        :label="radio.key">{{ radio.key }}.&nbsp;&nbsp;{{ radio.value }}</el-radio>
                    </div>
                  </div>
                  <div class="i-paper__opr" v-if="item.active">
                    <a href="javascript:void(0);"><i class="i-icon-edit"></i><span>编辑</span></a>
                    <a href="javascript:void(0);"><i class="i-icon-delete"></i><span>删除</span></a>
                    <a href="javascript:void(0);"><i class="iconfont icon-shangyi"></i><span>上移</span></a>
                    <a href="javascript:void(0);"><i class="iconfont icon-shangyi1"></i><span>下移</span></a>
                    <a href="javascript:void(0);"><i class="iconfont icon-zuiqian"></i><span>最前</span></a>
                    <a href="javascript:void(0);"><i class="iconfont icon-zuihou"></i><span>最后</span></a>
                  </div>
                </div>
                <div class="i-paper__form">
                  <div class="i-paper__form-inner">
                    <div class="i-paper__pane" style="border-bottom: 1px solid #B3B3C9;">
                      <div class="i-paper__left">
                        <div class="i-paper__label">{{ index }}</div>
                      </div>
                      <div class="i-paper__right">
                        <div class="i-paper__label">{{ paper.label }}</div>
                        <div class="i-paper__pane">
                          <div class="i_paper__audio" v-if="paper.showAudio">
                            <audio :src="src" controls="controls">
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                          <div class="i_paper__img" v-if="paper.showImg">
                            <img src="../../../../assets/img/20121116_20120621224205954.png">
                          </div>
                          <el-radio
                            v-for="(item, index) in paper.radio"
                            class="i-radio"
                            :disabled="true"
                            :key="index"
                            v-model="paper.answer"
                            :label="item.key">{{ item.key }}.&nbsp;&nbsp;{{ item.value }}</el-radio>
                        </div>
                      </div>
                    </div>
                    <div class="i-paper__editor">
                      <div class="i-paper__header">
                        <div class="i-paper__header-left">
                          <span>问题内容</span><i class="iconfont icon-wenhaoweiwanchengyanzheng"></i>
                        </div>
                        <div class="i-paper__header-right">
                          <a href="javascript:void(0);" @click="paper.showImg = true"><i class="iconfont icon-pic"></i><span>图像</span></a>
                          <a href="javascript:void(0);" @click="paper.showAudio = true"><i class="iconfont icon-zuopin"></i><span>音频</span></a>
                        </div>
                      </div>
                      <div class="i-paper__editor-content">
                        <el-tag :closable="true" v-if="paper.showAudio"
                                color="#20a0ff" class="i-tag" @close="paper.showAudio = false">123901290.mp3</el-tag>
                        <el-tag :closable="true" v-if="paper.showImg"
                                color="#20a0ff" class="i-tag" @close="paper.showImg = false">12adas90.jpg</el-tag>
                        <el-input type="textarea" :rows="2" placeholder="" v-model="paper.label"></el-input>
                      </div>
                      <div class="i-paper__header">
                        <div class="i-paper__header-left">
                          <span>问题选项</span>
                        </div>
                      </div>
                      <div class="i-paper__radio" v-for="(item, index) in paper.radio" :key="index">
                        <div class="i-paper__radio-left">
                          <el-input v-model="item.value" placeholder="选项"></el-input>
                        </div>
                        <div class="i-paper__radio-right">
                          <el-radio class="radio" v-model="paper.answer" :label="item.key">设为答案</el-radio>
                          <a href="javascript:void(0)"><i class="iconfont icon-jia"></i> </a>
                          <a href="javascript:void(0)"><i class="iconfont icon-jian"></i> </a>
                          <a href="javascript:void(0)"><i class="iconfont icon-shangyi"></i> </a>
                          <a href="javascript:void(0)"><i class="iconfont icon-shangyi1"></i> </a>
                        </div>
                      </div>
                      <div class="i-paper__radio-opr">
                        <a href="javascript:void(0);" @click="addRadio">
                          <i class="iconfont icon-plus2"></i><span>增加选项</span>
                        </a>
                        <a href="javascript:void(0);">
                          <el-checkbox v-model="checked">随机选项</el-checkbox>
                        </a>
                      </div>
                      <div class="i-paper__header">
                        <div class="i-paper__header-left">
                          <span>考察要点（可选）</span><i class="iconfont icon-wenhaoweiwanchengyanzheng"></i>
                        </div>
                      </div>
                      <el-input v-model="paper.summary" :maxlength="15"></el-input>
                      <div style="margin: 35px 0 20px">
                        <el-row :gutter="50">
                          <el-col :span="12">
                            <el-button type="primary" class="i-button i-confirm" style="width: 100%;" @click="addPaper">保存</el-button>
                          </el-col>
                          <el-col :span="12">
                            <el-button class="i-button i-normal" style="width: 100%;" @click="clearPaper">取消</el-button>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item class="i-paper__item" label="考试时长">
                <el-select placeholder="请选择">
                  <el-option :key="1" :label="1" :value="1"></el-option>
                  <el-option :key="2" :label="2" :value="2"></el-option>
                  <el-option :key="3" :label="3" :value="3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-row :gutter="50">
                  <el-col :span="12">
                    <el-button type="primary" class="i-button i-confirm" style="width: 100%">完成</el-button>
                  </el-col>
                  <el-col :span="12">
                    <el-button type="primary" class="i-button i-cancel" style="width: 100%;">取消</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="i-pane-right">
          <i-courseware></i-courseware>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ITopMenu from '../../../../components/topmenu'
  import ICourseware from '../../../../components/courseware'

  import paper from '../../../../mock/resource/paper/preview'
  import src from '../../../../assets/audio/audio.mp3'
  import { toolMixins } from '../../../../mixins/tools'

  export default {
    components: {
      ITopMenu,
      ICourseware
    },
    mixins: [toolMixins],
    methods: {
      addRadio () {
        this.paper.radio.push({
          key: this.key,
          value: ''
        })
        this.key = String.fromCharCode(this.key.charCodeAt(0) + 1)
      },
      addPaper () {
        this.papers.push(this.paper)
        this.index += 1
        this.key = 'A'
        this.$nextTick(() => {
          this.clearPaper()
        })
      },
      clearPaper () {
        this.paper = {
          label: '请在此输入题目标题内容',
          radio: [],
          answer: '',
          showImg: false,
          showAudio: false,
          summary: '',
          active: false
        }
        this.key = 'A'
      },
      activeEdit (index) {
        let $exer = document.querySelectorAll('.i-paper__exer')
        for (let i = 0; i < $exer.length; i++) {
          this.removeClass($exer[i], 'active')
          this.papers[i].active = false
        }
        this.papers[index].active = true
        this.toggleClass($exer[index], 'active')
      }
    },
    mounted () {
      if (this.$route.params.type === 'new') {
        this.name = ''
        this.desc = ''
      } else if (this.$route.params.type === 'edit') {
        this.title = '某某某某某某试卷'
        this.papers = paper.list
      }
    },
    data () {
      return {
        title: '创建试卷',
        name: '某某某某某某某试卷',
        desc: '试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明',
        papers: [],
        paper: {
          label: '请在此输入题目标题内容',
          radio: [],
          answer: '',
          showImg: false,
          showAudio: false,
          summary: '',
          active: false
        },
        key: 'A',
        index: 1,
        src: src,
        checked: false
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/v2/base";

  .i-paper {
    .i-paper__inner {
      padding: 30px 33px;
      background: #ffffff;
      .i-paper__item {
        position: relative;
        margin: 10px 0 35px;
        span.i-tip {
          position: absolute;
          right: 0;
          top: -33px;
          font-size: 12px;
        }
        .el-form-item__content {
          > .i-paper__pane {
            border: 1px solid #c9c9d8;
            padding: 0 25px 5px;
            border-radius: 2px;
            margin-bottom: 45px;
            &.active {
              border-color: #FF6066;
            }
          }
        }
      }
      .i-paper__form {
        .i-paper__form-inner {
          border: 1px solid #c9c9d8;
          border-radius: 2px;
          padding: 3px 25px;
          > .i-paper__pane {
            padding: 0;
            margin-top: 0;
          }
          .i-paper__editor {
            .clearfix;
            margin-top: 13px;
            .i-paper__editor-content {
              padding: 20px;
              border: 1px solid #A9AAC3;
              border-radius: 2px;
              .el-textarea__inner {
                border: none;
                color: #979797;
                line-height: 24px;
              }
            }
            .i-paper__header {
              .clearfix;
              margin-top: 15px;
              margin-bottom: 10px;
              .i-paper__header-left {
                float: left;
                color: #4C4C4C;
                line-height: 18px;
                height: 18px;
                i {
                  color: #4993FA;
                  font-size: 18px;
                  display: inline-block;
                  margin-left: 5px;
                }
              }
              .i-paper__header-right {
                float: right;
                height: 18px;
                a {
                  display: inline-block;
                  .clearfix;
                  color: #4090FA;
                  line-height: 18px;
                  font-size: 14px;
                  margin-right: 20px;
                  &:last-child {
                    margin-right: 0;
                  }
                  i {
                    float: left;
                    margin-right: 5px;
                  }
                  span {
                    float: left;
                  }
                }
              }
            }
          }
          .i-paper__radio-opr {
            .clearfix;
            > a {
              display: inline-block;
              margin-right: 20px;
              &:hover {
                span {
                  color: #4993FA;
                }
              }
              i {
                color: #4993FA;
                float: left;
                font-size: 22px;
              }
              span {
                transition: all .3s;
                color: #1F2D3D;
              }
            }
          }
          .i-paper__radio {
            .clearfix;
            margin-bottom: 6px;
            .i-paper__radio-left {
              margin-right: 232px;
              .el-input {
                width: 100%;
              }
            }
            .i-paper__radio-right {
              float: right;
              width: 210px;
              margin-top: -36px;
              .el-radio {
                margin-right: 15px;
                display: inline-block;
                vertical-align: top;
                color: #797979;
              }
              a {
                display: inline-block;
                margin-right: 6px;
                vertical-align: middle;
                &:last-child {
                  margin: 0;
                }
                i {
                  font-size: 20px;
                  color: #4295FA;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
