import Vue from 'vue';
import VueX from 'vuex';
import payment from '../component/payment/payment.js'
Vue.use(VueX)

const state = {
    orderDate:{},
    switchShow:true
}

const mutations ={
    change(res){
        state.orderDate = res;
    },
    changeSwitchShow(){
        state.switchShow = false;
    }
}

const store = new VueX.Store({
    modules:{
        payment
    },
    state,
    mutations
 
})

export default store