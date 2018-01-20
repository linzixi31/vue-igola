<template>
	<div>
		<mt-header title="预订">
			<router-link to="/detail" slot="left">
			    	<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-field fixed placeholder="入住人" ></mt-field>
		<mt-field fixed placeholder="联系人" ></mt-field>
		<mt-field fixed placeholder="住客偏好" ></mt-field>
		<mt-button type="primary" size="large" @click="ck">提交</mt-button>
	</div>
	
</template>



<script type="text/javascript">
	export default {
		data(){
			return {
			}
		},
		computed:{
			data:function(){
				return this.$route.params
			}
		},
		methods:{
			ck:function(){
				console.log(this.$route)
			}
		}
	}
</script>

<style type="text/css">
	*{font-size:0.5rem;}
</style>