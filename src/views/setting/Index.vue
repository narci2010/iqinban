<!-- 设置默认页面 -->
<template>
  <div class="i-container" :style="style">
    <i-tabbar>
      <i-tabbar-item link="/setting" name="机构资料"></i-tabbar-item>
      <i-tabbar-item link="/setting/system" name="教学系统"></i-tabbar-item>
      <i-tabbar-item link="/setting/admin" name="后台功能"></i-tabbar-item>
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
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      }
    }
  }
</script>

<style lang="scss">

</style>
