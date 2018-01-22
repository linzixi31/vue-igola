<template>
    <div class="registerSucess">
        <header class="reg_sh">注册</header>
        <section class="reg_ss">
            <p class="glyphicon glyphicon-ok-sign"></p>
            <p>你已经成为iGola的一员</p>
        </section>
        <footer class="reg_sf">
            <div>好的</div>
        </footer>    
    </div>
</template>
<script type="text/javascript">
    // // 把尺寸放大N倍（N是window.devicePixelRatio）
    // var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
    // //物理像素*设备像素比=真实像素
    // document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
    // // 把屏幕的倍率缩小到N分之一（N是window.devicePixelRatio）
    // var scale = 1/window.devicePixelRatio;
    // var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
    // document.getElementById("vp").content = mstr;


    export default{

    }

</script>
<style type="text/css">
    body,html{height:100%;}
    #app{height:100%;}
    .registerSucess{height:100%;display:flex;flex-direction:column;background:url('../../assets/img/timg.jpg') no-repeat rgba(0,0,0,0);}
    .reg_sh{flex:1;font-size:0.453333rem;line-height:1.106667rem;color:white;text-align:center;}
    .reg_ss{flex:1;font-size:0.453333rem;text-align:center;}
    .reg_ss>p:nth-child(1){height:2.08rem;font-size:2rem;color:white;}
    .reg_ss>p:nth-child(2){font-size:0.5rem;color:white;line-height:2.453333rem;}
    .reg_sf{flex:1;}
    .reg_sf>a{display:block;width:5.706667rem;height:2.08rem;background:#0096FF;border-radius:1.04rem;margin:0 auto;color:#fff;text-align:center;line-height:2.08rem;font-size:0.746667rem;}
    

</style>