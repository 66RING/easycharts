<!-- 管理主界面 -->
<template>
  <a-layout class='container'>
	<!-- 菜单栏 -->
    <Nav></Nav>
    <a-layout>
	  <!-- 顶栏 -->
      <a-layout-header class="header-btn">
        <Header></Header>
      </a-layout-header>
	  <!-- 具体内容 -->
      <a-layout-content>
        <router-view :key="$router.path"></router-view>
      </a-layout-content>
	  <!-- 地栏 -->
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
// 顶栏，导航栏目，底栏样式都封装在下列文件中
import Nav from '../components/admin/Nav'
import Footer from '../components/admin/Footer'
import Header from '../components/admin/Header'
export default {
  components: {Nav, Footer, Header}
}
</script>

<style scoped>

.container {
  height: 100%;
}

.header-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

</style>
