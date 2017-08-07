<!-- 机构资料 -->
<template>
  <div class="i-content">
    <div class="form__pane">
      <el-form class="i-form" style="width:550px;" label-position="top" label-width="" :model="information">
        <el-form-item label="机构名称" required>
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="机构标志">
          <span class="i-form__tip">建议尺寸为400x400像素，文件大小应不超过2MB</span>
          <el-button style="width: 550px;height:40px;"><i class="iconfont icon-plus"></i>上传</el-button>
        </el-form-item>
        <el-form-item label="机构规模">
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" required>
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="机构邮箱" required>
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="机构地址">
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="负责人" required>
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="负责人联系方式" required>
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="负责人邮箱" required>
          <el-input style="width:550px;" v-model="information.name"></el-input>
        </el-form-item>
        <el-form-item label="工作安排">
          <div class="i-form__item" v-for="item in weeks" :key="item">
            <span class="i-form__label">{{ item }}</span>
            <el-time-select style="width:200px;" :picker-options="datePickerOptions" placeholder=""></el-time-select>
            <span class="i-form__split"></span>
            <el-time-select style="width:200px;" :picker-options="datePickerOptions" placeholder=""></el-time-select>
          </div>
        </el-form-item>
        <div class="i-form__btns">
          <el-button class="i-button__done" style="width: 250px;height: 40px;">保存</el-button>
          <el-button class="i-button__cancel" style="width: 250px;height: 40px;">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Information',
    computed: {
      ...mapGetters([
        'weeks',
        'datePickerOptions'
      ])
    },
    data () {
      return {
        information: {
          name: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
