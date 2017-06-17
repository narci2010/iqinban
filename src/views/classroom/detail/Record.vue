<!-- 教学记录 -->
<template>
  <div class="i-student-record i-student-plan">
    <i-title title="任课教师教学记录" :height="60">
      <el-button slot="content" class="i-button i-small-primary-button" type="primary" size="mini">显示全部</el-button>
    </i-title>
    <el-row :gutter="20">
      <el-col :span="6" v-for="i in 4" :key="i">
        <div class="i-student-plan-item">
          <img alt="ico" src="../../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
          <div class="i-student-plan-section">
            <div class="i-student-plan-section-inner">
              <span>某某某</span>
              <span>周三 9:30~11:00</span>
            </div>
          </div>
          <el-popover
            placement="bottom"
            popper-class="i-popover"
            width="80"
            :offset="-30"
            trigger="click">
            <div class="i-t-d-popover">
              <a href="javascript:;">删除</a>
              <a href="javascript:;">进入教师主页</a>
            </div>
            <div class="i-t-d-items-more" slot="reference">
              <a href="javascript:void(0);" class="el-icon-more"></a>
            </div>
          </el-popover>
        </div>
      </el-col>
    </el-row>
    <i-title title="学生学习记录" :height="60">
      <span style="display: inline-block;margin-right: 10px" slot="content">
        <el-radio class="radio" v-model="radio" label="1">姓氏拼音升序</el-radio>
        <el-radio class="radio" v-model="radio" label="2">姓氏拼音降序</el-radio>
        <el-radio class="radio" v-model="radio" label="3">进班时间升序</el-radio>
        <el-radio class="radio" v-model="radio" label="4">进班时间降序</el-radio>
      </span>
      <span style="display: inline-block;height: 25px;margin-right: 10px">
        <el-input
          style="width: 140px;"
          size="mini"
          placeholder=""
          icon="search">
        </el-input>
      </span>
      <el-button class="i-button i-small-primary-button" type="primary" size="mini">显示全部</el-button>
    </i-title>
    <el-row :gutter="20">
      <el-col :span="6" v-for="i in 9" :key="i">
        <div class="i-student-plan-item">
          <img alt="ico" src="../../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
          <div class="i-student-plan-section">
            <div class="i-student-plan-section-inner">
              <span>某某某</span>
              <span>周三 9:30~11:00</span>
            </div>
          </div>
          <el-popover
            placement="bottom"
            popper-class="i-popover"
            width="80"
            :offset="-30"
            trigger="click">
            <div class="i-t-d-popover">
              <a href="javascript:;">删除</a>
              <a href="javascript:;">进入教师主页</a>
            </div>
            <div class="i-t-d-items-more" slot="reference">
              <a href="javascript:void(0);" class="el-icon-more"></a>
            </div>
          </el-popover>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ITitle from '../../../components/title'

  export default {
    components: {
      ITitle
    },
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
