<!-- 教学系统 -->
<template>
  <div class="i-content">
    <div class="form__pane">
      <el-form class="i-form" label-position="top" label-width="">
        <el-form-item label="教学功能模块">
          <div class="i-form__switch" style="width: 550px">
            <span class="i-form__label" style="width:auto;">使用成套教材作为教学材料</span>
            <el-switch class="i-switch floatright" :width="58" v-model="value" on-text="" off-text=""></el-switch>
          </div>
          <div class="i-form__switch" style="width: 550px">
            <span class="i-form__label" style="width:auto;">阶段性考试</span>
            <el-switch class="i-switch floatright" :width="58" v-model="value1" on-text="" off-text=""></el-switch>
          </div>
        </el-form-item>
        <el-form-item label="课程表">
          <div class="i-form__item" v-for="i in 12" :key="i">
            <span class="i-form__label">第{{ i - 1 | filterNum(i) }}节</span>
            <el-time-select style="width:200px;" :picker-options="datePickerOptions" placeholder=""></el-time-select>
            <span class="i-form__split"></span>
            <el-time-select style="width:200px;" :picker-options="datePickerOptions" placeholder=""></el-time-select>
            <a href="javascript:" class="i-form__button">
              <i class="iconfont icon-plus"></i>
            </a>
            <a href="javascript:" class="i-form__button">
              <i class="iconfont icon-less"></i>
            </a>
          </div>
        </el-form-item>
        <el-form-item label="课程体系">
          <el-select placeholder="" style="width: 550px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <div class="i-form__btns" style="margin-top: 50px">
          <el-button class="i-button__done" style="width: 250px;height: 38px;">保存</el-button>
          <el-button class="i-button__cancel" style="width: 250px;height: 38px;">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'System',
    computed: {
      ...mapGetters([
        'datePickerOptions'
      ])
    },
    data () {
      return {
        value: false,
        value1: true,
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
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
