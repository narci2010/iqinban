<template>
  <div class="i-calendar" :class="small ? 'i-small-calendar' : ''">
    <div class="i-calendar-header">
      <a class="i-calendar-link i-calendar-left" @click="prev">
        <i class="el-icon-caret-left"></i>
        <span>上一周</span>
      </a>
      <h2 class="i-calendar-title">{{ today }}</h2>
      <a class="i-calendar-link i-calendar-right" @click="next">
        <i class="el-icon-caret-right"></i>
        <span>下一周</span>
      </a>
    </div>
    <div class="i-calendar-pane">
      <div class="i-c-b-header">
        <div class="i-row">
          <div class="i-col-3" v-for="(week, key) in weeks" :key="key">
            <div class="i-c-b-h-item" :class="key === index ? 'active' : ''">
              <div class="i-c-b-h-item-inner">{{ week }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="i-calendar-side">
        <div class="i-c-side-item" v-for="i in list.length">{{ i }}</div>
      </div>
      <div class="i-calendar-body">
        <div class="i-c-b-items">
          <div class="i-row" v-for="course in list" :key="course.id">
            <div class="i-col-3" v-for="item in course.course" :key="item.id">
              <div class="i-c-b-item active" v-if="item.active" @click="onItemClick(item)">
                <div class="i-c-b-item-inner" v-html="item.text"></div>
              </div>
              <div class="i-c-b-item" v-else>
                <div class="i-c-b-item-inner" v-html="item.text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'calendar',
    componentName: 'calendar',
    props: {
      list: {
        type: Array,
        default: []
      },
      weeks: {
        type: Array,
        default: []
      },
      index: {
        type: Number,
        default: 0
      },
      today: {
        type: String,
        default: '1970年1月'
      },
      small: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      prev () {
        this.$emit('on-prev-week')
      },
      next () {
        this.$emit('on-next-week')
      },
      onItemClick (item) {
        this.$emit('on-item-click', item)
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/v2/base";

  .i-calendar {
    position: relative;
    overflow: hidden;
    background: #fff;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    .i-calendar-header {
      height: 75px;
      position: relative;
      .i-calendar-title {
        text-align: center;
        padding: 0;
        margin: 0;
        line-height: 75px;
      }
      .i-calendar-link {
        position: absolute;
        top: 0;
        line-height: 75px;
        cursor: pointer;
      }
      .i-calendar-left {
        left: 40px;
        i {
          float: left;
          line-height: 75px;
          margin-right: 5px;
          font-size: 12px;
          color: #0086FA;
        }
      }
      .i-calendar-right {
        right: 45px;
        i {
          float: right;
          line-height: 75px;
          margin-left: 5px;
          font-size: 12px;
          color: #0086FA;
        }
      }
    }
    &.i-small-calendar {
      .i-calendar-header {
        height: 60px;
        .i-calendar-title {
          line-height: 60px;
        }
        .i-calendar-link {
          line-height: 60px;
        }
        .i-calendar-left {
          i {
            line-height: 60px;
          }
        }
        .i-calendar-right {
          i {
            line-height: 60px;
          }
        }
      }
      .i-calendar-pane {
        .i-calendar-side {
          width: 70px;
          .i-c-side-item {
            height: 77px;
            line-height: 72px;
          }
        }
        .i-c-b-header {
          padding-left: 70px;
          font-size: 13px;
        }
        .i-calendar-body {
          left: 70px;
          .i-c-b-item {
            height: 76px;
            .i-c-b-item-inner {
              height: 72px;
              margin: 0 3px 3px 0;
              > span {
                line-height: 14px;
                padding-left: 9px;
                font-size: 10px;
              }
              > p {
                height: 17px;
                line-height: 17px;
                font-size: 10px;
              }
            }
          }
        }
      }
    }
    .i-calendar-pane {
      position: relative;
      &:after, &:before {
        content: ' ';
        display: table;
        clear: both;
      }
      .i-calendar-side {
        float: left;
        position: relative;
        width: 107px;
        background: #EBEBF2;
        .i-c-side-item {
          height: 110px;
          line-height: 105px;
          text-align: center;
          font-size: 18px;
        }
      }
      .i-c-b-header {
        height: 30px;
        padding-left: 107px;
        text-align: center;
        line-height: 30px;
        border-bottom: 4px solid #D8D8E6;
        .i-c-b-h-item {
          .i-c-b-h-item-inner {
            margin: 0 2px 0 4px;
          }
          height: 30px;
          float: left;
          width: 14.285714%;
          &.active {
            .i-c-b-h-item-inner {
              border-bottom: 4px solid #167ad7;
            }
          }
        }
      }
      .i-calendar-body {
        position: absolute;
        left: 107px;
        right: 0;
        .i-c-b-items {
          margin: 5px 0 0 5px;
          clear: both;
          &:before, &:after {
            clear: both;
            display: table;
            content: '';
          }
        }
        .i-c-b-item {
          width: 14.285714%;
          height: 109px;
          float: left;
          .box-sizing;
          position: relative;
          .i-c-b-item-inner {
            margin: 0 5px 5px 0;
            border-radius: 2px;
            height: 103px;
            overflow: hidden;
            position: relative;
            > span {
              display: block;
              line-height: 20px;
              padding-left: 9px;
              color: #647489;
            }
            > p {
              background: #DBDBE8;
              height: 23px;
              line-height: 23px;
              margin: 0;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding-left: 9px;
              color: #5C6679;
            }
          }
          &.active {
            .i-c-b-item-inner {
              font-size: 12px;
              cursor: pointer;
              border: 1px solid #D7D7E4;
            }
          }
        }
      }
    }
  }
</style>
