<template>
	<div id="search_page">
		<div class="search_header">
			<p @click="back"> < </p>
			<h1>酒店</h1>
			<mt-swipe :auto="3000" class="choice_carousel">
				<mt-swipe-item class="carouselItem"></mt-swipe-item>
				<mt-swipe-item class="carouselItem"></mt-swipe-item>
				<mt-swipe-item class="carouselItem"></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="search_main">
			<div class="hotelMeg">
				<i class="iconfont iconfont icon-jiudian"></i>
				<input type="text" v-model="add"/>
			</div>
			<div class="hotelMeg">
				<i class="iconfont iconfont icon-rili"></i>
			</div>
			<div class="hotelMeg">
				<i class="iconfont iconfont icon-dingwei"></i>
				<input type="text" placeholder="酒店名/关键字" v-model="hotelName" />
			</div>
			<div class="btn">
				<input type="button" value="搜索酒店" id="btnSearch" @click="search"/>
			</div>
		</div>
		<div class="search_foot">
			<p>iGola&nbsp;&nbsp;酒店问答 ></p>
		</div>
	</div>
</template>

<script>
	import "./search.scss";
	import "../../assets/font/iconfont.css";
	
	export default {
		data(){
			return{
				add:"",
				hotelName:"",
				datePicker:false
			}
		},
		methods:{
			search(){
				this.$router.push({path:"/listPage",query:{add:this.add,hotelName:this.hotelName}})
			},
			back(){
				this.$router.push({path:"/index"});
			}
		}
	}
</script>

