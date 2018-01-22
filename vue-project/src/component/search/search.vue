<template>
	<div id="search_page">
		<div class="search_header">
			<h1>酒店</h1>
		</div>
		<div class="search_main">
			<div class="hotelMeg">
				<i class="iconfont iconfont icon-jiudian"></i>
				<input type="text" />
			</div>
			<div class="hotelMeg">
				<i class="iconfont iconfont icon-rili"></i>
				<input type="text" />
			</div>
			<div class="hotelMeg">
				<i class="iconfont iconfont icon-dingwei"></i>
				<input type="text" placeholder="酒店名/关键字" />
			</div>
				<input type="button" value="搜索酒店" id="btnSearch"/>
		</div>
	</div>
</template>

<script>
	import "./search.scss";
	import "../../assets/font/iconfont.css";
	
	export default {
		data(){
			return{
				
			}
		},
		components:{
		
		}
	}
</script>

