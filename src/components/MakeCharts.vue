<template>
  <div>
	<splitpanes class="default-theme">
	  <pane>
		<h1>操作页面</h1>
		<CodeEditor
		  ref="jsonEditor"
		  @change="handleChange"
		  :value="code"
		/>

	  </pane>
	  <pane>
		<h1>预览页面</h1>
		<div style="width: 600px; height: 400px;" >
		  <v-chart ref="chart" class="chart" :option="options" />
		</div>
		<el-button type="primary" @click="handleSubmit">Submit</el-button>
	  </pane>
	</splitpanes>

  </div>
</template>

<script>
import VChart, { THEME_KEY } from "vue-echarts";
import CodeEditor from "./CodeEditor.vue"


import { ref, defineComponent, } from "vue";
import { options1, options2, list } from '../options.js'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
	Splitpanes,
	Pane,
	CodeEditor
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  setup: () => {
	const options = ref(options1)
    return { options };
  },
  mounted() {
  },
  computed: {
    editor() {
      // get current editor object
      return this.$refs.myEditor.editor
    }
  },
  methods: {
	handleSubmit() {
	  this.options = this.newOpt
	},
	handleChange(val) {
	  console.log("handleChange str:", val)
	  // string to json
	  try {
		let obj = JSON.parse(val)
		if (obj) {
		  this.newOpt = ref(obj)
		}
	  } catch (e) {
		this.$message.warning('请输入正确的 json')
		return
	  }

	}
  },
  data() {
	return {
	  idx:0,
	  // 保存最新参数
	  newOpt: "{}",
      code: '{\n\t"color":["blue"],\n\t"title":{"text":"ECharts 入门示例"},\n\t"tooltip":{},\n\t"legend":{"data":["销量"]},\n\t"xAxis":{"data":["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},\n\t"yAxis":{},\n\t"series":[{"name":"销量","type":"bar",\n\t"data":[5,20,36,10,10,20]}],\n\t"animationDuration":200\n}'
	}
  }
});
</script>

<style scoped>
</style>
