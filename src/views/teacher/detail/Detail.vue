<template>
  <div class="i-student-detail">
    <div class="i-secondary-menu">
      <i-tab :active-index="activeIndex">
        <i-tab-item :index="1">
          <router-link to="/teacher/detail">教学记录</router-link>
        </i-tab-item>
        <i-tab-item :index="2">
          <router-link to="/teacher/detail/basic">基本信息统计</router-link>
        </i-tab-item>
        <i-tab-item :index="3">
          <router-link to="/teacher/detail/plan">教学计划</router-link>
        </i-tab-item>
      </i-tab>
      <i-secondary title="某某某" sup="教师" :show="show">
        <el-button slot="left" size="mini" class="i-small-text-button" @click="showPane" :class="showCard ? 'active' : ''" :id="btnId">显示名片</el-button>
        <el-button slot="right" type="primary" size="mini" class="i-button i-danger" style="width: 80px;">冻结账户</el-button>
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

  import { toolMixins } from '../../../mixins/tools'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [toolMixins],
    components: {
      ITab,
      ITabItem,
      ISecondary
    },
    methods: {
      showPane () {
        let btn = document.querySelector('#' + this.btnId)
        this.toggleClass(btn, 'active')
        this.$store.dispatch('toggleShowCard', !this.showCard)
      }
    },
    computed: {
      ...mapGetters({
        showCard: 'getShowCard'
      }),
      show () {
        return this.$route.path === '/teacher/detail'
      }
    },
    data () {
      return {
        activeIndex: 1,
        btnId: 'btn_' + this.uuid()
      }
    }
  }
</script>
