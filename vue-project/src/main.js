import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/css/style.css'
// import './assets/iconfont/iconfont.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import login from './component/login/login.vue'
import footernav from './component/footernav/footernav.vue'
import $ from 'jquery'
import Mint from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios';
import store from './vuex/store'
import my from './component/my/my.vue'
import register from './component/register/register.vue'
Vue.use(VueAxios, axios)
Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/my',component:my},
        {path:'/register',component:register}

    ]
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
