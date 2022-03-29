<template>
	<div>
		<codemirror
		  ref="myEditor"
		  :value="code"
		  :options="editorOption"
		  @input="CodeChange">
		</codemirror>
	</div>
</template>
<script>
import { codemirror } from 'vue-codemirror-lite'
// import base style
import 'codemirror/lib/codemirror.css'

export default {
  components: {
    codemirror
  },
  data () {
    return {
	  editorOption: {
		lineNumbers:true,
		mode: {name: "javascript", json: true},
	  },
      code: '{\n\t"color": "red",\n\t"size": 2.5,\n\t"msg": "hello"\n}'
    }
  },
  computed: {
    editor() {
      // get current editor object
      return this.$refs.myEditor.editor
    }
  },
  mounted() {
    // use editor object...
    // this.editor.focus()
    console.log('this is current editor object', this.editor)
  },
  methods: {
	CodeChange(changeObj) {
	  console.log("CodeChange str:", changeObj)
	  // string to json
	  //let obj = JSON.parse(changeObj)
	  //if (obj) {
	  //  console.log("CodeChange obj:", obj)
	  //}

	}
  }
}
</script>
<style>

</style>
