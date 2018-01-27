<template>
	<main id="main">
		<mt-spinner type="triple-bounce" :size="60" v-show="switchShow" class='order_containter'>
		</mt-spinner>
		<ul class="current">
			<li v-for="(item,idx) in $store.state.listData" :key="item.idx" @click = "routeToDetail(item.id)">
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
						<p class="socre"><i class="iconfont icon-shoucang" v-for="value in item.stars"></i> {{item.score}} , 神享受</p>
						<p class="address">{{item.address}}</p>
						<p class="price"><i>￥</i> <span>{{item.minPrice}}</span> <i>起</i></p>
					</div>
				</div>
			</li>
		</ul>
		<returnToTop></returnToTop>
	</main>
</template>

<script>
	import http from '../../http/baseUrl.js';
	import returnToTop from '../returnToTop/returnToTop.vue';
	export default{
		data(){
			return {
				dataset:[],
				id:'',
				img:[],
				switchShow:true,
				stars:[],
				scroll:this.$el
			}
		},
		components:{returnToTop},
		methods:{
			routeToDetail:function(_id){
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
						//console.log(response);
				}).catch(function (error) {
				    console.log(error);
				});
			}
		}
	}
</script>