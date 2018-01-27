<template>
	<div id="container">
		<div class="count">
			<p>房间数</p>
			<span>1间</span>
		</div>
		<div class="count">
			<p>每间住客数</p>
			<span>成人&nbsp;&nbsp;x&nbsp;2</span>
			<span>儿童&nbsp;&nbsp;x&nbsp;0</span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{}
		},
		methods:{
			
		}
		
	}
</script>

<style>
	#container{
		width: 100%;
	}
	#container .count{
		width: 50%;
		height: 80%;
		float: left;
		margin: 1rem 0;
	}
	#container div:nth-child(2){
		border-left: 1px solid #DCDCDC;
		padding-left: 1.5rem;
	}
	#container div:nth-child(2) span{
		margin-right: 0.66rem;
	}
	#container .count p{
		color: #A1A1A1;
		font-size: 12px;
	}
	#container .count span{
		color: #101010;
		font-size: 12px;
	}
</style>