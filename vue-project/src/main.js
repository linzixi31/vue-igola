import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/css/style.css'
// import './assets/iconfont/iconfont.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import $ from 'jquery'
import Mint from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios';

import store from './vuex/store';
import {Lazyload} from "mint-ui";
Vue.use(Lazyload, {
	  preLoad: 2,
	  loading: './src/assets/img/timg.gif',
	  attempt: 1,
	})
Vue.use(VueAxios, axios)
Vue.use(Mint);
new Vue({
  	el: '#app',
  	router,
  	store,
 	render: h => h(App)
})
