<template>
	<footer id="footer" >
		<mt-tabbar >
			<mt-tab-item id="评分" @click.native="changPopStatus('showSort')">
			    <img slot="icon" src="../../assets/img/pingfeng.png">
			    	评分
			</mt-tab-item>
			<mt-tab-item id="价格/星级" @click.native="changPopStatus('showSort')">
			    <img slot="icon" src="../../assets/img/price.png">
			        价格/星级
			</mt-tab-item>
			<mt-tab-item id="筛选" @click.native="changPopStatus('showScreen')">
			    <img slot="icon" src="../../assets/img/shaixuan.png">
			        筛选
			</mt-tab-item>
			<sort></sort>
			<star></star>
			<screen></screen>
		</mt-tabbar>
	</footer>
</template>

<script>
	import sort from './sort';
	import star from './star';
	import screen from './screen';
	import { mapMutations } from 'vuex';
	export default{
		components:{
			sort,star,screen
		},
		methods:{
			...mapMutations([
				'changPopStatus'
				]
			)
		}
	}
</script>