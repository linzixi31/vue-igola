import axios from 'axios'
import http from '../../http/baseUrl'
const state = {
    orderdataset: [],
    hh:[]

}

const mutations = {
    refresh(_data, _data2){
        //mutation的两个形参第一个等于上面state；第二等于下面传参过来的参数
        //console.log(arguments)
        state.orderdataset = _data2;
    }
}

const actions = {

    refresh(context, _params){
            axios.post(http.url+_params.api, {id: _params.data.id}).then(response => {
                context.commit('refresh', response.data.data.results);
            }).catch(function (error) {
                console.log(error);
            }); 
    }
}

export default {
    state,
    mutations,
    actions
}