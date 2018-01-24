<template>
	<div id="search_page">
		<div class="search_header">
			<p @click="back">
				<i class="iconfont icon-fanhui"></i>
			</p>
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
				<datePicker></datePicker>
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
	import datePicker from  "./datePicker.vue";
	
	export default {
		data(){
			return{
				add:"",
				hotelName:""
			}
		},
		methods:{
			search(){
				this.$router.push({path:"/list",
					query:{
						add:this.add,
						hotelName:this.hotelName,
						enterTime:$(".entertime").text(),
						leaveTime:$(".leavetime").text()
					}
				});
			},
			back(){
				this.$router.push({path:"/index"});
			}
		},
		components:{
			datePicker
		}
	}
</script>

