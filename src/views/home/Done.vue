<!-- 代办事项 -->
<template>
  <div class="i-done">
    <el-row>
      <el-col :span="8" v-for="(item, index) in events" :key="index">
        <div class="i-done-header">
          <div class="i-done-header-left">
            {{ item.name }}<span>{{ item.number }}</span>
          </div>
          <el-popover
            placement="bottom"
            popper-class="i-popover"
            width="80"
            :offset="-30"
            trigger="click">
            <div class="i-t-d-popover">
              <a href="javascript:void(0)">全部忽略</a>
              <a href="javascript:void(0)">全部提醒</a>
            </div>
            <div class="i-done-header-right el-icon-more" slot="reference"></div>
          </el-popover>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" v-for="(event, index) in events" :key="index">
        <div class="i-tabs-list" :class="event.id === 3 ? 'i-tabs-noborder' : ''">
          <div class="i-tabs-item" v-for="item in event.list" :class="event.id === 1 ? 'i-tabs-padding' : ''">
            <h4>{{ item.title }}</h4>
            <span>{{ item.content }}</span>
            <span>{{ item.sub }}</span>
            <div class="i-tabs-item-grid">
              <img alt="user" src="../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
              <img alt="user" src="../../assets/img/3e44582895189ec04d7ab61670341baf.jpg">
            </div>
            <div class="i-tabs-item-bar">
              <div class="i-tabs-item-bar-left">
                {{ item.time }}
              </div>
              <div class="i-tabs-item-bar-right">
                <a href="javascript:void(0)">提醒</a>
                <a href="javascript:void(0)">忽略</a>
                <a href="javascript:void(0)">处理</a>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import done from '../../mock/home/done'

  export default {
    methods: {
      createEventData () {
        this.events = done.createEventData()
      }
    },
    mounted () {
      this.createEventData()
    },
    data () {
      return {
        events: []
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-done {
    width: 100%;
    background: #fff;
    padding-top: 20px;
    .i-done-header {
      height: 43px;
      margin: 0 20px;
      background: #EFEFF4;
      border-radius: 4px;
      clear: both;
      .i-done-header-left {
        float: left;
        line-height: 43px;
        padding-left: 10px;
        span {
          margin-left: 25px;
          display: inline-block;
          color: #4992FA;
        }
      }
      .i-done-header-right {
        float: right;
        margin-top: 2px;
        padding: 10px;
        cursor: pointer;
        transform: rotate(90deg);
        -ms-transform: rotate(90deg);
      }
    }
    .i-tabs-list {
      border-right: 1px solid #CDCDDE;
      .box-sizing;
      &.i-tabs-noborder {
        border: none;
      }
      .i-tabs-item {
        position: relative;
        margin: 20px;
        border-radius: 5px;
        padding: 10px;
        transition: all .5s;
        h4 {
          padding: 0;
          margin: 0;
          line-height: 32px;
        }
        span {
          display: block;
          color: #58667B;
          line-height: 24px;
        }
        .i-tabs-item-grid {
          margin: 10px 0;
          img {
            width: 32px;
            height: 32px;
            border-radius: 100%;
          }
        }
        &.i-tabs-padding {
          margin: 20px;
        }
        &:hover {
          background: #EFEFF4;
          .box-shadow;
        }
        .i-tabs-item-bar {
          width: 100%;
          &:after {
            content: '';
            display: table;
            clear: both;
          }
          .i-tabs-item-bar-left {
            float: left;
          }
          .i-tabs-item-bar-right {
            float: right;
            a {
              color: #A8A8C2;
              font-size: 14px;
              &:hover, &:active {
                color: #62A1F9;
              }
            }
          }
        }
      }
    }
  }
</style>
