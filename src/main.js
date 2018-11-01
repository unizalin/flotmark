// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import 'bootstrap';
import currencyFilter from './filters/currency'
import wenqu from '../static/js/wenqu'

Vue.use(wenqu)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
Vue.filter('currency', currencyFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
