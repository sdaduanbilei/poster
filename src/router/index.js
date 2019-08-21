/**
 * Created by ebi on 2018/10/22.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})
export default router
