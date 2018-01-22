<template>
   <div class="register">
        <header class="r_head">
            <p><span class="iconfont icon-fanhui"></span></p>
            <p><span class="lg">注册</span></p>
            <p><span class="d_login"></span></p>
        </header>
        <section class="r_main">
            <p> 
                <input type="text" placeholder="手机号码/电子邮箱" class='tel'/> 
            </p>
            <p> 
                <input type="text" placeholder="密码" class="password"/> 
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
            <p><i class="iconfont icon-weixin"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-qq"></i></p>
            <p><i>微信</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>QQ</i></p>
        </section>
    </div>

</template>
<script type="text/javascript">
    

    export default{
        components:{
        
        },
        data(){
            return {

            }
        },
        methods:{
            reg:function(){
                var $tel=$('.tel').val();
                var $pass=$('.password').val();
                var tel_regExp=/^[1][3,4,5,7,8][\d]{9}$/;
                var password_regExp=/^[\w]{8,16}$/;
                console.log(tel_regExp.test($tel),password_regExp.test($pass))
                if(tel_regExp.test($tel)&& password_regExp.test($pass)){
                    console.log($tel,$pass)
                    this.axios.get('http://localhost:88/register',{params:{'telephone':$tel,'password':$pass}}).then((response) => {
                        console.log(response.data,223);
                        var res_msg=response.data;
                        if(res_msg==='sucess'){
                            
                        }
                    })
                }else{
                    // $('.tel').val('此用户名不合法').css({'color':'red'});
                }
               
               
            }
            
        }
        
    }
</script>
<style type="text/css">
    @import './register.scss';
</style>