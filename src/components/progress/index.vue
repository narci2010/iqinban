<template>
  <div class="i-progress">
    <div class="i-progress-filename">
      <span>{{ filename }}</span>
      <div class="i-progress-percentage">{{ percentage }}%</div>
    </div>
    <el-progress :percentage="percentage" :show-text="false" :status="status"></el-progress>
    <div class="i-progress-toolbar">
      <span>{{ statusText }}</span>
      <el-button type="text">取消上传</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      filename: String,
      percentage: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        statusText: '文件正在上传',
        status: ''
      }
    }
  }
</script>

<style lang="less">
  .i-progress {
    position: relative;
    background: #EFEFF4;
    padding: 5px 20px;
    border-radius: 2px;
    margin-bottom: 20px;
    .i-progress-percentage {
      position: absolute;
      right: 20px;
      top: 3px;
      color: #20a0ff;
    }
    .i-progress-filename, .i-progress-toolbar {
      color: #40403F;
      font-size: 14px;
      span {
        margin-right: 10px;
        display: inline-block;
      }
    }
    .i-progress-filename {
      margin-bottom: 10px;
    }
    .i-progress-toolbar {
      margin-top: 10px;
    }
  }
</style>
