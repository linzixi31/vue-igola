<template>
	<main id="main">
		<mt-spinner type="triple-bounce" :size="60" v-show="switchShow" class='order_containter'>
		</mt-spinner>
		<ul>
			<li v-for="(item,idx) in $store.state.listData" :key="item.idx" @click = "saveHistory(item.id)">
				<div class="hotelNews">
					<div class="hotelNewsLeft">
						<img class="hotelImgurl1" v-lazy=item.image1>
					</div>
					<div class="hotelNewsRight">
						<h3 class="hotelName">
							{{item.hotelName}}
						</h3>
						<p class="enName">
							{{item.enghotelName}}
						</p>
						<p class="socre"><img class="starImg" v-for="(obj,index) in stars" :src="obj.img" v-if="index<item.stars"> {{item.score}} , 神享受</p>
						<p class="address">{{item.address}}</p>
						<p class="price">￥<span>{{item.minPrice}}</span>起</p>
					</div>
				</div>
			</li>
		</ul>
	</main>
</template>

<script>
	import http from '../../http/baseUrl.js'
	export default{
		data(){
			return {
				dataset:[],
				id:'',
				img:[],
				switchShow:true,
				stars:[
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'}
				]
			}
		},
		methods:{
			saveHistory:function(_id){
				this.$router.push({ path: '/detail', query: { id: _id }});
			}
		},
		beforeMount(){
			if(this.$route.query.leaveTime){
				var add = this.$route.query.add;
				var hotelName = this.$route.query.hotelName;
				this.axios.get(http.url+'/listPageReceive',{params:{add:add,hotelName:hotelName}}).then(response => {
					this.$store.state.listData = response.data.data.results;
					this.switchShow = false;
				}).catch(function (error) {
				    console.log(error);
				})
			}else{
				this.axios.get(http.url + '/listPage').then(response => {
						this.$store.state.listData = response.data.data.results;
						this.switchShow = false;
						console.log(response);
				}).catch(function (error) {
				    console.log(error);
				});
			}
		}
	}
</script>