<!-- 添加注释 -->
<template>
  <div class="i-layer__wrapper" v-show="visible">
    <transition name="layer-fade-in">
      <div class="i-layer" :class="cls" :style="style" v-show="visible">
        <div class="i-layer__title">{{ title }}</div>
        <div class="i-layer__body">
          <slot></slot>
        </div>
        <div class="i-layer__footer">
          <el-button class="i-button__done" style="width: 250px;height: 40px;" v-show="showDone" @click="onDone">{{ doneText }}</el-button>
          <el-button class="i-button__cancel" style="width: 250px;height: 40px;" :style="footer" v-show="showCancel" @click="onCancel">{{ cancelText }}</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Layer',
    props: {
      showDone: {
        type: Boolean,
        default: true
      },
      showCancel: {
        type: Boolean,
        default: true
      },
      background: {
        type: String,
        default: '#f6f9fa'
      },
      title: String,
      cls: {
        type: String,
        default: 'i-layer__default'
      },
      visible: {
        default: false,
        type: Boolean
      },
      offsetTop: [String, Number],
      width: [String, Number],
      height: [String, Number],
      unit: {
        default: 'px',
        type: String
      },
      doneText: {
        default: '保存',
        type: String
      },
      cancelText: {
        default: '取消',
        type: String
      },
      onShow: Function,
      onHide: Function
    },
    watch: {
      visible (val) {
        if (val === true) {
          document.body.style.overflow = 'hidden'
          this.$emit('on-show')
        } else {
          document.body.style.overflow = this.scroll
          this.$emit('on-hide')
        }
      }
    },
    methods: {
      onDone () {
        document.body.style.overflow = this.scroll
        this.$emit('on-done')
      },
      onCancel () {
        document.body.style.overflow = this.scroll
        this.$emit('on-cancel')
      }
    },
    computed: {
      footer () {
        if (this.showDone) {
          return ({ marginLeft: '50px' })
        } else {
          return ({})
        }
      },
      style () {
        let [width, height, offsetTop] = [this.width, this.height, this.offsetTop]
        if (width === undefined) width = 0
        if (height === undefined) height = 0
        if (offsetTop === undefined) offsetTop = 0
        let unit = this.allowList.find(i => i === this.unit)
        if (unit === undefined) unit = this.unit
        if (typeof width === 'number') width = width + unit
        if (typeof height === 'number') height = height + unit
        if (typeof offsetTop === 'number') offsetTop = offsetTop + unit
        return ({
          width: `${width}`,
          height: `${height}`,
          marginTop: `${offsetTop}`,
          background: `${this.background}`
        })
      }
    },
    data () {
      return {
        allowList: ['px', 'em', 'rem', '%', 'pt'],
        scroll: 'overflow'
      }
    },
    mounted () {
      this.scroll = document.body.style.overflow
      if (this.visible) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-layer {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto 50px;
    background: $layer-background-color;
    border-radius: $layer-border-radius;
    overflow: hidden;
    &__wrapper {
      background: $layer-wrapper-background-color;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: $layer-zindex;
      overflow-y: auto;
    }
    &__title {
      text-align: center;
      font-size: $layer-title-fontsize;
      color: $layer-title-color;
    }
    &__footer {
      text-align: center;
    }
    &__body {
      @extend .clearfix;
      margin: auto $layer-body-padding;
    }
    &__default {
      .i-layer__title {
        margin-top: 30px;
      }
      .i-layer__footer {
        margin-bottom: 32px;
      }
    }
  }
  .layer-fade-in-enter-active {
    transition: all .5s ease;
  }
  .layer-fade-in-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .layer-fade-in-enter, .layer-fade-in-leave-to {
    transform: translate3D(0, -100px, 0);
    opacity: 0;
  }
</style>
