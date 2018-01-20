import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import detail from '../component/detail/detail.vue';

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
        }

    ]
})


export default router;