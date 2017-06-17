<template>
  <div class="i-courseware-card">
    <div class="i-courseware-ico" id="CourseWareIco" style="height: 184px">
      <i class="iconfont icon-picture"></i>
    </div>
    <div class="i-courseware-inner">
      <h3>约翰汤普森钢琴基础教程</h3>
      <i-label title="教材等级" content="英皇3级"></i-label>
      <i-label title="教材类型" content="某某类型"></i-label>
      <i-label title="教材简介" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></i-label>
      <i-label title="当前课件个数" content="10"></i-label>
      <i-label title="当前试卷个数" content="3"></i-label>
      <i-label title="创建时间" content="2017-06-14"></i-label>
    </div>
  </div>
</template>

<script>
  import ILabel from '../label'

  export default {
    components: {
      ILabel
    }
  }
</script>

<style lang="less">
  .i-courseware-card {
    .i-courseware-ico {
      display: table;
      text-align: center;
      background-color: #EFEFF4;
      width: 100%;
      i {
        display: table-cell;
        vertical-align: middle;
        font-size: 48px;
        color: #CECEDD;
      }
    }
    .i-courseware-inner {
      background: #ffffff;
      padding: 30px 33px;
      margin-bottom: 60px;
      h3 {
        margin: 0;
        font-weight: normal;
        padding: 0 0 32px;
      }
    }
  }
</style>
