<template>
   <div class="register">
        <header id="head">
            <p><span class="iconfont icon-fanhui"></span></p>
            <p><span class="lg">注册</span></p>
            <p><span class="d_login"></span></p>
        </header>
        <section id="main">
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
               <span>已有账户？</span> 
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
                console.log($tel,$pass)
                this.axios.get('http://localhost:88/register',{'telephone':$tel,'password':$pass}).then((response) => {
                    console.log(response);
                })
            }
            
        }
        
    }
</script>
<style type="text/css">
    @import './register.scss';
</style>