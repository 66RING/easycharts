<template>
  <div style="width: 600px; height: 400px;" >
	<v-chart ref="chart" class="chart" :option="options" />
	<button @click="changeOpt">changeOpt</button>
  </div>
</template>

<script>
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent, } from "vue";
import { options1, options2, list } from '../options.js'

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  setup: () => {
	const options = ref(options1)
    return { options };
  },
  methods: {
	changeOpt() {
	  this.$refs.chart.clear()
	  this.options = list[(this.idx%3)]
	  this.idx++;
	}
  },
  data() {
	return {
	  idx:0
	}
  }
});
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
