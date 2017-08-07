<!-- checkbox -->
<template>
  <div class="i-checkbox" :class="{ 'i-checkbox__split': split, 'i-checkbox__button': type === 'button' }">
    <span class="i-checkbox__label" :class="{ 'is-label': label !== undefined }">{{ label }}</span>
    <el-checkbox-button class="i-checkbox__first" :indeterminate="indeterminate" v-if="type === 'button'" style="margin-left:0;"
                        v-model="checkall" @change="handleCheckAllChange">全选</el-checkbox-button>
    <el-checkbox class="i-checkbox__first" :indeterminate="indeterminate" v-else
                 v-model="checkall" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checked" @change="handleCheckedCitiesChange" v-if="type === 'button'">
      <el-checkbox-button v-for="item in items" :label="item" :key="item">{{ item }}</el-checkbox-button>
    </el-checkbox-group>
    <el-checkbox-group v-model="checked" @change="handleCheckedCitiesChange" v-else>
      <el-checkbox v-for="item in items" :label="item" :key="item">{{ item }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      items: Array,
      checkAll: {
        default: true,
        type: Boolean
      },
      type: {
        default: 'text',
        type: String
      },
      checkedItem: Array,
      isIndeterminate: {
        default: true,
        type: Boolean
      },
      label: String,
      split: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      handleCheckAllChange (event) {
        this.checked = event.target.checked ? this.items : []
        this.indeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkall = checkedCount === this.items.length
        this.indeterminate = checkedCount > 0 && checkedCount < this.items.length
      }
    },
    data () {
      return {
        whitelist: ['text', 'button'],
        checkall: this.checkAll,
        indeterminate: this.isIndeterminate,
        checked: this.checkedItem
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";

  .i-checkbox {
    width: $checkbox-width;
    @extend .clearfix;
    margin: $checkbox-items-margin auto 0;
    &__button {
      .i-checkbox__label {
        line-height: 30px;
      }
    }
    &__label {
      float: left;
      width: $checkbox-label-width;
      color: $checkbox-color;
      font-size: $checkbox-fontsize;
      &.is-label ~ .el-checkbox-group {
        margin-left: $checkbox-label-width + $checkbox-offset;
      }
      & ~ .el-checkbox-group {
        margin-left: $checkbox-offset;
      }
    }
    &__first {
      float: left;
    }
    .el-checkbox {
      margin-left: $checkbox-check-margin;
      color: $checkbox-color;
      &.i-checkbox__first {
        margin-left: $checkbox-check-first-margin;
      }
    }
  }
</style>
<style lang="scss">
  .i-checkbox {
    .el-checkbox-button {
      margin-left: 20px;
      &:first-child {
        margin-left: 15px;
      }
      &:first-child, &:last-child {
        .el-checkbox-button__inner {
          border-radius: 2px;
        }
      }
      &__inner {
        padding: 0;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 48px;
        border-radius: 2px;
        border: solid 1px #9e9ebc;
        color: #9e9ebc;
      }
    }
    &__split {
      .i-checkbox__first {
        margin-right: 30px;
      }
      .el-checkbox-button {
        margin-bottom: 15px;
      }
      .el-checkbox-group {
        padding-left: 13px;
      }
    }
  }
</style>
