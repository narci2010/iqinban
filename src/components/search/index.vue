<!-- 搜索框 -->
<template>
  <div class="i-search" v-show="visible">
    <el-input
      style="width:700px;"
      placeholder=""
      icon="search"
      v-model="keyword"
      :on-icon-click="handleIconClick">
    </el-input>
    <i class="el-icon-close" @click="visible = false"></i>
    <div class="i-search-pane" v-show="showPane">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleIconClick () {
        console.log(this.keyword)
      }
    },
    watch: {
      show (val) {
        this.visible = val
      },
      visible (val) {
        this.$emit('on-show-change', val)
      }
    },
    data () {
      return {
        keyword: '',
        visible: this.show,
        showPane: false
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-search {
    position: fixed;
    z-index: 100000;
    left: 50%;
    width: 760px;
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    top: 100px;
    background: #fff;
    .box-shadow;
    padding: 5px;
    border-radius: 2px;
    .el-input__inner {
      height: 50px;
      border-radius: 2px;
    }
    > i {
      padding: 16px 15px;
      margin-right: 5px;
      color: #BFCBDA;
      cursor: pointer;
      float: right;
    }
    .i-search-pane {
      .border-1px;
      margin-top: 10px;
      height: 300px;
      .clear;
      .clearfix;
    }
  }
</style>
