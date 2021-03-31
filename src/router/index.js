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

export default router
