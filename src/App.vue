<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <MyChart :options="options"/> -->
  <Demo/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyChart from './components/MyChart.vue'
import Demo from './components/Demo.vue'
import options from './options.js'

export default {
  name: 'App',
  // 组测使用的组件
  components: {
    HelloWorld,
    MyChart,
	Demo,
  },
  data() {
	return {
	  options: options
	}
  }
}
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
