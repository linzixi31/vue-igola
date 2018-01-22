<template>

    <div class="login">
        <header class="l_head">
            <p><span class="iconfont icon-fanhui"></span></p>
            <p><span class="lg">登录</span></p>
            <p><span class="d_login">动态码登录</span></p>
        </header>
        <section class="l_main">
            <p> 
                <input type="text" placeholder="手机号码/电子邮箱" class="tel"/> 
            </p>
            <p> 
                <input type="password" placeholder="密码" class="password"/> 
            </p>
            <p> 
                <button @click="submit">登录</button>
            </p>
            <p>     
                <router-link to="/register">
                    <span>新来的？去注册</span> 
                </router-link>
               
            </p>
            <p>通过以下第三方注册</p>
            <p><i class="iconfont icon-weixin"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-qq"></i></p>
            <p><i>微信</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>QQ</i></p>
        </section>
    </div>

  
</template>
<script type="text/javascript">
var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
  //物理像素*设备像素比=真实像素
  document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
  // 把屏幕的倍率缩小到N分之一（N是window.devicePixelRatio）
  var scale = 1/window.devicePixelRatio;
  var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
  document.getElementById("vp").content = mstr;
</script>
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
      submit:function(){

        this.axios.get(http.url+'/login').then((response) => {
            console.log(response)
            var _data=response.data.data.results;
            console.log(response.data.data.results)
            var _tel=$('.tel').val();
            var _pass=$('.password').val();
            console.log(_tel,_pass)
            _data.map(function(item){
                if(item.telephone===_tel && item.password===_pass){
                    alert('登录成功');

                    if(window.localStorage){
                        var storage=window.localStorage;
                        storage.username=_tel;
                        storage.password=_pass;

                    }else{
                       
                    }


                    location.href="#/my";
                    return;
                }
            })


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
