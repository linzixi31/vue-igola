import '../../assets/js/touche.js'
import '../../assets/js/p-pull-refresh.js'
import http from '../../http/baseUrl.js'
const state = {
    dataset: []

}

const mutations = {
    loginres(_data, _data2){
        //mutation的两个形参第一个等于上面state；第二等于下面传参过来的参数
        //console.log(arguments)
        state.dataset = _data2;
    }
}

const actions = {

    loginres(context,_parmas){
        var $statu = $('.loading-warp .text');

        $('.logcontainer').pPullRefresh({
              $el: $('.logcontainer'),
              $loadingEl: $('.loading-warp'),
              sendData:_parmas.sendData ,
              url: http.url+_parmas.urlh,
              autoHide:true,
              callbacks: {
                pullStart: function(){
                  $statu.text('松开开始刷新');
                },
                start: function(){
                  $statu.text('数据刷新中···');
                },
                success: function(response){
                  $statu.text('数据刷新成功！');
                  console.log(response)
                  context.commit('loginres', response.data.results);
                },
                end: function(){
                  $statu.text('下拉刷新结束');
                  $('.loading-warp').animate({'margin-top': -55}, 200);
                },
                error: function(){
                  $statu.html('刷新失败,autoHide:false,手动执行reset初始设置');
                }
              }
        });    
    }
}

export default {
    state,
    mutations,
    actions
}