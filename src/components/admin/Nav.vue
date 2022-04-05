<template>
  <!-- 侧边栏 -->
  <el-aside width="200px">
	<!-- 侧边栏菜单区域 -->
	<el-menu
	  router
	  active-text-color="#ffd04b"
	  background-color="#545c64"
	  text-color="#fff">
	  <!-- 菜单 -->
	  <!-- 示例页面 -->
	  <el-menu-item index="/demo">
	  <template #title>
		<el-icon><document/></el-icon>
		<span>示例</span>
	  </template>
	  </el-menu-item>

	  <!-- 制作图表页面 -->
	  <el-menu-item index="/MakeCharts">
	  <template #title>
		<el-icon><document/></el-icon>
		<span>图表</span>
	  </template>
	  </el-menu-item>

	  <!-- 代码编译页面 -->
	  <el-menu-item index="/CodeEditor">
	  <template #title>
		<el-icon><document/></el-icon>
		<span>编辑</span>
	  </template>
	  </el-menu-item>

	</el-menu>
  </el-aside>
</template>

<script>

import { Document } from '@element-plus/icons-vue'

export default {
  components: {
	Document,
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    // goToPage(item) {
	//   console.log(item)
    //   //this.$router.push('/'+item.key).catch((err) => err)
    // }
  }
}
</script>

<style scoped>

.log {
  height: 32px;
  margin: 16px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
  
</style>
