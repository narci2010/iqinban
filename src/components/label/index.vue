<template>
  <div class="i-label">
    <div class="i-label-divide" v-if="showDivide && position === 'top'"></div>
    <p>{{ title }}</p>
    <a v-if="type === 'link'">{{ content }}</a>
    <span v-else>{{ content }}</span>
    <div class="i-label-divide" v-if="showDivide && position === 'bottom'"></div>
    <div class="i-label-link" v-if="showLink">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      position: {
        type: String,
        default: 'bottom'
      },
      content: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      showDivide: {
        type: Boolean,
        default: false
      },
      showLink: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="less">
  .i-label {
    position: relative;
    margin: 0 0 18px 0;
    padding: 0;
    > p {
      margin: 0 0 15px 0;
      font-size: 15px;
      line-height: 15px;
    }
    > span, > a {
      color: #6E7B8C;
      font-size: 14px;
      display: block;
      word-break: break-all;
    }
    > a {
      color: #8BB6FC;
      text-decoration: underline;
    }
    .i-label-divide {
      height: 1px;
      position: relative;
      margin: 30px 0 33px 0;
      &:before {
        position: absolute;
        content: '';
        left: -10px;
        right: -10px;
        height: 1px;
        background: #D7D7E4;
      }
    }
    .i-label-link {
      position: absolute;
      right: 0;
      top: -5px;
    }
  }
</style>
