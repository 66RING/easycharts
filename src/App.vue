<template>
  <!-- 根据路由展示页面 -->
  <router-view />
</template>

<script>

export default{
  name: 'App',
  // 要用的组件需要先注册
  components: {
  },
  data() {
	return {
	}
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
