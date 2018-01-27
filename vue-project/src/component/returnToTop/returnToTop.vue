<template>
	<div id="returnButton" @click="returnTop" >
		<p class="iconfont icon-icon"></p>
		<p>顶部</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				changeScroll:''
			}
		},
		methods:{
			returnTop:function(){
				$(this.$el.parentNode).animate({scrollTop:0},500);
				this.changeScroll = this.$parent.$el.scrollTop;
			},
			showButton:function(){
				if(this.$parent.$el.scrollTop>10){
					$(this.$el).show();
				}else{
					$(this.$el).hide();
				}
			}
		},
		mounted () {
		   	this.$parent.$el.addEventListener('scroll', this.showButton);
		}
	}
</script>

<style>
	#returnButton{
		display:none;border-radius:50%;height:3.5rem;width:3.5rem;background:#000000;position: fixed;bottom:7rem;right:2rem;
		opacity:0.5;filter:alpha(opacity=50);z-index:1000;
	}
	#returnButton p:first-child{
		color:#fff;text-align: center;font-size:1.6rem;
	}
	#returnButton p:last-child{
		color:#fff;text-align: center;font-size:1rem;
	}
</style>