// import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

// Vue.use(VueRouter)

const error = () => import('../error/404.vue')
const home = () => import('../views/home.vue')
const index = () => import('../components/index.vue')
const Ly = () => import('../components/Ly.vue')

const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: index
      },
      {
        path: '/Ly',
        name: 'Ly',
        component: Ly
      }
    ]
  },
  {
    path: '*',
    name: 'error404',
    component: error
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if (to.path === '/login') {
    localStorage.removeItem('token')
  }
  const token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    next({ path: '/login' })
    alert('请先登录')
  } else {
    next()
  }
})

export default router
