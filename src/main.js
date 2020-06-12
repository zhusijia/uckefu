// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store.js'

axios.defaults.baseURL = 'http://127.0.0.1:8999'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)


const router = new VueRouter({
  routes,
  mode : 'history'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
