 import Vue from 'vue';
import VueX from 'vuex';
import payment from '../component/payment/payment.js'
import tc from '../component/search/tc.js'
import loginres from '../component/order/order.js'
import http from '../http/baseUrl.js';
import axios from 'axios';
Vue.use(VueX)
const state = {
	orderDate:{},
	showSort:false,
	showStar:false,
	showScreen:false,
    switchShow:true,
	listData:[],
	addCustomer:false
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
			//console.log(data);
			state.listData= data;
		}).catch(function (error) {
		    console.log(error);
		});
	},
	saveHistory(save,history){
		var _id = history.id;
		var _hotelName = history.hotelName;
		var now = new Date();
		now.setDate(now.getDate()+7);
        var cookie = document.cookie;
		var arrAll = [];
		if(window.localStorage.username){
			var username = window.localStorage.username
			axios.get( http.url +'/userHistory',{params:{username:username,hName:_hotelName,date:now}}).then(response =>{
			}).catch(function(error){
				console.log(error);
			})
		}else{
			
			if(document.cookie){
		        cookie = cookie.split('; ');
		        cookie.forEach(function(item){
		            let arr = item.split('=');
		            if(arr[0]=='localHistory'){
		                arrAll = JSON.parse(arr[1]);
		            }
		        })
		        var newAll = arrAll.filter(function(item){
		        	return (item.hName != _hotelName);
		        })
		        newAll.push({hName:_hotelName});
		        document.cookie = "localHistory=" + JSON.stringify(newAll) + ';expires=' + now.toUTCString();
			}else{
				arrAll.push({hName:_hotelName});
				document.cookie = "localHistory=" + JSON.stringify(arrAll) + ';expires=' + now.toUTCString();
				console.log(arrAll,document.cookie);
			}
		}
	}
	

}
const store = new VueX.Store({
    modules:{
        payment,
        tc,
        loginres
    },
    state,
    mutations
 
})

export default store