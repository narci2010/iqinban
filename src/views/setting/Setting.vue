<template>
  <div class="i-setting">
    <div class="i-secondary-menu">
      <i-tab :active-index="activeIndex">
        <i-tab-item :index="1">
          <router-link to="/setting">机构资料</router-link>
        </i-tab-item>
        <i-tab-item :index="2">
          <router-link to="/setting/system">教学系统</router-link>
        </i-tab-item>
        <i-tab-item :index="3">
          <router-link to="/setting/admin">后台功能</router-link>
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
    name: 'setting',
    components: {
      ITab,
      ITabItem
    },
    data () {
      let storage = window.localStorage
      let activeIndex = storage.getItem('activeIndex')
      return {
        activeIndex: activeIndex ? Number(activeIndex) : 1
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-setting {
    width: 100%;
    .i-content {
      max-width: @--main-width;
      margin: @--main-margin-top auto 20px;
      background: #fff;
      padding: 40px 0 40px 40px;
      border-radius: 4px;
    }
  }
</style>
