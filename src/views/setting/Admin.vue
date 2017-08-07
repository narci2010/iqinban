<!-- 后台功能 -->
<template>
  <div class="i-content">
    <div class="form__pane">
      <el-form class="i-form" label-position="top" label-width="">
        <el-form-item label="代办事项">
          <div class="i-form__item">
            <span class="i-form__label" style="width: 180px;">学生</span>
            <span class="i-form__label" style="width: 280px;">期限设定</span>
            <span class="i-form__label" style="width: auto;margin-left: 150px">异常状态提醒</span>
          </div>
          <div class="i-form__item" v-for="item in done" :key="item">
            <span class="i-form__label" style="width: 180px;">{{ item }}</span>
            <span class="i-form__label" style="width: 280px;">
              <el-time-select style="width:280px;" :picker-options="datePickerOptions" placeholder=""></el-time-select>
            </span>
            <span class="i-form__label" style="width: auto;margin-left: 150px">
              <el-switch class="i-switch floatright" :width="58" v-model="value" on-text="" off-text=""></el-switch>
            </span>
          </div>
        </el-form-item>
        <el-form-item label="教师">
          <div class="i-form__item" v-for="item in teacher" :key="item">
            <span class="i-form__label" style="width: 180px;">{{ item }}</span>
            <span class="i-form__label" style="width: 280px;">
              <el-time-select style="width:280px;" :picker-options="datePickerOptions" placeholder=""></el-time-select>
            </span>
            <span class="i-form__label" style="width: auto;margin-left: 150px">
              <el-switch class="i-switch floatright" :width="58" v-model="value" on-text="" off-text=""></el-switch>
            </span>
          </div>
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
  export default {
    name: 'Admin',
    data () {
      return {
        value: false,
        done: ['未按时学习课件', '为按时完成作业', '未按时完成考试'],
        teacher: ['未按时完成考试', '未按时布置学习内容', '未按时批改作业', '未按时不知考试']
      }
    }
  }
</script>

<style lang="scss">
</style>
