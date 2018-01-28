 import Vue from 'vue';
import VueX from 'vuex';
import payment from '../component/payment/payment.js'
import tc from '../component/search/tc.js'
import loginres from '../component/order/order.js'
import http from '../http/baseUrl.js';
import listVuex from './listVuex/listVuex.js';
import axios from 'axios';
Vue.use(VueX)
const state = {
	orderDate:{}
};

const mutations ={
	change(res){
		state.orderDate = res;
	}
}

const store = new VueX.Store({
    modules:{
        payment,
        loginres,
        listVuex
    },
    state,
    mutations
 
})

export default store