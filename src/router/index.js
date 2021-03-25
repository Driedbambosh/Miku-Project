import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const home = () => import('../views/home.vue')

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
    component: home
  }
]

const router = new VueRouter({
  routes
})

export default router
