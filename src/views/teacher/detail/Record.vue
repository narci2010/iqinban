<!-- 教学记录 -->
<template>
  <div class="i-content is-menubar is-tabbar">
    <i-layout>
      <div slot="left">
        <i-step v-for="i in 2" :key="i"></i-step>
      </div>
      <div slot="right">
        <div class="i-right__title">筛选条件</div>
        <a href="javascript:" class="i-right__clear">清空</a>
        <div class="i-right__group" v-for="(item, index) in filters" :key="index">
          <div class="i-right__group-title">{{ item.label }}</div>
          <el-checkbox-group>
            <el-checkbox v-for="check in item.items" :label="check.label" :key="check.value">{{ check.label }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </i-layout>
  </div>
</template>

<script>
  import ILayout from '@/components/layout'
  import IStep from '@/components/step'
  import { mapGetters } from 'vuex'

  export default {
    name: 'TeacherDetailRecord',
    components: {
      ILayout,
      IStep
    },
    computed: {
      ...mapGetters([
        'filters'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base";

  .i-right {
    &__title {
      font-size: 14px;
      font-weight: 500;
      color: #0d2039;
      margin-bottom: 25px;
      float: left;
    }
    &__clear {
      font-size: 14px;
      font-weight: 500;
      color: #4993fa;
      float: right;
    }
    &__group {
      @extend .clearfix;
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      &-title {
        font-size: 14px;
        color: #1e2836;
        margin-bottom: 10px;
      }
      .el-checkbox {
        display: block;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        &+.el-checkbox {
          margin-left: 0;
        }
      }
    }
  }
</style>
