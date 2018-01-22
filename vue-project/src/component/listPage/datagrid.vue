<template>
	<div id="datagrid">
		<ul>
			<li v-for="(obj,index) in dataset">
				<router-link :to="{path:'/detail',query: {id: obj.id}}">
				<img src="../../assets/img/hotel.jpg" height=200px/>
				<div style="display:inline-block" class="description">
					<h3>{{obj.hotelName}}</h3>
					<p>{{obj.enghotelName}}</p>
					<p><img v-for="(item,index) in stars" :src="item.img" v-if="index<obj.stars"> {{obj.score}} , 神享受</p>
					<p>{{obj.address}}</p>
					<p>￥ <span>{{obj.minPrice}}</span> 起</p>
				</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dataset:[],
				id:'',
				stars:[
					{img:'/dist/star.jpg'},
					{img:'/dist/star.jpg'},
					{img:'/dist/star.jpg'},
					{img:'/dist/star.jpg'},
					{img:'/dist/star.jpg'}
				]
			}
		},
		prop:['dataUp'],
		beforeMount(){
			console.log(this.$route.query);
			this.axios.get('http://127.0.0.1:88/listPage').then(response => {
				this.dataset = response.data.data.results;
				console.log(this.dataset[0].id);
			}).catch(function (error) {
			    console.log(error);
			});
		}
	}
</script>