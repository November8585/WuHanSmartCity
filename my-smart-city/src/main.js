import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import 'mapbox-gl/dist/mapbox-gl.css'

// 全局注册ECharts组件
import ECharts from 'vue-echarts'
import 'echarts'
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)

// 引入工具类
import { utils } from './utils/common.js'
// 挂载工具类到Vue原型
Vue.prototype.$utils = utils
Vue.prototype.$baseUrl = import.meta.env.BASE_URL || "/";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')