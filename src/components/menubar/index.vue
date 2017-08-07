<!-- 添加注释 -->
<template>
  <div class="i-menubar" :class="cls" :id="id" :style="style">
    <div class="i-menubar__inner">
      <span class="i-menubar__title">{{ title }}</span>
      <span class="i-menubar__sup">{{ sup }}</span>
      <div class="i-menubar__ctrl">
        <span class="i-input__ctrl" v-if="showSearch">
          <i class="el-icon-search"></i>
          <el-input v-model="keyword" size="small" placeholder="" @change="onChange"></el-input>
        </span>
        <el-button v-if="showFilter" size="small" class="i-button__ctrl i-button__default" @click="onPanel">筛选器</el-button>
        <slot name="ctrl"></slot>
      </div>
    </div>
    <div class="i-menubar__pane">
      <slot name="pane"></slot>
    </div>
  </div>
</template>

<script>
  import { domMixins } from '../../mixins/dom'

  export default {
    name: 'MenuBar',
    mixins: [domMixins],
    props: {
      showSearch: {
        default: true,
        type: Boolean
      },
      showFilter: {
        default: true,
        type: Boolean
      },
      title: String,
      sup: String,
      hasTabbar: {
        default: false,
        type: Boolean
      },
      size: String // ['small', 'mini', 'large']
    },
    methods: {
      onPanel () {
        let $pane = document.querySelector(`#${this.id}`)
        this.toggleClass($pane, 'is-active')
        this.show = !this.show
        this.$emit('on-panel', this.show)
      },
      onChange () {
        this.$emit('on-change', this.keyword)
      }
    },
    computed: {
      cls () {
        let res = this.sizes.find(n => n === this.size)
        if (res !== undefined) {
          return `i-menubar__${res}`
        } else {
          return 'i-menubar__default'
        }
      },
      id () {
        return `menubar_${this.uuid()}`
      },
      style () {
        if (this.hasTabbar) {
          return ({ marginTop: '50px' })
        } else {
          return ({})
        }
      }
    },
    data () {
      return {
        keyword: '',
        sizes: ['large', 'mini', 'small'],
        show: false // 默认不展示
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-menubar {
    box-shadow: $menubar-box-shadow;
    background: $menubar-background;
    position: $menubar-position;
    z-index: $menubar-zindex;
    height: 60px;
    width: 100%;
    overflow: hidden;
    transition: height .5s ease-in-out;
    &.i-menubar__default {
      &.is-active {
        height: 235px;
        .i-menubar__pane {
          transform: scaleY(1);
        }
      }
    }
    &.i-menubar__large {
      &.is-active {
        height: 270px;
        .i-menubar__pane {
          transform: scaleY(1);
        }
      }
    }
    &__inner {
      @extend .clearfix;
      max-width: $main-width;
      margin: 0 auto;
      height: $menubar-height;
      @media screen and (max-width: 1279px) {
        margin: 0 $menubar-margin;
      }
    }
    &__title {
      float: left;
      line-height: $menubar-height;
      font-size: $menubar-title-fontsize;
      color: $menubar-title-color;
      font-weight: $menubar-title-fontweight;
    }
    &__sup {
      float: left;
      line-height: $menubar-height + 3;
      margin-left: $menubar-sup-margin;
      font-size: $menubar-sup-fontsize;
      color: $menubar-sup-color;
    }
    &__ctrl {
      float: right;
      margin-top: 17px;
    }
    &__pane {
      transform: scaleY(0);
      transform-origin: 50% 0;
      transition: all .5s ease-in-out;
    }
  }
</style>
