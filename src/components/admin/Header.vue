<template>
  <a-button type="dashed" @click="loginOut">退出</a-button>
</template>

<script>
export default {
  methods: {
    loginOut() {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }

}
</script>

<style scoped>

</style>
