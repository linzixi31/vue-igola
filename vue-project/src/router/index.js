import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';

import ordercomponent from '../component/order/order.vue';

import detail from '../component/detail/detail.vue';
import payment from '../component/payment/payment.vue';

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
            path:'/payment',
            component:payment
        }


    ]
})


export default router;