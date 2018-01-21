import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import listPage from '../component/listPage/listPage.vue';

Vue.use(VueRouter);

var router  = new VueRouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent,

        },{
        	path:'/listPage',
        	component:listPage
        }

    ]
})


export default router;