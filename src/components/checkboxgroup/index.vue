<template>
  <div class="i-checkbox-group">
    <div class="i-checkbox-clear" v-show="show">
      <el-button type="text" @click="handleCheckAllClear">清空</el-button>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleCheckAllClear () {
        let children = this.$children
        for (let i = 1; i < children.length; i++) {
          children[i].handleCheckAllClear()
        }
      }
    }
  }
</script>
<style lang="less">
  .i-checkbox-group {
    .i-checkbox-clear {
      line-height: 42px;
      text-align: right;
    }
  }
</style>
