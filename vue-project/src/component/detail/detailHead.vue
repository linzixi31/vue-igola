//详情页头部组件(头部和标题部分)
<template>
	<div>
		<section class="hotelImg">
			<img :src="imgurl">
			<a class="backToList" href="#/list"><i class="glyphicon glyphicon-menu-left"></i></a>
			<div class="hotelImgNum"><span>32</span>张</div>
		</section>
		<section class="hotelInfor">
			<p class="hotelTitle">
				<span >{{hotelName}}</span>
				<span class="hotelStar">
					<i class="glyphicon glyphicon-star" v-for="value in stars"></i>
				</span>
			</p>
			<p class="hotelEngName">Guang Zhou Masia Hotel</p>
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
		props:['hotelName','addr','stars','imgurl']
	}
</script>