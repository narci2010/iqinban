<template>
  <div class="i-home">
    <div class="i-secondary-menu">
      <i-tab :active-index="activeIndex">
        <i-tab-item :index="1">
          <router-link to="/">课程表</router-link>
        </i-tab-item>
        <i-tab-item :index="2">
          <router-link to="/home/done">待办事项</router-link>
        </i-tab-item>
        <i-tab-item :index="3">
          <router-link to="/home/data">数据统计</router-link>
        </i-tab-item>
      </i-tab>
    </div>
    <div class="i-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import ITab from '../../components/tab'
  import ITabItem from '../../components/tabitem'

  export default {
    name: 'home',
    components: {
      ITab,
      ITabItem
    },
    data () {
      return {
        activeIndex: 1
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-home {
    width: 100%;
    .i-content {
      max-width: @--main-width;
      margin: 0 auto;
    }
  }
</style>
