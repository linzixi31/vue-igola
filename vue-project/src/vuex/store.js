import Vue from 'vue';
import VueX from 'vuex';

import payment from '../component/payment/payment.js'

import http from '../http/baseUrl.js';
import axios from 'axios';
Vue.use(VueX)
const state = {
	orderDate:{},
	showSort:false,
	showStar:false,
	showScreen:false,
    switchShow:true,
	listData:[]
};
const mutations ={
	change(res){
		state.orderDate = res;
	},
	changPopStatus(ordershow,show){
		if(show == 'showSort'){
			state.showSort = true;
		}else if(show == 'showStar'){
			state.showStar = true;
		}else{
			state.showScreen = true;
		}
	},
	listDataLoad(upgrade,upgradeData){
		var data = [];
		var type = upgradeData[0].type;
		var url = http.url + '/' + upgradeData[0].type;
		axios.get(url,upgradeData[1]).then(response => {
			data= response.data.data.results;
			console.log(data);
			state.listData= data;
		}).catch(function (error) {
		    console.log(error);
		});
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