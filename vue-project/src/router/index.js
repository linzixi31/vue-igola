import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';

import ordercomponent from '../component/order/order.vue';

import detail from '../component/detail/detail.vue';
import orderInput from '../component/detail/orderInput.vue'


Vue.use(VueRouter);

var router  = new VueRouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent

        },
        {
            path:'/order',
            component:ordercomponent
        },
        {
        	path:'/detail',
        	component:detail
        },
        {
            path:'/orderCom',
            name:'orderCom',
            component:orderInput
        }
    ]
})


export default router;