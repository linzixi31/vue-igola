import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import my from '../component/my/my.vue'
import register from '../component/register/register.vue'
import registerSucess from '../component/registerSucess/registerSucess.vue'

import online from '../component/my/online.vue'
import hobbySet from '../component/my/hobbySet.vue'
import i from '../component/loginSucess/i.vue'
import about from '../component/my/about.vue'

import listPage from '../component/listPage/listPage.vue';

import IndexComponent from "../component/index/index.vue";
import ChoiceComponent from "../component/choice/choice.vue";
import ordercomponent from '../component/order/order.vue';

import detail from '../component/detail/detail.vue';

import orderInput from '../component/detail/orderInput.vue'

import payment from '../component/payment/payment.vue';

import paySuccess from "../component/payment/paySuccess.vue";

import publicSearch from '../component/publicSearch/publicSearch.vue';


Vue.use(VueRouter);

var router  = new VueRouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent

        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/registerSucess',
            component:registerSucess
        },
        {
            path:'/online',
            component:online
        }, 
        {
            path:'/hobbySet',
            component:hobbySet
        },
        {
            path:'/i',
            component:i
        },
        {
            path:'/about',
            component:about
        },
        {
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
            path:'/orderCom',
            name:'orderCom',
            component:orderInput
        },
        {
            path:'/payment',
            component:payment
        },
        {

            path:'/choice',
            component:ChoiceComponent
        },
        {
            path:'/paySuccess',
            component:paySuccess
        },
        {

        	path:'/publicSearch',
        	component:publicSearch
		},
		{
			path:'/choice',
			component:ChoiceComponent
		}

    ]
})


export default router;