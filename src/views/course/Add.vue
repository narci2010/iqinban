<!-- 创建课程 -->
<template>
  <div class="i-container" :style="style">
    <i-menubar title="创建课程" :show-search="false" :show-filter="false"></i-menubar>
    <div class="i-content is-menubar">
      <i-layout :left-padding="0">
        <div class="form__pane" slot="left">
          <el-form class="i-form" style="width:550px;" label-position="top" label-width="" :model="information">
            <el-form-item label="课程名称" required>
              <el-input style="width:550px;" v-model="information.name"></el-input>
            </el-form-item>
            <el-form-item label="课程ID" required>
              <el-input style="width:550px;" v-model="information.name"></el-input>
            </el-form-item>
            <el-form-item label="课程安排">
              <el-button style="width: 550px;height:40px;"><i class="iconfont icon-plus"></i>新增课时</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div slot="right">
          <i-section v-for="item in items" :key="item" :label="item" value="某某某某某"></i-section>
        </div>
      </i-layout>
    </div>
  </div>
</template>

<script>
  import IMenubar from '@/components/menubar'
  import ILayout from '@/components/layout'
  import ISection from '@/components/section'

  export default {
    name: 'CourseAdd',
    components: {
      IMenubar,
      ILayout,
      ISection
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
        information: {
          name: ''
        },
        items: ['课程类型', '课程等级', '任课教师', '学生', '绑定教材']
      }
    }
  }
</script>

<style lang="scss">
</style>
