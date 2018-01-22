<template>
	<div>
		<div id="choice">
			<div class="choice_header">
				<h1>优选</h1>
			</div>
			<div class="choice_main">
				<div class="item_detail" v-for="item in hotHotel" v-if="item.hot == 1" @click="toDetail">
					<div class="pic">
						<img :src= "item.image1" />
					</div>
					<div class="bottom">
						<div class="left">
							<p class="hotelName">{{item.hotelName}}</p>
							<p class="enName">{{item.enghotelName}}</p>
						</div>
						<div class="right">
							￥2，487起
						</div>	
					</div>				
				</div>
			</div>
		</div>
		<footernav></footernav>
	</div>
</template>

<script>
	import "./choice.scss";
	import footernav from "../footernav/footernav.vue";
	import http from "../../http/baseUrl.js";
	export default {
		data(){
			return {
				hotHotel:[]
			}
		},
		components:{
			footernav
		},
		beforeMount(){
			this.axios.get(http.url + "/hotHotel").then(res =>{
				this.hotHotel = res.data.data.results;
				
			})
		},
		methods:{
			toDetail(){
				console.log(this)
//				this.$router.push(path:"/")
			}
		}
	}
	
</script>
