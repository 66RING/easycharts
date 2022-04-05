<!-- 管理主界面 -->
<template>
  <el-container>
    <Nav></Nav>
    <el-container>
      <Header/>
      <el-main>
		<router-view :key="$router.path"></router-view>
	  </el-main>
      <!-- <el-footer>Footer</el-footer> -->
	  <Footer/>
    </el-container>
  </el-container>
</template>

<script>
// 顶栏，导航栏目，底栏样式都封装在下列文件中
import Nav from '../components/admin/Nav.vue'
import Footer from '../components/admin/Footer.vue'
import Header from '../components/admin/Header.vue'
export default {
  components: {Nav, Footer, Header}
}
</script>

<style scoped>

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
