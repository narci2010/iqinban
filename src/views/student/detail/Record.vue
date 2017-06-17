<!-- 学习记录 -->
<template>
  <div class="i-student-record">
    <div class="i-pane">
      <div class="i-pane-left">
        <div class="i-student-record-pane">
          <i-steps title="二月 2017">
            <i-step
              v-for="(item,index) in list"
              :title="item.title"
              :timeline="item.timeline"
              :content="item.content"
              :sup="item.sup"
              :key="index"
            ></i-step>
          </i-steps>
          <i-steps title="一月 2017">
            <i-step
              v-for="(item,index) in list"
              :title="item.title"
              :timeline="item.timeline"
              :content="item.content"
              :sup="item.sup"
              :key="index"
            ></i-step>
          </i-steps>
        </div>
      </div>
      <div class="i-pane-right">
        <div class="i-student-record-pane" v-show="!show" style="padding: 23px 31px 33px">
          <span class="i-student-record-title">
            <span>筛选条件</span>
            <el-button type="text" style="float: right">清空</el-button>
          </span>
          <div class="i-checkbox-group">
            <div class="i-checkbox-group-title">按课程类型</div>
            <el-checkbox-group v-model="checker[1]">
              <el-checkbox label="一对一"></el-checkbox>
              <el-checkbox label="一对多"></el-checkbox>
              <el-checkbox label="乐理与音乐素养"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="i-checkbox-group">
            <div class="i-checkbox-group-title">按课程等级</div>
            <div class="i-checkbox-group-title">上课</div>
            <el-checkbox-group v-model="checker[2]">
              <el-checkbox label="正常上课"></el-checkbox>
              <el-checkbox label="课程取消"></el-checkbox>
              <el-checkbox label="教师旷课"></el-checkbox>
              <el-checkbox label="学生旷课"></el-checkbox>
            </el-checkbox-group>
            <div class="i-checkbox-group-title">课后</div>
            <el-checkbox-group v-model="checker[3]">
              <el-checkbox label="按时布置学习内容"></el-checkbox>
              <el-checkbox label="超时布置学习内容"></el-checkbox>
              <el-checkbox label="批改作业"></el-checkbox>
              <el-checkbox label="超时批改作业"></el-checkbox>
              <el-checkbox label="安排考试"></el-checkbox>
              <el-checkbox label="超时安排考试"></el-checkbox>
            </el-checkbox-group>
            <div class="i-checkbox-group-title">请假</div>
            <el-checkbox-group v-model="checker[4]">
              <el-checkbox label="请假开始"></el-checkbox>
              <el-checkbox label="请假终止"></el-checkbox>
            </el-checkbox-group>
            <div class="i-checkbox-group-title">其他变更</div>
            <el-checkbox-group v-model="checker[5]">
              <el-checkbox label="与班级绑定"></el-checkbox>
              <el-checkbox label="解除与班级绑定"></el-checkbox>
              <el-checkbox label="与学生绑定"></el-checkbox>
              <el-checkbox label="解除与学生绑定"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="i-student-record-pane i-student-record-card" v-show="show" style="padding: 23px 31px 33px">
          <div class="i-s-card-ico">
            <img alt="ico" src="../../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
          </div>
          <div class="i-s-card-des">
            <h2>某某某</h2>
            <span>ID:xxxxxxxxxx</span>
          </div>
          <div class="i-s-card-section" v-for="(value,key,index) in info" :key="index">
            <p>{{ labels[index] }}</p>
            <span>{{ value }}</span>
            <div class="i-s-card-divide" v-if="index === 4 || index === 7"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ISteps from '../../../components/steps'
  import IStep from '../../../components/step'
  import { mapGetters } from 'vuex'

  import record from '../../../mock/student/record'

  const labels = ['用户名', '联系人', '联系方式', '学生', '邮箱', '账户状态', '入学时间', '主管教师', '微信', '微博']

  export default {
    components: {
      ISteps,
      IStep
    },
    computed: {
      ...mapGetters({
        show: 'getShowCard'
      })
    },
    data () {
      return {
        labels: labels,
        info: record.info,
        checker: [[], [], [], [], []],
        list: record.list
      }
    }
  }
</script>
