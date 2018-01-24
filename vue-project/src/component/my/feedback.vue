<template>
    <div class="feedback">
        <!-- <div class="feedback_head">意见与反馈</div> -->
        <mt-header title="意见与反馈" id="feedback_head">
            <router-link to="/my" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button  slot="right">历史记录</mt-button>
        </mt-header>
        <div class="feedback_main">
            <p>反馈类型</p>
            <div class="type">
                <span>产品建议</span><span>错误反馈</span>
            </div>
            <p>反馈内容</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="您的反馈会让iGola越来越好！"></textarea>
            <p>联系方式(选填)</p>
            <h4><input type="text" placeholder="请输入邮箱地址或手机号"/></h4>
        </div>
        <div class="submit">提交</div>
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

    *{margin:0;padding:0;}
    #app{height:100%;}
    .feedback{height:100%;display:flex;flex-direction: column;}
    #feedback_head{height:1.933333rem;font-size:0.4rem;background:#0096FF;color:#fff;}
    #feedback_head .mint-button-icon .mintui{font-size:0.5rem;}
    .feedback>.feedback_main{flex:1;background:#F5F5F5;overflow-x: hidden;}
    .feedback>.feedback_main>p{height: 1.2rem;font-size:0.36rem;line-height:1.2rem;text-indent:20px;}
    .feedback>.feedback_main .type{height:3.74rem;background:#fff;padding-top:1rem;}
    .feedback>.feedback_main .type>span{display:inline-block;width:2rem;height:1rem;border:0.013333rem solid #666;margin-left:0.6rem;text-align:center;line-height:1rem;font-size:0.4rem;border-radius:0.066667rem;}
    .feedback>.feedback_main>textarea{width:100%;height:4.146667rem;resize: none;border:none;font-size:0.4rem;outline:none;}  
    .feedback>.feedback_main h4>input{width:100%;height:1rem;line-height:1rem;border:none;font-size:0.4rem;outline:none;}
    .feedback>.submit{height:1.3rem;font-size:0.5rem;text-align:center;line-height:1.3rem;}

 </style>