<!-- 排序器 -->
<template>
  <el-popover
    placement="bottom"
    title=""
    width="112"
    :offset="30"
    trigger="click"
    v-if="isPopover"
    popper-class="i-popover i-popover__small">
    <div class="i-popover__content">
      <slot></slot>
    </div>
    <div class="i-sortable" slot="reference" :class="{ 'is-ascending': state === 'ascend', 'is-descending': state === 'descend' }">
      {{ label }}
    </div>
  </el-popover>
  <div class="i-sortable" @click="change" v-else :class="{ 'is-ascending': state === 'ascend', 'is-descending': state === 'descend' }">
    {{ label }}
  </div>
</template>

<script>
  export default {
    name: 'Sortable',
    props: {
      label: String,
      isPopover: {
        type: Boolean,
        default: true
      },
      status: {
        type: String,
        default: 'normal'
      }
    },
    methods: {
      change () {
        if (this.state === 'normal') {
          this.state = 'ascend'
        } else if (this.state === 'ascend') {
          this.state = 'descend'
        } else {
          this.state = 'normal'
        }
        this.$emit('on-change', this.state)
      }
    },
    watch: {
      status (val) {
        this.state = this.allowlist.find(x => x === val)
        if (this.state === undefined) this.state = 'normal'
      }
    },
    data () {
      return {
        allowlist: ['ascend', 'descend', 'normal'],
        state: 'normal'
      }
    },
    mounted () {
      this.state = this.allowlist.find(x => x === this.status)
      if (this.state === undefined) this.state = 'normal'
    }
  }
</script>

<style lang="scss" scoped>
  .i-sortable {
    position: relative;
    &:before, &:after {
      position: absolute;
      content: '';
      right: -15px;
      border-top: none;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #97a8be;
    }
    &:after {
      border-top: 4px solid #97a8be;
      border-bottom: none;
      top: 10px;
    }
    &.is-ascending {
      &:before {
        border-bottom-color: #0e213a;
      }
    }
    &.is-descending {
      &:after {
        border-top-color: #0e213a;
      }
    }
  }
</style>
