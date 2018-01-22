<template>
	<div class="loginSucess"> 
        <div class="ls_head">
            <div class="box">
                <div class="box1">
                    <div class="usershow">
                        <span @click="get_i"><img src="../../assets/img/head.jpg" alt="" /></span>
                    </div>
                </div>
                <div class="box2">
                    <div class="username_box">{{username}}<br /><span @click="get_i">编辑&nbsp;&gt;</span></div>
                </div>
                
                
            </div>
            <div class="list">
                <div class="waiteGo">待出行 <br/> <i>0</i></div>
                <div class="waiteGo">我的订单 <br/><i>0</i></div>
                <div class="waiteGo">优惠券 <br/> <i>0</i></div>
                <div class="waiteGo">旅客 <br/>  <i>0</i></div>
            </div>      
        </div>
        <div class="ls_content">
            <ul class="main">
                <li @click="get_online"><span class="iconfont icon-msnui-state-online"></span>&nbsp;在线值机<span class="gt">&gt;</span></li>
                <li><span class="iconfont icon-xiazai46"></span>&nbsp;客服<span class="gt">&gt;</span></li>
                <li @click="get_hobbySet">偏好设置<span class="gt">&gt;</span></li>
                <li>清理缓存<span class="gt">&gt;</span></li>
                <li>意见与反馈<span class="gt">&gt;</span></li>
                <li>关于iGola<span class="gt">&gt;</span></li>
            </ul>
        </div>
        <div id="foot">
            <div class="index"><i class="iconfont icon-liulanqi"></i><br /><span>首页</span></div>
            <div class="bestpick"><i class="iconfont icon-moshumagic15"></i><br /><span>优选</span></div>
            <div class="order "><i class="iconfont icon-dingdan"></i><br /><span>订单</span></div>
            <div class="my"><i class="iconfont icon-wode"></i><br /><span>我的</span></div>
        </div>
	</div>
</template>
<script type="text/javascript">
	var storage = window.localStorage;
    var _username=storage.username;
    var _password=storage.password;
	export default{
		data(){
			return{
				username:_username,

			}
		},
		methods:{
			get_i:function(){
				location.href="#/i"
			},
			get_online:function(){
				location.href="#/online"
			},
			get_hobbySet:function(){
				location.href="#/hobbySet"
			}
		}

	}

</script>
<style type="text/css">
	@import './loginSucess.scss'


</style>