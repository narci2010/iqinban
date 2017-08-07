<!-- 学生详细-默认 -->
<template>
  <div class="i-container" :style="style">
    <i-tabbar ref="tabbar">
      <i-tabbar-item link="/classroom/detail" name="教学计划"></i-tabbar-item>
      <i-tabbar-item link="/classroom/detail/info" name="基本信息统计"></i-tabbar-item>
      <i-tabbar-item link="/classroom/detail/record" name="教学记录"></i-tabbar-item>
      <i-tabbar-item link="/classroom/detail/doc" name="文档"></i-tabbar-item>
    </i-tabbar>
    <i-menubar title="某某某班" sup="班级类型" :has-tabbar="hasTabbar" :show-filter="false">
      <span slot="ctrl">
        <el-button size="small" class="i-button__ctrl i-button__primary">新增学生</el-button>
        <el-button size="small" class="i-button__ctrl i-button__danger">删除</el-button>
      </span>
    </i-menubar>
    <router-view></router-view>
  </div>
</template>

<script>
  import ITabbar from '@/components/tabbar/tabbar'
  import ITabbarItem from '@/components/tabbar/tabbar-item'
  import IMenubar from '@/components/menubar'
  import ISection from '@/components/section'
  import { mapGetters } from 'vuex'
  import { scrollMixins } from '@/mixins/scroll'
  import src from '@/assets/img/ico.jpg'

  export default {
    name: 'ClassroomDetail',
    components: {
      ITabbar,
      ITabbarItem,
      IMenubar,
      ISection
    },
    mixins: [scrollMixins],
    computed: {
      style () {
        let color = '#f5f5f7'
        document.body.style.background = `${color}`
        return ({ background: `${color}` })
      },
      ...mapGetters([
        'card'
      ])
    },
    methods: {
      showPopover () {
        this.text = '隐藏名片'
      },
      hidePopover () {
        this.text = '显示名片'
      }
    },
    data () {
      return {
        text: '显示名片',
        src: src
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-carte {
    padding: 30px 40px;
    text-align: center;
    > img {
      display: inline-block;
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
    > h1 {
      font-size: 26px;
      line-height: 26px;
      margin-top: 20px;
      color: #0d2039;
    }
    > p {
      font-size: 20px;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 30px;
      color: rgba(54, 72, 97, 0.9);
    }
  }
</style>
