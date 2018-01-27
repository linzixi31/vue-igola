<template>
	<div class="i">
        <!-- <header class="i_head">我</header> -->
        <mt-header title="我" id="i_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            
        </mt-header>
        <section class="i_main">
            <ul>
                <li>头像 <span><span class="get_i"><img src="../../assets/img/head.jpg" alt="" /></span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li>昵称 <span><span>{{nikename}}</span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li>性别 <span @click="set_gender"><span>{{gender}}</span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li>手机号码 <span><span>{{tel}}&nbsp;</span><i class="iconfont icon-arrow-right-copy"></i></span>  </li>
                <li>电子邮箱 <span><span>未设置</span><i class="iconfont icon-arrow-right-copy"></i></span>  </li>
                <li>密码 <span><span>更改</span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li class="clearfix"><span @click="quitShow">退出登录</span></li>
            </ul>   
        </section>
        <mt-popup   v-model="quitVisible"  position="right"  popup-transition="popup-fade" id="i_zjxpopup">
            <div><i class="iconfont icon-gantanhao"></i> </div>
            <div>你确定要退出吗？</div>
            <div><span @click="quit">是</span><span @click="unshow">否</span></div>
        </mt-popup>    
       
    </div>

</template>

<script type="text/javascript">
    import { MessageBox } from 'mint-ui';
    import http from '../../http/baseUrl.js'
	export default{
        data(){
            return {
                tel:window.localStorage.username,
                gender:'未设置',
                nikename:'未设置',
                password:'更改',
                quitVisible:false
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
        methods:{
            quit:function(){
                window.localStorage.username='';
                window.localStorage.password='';
                location.href='#/my';
                this.quitVisible=false;
            },
            set_gender:function(){
                // MessageBox.prompt('请输入').then(({ value, action }) => {
                //     console.log(value,action)
                // });
            },
            quitShow:function(){
                this.quitVisible=true;
            },
            unshow:function(){
                this.quitVisible=false;
            }

        },
        beforeMount:function(){
                var self=this;
                console.log(self.tel)
                if(self.tel){
                    this.axios.get(http.url+'/userDetails?username='+self.tel).then((response) => {
                        // console.log(response.data)
                        var _data=response.data.data.results[0];
                        // console.log(_data)
                        self.nikename=_data.nickname;
                        self.gender=_data.gender;
                        self.password=_data.password;
                    });
                   
                }
               
                
        }

	}

</script>



<style type="text/css">
    body,html{height:100%;}
    .clearfix::after{content:"";display:block;height:0;clear:both;overflow:hidden;visibility:hidden;zoom:1;}
        ul,li{list-style:none;padding:0;}
    #app{height:100%;}
    .i{height:100%;display:flex;flex-direction:column;}
    #i_head{height:1.933333rem;font-size:0.4533333rem;background:#0096FF;color:white;}
    #i_head>.mint-header-button a button{height:0.7rem;}
    #i_head .mint-button-icon .mintui{font-size:0.5rem;}
    .i_main{flex:1;}
    .i_main>ul>li{padding:0.6rem;font-size:0.4rem;border-bottom:1px solid #ccc;}
      
    .i_main>ul>li>span{float:right;}
    .i_main>ul>li>span>i{font-size:0.5rem;}

    .i_main li:nth-child(1){height:1.5rem;padding:0;line-height:1.5rem;padding-left:0.6rem;padding-right:0.6rem;}
    .i_main li:nth-child(1)>span{display:flex;height:1.5rem;line-height:1.5rem;text-align:center;}
    .i_main li:nth-child(1)>span>i{display:inline-block;height:1.5rem;line-height:1.5rem;}
    .i_main li:nth-child(1)>span .get_i{display:inline-block;width:1.5rem;height:1.5rem;font-size:0rem;text-align:center;line-height:1.5rem;padding:0.1rem;}
    .i_main li:nth-child(1)>span .get_i>img{vertical-align: baseline;width:1.3rem;height:1.3rem;border-radius:50%;text-align:center;vertical-align:baseline;}
        
    .i_main>ul>li:nth-child(7)>span{display:block;width:5rem;height:1rem;border:1px solid #666;border-radius:0.8rem;font-size:0.5rem;text-align:center;line-height:1rem;margin:0 auto;float:none;}
    .i_main>ul>li:nth-child(7){border-bottom:none;}
    .mint-msgbox-wrapper .mint-msgbox{height:6rem;font-size:0.5rem;}



    #i_zjxpopup{width:100%;height:100%;background:rgba(0,0,0,0.5);padding-top:4rem;}
    #i_zjxpopup div{text-align:center;}
    #i_zjxpopup>div:nth-child(1)>i{font-size:2rem;color:#f00;}
    #i_zjxpopup>div:nth-child(2){font-size:0.5rem;color:#fff;line-height:1rem;}
    #i_zjxpopup>div:nth-child(3){margin-top:1rem;}
    #i_zjxpopup>div:nth-child(3)>span{display:inline-block;width:3rem;height:1rem;border:1px solid #fff;border-radius:0.5rem;text-align:center;line-height:1rem;font-size:0.5rem;color:#fff;}
    #i_zjxpopup>div:nth-child(3)>span:nth-child(2){background:#006DD9;margin-left:1rem;}

        
            
</style>