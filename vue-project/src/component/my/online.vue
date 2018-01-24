<template>
	<div class="online">
        
        <mt-header title="在线值机" id="online_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            
        </mt-header>
        <section class="online_main">
            <div>在线值机服务正在升级中，<br>为您带来不便，敬请原谅。</div>
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
    #app{height:100%;}
    .online{height:100%;display:flex;flex-direction:column;}
    #online_head{height:1.933333rem;font-size:0.4533333rem;background:#0096FF;color:white;}
    #online_head>.mint-header-button a button{height:0.7rem;}
    #online_head .mint-button-icon .mintui{font-size:0.5rem;}
    .online_main{flex:1;text-align:center;}
    .online_main>div{margin-top:50%;font-size:0.4533333rem;color:#666;}
                 
</style>