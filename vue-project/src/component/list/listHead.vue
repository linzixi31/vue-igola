<template>
	<header id="header">
		<div class="headerWrap">
			<div class="headerLeft iconfont iconfont icon-rili" @click="returnBack"></div>
			<div class="headerCenter">
				<div class="bookTime">
					<p>住{{entertime.m}}月{{entertime.d}}日</p>
					<p>离{{leavetime.m}}月{{leavetime.d}}日</p>
				</div>
				<div class="searchWrap" @click="goLikeSearch">
					酒店名/关键字
				</div>
			</div>
			<div class="headerRight"></div>
		</div>
	</header>
</template>

<script>
	export default{
		methods:{
			returnBack:function(){
				this.$router.go(-1)
			},
			goLikeSearch:function(){
				this.$router.push({ path: '/publicSearch'});
			}
		},
		data(){
			return{
				entertime:{},
				leavetime:{}
			}
		},
		beforeMount(){
			if(this.$route.query.enterTime){
				var enter = this.$route.query.enterTime.split('/');
				var leave = this.$route.query.leaveTime.split('/');
				for(var i = 0; i<enter.length ; i++){
					if(i == 0){
						this.entertime.m = enter[i];
						this.leavetime.m = leave[i];
					}
					if(i == 1){
						this.entertime.d = enter [i];
						this.leavetime.d = leave [i];
					}
				}
			}else{
				var now = new Date();
				this.entertime.m = now.getMonth() + 1;
				this.entertime.d = now.getDate();
				this.leavetime.m = now.getMonth() + 1;
				this.leavetime.d = now.getDate();
			}
		}
	}
</script>