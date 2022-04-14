<template>
  <Codemirror
    v-model:value="value"
    :options="cmOptions"
    border
    :height="500"
    @change="change"
  />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";

// language
import "codemirror/mode/javascript/javascript.js";

// theme
import "codemirror/theme/dracula.css";

import { ref } from "vue";
export default {
  components: { Codemirror },
  props: {
	// 接收value属性
    value: {
      type: String,
      default: '',
    },
    change: {
      type: Function,
    },
  },
  watch: {
	// 监听value属性变化
    value(val) {
      const editorValue = this.code
      if (val !== editorValue) {
        this.code = ref(val)
      }
    },
  },
  setup() {
    return {
      cmOptions: {
        mode: "application/json", // Language mode
        theme: "dracula", // Theme
        lineNumbers: true, // Show line number
		lint: true,
        smartIndent: true, // Smart indent
        indentUnit: 2, // The smart indent unit is 2 spaces in length
        foldGutter: true, // Code folding
        styleActiveLine: true, // Display the style of the selected row
      },
    };
  },
  mounted() {
	this.code = ref(this.value)
  }
};
</script>

<style scoped>
.Codemirror {
  height: 100%;
  width: 100%;
}
</style>
