<template>
  <div id="app">
    <i-header></i-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import IHeader from './components/header'

  export default {
    name: 'app',
    components: {
      IHeader
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/reset";
  @import "assets/scss/components";
  @import "assets/scss/icon";
</style>
