function load(component) {
  return () => import(`../components/${component}.vue`)
}

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: load('init'),
    meta: {
      title: '首页',
      keepalive: true
    }
  },
  {
    path: '/start',
    name: 'start',
    component: load('start'),
    meta: {
      title: '制作'
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: load('upload'),
    meta: {
      title: '上传'
    }
  }
]

export default routes
