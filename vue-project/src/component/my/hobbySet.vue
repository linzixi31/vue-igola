<template>
	<div class="hobbySet">
        <!-- <header class="hobby_head">偏好设置</header> -->
        <mt-header title="偏好设置" id="hobby_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            
        </mt-header>
        <section class="hobby_main">
            <ul>
                <li>语言 <span><span>简体中文</span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li>货币 <span><span>CNY</span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li>常用出发地 <span><span>未设置</span><i class="iconfont icon-arrow-right-copy"></i></span></li>
                <li>常用仓位 <span><span>未设置</span><i class="iconfont icon-arrow-right-copy"></i></span>  </li>
                
            </ul>   
        </section>
       
    </div>
</template>
<script type="text/javascript">
	export default{
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
<<<<<<< HEAD
<<<<<<< HEAD
    .clearfix::after{content:"";display:block;height:0;clear:both;overflow:hidden;visibility:hidden;zoom:1;}
=======
	    .clearfix::after{content:"";display:block;height:0;clear:both;overflow:hidden;visibility:hidden;zoom:1;}
>>>>>>> b5749a39a72329426e5104fd7c151bdd37b8ead8
        ul,li{list-style:none;padding:0;}
=======
	.clearfix::after{content:"";display:block;height:0;clear:both;overflow:hidden;visibility:hidden;zoom:1;}
    ul,li{list-style:none;padding:0;}
>>>>>>> 278c0eb03eec5c6a071aca54d07adebd13953d3e
    #app{height:100%;}
    .hobbySet{height:100%;display:flex;flex-direction:column;}
    #hobby_head{height:1.933333rem;font-size:0.4533333rem;background:#0096FF;color:white;}
    #hobby_head>.mint-header-button a button{height:0.7rem;}
    #hobby_head .mint-button-icon .mintui{font-size:0.5rem;}
    .hobby_main{flex:1;}
    .hobby_main>ul>li{padding:0.6rem;font-size:0.4rem;border-bottom:1px solid #ccc;}
      
    .hobby_main>ul>li>span{float:right;}
    .hobby_main>ul>li>span>i{font-size:0.4rem;}
        
    .hobby_main>ul>li:nth-child(7)>span{display:block;width:6.373333rem;height:1.573333rem;border:1px solid #666;border-radius:0.8rem;font-size:0.7rem;text-align:center;line-height:1.573333rem;margin:0 auto;float:none;}
    

</style>