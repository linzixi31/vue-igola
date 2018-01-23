import axios from 'axios'
import http from '../../http/baseUrl'
const state = {
    orderdataset: [],
}

const mutations = {
    refresh(_data, _data2){
         console.log(arguments)
        state.orderdataset = _data2;
    }
}

const actions = {
    refresh(context, _params){
        axios.post(http.url+_params.api, {id: _params.data.id}).then(response => {
            context.commit('refresh', response.data.data.results);
        })   
    }
}

export default {
    state,
    mutations,
    actions
}