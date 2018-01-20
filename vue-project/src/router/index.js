import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import detail from '../component/detail/detail.vue';
import orderInput from '../component/detail/orderInput.vue'

Vue.use(VueRouter);

var router  = new VueRouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent,
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