<template>
	<div id="search">
		<div class="ret"><img src="../../assets/img/ret.png" @click="returnHistory"></div>
		<div class="searchWrap">
			<div class="fl">
				<p>住 1月22日</p>
				<p>离 1月23日</p>
			</div>
			<div class="fl"><router-link to="/publicSearch">酒店名/关键字</router-link></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dataset:[],
				html:'<input type="text">'
			}
		},
		methods:{
			returnHistory:function(){
				this.$router.go(-1);
			}
		}
	}
</script>
