<template>
	<div class="about">
        <!-- <header class="about_head">关于iGola</header> -->
        <mt-header title="关于iGola" id="about_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            
        </mt-header>
        <section class="about_main">
            <div class="logo">
                    <img src="../../assets/img/logo.jpg">
            </div>
            <div class="content">
                iGola.com，中文名骑鹅旅行，是一个创新的国际机票搜索和预订平台。iGola坚持以旅行者的利益为唯一考量，为用户提供“需求-搜索-比价-购买”的决策支持。用户在iGola上可“货比全球”，并且使用辅助订购即时预订境内外供应商出售的机票。
       			iGola在全球范围内选择优质供应商进行合作，为用户提供具有绝对价格优势的国际机票和优质的服务。
            </div>

            <ul class="list">
                <li>当前版本    <i >3.16.17</i></li>
                <li>关注我们    <i class="iconfont icon-arrow-right-copy"></i></li>
                <li>去评分 <i class="iconfont icon-arrow-right-copy"></i></li>
                <li>条款和条件   <i class="iconfont icon-arrow-right-copy"></i></li>
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
 		body,html{height:100%;}
 		#app{height:100%;}
        ul,li{list-style:none;padding:0;}
        
        .about{height:100%;display:flex;flex-direction:column;}
        #about_head{height:1.933333rem;font-size:0.4533333rem;background:#0096FF;color:white;}
        #about_head>.mint-header-button a button{height:0.7rem;}
        #about_head .mint-button-icon .mintui{font-size:0.5rem;}
        .about_main{flex:1;text-align:center;}
        .about_main .logo{height:5.786667rem;text-align:center;line-height:5.786667rem;}
        .about_main .logo img{width:6.826667rem;height:2.56rem;}
        .about_main .content{padding:0 0.746667rem;text-align:left;font-size:0.28rem;height:4.226667rem;}
        .about_main .list li{height:1.066667rem;padding:0 0.546667rem;padding-left:0.5rem;line-height:1.066667rem;font-size:0.4rem;border-bottom:0.013333rem solid #ccc;text-align:left;}  
        .about_main .list li>i{float:right;line-height:1.066667rem;font-size:0.4rem;}


 </style>