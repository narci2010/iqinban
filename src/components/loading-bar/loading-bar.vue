<template>
  <transition name="fade">
    <div :class="classes" :style="outerStyles" v-show="show">
      <div :class="innerClasses" :style="styles"></div>
    </div>
  </transition>
</template>
<script>
  const prefixCls = 'ivu-loading-bar'

  export default {
    props: {
      color: {
        type: String,
        default: 'primary'
      },
      failedColor: {
        type: String,
        default: 'error'
      },
      height: {
        type: Number,
        default: 2
      }
    },
    data () {
      return {
        percent: 0,
        status: 'success',
        show: false
      }
    },
    computed: {
      classes () {
        return `${prefixCls}`
      },
      innerClasses () {
        return [
          `${prefixCls}-inner`,
          {
            [`${prefixCls}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
            [`${prefixCls}-inner-failed-color-error`]: this.failedColor === 'error' && this.status === 'error'
          }
        ]
      },
      outerStyles () {
        return {
          height: `${this.height}px`
        }
      },
      styles () {
        let style = {
          width: `${this.percent}%`,
          height: `${this.height}px`
        }

        if (this.color !== 'primary' && this.status === 'success') {
          style.backgroundColor = this.color
        }

        if (this.failedColor !== 'error' && this.status === 'error') {
          style.backgroundColor = this.failedColor
        }

        return style
      }
    }
  }
</script>
<style lang="scss">
  .ivu-loading-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;

    &-inner {
      transition: width .2s linear;
      border-radius: 3px;
      &-color-primary {
        background: linear-gradient(left, #fa7b21 0%, #fd5113 100%);
        background: -ms-linear-gradient(left, #fa7b21 0%, #fd5113 100%);
        background: -moz-linear-gradient(left, #fa7b21 0%, #fd5113 100%);
        background: -webkit-linear-gradient(left, #fa7b21 0%, #fd5113 100%);
      }
      &-failed-color-error {
        background-color: #ed3f14;
      }
    }
  }
</style>
