<template>
	<div>
		<div id="index">
			<div class="index_header">
				<mt-swipe :auto="4000" class="swipe">
					<mt-swipe-item class="swipeItem-1"></mt-swipe-item>
					<mt-swipe-item class="swipeItem-2"></mt-swipe-item>
					<mt-swipe-item class="swipeItem-3"></mt-swipe-item>
					<mt-swipe-item class="swipeItem-4"></mt-swipe-item>
				</mt-swipe>
				<div class="cover">
					<div class="cate" >
						<span class="small" @click="allHotel">
							<i class="iconfont icon-sousuo"></i>
						</span>
						<p>全部酒店</p>
					</div>
					<div class="cate" >
						<span class="small" @click="search">
							<i class="iconfont icon-jiudian"></i>
						</span>
						<p>搜索</p>
					</div>
				</div>
			</div>
			<div class="index_main">
				<div class="recommend">
					<p>精品推荐</p>
					<span>▼</span>
				</div>
				<div class="content">
					<div class="detail" v-for="item in dataset"
						 v-if="item.hot == 1" @click="toDetail(item.id)" :id="item.id">
						<div class="pic">
							<img  v-lazy="item.image1" />
						</div>
						<div class="describe">
							<div class="left">
								<p class="hotelName">{{item.hotelName}}</p>
								<p class="enName">{{item.enghotelName}}</p>
							</div>
							<div class="right">
								￥2,489
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footernav></footernav>
	</div>
</template>

<script>

        
	import "./index.scss";
	import http from "../../http/baseUrl";
	import {Lazylaod} from "mint-ui";
	import footernav from "../footernav/footernav.vue";
	
	
	export default{
		components:{
			footernav
		},
		data(){
			return{
				dataset:[]
				
			}
		},
		beforeMount(){
			this.axios.get(http.url + "/homepage").then(res =>{
				this.dataset = res.data.data.results;
			})
		},
		methods:{
			toDetail(_id){
				this.$router.push({path:"/detail",query:{id:_id}});
			},
			allHotel(){
				this.$router.push({path:"/listPage"});
			},
			search(){
				this.$router.push({path:"/search"})
			}
		}
	}
	
	


</script>
<style>	
/*image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}*/

</style>
