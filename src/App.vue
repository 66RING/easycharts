<template>
  <VEcharts></VEcharts>
  <!-- <Demo/> -->
</template>

<script>
import VEcharts from './components/VEcharts.vue'
import Demo from './components/Demo.vue'
// import { defineComponent } from "vue";

export default{
  name: 'App',
  // 注册使用的组件
  components: {
    VEcharts,
	Demo,
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
