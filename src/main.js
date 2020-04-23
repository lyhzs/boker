// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'


import qs from 'qs'
Vue.prototype.$http=axios
Vue.prototype.$http.defaults.baseURL ='http://localhost:3000/'  

axios.interceptors.request.use(
	config => {
		if (config.method === 'post') {
			config.data = qs.stringify(config.data)
		}
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)




Vue.use(ElementUI);


var less =require("less")

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
