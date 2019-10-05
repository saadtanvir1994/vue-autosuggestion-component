import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleSuggest from 'vue-simple-suggest'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
