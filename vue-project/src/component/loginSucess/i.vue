<template>
	<div class="i">
        <header class="i_head">我</header>
        <section class="i_main">
            <ul>
                <li>头像 <span><span>未设置</span><i class="glyphicon glyphicon-chevron-right"></i></span></li>
                <li>昵称 <span><span>未设置</span><i class="glyphicon glyphicon-chevron-right"></i></span></li>
                <li>性别 <span><span>未设置</span><i class="glyphicon glyphicon-chevron-right"></i></span></li>
                <li>手机号码 <span><span>未设置</span><i class="glyphicon glyphicon-chevron-right"></i></span>  </li>
                <li>电子邮箱 <span><span>未设置</span><i class="glyphicon glyphicon-chevron-right"></i></span>  </li>
                <li>密码 <span><span>未设置</span><i class="glyphicon glyphicon-chevron-right"></i></span></li>
                <li class="clearfix"><span>退出登录</span></li>
            </ul>   
        </section>
       
    </div>

</template>

<script type="text/javascript">
	export default{

	}

</script>



<style type="text/css">
    body,html{height:100%;}
    .clearfix::after{content:"";display:block;height:0;clear:both;overflow:hidden;visibility:hidden;zoom:1;}
        ul,li{list-style:none;padding:0;}
    #app{height:100%;}
    .i{height:100%;display:flex;flex-direction:column;}
    .i_head{height:1.933333rem;text-align:center;font-size:0.4533333rem;line-height:1.933333rem;background:#0096FF;color:white;}
    .i_main{flex:1;}
    .i_main>ul>li{padding:0.6rem;font-size:0.4rem;border-bottom:1px solid #ccc;}
      
    .i_main>ul>li>span{float:right;}
        
    .i_main>ul>li:nth-child(7)>span{display:block;width:6.373333rem;height:1.573333rem;border:1px solid #666;border-radius:0.8rem;font-size:0.7rem;text-align:center;line-height:1.573333rem;margin:0 auto;float:none;}

        
            
</style>