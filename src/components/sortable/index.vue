<template>
  <div class="i-sortable" @click="changeStatus" :id="id">
    <div class="i-sortable-title">{{ title }}</div>
    <div class="i-sortable-arrow">
      <i class="i-sortable-caret ascending"></i>
      <i class="i-sortable-caret descending"></i>
    </div>
  </div>
</template>
<script>
  import { toolMixins } from '../../mixins/tools'

  export default {
    mixins: [toolMixins],
    props: {
      title: String
    },
    methods: {
      changeStatus () {
        this.status += 1
        if (this.status === 3) this.status = 0
        let [$asc, $desc] = [
          document.querySelector('#' + this.id + ' .ascending'),
          document.querySelector('#' + this.id + ' .descending')
        ]
        // 触发器
        this.$emit('on-change', this.status)
        switch (this.status) {
          case 0:
            this.removeClass($desc, 'active')
            break
          case 1:
            this.addClass($asc, 'active')
            break
          case 2:
            this.removeClass($asc, 'active')
            this.addClass($desc, 'active')
            break
          default:
            break
        }
      }
    },
    data () {
      return {
        status: 0,
        id: 'i_sortable_' + this.uuid()
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";
  .i-sortable {
    float: left;
    position: relative;
    line-height: 20px;
    cursor: pointer;
    margin-left: 20px;
    .i-sortable-title {
      float: left;
      position: relative;
    }
    .i-sortable-arrow {
      float: left;
      position: relative;
      margin-left: 5px;
      margin-top: 4px;
      width: 20px;
      i {
        display: inline-block;
        width: 0;
        height: 0;
        border: 0;
        position: absolute;
        z-index: 2;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        &.ascending {
          border-bottom: 5px solid #97a8be;
          &.active {
            border-bottom-color: rgb(72, 87, 106);
          }
        }
        &.descending {
          border-top: 5px solid #97a8be;
          top: 8px;
          &.active {
            border-top-color: rgb(72, 87, 106);
          }
        }
      }
    }
  }
</style>
