<template>
	<div id="picList">
		<mt-header :title="imgNumber">
			<router-link to="/" slot="left">
			    	<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
		<div id="hotelPicList">
			<img v-for="val in imgUrls" :src="val" >
		</div>
	</div>
</template>

<script type="text/javascript">

	import http from '../../http/baseUrl.js';

	export default {
		data(){
			return {
				imgUrls:[]
			}
		},
		computed:{
			backDetail:function(){
				
				return  '/detail/?id=' + this.$route.query.hotelId;
			},
			imgNumber:function(){
				return '共' + this.imgUrls.length + '张';
			}
		},
		methods:{
			extractPic:function(obj){
				for(var item in obj){
					if(item.includes('image')){
						this.imgUrls.push(obj[item]);
					}
				}
			}
		},
		mounted:function(){
			var hotelId = this.$route.query.hotelId;
			this.axios.get( http.url + '/getHotelPic',{params:{hotelId:hotelId}}).then(function(res){
				var currentHotel = res.data.data.results[0];
				this.extractPic(currentHotel);
				
			}.bind(this))
		}
	}
</script>

<style type="text/css">
	#hotelPicList img{width: 46%;margin:2%;}
</style>