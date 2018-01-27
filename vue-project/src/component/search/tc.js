const state = {
    a:false
}

const mutations = {
    tc(_data, _data2){
        //mutation的两个形参第一个等于上面state；第二等于下面传参过来的参数
        //console.log(arguments)
        _data.a = _data2;
    }
    
}

const actions = {

    tc(context, _params){
           
       context.commit('tc',true);
          
    },
    changetcStatus(context,_params){
       context.commit('tc',false);
    	
    }
}

export default {
    state,
    mutations,
    actions
}