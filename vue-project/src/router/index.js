import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';

import listPage from '../component/listPage/listPage.vue';

import IndexComponent from "../component/index/index.vue";
import ChoiceComponent from "../component/choice/choice.vue";
import ordercomponent from '../component/order/order.vue';

import detail from '../component/detail/detail.vue';
import payment from '../component/payment/payment.vue';
import publicSearch from '../component/publicSearch/publicSearch.vue';

Vue.use(VueRouter);

var router  = new VueRouter({
    routes : [
        {
            path:"/login",

            component: Logincomponent

        },{
        	path:'/listPage',
        	component:listPage
            
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
        },
        {
        	path:"/choice",
        	component:ChoiceComponent
        },
        {
            path:'/payment',
            component:payment
        },
        {
        	path:'/publicSearch',
        	component:publicSearch
        }

    ]
})


export default router;