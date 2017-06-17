<template>
  <div class="i-menubar">
    <div class="i-menubar-ico">
      <i class="i-icon-sort"></i>
    </div>
    <div class="i-menubar-pane">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less">
  @import "../../assets/v2/base";

  .i-menubar {
    background: #fff;
    border-radius: 2px;
    height: @--menubar-height;
    line-height: @--menubar-height;
    width: 100%;
    .clear;
    .clearfix;
    .i-menubar-ico {
      float: left;
      position: relative;
      margin-left: 20px;
      margin-top: 2px;
    }
    .i-menubar-pane {
      float: left;
      margin-top: 12px;
      margin-left: 20px;
    }
  }
</style>
