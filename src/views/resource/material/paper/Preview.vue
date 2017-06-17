<!-- 试卷预览 -->
<template>
  <div class="i-courseware">
    <div class="i-secondary-menu i-third-menu">
      <i-secondary title="某某某某某某试卷" :show-search="false" style="border-top: 1px solid #c6cad1;">
        <div slot="sup" class="i-courseware-menu">
          <span>共<em>20</em>题</span>
          <span>考试时长<em>1</em>小时</span>
        </div>
        <div slot="left">
          <router-link to="/resource/detail">
            <el-button type="primary" size="mini" class="i-small-primary-button">返回教材</el-button>
          </router-link>
          <router-link :to="{name: 'RPapNew', params: { type: 'edit' }}">
            <el-button type="primary" size="mini" class="i-small-primary-button">编辑</el-button>
          </router-link>
        </div>
      </i-secondary>
    </div>
    <div class="i-material-pane i-student-plan">
      <div class="i-pane">
        <div class="i-pane-left">
          <div class="i-courseware-inner">
            <div class="i-paper">
              <div class="i-paper__label">试卷名称</div>
              <div class="i-paper__pane">
                某某某某某某某试卷
              </div>
            </div>
            <div class="i-paper">
              <div class="i-paper__label">试卷说明</div>
              <div class="i-paper__pane">
                试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明
                试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明
                试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明试卷说明
              </div>
            </div>
            <div class="i-paper">
              <div class="i-paper__label">试题</div>
              <div class="i-paper__pane" v-for="(item, index) in papers" :key="index">
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
                      v-for="(radio1, index) in item.radio"
                      class="i-radio"
                      :disabled="true"
                      :key="index"
                      v-model="item.answer"
                      :label="radio1.key">{{ radio1.key }}.&nbsp;&nbsp;{{ radio1.value }}</el-radio>
                  </div>
                </div>
              </div>
            </div>
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
  import ISecondary from '../../../../components/secondary'
  import ICourseware from '../../../../components/courseware'

  import preview from '../../../../mock/resource/paper/preview'

  import src from '../../../../assets/audio/audio.mp3'

  export default {
    components: {
      ISecondary,
      ICourseware
    },
    data () {
      return {
        papers: preview.list,
        src: src
      }
    }
  }
</script>
