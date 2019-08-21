import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/main.css'
import App from './App.vue'
import router from './router'
import VueDragResize from 'vue-drag-resize'

Vue.use(ElementUI)
Vue.use(VueDragResize)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
