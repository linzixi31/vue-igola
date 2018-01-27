<template>
	<div>
		  <mt-spinner type="triple-bounce" :size="60" v-show="$store.state.switchShow"  color="#26a2ff" class="order_spinner">
        </mt-spinner>
		<div id="index">
			<div class="index_header">
				<mt-swipe :auto="4000" class="swipe">
					<mt-swipe-item class="swipeItem-1"></mt-swipe-item>
					<mt-swipe-item class="swipeItem-2"></mt-swipe-item>
					<mt-swipe-item class="swipeItem-3"></mt-swipe-item>
					<mt-swipe-item class="swipeItem-4"></mt-swipe-item>
				</mt-swipe>
				<div class="cover">
					<div class="cate" @touchstart="top" >
						<span class="small" @click="allHotel">
							<i class="iconfont icon-jiudian "></i>
						</span>
						<p>全部酒店</p>
					</div>
					<div class="cate" @touchstart="top" >
						<span class="small" @click="search">
							<i class="iconfont icon-sousuo"></i>
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
				<div class="content" v-show="!$store.state.switchShow">
					<div class="detail" v-for="item in dataset"
						 v-if="item.hot == 1" @click="toDetail(item.id)" :id="item.id">
						<div class="pic" >
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
	import footernav from "../footernav/footernav.vue";
	import Vue from 'vue';
	
	
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
				this.$store.state.switchShow=false;
				
			})
		},
		methods:{
			toDetail(_id){
				this.$router.push({path:"/detail",query:{id:_id}});
			},
			allHotel(){
				this.$router.push({path:"/list"});
			},
			search(){
				this.$router.push({path:"/search"});
			},
			handleScroll(){
				var scrollTop = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop >= 400){
					$(".cover").removeClass("cover").addClass("fix");
					$(".cate .small").removeClass("small").addClass("small_action");
					$(".cate p").hide();					
				}else if(scrollTop < 400 ){
					$(".fix").removeClass("fix").addClass("cover");
					$(".cate .small_action").removeClass("small_action").addClass("small");
					$(".cate p").show();
				}
			},
			top(){
				if(window.pageYOffset > 400){
					$('html body').animate({scrollTop:0},500);
					$('html').animate({scrollTop:0},500);
				}
			}
		},
		mounted(){
			window.addEventListener("scroll",this.handleScroll);
		}
	}
	
	


</script>


<style>	
	.index_main .content .detail .pic img[lazy=loading] {
 		background-size: cover;
	}

</style>
