import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import IndexComponent from "../component/index/index.vue";

import ordercomponent from '../component/order/order.vue';

import detail from '../component/detail/detail.vue';


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
        },
        {
            path:'/order',
            component:ordercomponent
        },
        {
        	path:'/detail',
        	component:detail
        }

    ]
})


export default router;