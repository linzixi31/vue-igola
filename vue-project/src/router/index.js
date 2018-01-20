import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import IndexComponent from "../component/index/index.vue";


Vue.use(VueRouter);

var router  = new VueRouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent
        },
        {
        	path:"/index",
        	component:IndexComponent
        }

    ]
})


export default router;