<!-- 添加注释 -->
<template>
  <div class="i-calendar">
    <div class="i-calendar__header">
      <a href="javascript:" class="i-calendar__prev" @click="prev">上一周</a>
      <div class="i-calendar__title">
        <input type="text" v-model="year" name="year" id="year" @input="changeYear"><label for="year">年</label>
        <input type="text" v-model="month" name="month" id="month" @input="changeMonth"><label for="month">月</label>
      </div>
      <a href="javascript:" class="i-calendar__next" @click="next">下一周</a>
    </div>
    <div class="i-calendar__week">
      <span v-for="(item, index) in weeks" :key="index" :class="{'is-active': index === day}">{{ item }}</span>
    </div>
    <div class="i-calendar__section">
      <span v-for="i in 7" :key="i" :class="{'is-active': i - 1 === day}"></span>
    </div>
    <div class="i-calendar__side">
      <span v-for="i in items.length">{{ i }}</span>
    </div>
    <div class="i-calendar__body">
      <div class="i-calendar__row" v-for="i in 7" :key="i">
        <div class="i-calendar__cell" :class="{'is-active': Math.floor(Math.random() * 3) === 1}" @click="cellClick(item)" v-for="(item, index) in items" :key="index">
          <span>课程名一</span>
          <span>课程二</span>
          <span>课程名三</span>
          <span>课程名四和六</span>
          <p>共10节</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import c from './calendar'
  import _ from 'lodash'

  export default {
    name: 'Calendar',
    props: {
      items: Array
    },
    methods: {
      changeYear: _.debounce(function () {
        c.setYear(this.year)
        this.change()
      }, 1000),
      changeMonth: _.debounce(function (val) {
        c.setMonth(this.month)
        this.change()
      }, 1000),
      prev () {
        c.transWeek(-1)
        this.change()
      },
      next () {
        c.transWeek(1)
        this.change()
      },
      change () {
        this.year = c.getYear()
        this.month = c.getMonth()
        this.$emit('on-change', c.getYear(), c.getMonth())
      },
      cellClick (item) {
        this.$emit('cell-click', item)
      }
    },
    data () {
      return {
        year: c.getYear(),
        month: c.getMonth(),
        weeks: c.weeks,
        today: c.formatDate(),
        day: c.getDay()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-calendar {
    background: $calendar-background;
    border-radius: $calendar-border-radius;
    overflow: hidden;
    &__header {
      @extend .clearfix;
      padding: $calendar-header-padding 0;
      text-align: center;
    }
    &__prev {
      float: left;
      position: relative;
      margin-left: $calendar-header-margin;
      color: $calendar-header-color;
      font-size: $calendar-header-fontsize;
      &:before {
        position: absolute;
        content: '';
        border-color: transparent;
        border-style: solid;
        border-width: 6px;
        border-left-width: 0;
        border-right-color: $calendar-arrow-color;
        left: -15px;
        top: 7px;
      }
    }
    &__next {
      position: relative;
      float: right;
      margin-right: $calendar-header-margin;
      color: $calendar-header-color;
      font-size: $calendar-header-fontsize;
      &:after {
        position: absolute;
        content: '';
        border-color: transparent;
        border-style: solid;
        border-width: 6px;
        border-right-width: 0;
        border-left-color: $calendar-arrow-color;
        right: -15px;
        top: 7px;
      }
    }
    &__title {
      font-size: $calendar-header-fontsize;
      color: $calendar-header-color;
      display: inline-block;
      input {
        width: 46px;
        padding: 0 5px;
        font-size: $calendar-header-fontsize;
        border: 1px solid transparent;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: none;
        text-align: right;
        color: $calendar-header-color;
        transition: all .3s linear;
        &:focus {
          border-radius: 2px;
          border: solid 1px #94a5bd;
          color: #9e9ebc;
          text-align: center;
        }
        &[name="month"] {
          width: 27px;
        }
      }
    }
    &__week {
      margin-left: $calendar-side-width;
      @extend .clearfix;
      > span {
        width: 1 / 7 * 100%;
        text-align: center;
        float: left;
        position: relative;
        font-size: $calendar-week-fontsize;
        color: $calendar-week-color;
        margin: 5px 0;
        &.is-active {
          color: $calendar-week-active-color;
        }
      }
    }
    &__section {
      background: $calendar-section-background;
      height: $calendar-section-height;
      padding-left: $calendar-side-width;
      > span {
        width: 1 / 7 * 100%;
        float: left;
        height: $calendar-section-height;
        &.is-active {
          background: $calendar-section-active-background;
        }
      }
    }
    &__side {
      width: $calendar-side-width;
      float: left;
      position: relative;
      border-radius: $calendar-border-radius;
      > span {
        display: block;
        height: $calendar-cell-height + $calendar-cell-padding;
        line-height: $calendar-cell-height + $calendar-cell-padding;
        background: $calendar-side-background;
        font-size: $calendar-side-fontsize;
        text-align: center;
        &:last-child {
          height: $calendar-cell-height + $calendar-cell-padding * 2;
        }
      }
    }
    &__body {
      margin-left: $calendar-side-width;
      padding: $calendar-cell-padding 0 0 $calendar-cell-padding;
    }
    &__row {
      float: left;
      width: 1 / 7 * 100%;
      position: relative;
    }
    &__cell {
      height: $calendar-cell-height;
      border-radius: $calendar-cell-border-radius;
      box-sizing: border-box;
      margin: 0 $calendar-cell-padding $calendar-cell-padding 0;
      overflow: hidden;
      cursor: default;
      visibility: hidden;
      &.is-active {
        cursor: pointer;
        border: 1px solid $calendar-cell-border-color;
        visibility: visible;
      }
      span {
        font-size: $calendar-cell-fontsize;
        display: block;
        padding-left: $calendar-content-padding;
        color: $calendar-cell-color;
        line-height: ($calendar-cell-height - $calendar-cell-bot-height) / 4;
      }
      p {
        height: $calendar-cell-bot-height;
        line-height: $calendar-cell-bot-height;
        color: $calendar-cell-bot-color;
        margin: 0;
        background: $calendar-cell-background;
        font-size: $calendar-cell-fontsize;
        padding-left: $calendar-content-padding;
      }
    }
  }
</style>
