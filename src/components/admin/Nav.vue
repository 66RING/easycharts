<template>
  <a-layout-sider breakpoint="lg" v-model="collapsed">
    <div class="log">
      <span>{{collapsed? "EC" : "EasyCharts"}}</span>
    </div>

    <a-menu theme="dark" mode="inline" @click="goToPage">

      <a-menu-item key="CodeEditor">
        <ToolOutlined /><span>代码编辑</span></a-menu-item>
      <a-menu-item key="Demo">
        <ToolOutlined /><span>查看示例</span></a-menu-item>
      <a-menu-item key="MakeCharts">
        <ToolOutlined /><span>制作图表</span></a-menu-item>
    </a-menu>

  </a-layout-sider>
</template>

<script>
import { 
  ToolOutlined
} from '@ant-design/icons-vue';

export default {
  components: {
	ToolOutlined,
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    goToPage(item) {
      this.$router.push('/'+item.key).catch((err) => err)
    }
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
</style>
