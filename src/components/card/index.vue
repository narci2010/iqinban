<!-- card -->
<template>
  <div class="i-card">
    <div class="i-card__header">
      <div class="i-card__title">{{ title }}
        <slot name="sup"></slot>
      </div>
      <div class="i-card__slot">
        <slot name="button"></slot>
      </div>
    </div>
    <div class="i-card__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  .i-card {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    &__header {
      height: 32px;
      clear: both;
    }
    &__title {
      float: left;
      position: relative;
      font-size: 14px;
      color: #0d2039;
      line-height: 14px;
    }
    &__slot {
      float: right;
      position: relative;
    }
    &__body {
      &:before, &:after {
        content: '';
        display: table;
        clear: both;
      }
    }
  }
</style>
