<template>
  <div class="i-checkbox" :class="button === 'link' ? 'i-checkbox-link' : ''">
    <div class="i-checkbox-label">{{ label }}</div>
    <div class="i-checkbox-pane-button" v-if="button === 'button'">
      <el-checkbox-button style="float: left;margin-right: 45px;"
                   :indeterminate="boolIndeterminate" v-model="boolCheckAll" @change="handleCheckAllChange">全部</el-checkbox-button>
      <el-checkbox-group v-model="checked" @change="handleCheckedChange">
        <el-checkbox-button v-for="item in items" :label="item" :key="item">{{ item }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div class="i-checkbox-pane-link" v-else-if="button === 'link'">
      <el-checkbox-button style="float: left;"
                   :indeterminate="boolIndeterminate" v-model="boolCheckAll" @change="handleCheckAllChange">全部</el-checkbox-button>
      <el-checkbox-group style="float: left" v-model="checked" @change="handleCheckedChange">
        <el-checkbox-button v-for="item in items" :label="item" :key="item">{{ item }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div class="i-checkbox-pane" v-else>
      <el-checkbox style="float: left;margin-right: 15px;"
                   :indeterminate="boolIndeterminate" v-model="boolCheckAll" @change="handleCheckAllChange">全部</el-checkbox>
      <el-checkbox-group style="float: left" v-model="checked" @change="handleCheckedChange">
        <el-checkbox v-for="item in items" :label="item" :key="item">{{ item }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      label: String,
      index: Number,
      button: {
        type: String,
        default: 'text'
      },
      isIndeterminate: {
        type: Boolean,
        default: true
      },
      checkAll: {
        type: Boolean,
        default: false
      },
      items: Array
    },
    methods: {
      handleCheckAllChange (event) {
        this.checked = event.target.checked ? this.items : []
        this.boolIndeterminate = false
        this.$emit('on-handle-check-all-change', this.checked)
      },
      handleCheckedChange (value) {
        let checkedCount = value.length
        this.boolCheckAll = checkedCount === this.items.length
        this.boolIndeterminate = checkedCount > 0 && checkedCount < this.items.length
        this.$emit('on-handle-checked-change', value)
      },
      handleCheckAllClear () {
        this.checked = []
        this.boolCheckAll = false
        this.boolIndeterminate = true
        this.$emit('on-handle-check-all-clear', this.index)
      }
    },
    watch: {
      isIndeterminate (val) {
        this.boolIndeterminate = val
      },
      boolIndeterminate (val) {
        this.$emit('on-indeterminate-change', [val, this.index])
      },
      checkAll (val) {
        this.boolCheckAll = val
      },
      boolCheckAll (val) {
        this.$emit('on-check-all-change', [val, this.index])
      }
    },
    data () {
      return {
        checked: [],
        boolIndeterminate: this.isIndeterminate,
        boolCheckAll: this.checkAll
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/v2/base";

  .i-checkbox {
    line-height: 36px;
    .clear;
    .clearfix;
    &.i-checkbox-link {
      margin-left: 10px;
      .i-checkbox-label {
        width: 95px;
      }
      .el-checkbox-button__inner {
        width: 60px;
      }
      .i-checkbox-pane-link {
        float: left;
        .el-checkbox-button {
          margin-right: 4px;
          &:nth-child(6) {
            margin-right: 0;
          }
        }
      }
    }
    .i-checkbox-label {
      float: left;
      width: 80px;
      text-align: left;
    }
    .i-checkbox-pane {
      float: left;
      margin-left: 12px;
    }
    .i-checkbox-pane-button, .i-checkbox-pane-link {
      float: left;
      position: relative;
      .el-checkbox-button {
        float: left;
        display: block;
        margin-right: 17px;
        &:nth-child(6) {
          margin-right: 0;
        }
        .el-checkbox-button__inner {
          border-radius: 2px;
          border: 1px solid #bfcbd9 !important;
        }
      }
    }
    .i-checkbox-pane-button {
      width: 100%;
      min-height: 85px;
      .el-checkbox-group {
        position: absolute;
        left: 105px;
        right: 0;
        .clear;
        .clearfix;
      }
      .el-checkbox-button {
        margin-bottom: 15px;
      }
    }
  }
</style>
