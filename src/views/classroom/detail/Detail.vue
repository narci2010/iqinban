<template>
  <div class="i-student-detail">
    <div class="i-secondary-menu">
      <i-tab :active-index="activeIndex">
        <i-tab-item :index="1">
          <router-link to="/classroom/detail">教学记录</router-link>
        </i-tab-item>
        <i-tab-item :index="2">
          <router-link to="/classroom/detail/basic">基本信息统计</router-link>
        </i-tab-item>
        <i-tab-item :index="3">
          <router-link to="/classroom/detail/plan">教学计划</router-link>
        </i-tab-item>
        <i-tab-item :index="4">
          <router-link to="/classroom/detail/doc">文档</router-link>
        </i-tab-item>
      </i-tab>
      <i-secondary title="某某某班" sup="班级类型">
        <el-button slot="right" type="primary" size="mini" class="i-button i-danger" style="width: 80px;" v-show="!show">冻结账户</el-button>
        <el-button slot="right" type="primary" size="mini" class="i-button i-cancel" style="width: 80px;" v-show="show">新增学生</el-button>
      </i-secondary>
    </div>
    <div class="i-student-detail-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import ITab from '../../../components/tab'
  import ITabItem from '../../../components/tabitem'
  import ISecondary from '../../../components/secondary'

  export default {
    components: {
      ITab,
      ITabItem,
      ISecondary
    },
    computed: {
      show () {
        return this.$route.path === '/classroom/detail'
      }
    },
    data () {
      return {
        activeIndex: 1
      }
    }
  }
</script>
