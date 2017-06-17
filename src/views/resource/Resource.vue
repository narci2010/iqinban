<!-- 课程资源 -->
<template>
  <div class="i-student">
    <div class="i-secondary-menu">
      <i-tab :active-index="activeIndex">
        <i-tab-item :index="1">
          <router-link to="/resource">教材</router-link>
        </i-tab-item>
        <i-tab-item :index="2">
          <router-link to="/resource/exercise">习题</router-link>
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
  @import "../../assets/v2/main";
  @import "../../assets/v2/images";
</style>

