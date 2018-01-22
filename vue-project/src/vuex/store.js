import Vue from 'vue';
import VueX from 'vuex';
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

    },
    state,
    mutations
})

export default store