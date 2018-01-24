<template>
    <div class="m_register">
         <div class="ls_head" v-if="judge">
            <div class="box">
                <div class="box1">
                    <div class="usershow">
                        <span @click="get_i"><img src="../../assets/img/head.jpg" alt="" /></span>
                    </div>
                </div>
                <div class="box2">
                    <div class="username_box">{{username}}<br /><span @click="get_i">编辑&nbsp;&gt;</span></div>
                </div>
                
            </div>
            <div class="list">
                <div class="waiteGo" @click="waitGo">待出行 <br/> <i>{{noTravel}}</i></div>
                <div class="waiteGo" @click="get_order">我的订单 <br/><i>{{orderTotal}}</i></div>
                <div class="waiteGo">优惠券 <br/> <i>0</i></div>
                <div class="waiteGo">旅客 <br/>  <i>0</i></div>
            </div>      
        </div>

        <div class="m_head" v-if="!judge">
            <div class="box">
                <div class="box1">
                    <div class="usershow">
                        <span class="iconfont icon-user"></span>
                    </div>
                </div>
                <div class="box2"> 
                    <router-link to="/register">
                        <div class="z_register">
                            注册
                        </div>
                    </router-link>
                    <router-link to="/login">
                        <div class="z_login">
                            登录
                        </div>
                    </router-link>
                </div>
                
                
            </div>
            
        </div>


        <div class="m_content">
            <ul class="main">
                <li @click="get_online" ><span class="iconfont icon-msnui-state-online"></span>&nbsp;在线值机<span class="iconfont icon-arrow-right-copy"></span></li>
                <li @click="show"><span class="iconfont icon-xiazai46"></span>&nbsp;客服<span class="iconfont icon-arrow-right-copy"></span></li>
                <li @click="get_hobbySet">偏好设置<span class="iconfont icon-arrow-right-copy"></span></li>
                <li @click="my_popupShow">清理缓存<span class="iconfont icon-arrow-right-copy"></span></li>
                <li @click="get_feedback">意见与反馈<span class="iconfont icon-arrow-right-copy"></span></li>
                <li @click="get_about">关于iGola<span class="iconfont icon-arrow-right-copy"></span></li>
            </ul>
        </div>
        <div id="registerFoot">
            <footernav></footernav>
        </div>
        <mt-popup   v-model="popupVisible"  position="bottom" id="my_popup">
            <div><i class="glyphicon glyphicon-phone-alt"></i style="color:#fff;"> <br />热线电话</div>
            <div><i class="glyphicon glyphicon-comment"></i style="color:#fff;"> <br />在线客服</div>
            <div><i class="glyphicon glyphicon-envelope"></i style="color:#fff;"> <br />邮件反馈</div>
        </mt-popup>    
        <mt-popup   v-model="i_popupShow"  position="right" id="my_rightPop">
            <div><i class="glyphicon glyphicon-info-sign"></i> </div>
            <div>缓存即将被清理</div>
            <div><span @click="clear">取消</span><span @click="clear">继续</span></div>
        </mt-popup>    
         
        
    </div>
</template>

<script>
   
       
    import footernav from '../footernav/footernav';
    import http from '../../http/baseUrl.js'
   
       
        export default{
            data(){
                return{
                    judge:Boolean(window.localStorage.username),
                    username:window.localStorage.username,
                    popupVisible:false,
                    i_popupShow:false,
                    orderTotal:0,
                    noTravel:0
                }
            },
            components:{
                footernav
            },
            methods:{
                get_i:function(){
                    location.href="#/i"
                },
                get_online:function(){
                    location.href="#/online"
                },
                get_hobbySet:function(){
                    location.href="#/hobbySet"
                },
                get_about:function(){
                    location.href="#/about"
                },
                show:function(){
                    this.popupVisible=true;
                },
                my_popupShow:function(){
                    this.i_popupShow=true;
                },
                get_feedback:function(){
                    location.href="#/feedback"
                },
                clear:function(){
                    this.i_popupShow=false;
                },
                get_order:function(){
                    location.href="#/order"
                },
                waitGo:function(){
                    location.href="#/order?selected=2"
                }
            },
            mounted:function(){
                var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
                    document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
                    var scale = 1/window.devicePixelRatio;
                    var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
                    document.getElementById("vp").content = mstr;
                 
            },
            beforeRouteLeave(to,from,next){
                //console.log(333)
                document.getElementById("vp").content = ''
                document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
                document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
                // console.log(333)
                next()
            },
            beforeMount:function(){
                 var self=this;
                if(self.username){
                    this.axios.get(http.url+'/userHotelStatus?num=0&username='+self.username).then((response) => {
                        // console.log(response.data)
                        var _data=response.data.data.results[0];
                         // console.log(_data['count(*)'])
                    });
                    this.axios.get(http.url+'/userHotelStatus?num=1&username='+self.username).then((response) => {
                        // console.log(response.data)
                        var _data=response.data.data.results[0];
                        // console.log(_data['count(*)']);
                        self.noTravel=_data['count(*)']
                    })
                    this.axios.get(http.url+'/userHotelStatus?username='+self.username).then((response) => {
                        
                        var _data=response.data.data.results[0];
                        // console.log(_data['count(*)'])
                        self.orderTotal=_data['count(*)']
                    })
                }
               
                
            }
            


            
        }

</script>
<style>
    @import './my.scss';
    /*#registerFoot #footer .mint-tab-item-label a{padding:10px 0;line-height: 45px;}
    #registerFoot #footer>a>.mint-tab-item-label{font-size:0.402rem !important;}
    #registerFoot #footer>a>.mint-tab-item-icon{width:48px;height:48px;margin-bottom:2px;} */
    #registerFoot #footer .mint-tab-item-label a{padding:0.133333rem 0;line-height: 0.6rem;}
    #registerFoot #footer>a>.mint-tab-item-label{font-size:0.402rem !important;}
    #registerFoot #footer>a>.mint-tab-item-icon{width:0.64rem;height:0.64rem;margin-bottom:0.026667rem;} 
</style>