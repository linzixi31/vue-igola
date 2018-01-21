<template>
	<div id="search">
		<div class="ret"><img src="../../assets/img/ret.png"></div>
		<div class="searchWrap">
			<div class="fl">
				<p>住 1月22日</p>
				<p>离 1月23日</p>
			</div>
			<div class="fl">酒店/关键字</div>
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
		}
	}
</script>
