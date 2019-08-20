import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/main.css'
import App from './App.vue'
import VModal from 'vue-js-modal'

Vue.use(ElementUI)
Vue.use(VModal)

new Vue({
  render: h => h(App)
}).$mount('#app')
