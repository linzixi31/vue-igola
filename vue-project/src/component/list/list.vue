<template>
	<div id="list">
		<listHead></listHead>
		<listMain></listMain>
		<listFoot></listFoot>
	</div>
</template>

<script>
	import listScss from './list.scss';
	import http from '../../http/baseUrl.js';
	import baseCss from './base.css';
	import "../../assets/font/iconfont.css";
	import listHead from './listHead';
	import listMain from './listMain';
	import listFoot from './listFoot';
	
	export default{
		components:{listHead,listFoot,listMain}
	}
</script>