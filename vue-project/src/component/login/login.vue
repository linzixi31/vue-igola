<template>
    <div class="login">
        <header id="head">
            <p><span class="iconfont icon-fanhui"></span></p>
            <p><span class="lg">登录</span></p>
            <p><span class="d_login">动态码登录</span></p>
        </header>
        <section id="main">
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
               <span>新来的？去注册</span> 
            </p>
            <p>通过以下第三方注册</p>
            <p><i class="iconfont icon-weixin"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-qq"></i></p>
            <p><i>微信</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>QQ</i></p>
        </section>
    </div>
</template>

<script>
    import footernav from '../footernav/footernav';

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
        this.axios.get('http://localhost:88/login').then((response) => {
            console.log(response.data.data.results)
            var res=response.data.data.results;
            var $username=$('.tel').val();
            var $password=$('.password').val();
            res.map(function(item){
              if($username===item.telephone && $password===item.password){
                  alert('登录成功');

              }else{
                  alert('登陆失败');
              }
            })
        })
      }
    }

}
    
</script>
<style type="text/css">
    @import './login.scss';
</style>
