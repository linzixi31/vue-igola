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
                <div class="waiteGo">待出行 <br/> <i>0</i></div>
                <div class="waiteGo">我的订单 <br/><i>0</i></div>
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
                <li @click="get_online"><span class="iconfont icon-msnui-state-online"></span>&nbsp;在线值机<span class="gt">&gt;</span></li>
                <li><span class="iconfont icon-xiazai46"></span>&nbsp;客服<span class="gt">&gt;</span></li>
                <li @click="get_hobbySet">偏好设置<span class="gt">&gt;</span></li>
                <li>清理缓存<span class="gt">&gt;</span></li>
                <li>意见与反馈<span class="gt">&gt;</span></li>
                <li @click="get_about">关于iGola<span class="gt">&gt;</span></li>
            </ul>
        </div>
        <div id="registerFoot">
            <footernav></footernav>
        </div>
             
       
         
        
    </div>
</template>

<script>
    // // 把尺寸放大N倍（N是window.devicePixelRatio）
    // var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
    // //物理像素*设备像素比=真实像素
    // document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
    // // 把屏幕的倍率缩小到N分之一（N是window.devicePixelRatio）
    // var scale = 1/window.devicePixelRatio;
    // var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
    // document.getElementById("vp").content = mstr;
       
    import footernav from '../footernav/footernav';
        
       
        export default{
            data(){
                return{
                    judge:Boolean(window.localStorage.username),
                    username:window.localStorage.username
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
            }
            // ,
            // beforeMount(){
            //     console.log(this)
            //     this.username=window.localStorage.username;
            // }


            
        }

</script>
<style>
    @import './my.scss';
    #registerFoot #footer .mint-tab-item-label a{padding:10px 0;line-height: 45px;}
    #registerFoot #footer>a>.mint-tab-item-label{font-size:0.402rem !important;}
    #registerFoot #footer>a>.mint-tab-item-icon{width:48px;height:48px;margin-bottom:2px;} 
</style>