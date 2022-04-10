import Admin from '../views/Admin.vue'

// 页面路由组件
import Index from '../components/admin/Index.vue'

import Demo from '../components/Demo.vue'
import MakeCharts from '../components/MakeCharts.vue'
import CodeEditor from '../components/CodeEditor.vue'

import Members from '../components/Members.vue'

// 配置路由信息
export default [
  {
    path: '/',
    name: 'admin',
    component: Admin,
    children: [
      { path: 'index', component: Index},
      { path: 'demo', component: Demo},
      { path: 'MakeCharts', component: MakeCharts},
      { path: 'CodeEditor', component: CodeEditor},


      { path: 'Members', component: Members},
    ]
  }
]

