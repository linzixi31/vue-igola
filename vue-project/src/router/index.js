import Vue from 'vue';
import VueRouter from 'vue-router';
import Logincomponent from '../component/login/login.vue';
import my from '../component/my/my.vue'
import register from '../component/register/register.vue'
import registerSucess from '../component/registerSucess/registerSucess.vue'
import loginSucess from '../component/loginSucess/loginSucess.vue'
import online from '../component/my/online.vue'
import hobbySet from '../component/my/hobbySet.vue'
import i from '../component/loginSucess/i.vue'
import about from '../component/my/about.vue'


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
            path:'/loginSucess',
            component:loginSucess
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
        },{
            path:'/about',
            component:about
        }

    ]
})


export default router;