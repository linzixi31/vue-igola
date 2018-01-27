<template>
   <div class="register">
        <!-- <header class="r_head">
            <p><span class="">&gt;</span></p>
            <p><span class="lg">注册</span></p>
            <p><span class="d_login"></span></p>
        </header> -->

        <mt-header title="注册" id="r_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <section class="r_main">
            <p> 
                <input type="text" placeholder="手机号码" class='tel'/> 
            </p>
            <p> 
                <input type="password" placeholder="密码" class="password"/> 
            </p>
            <p>点击"注册"即视为同意iGola的<a href="#">服务条款</a></p>
            <p> 
                <button @click="reg">注册</button>
            </p>

            <p>
                <router-link to="/login">
                    <span>已有账户？</span>
                </router-link>  
            </p>
            <p>通过以下第三方注册</p>
            <p><i class="iconfont icon-wechat"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-qq"></i></p>
            <p><i>微信</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>QQ</i></p>
        </section>
    </div>

</template>
<script type="text/javascript">
    import http from '../../http/baseUrl'

    export default{
        components:{
        
        },
        data(){
            return {

            }
        },
        methods:{
            reg:function(){
                
                
                

                var self=this;


                var $tel=$('.tel').val();
                var $pass=$('.password').val();
                var tel_regExp=/^[1][3,4,5,7,8][\d]{9}$/;
                var password_regExp=/^[\w]{8,16}$/;
                console.log(tel_regExp.test($tel),password_regExp.test($pass))
                if(tel_regExp.test($tel)&& password_regExp.test($pass)){
                    // console.log($tel,$pass)
                   // 获取数据库注册的数据
                    self.axios.get(http.url+'/login').then((response) => {
                        var _data=response.data.data.results;
                        console.log(response.data.data.results);
                        var num=0;


                        
                           
                           
                        for(var i=0;i<_data.length;i++){
                            if(_data[i].telephone===$tel){
                                alert('该用户名已经被注册');
                                $('.tel').val('');
                                $('.password').val('');
                                break;

                            }
                            num++
                        }


                        console.log(num)
                        if(num===_data.length){

                                    self.axios.get(http.url+'/register',{params:{'telephone':$tel,'password':$pass}}).then((response) => {
                                        console.log(response.data,223);
                                        var res_msg=response.data;
                                        if(res_msg==='sucess'){
                                            location.href="#/registerSucess"
                                        }
                                    })

                        }


                    })



                    
                }else{
                    // $('.tel').val('此用户名不合法').css({'color':'red'});
                }
               
               
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
    @import './register.scss';
</style>