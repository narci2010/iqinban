<!-- 添加注释 -->
<template>
  <transition name="messagebox-fade-in">
    <div class="i-messagebox__wrapper" v-show="visible">
      <div class="i-messagebox" :style="style">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MessageBox',
    props: {
      width: {
        default: '331px',
        type: String
      },
      height: {
        default: '231px',
        type: String
      },
      offsetTop: String,
      offsetLeft: String,
      visible: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      style () {
        let [offsetTop, offsetLeft] = [this.offsetTop, this.offsetLeft]
        if (offsetTop === undefined) offsetTop = 0
        if (offsetLeft === undefined) offsetLeft = 0
        return ({
          width: `${this.width}`,
          height: `${this.height}`,
          marginTop: `${this.offsetTop}`,
          left: `${this.offsetLeft}`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-messagebox {
    &__wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: $messagebox-zindex;
    }
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
    background: $messagebox-background-color;
    border-radius: $messagebox-border-radius;
    box-shadow: $messagebox-box-shadow;
  }

  .messagebox-fade-in-enter-active {
    transition: all .5s ease;
  }
  .messagebox-fade-in--leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .messagebox-fade-in-enter, .messagebox-fade-in-leave-to {
    transform: translateY(-100px);
    opacity: 0;
    z-index: -1;
  }
</style>
