<template>
  <div class="i-tab-item" :class="selected ? 'i-tab-selected' : ''" @click="onItemClick">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      index: {
        type: Number,
        default: -1
      }
    },
    methods: {
      onItemClick () {
        let $parent = this.$parent
        let children = $parent.$children
        for (let i = 0; i < children.length; i++) {
          children[i].selected = false
        }
        this.selected = true
      },
      updateIndex () {
        let $parent = this.$parent
        let children = $parent.$children
        for (let i = 0; i < children.length; i++) {
          if (children[i].index === this.$parent.activeIndex) {
            children[i].selected = true
          } else {
            children[i].selected = false
          }
        }
      }
    },
    data () {
      return {
        selected: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.updateIndex()
      })
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-tab-item {
    display: inline-block;
    font-size: 14px;
    padding: 0 21px;
    line-height: @--topmenu-height;
    color: #A9AAC4;
    a {
      color: #A9AAC4;
      &:hover {
        color: #5399FB;
      }
    }
    &:hover, &.i-tab-selected {
      color: #5399FB;
      a {
        color: #5399FB;
      }
    }
  }
</style>
