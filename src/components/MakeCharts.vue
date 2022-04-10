<template>
  <div>
	<splitpanes class="default-theme">
	  <pane>
		<h1>操作页面</h1>
		<!-- <CodeEditor/> -->
		<codemirror
		  :value="code"
		  :options="editorOption"
		  ref="myEditor"
		  @change="CodeChange">
		</codemirror>

	  </pane>
	  <pane>
		<h1>预览页面</h1>
		<div style="width: 600px; height: 400px;" >
		  <v-chart ref="chart" class="chart" :option="options" />
		</div>
		<el-button type="primary" @click="changeOpt">change</el-button>
	  </pane>
	</splitpanes>

  </div>
</template>

<script>
import VChart, { THEME_KEY } from "vue-echarts";
import CodeEditor from "./CodeEditor.vue"
import { codemirror } from 'vue-codemirror-lite'


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
    codemirror,
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
	// this.code = JSON.stringify(options1)
  },
  computed: {
    editor() {
      // get current editor object
      return this.$refs.myEditor.editor
    }
  },
  methods: {
	changeOpt() {
	  this.options = this.newOpt
	  // this.$refs.chart.clear()
	  // this.options = list[(this.idx%3)]
	  // this.idx++;
	},
	CodeChange(changeObj) {
	  
	  console.log("origin optons", JSON.stringify(this.options))
	  console.log("CodeChange str:", changeObj)
	  // string to json
	  let obj = JSON.parse(changeObj)
	  if (obj) {
	    console.log("CodeChange obj:", obj)
		this.newOpt = ref(obj)
	    // this.options = ref(obj)
	  }

	}
  },
  data() {
	return {
	  idx:0,
	  editorOption: {
		lineNumbers: true, // 是否显示行数
		mode: "application/json",  // 接受的类型，json xml....
		gutters: ["CodeMirror-lint-markers"], // 样式的宽度
		theme: "rubyblue", // 主题
		lint: true
	  },
	  newOpt: "{}",
      code: '{\n\t"color":["blue"],\n\t"title":{"text":"ECharts 入门示例"},\n\t"tooltip":{},\n\t"legend":{"data":["销量"]},\n\t"xAxis":{"data":["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},\n\t"yAxis":{},\n\t"series":[{"name":"销量","type":"bar",\n\t"data":[5,20,36,10,10,20]}],\n\t"animationDuration":200\n}'
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
