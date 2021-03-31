import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  // axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
