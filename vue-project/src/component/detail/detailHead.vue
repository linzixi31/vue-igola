//详情页头部组件(头部和标题部分)
<template>
	 <!-- @click ="$router.push({path:'/listPage'} )-->
	<div>
		<section class="hotelImg">
			<img :src="imgurl ? imgurl : './src/assets/img/timg.gif'" @click="toPicList">
			<a class="backToList" @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></a>
			<div class="hotelDes">
				<span v-for="val in kindDescription">{{val}}</span>
			</div>
		</section>
		<section class="hotelInfor">
			<p class="hotelTitle">
				<span >{{hotelName}}</span>
				<span id="hotelStar">
					<i class="iconfont icon-shoucang" v-for="value in stars"></i>
				</span>
			</p>
			<p class="hotelEngName">{{enghotelName}}</p>
			<p class="hotelAdr">{{addr}}</p>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				
			}
		},
		props:['hotelName','addr','stars','imgurl','enghotelName','hotelId','kindDescription'],
		methods:{
			toPicList:function(){

				this.$router.push({path:'/piclist',query:{hotelId:this.hotelId}})
			}
		}
	}
</script>

<style type="text/css">

</style>