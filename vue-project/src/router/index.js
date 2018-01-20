import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import ordercomponent from '../component/order/order.vue';


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
        }    

    ]
})


export default router;