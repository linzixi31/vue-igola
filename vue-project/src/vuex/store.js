import Vue from 'vue';
import VueX from 'vuex';
import payment from '../component/payment/payment.js'
Vue.use(VueX)



const store = new VueX.Store({
    modules:{
        payment
    }
 
})

export default store