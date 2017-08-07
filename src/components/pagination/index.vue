<!-- 分页组件 -->
<template>
  <div class="i-pagination">
    <el-pagination @curent-change="currentChange" :current-page="currentPage" layout="prev, pager, next"
                   :total="total" :page-size="pageSize"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      currentPage: {
        default: 1,
        type: Number
      },
      total: {
        default: 1000,
        type: Number
      },
      pageSize: {
        default: 50,
        type: Number
      }
    },
    methods: {
      currentChange (val) {
        this.$emit('current-change', val)
      }
    }
  }
</script>

<style lang="scss">
  .i-pagination {
    text-align: center;
    margin-top: 25px;
    .el-pagination {
      button {
        width: 36px;
        height: 36px;
        border: none;
      }
      .el-pager li {
        width: 36px;
        line-height: 36px;
        height: 36px;
        border: none;
        background: none;
        font-size: 18px;
        font-weight: 500;
        color: #cdcddf;
        &.active {
          color: #4993fa;
        }
      }
    }
  }
</style>
