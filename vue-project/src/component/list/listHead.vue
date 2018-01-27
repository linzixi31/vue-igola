<template>
	<header id="header">
		<div class="headerWrap">
			<div class="headerLeft iconfont icon-fanhui" @click="returnBack"></div>
			<div class="headerCenter">
				<div class="bookTime">
					<p>住{{$store.state.entertime.m}}月{{$store.state.entertime.d}}日</p>
					<p>离{{$store.state.leavetime.m}}月{{$store.state.leavetime.d}}日</p>
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
			}
		},
		beforeMount(){
			if(this.$route.query.enterTime){
				var enter = this.$route.query.enterTime.split('/');
				var leave = this.$route.query.leaveTime.split('/');
				for(var i = 0; i<enter.length ; i++){
					if(i == 0){
						this.$store.state.entertime.m = enter[i];
						this.$store.state.leavetime.m = leave[i];
					}
					if(i == 1){
						this.$store.state.entertime.d = enter [i];
						this.$store.state.leavetime.d = leave [i];
					}
				}
			}else{
				var now = new Date();
				this.$store.state.entertime.m = now.getMonth() + 1;
				this.$store.state.entertime.d = now.getDate();
				this.$store.state.leavetime.m = now.getMonth() + 1;
				this.$store.state.leavetime.d = now.getDate()+1;
			}
		}
	}
</script>