<!-- 全部教材 -->
<template>
  <div class="i-material-pane i-student-plan">
    <i-menubar>
      <i-sortable title="按字母顺序排列"></i-sortable>
      <i-sortable title="按等级排列"></i-sortable>
      <i-sortable title="按类型排列"></i-sortable>
      <i-sortable title="按创建时间排列"></i-sortable>
    </i-menubar>
    <div class="i-material-list">
      <el-row :gutter="20">
        <el-col :span="8" v-for="i in 21" :key="i">
          <router-link to="/resource/detail" class="i-material-col">
            <div class="i-material-col-top">
              <i class="iconfont icon-picture"></i>
            </div>
            <div class="i-material-col-bottom">
              <h4>某某某某某某某教材</h4>
              <p>某某等级</p>
              <p>某某类型</p>
              <div>
                <span><em>10</em>个课件</span>
                <span><em>4</em>个试卷</span>
              </div>
              <p>创建时间：2017-06-08</p>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import IMenubar from '../../../components/menubar'
  import ISortable from '../../../components/sortable'

  export default {
    components: {
      IMenubar,
      ISortable
    }
  }
</script>
<style lang="less">
  @import "../../../assets/v2/base";
  @import "../../../assets/v2/icon";

  .i-material-pane {
    .i-material-col {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      position: relative;
      display: block;
      outline: none;
      box-shadow: 0 0 20px rgba(0,0,0,0.1) inset;
      &:hover {
        box-shadow: 0 0 1px rgba(0,0,0,0.1);
        .box-shadow-side;
      }
      .i-material-col-top {
        height: 180px;
        line-height: 180px;
        background: #EFEFF4;
        text-align: center;
        i {
          color: #CECEDD;
          font-size: 60px;
        }
      }
      .i-material-col-bottom {
        background: #fff;
        padding: 10px 10px 5px 10px;
        h4 {
          margin: 0 0 10px 0;
          font-size: 16px;
          color: #00194E;
          font-weight: normal;
        }
        p {
          color: #637183;
          font-size: 14px;
          margin: 0 0 5px 0;
        }
        div {
          margin-top: 20px;
          font-size: 14px;
          span {
            color: #637183;
            display: inline-block;
            margin-right: 10px;
          }
          em {
            color: #619EFA;
            font-style: normal;
          }
        }
      }
    }
    .i-material-list {
      .clear;
      .clearfix;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
</style>
