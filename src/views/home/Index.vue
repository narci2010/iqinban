<!-- 首页默认页面 -->
<template>
  <div class="i-container" :style="style">
    <i-tabbar>
      <i-tabbar-item link="/" name="课程表"></i-tabbar-item>
      <i-tabbar-item link="/home/done" name="待办事项"></i-tabbar-item>
      <i-tabbar-item link="/home/data" name="数据统计"></i-tabbar-item>
    </i-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import ITabbar from '@/components/tabbar/tabbar'
  import ITabbarItem from '@/components/tabbar/tabbar-item'

  export default {
    name: 'HomeIndex',
    components: {
      ITabbar,
      ITabbarItem
    },
    computed: {
      style () {
        let color = '#f5f5f7'
        if (this.$route.path.indexOf('done') === -1) {
          document.body.style.background = '#f5f5f7'
        } else {
          color = '#fff'
          document.body.style.background = '#fff'
        }
        return ({ background: `${color}` })
      }
    }
  }
</script>
