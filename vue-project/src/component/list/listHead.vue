<template>
	<header id="header">
		<div class="headerWrap">
			<div class="headerLeft iconfont icon-fanhui" @click="returnBack"></div>
			<div class="headerCenter">
				<div class="bookTime">
					<p>住{{$store.state.orderDate.dateIn}}</p>
					<p>离{{$store.state.orderDate.dateOut}}</p>
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
			//直接进入列表页计算默认入住和离店日期
			if(!this.$store.state.orderDate.night){
				var now = new Date();
				var tomorrow = new Date(now.getTime()+24*60*60*1000)
				var m = now.getMonth() + 1;
				var d = now.getDate();
				var tM = tomorrow.getMonth() + 1;
				var tD = tomorrow.getDate();
				this.$store.state.orderDate.dateIn = m + '月' + d + '日'; 
				this.$store.state.orderDate.dateOut = tM + '月' + tD + '日';
			}
		}
	}
</script>