<template>

    <div class="login">

        
        <mt-header title="登录" id="l_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>


        <section class="l_main">
            <p> 
                <input type="text" placeholder="手机号码" class="tel"/> 
            </p>
            <p> 
                <input type="password" placeholder="密码" class="password"/> 
            </p>
            <p> 
                <button @click="checked">登录</button>
            </p>
            <p>     
                <router-link to="/register">
                    <span>新来的？去注册</span> 
                </router-link>
               
            </p>
            <p>通过以下第三方注册</p>
            <p><i class="iconfont icon-wechat"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-qq"></i></p>
            <p><i>微信</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>QQ</i></p>
        </section>
    </div>

  
</template>

<script>

import footernav from '../footernav/footernav';

import http from '../../http/baseUrl'


export default{
    components:{
        footernav
    },
    data(){
        return {
        }
    },
    methods:{

      checked(){
        this.axios.post(http.url+'/login',{telephone:$('.tel').val(),password:$('.password').val()}).then((res)=>{
            console.log(res);
            if(res.data.data.results.length!=0){
                localStorage.setItem('token',res.data.token);
                var storage=window.localStorage;
                storage.username=res.data.data.results[0].telephone;
                storage.password=res.data.data.results[0].password;
                location.href="#/my";
            }else{
                alert('密码错误')
                return false
            }
        })
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

}
    
</script>
<style type="text/css">
    @import './login.scss';

</style>
