<!-- 管理主界面 -->
<template>
  <el-container>
    <Nav></Nav>
    <el-container>
	  <!-- 顶栏 -->
      <Header/>

	  <!-- 主页面 -->
      <el-main>
		<router-view :key="$router.path"></router-view>
	  </el-main>

	  <!-- 底栏 -->
      <el-footer
	  background-color="#B3C0D1"
	  text-align="center"
	  font-size="30px">
	  软件工程大作业共同体</el-footer>
    </el-container>
  </el-container>
</template>

<script>
// 顶栏，导航栏目，底栏样式都封装在下列文件中
import Nav from '../components/admin/Nav.vue'
import Header from '../components/admin/Header.vue'
export default {
  components: {Nav, Header}
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
