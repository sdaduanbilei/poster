import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/main.css'
import App from './App.vue'
import router from './router'
import VueDragResize from 'vue-drag-resize'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

Vue.use(ElementUI)
Vue.use(VueDragResize)
Vue.use(Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
