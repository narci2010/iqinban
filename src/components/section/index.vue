<!-- 添加注释 -->
<template>
  <div class="i-section">
    <span class="i-section__label">
      {{ label }}
      <span class="i-section__slot"><slot></slot></span>
    </span>
    <span class="i-section__value is-text" v-if="trueType === 'text'" :class="{ 'is-split': split }">{{ value }}</span>
    <span class="i-section__value is-link" v-else>
      <router-link :to="link">{{ value }}</router-link>
    </span>
    <span v-if="split === true" class="i-section__split"></span>
  </div>
</template>

<script>
  export default {
    name: 'Section',
    props: {
      label: String,
      value: String,
      type: {
        default: 'text',
        type: String
      },
      split: {
        default: false,
        type: Boolean
      },
      link: String // 当split为true时有效
    },
    data () {
      return {
        whitelist: ['text', 'link'],
        trueType: 'text'
      }
    },
    mounted () {
      this.trueType = this.whitelist.find(w => w === this.type)
      if (this.trueType === undefined) this.trueType = 'text'
    }
  }
</script>

<style lang="scss" scoped>
  .i-section {
    position: relative;
    text-align: left;
    &:last-child {
      .i-section__value {
        margin-bottom: 0;
      }
    }
    &__label {
      font-size: 14px;
      line-height: 17px;
      font-weight: 500;
      color: #0d2039;
      display: block;
      margin-bottom: 10px;
      clear: both;
      height: 17px;
    }
    &__slot {
      float: right;
      font-size: 14px;
      font-weight: 500;
      color: #4993fa;
      a {
        font-size: 14px;
        font-weight: 500;
        color: #4993fa;
      }
    }
    &__value {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 15px;
      display: block;
      &.is-text {
        color: rgba(54, 72, 97, 0.9);
      }
      &.is-link {
        a {
          color: #4993fa;
          text-decoration: underline;
        }
      }
    }
    &__split {
      display: block;
      height: 1px;
      margin: 30px -20px 30px;
      background: #cdcdde;
    }
  }
</style>
