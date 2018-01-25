<template>
	<header id="header">
		<div class="headerWrap">
			<div class="headerLeft iconfont iconfont icon-rili" @click="returnBack"></div>
			<div class="headerCenter">
				<div class="bookTime">
					<p>住1月19日</p>
					<p>离1月20日</p>
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
		}
	}
</script>