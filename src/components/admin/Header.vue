<template>
  <el-header>
    <el-button type="primary" @click="loginOut">退出</el-button>
  </el-header>
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
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

</style>
