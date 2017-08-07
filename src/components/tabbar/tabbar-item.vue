<!-- 添加注释 -->
<template>
  <router-link :to="link" class="i-tabbar-item" :class="{ 'is-active': isActive }">{{ name }}</router-link>
</template>

<script>
  export default {
    props: {
      link: String,
      name: String
    },
    computed: {
      isActive () {
        return this.$route.path === this.link
      }
    }
  }
</script>
