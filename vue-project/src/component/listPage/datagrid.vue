<template>
	<div id="datagrid">
		<ul>
			<li v-for="(obj,index) in dataset">
				<router-link :to="{path:'/detail',query: {id: obj.id}}">
				<img src="../../assets/img/hotel.jpg" height=200px width:200px/>
				<div style="display:inline-block">
					<h3>{{obj.hotelName}}</h3>
					<p>{{obj.enghotelName}}</p>
					<p>评价</p>
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
				id:''
			}
		},
		prop:['dataUp'],
		beforeMount(){
			this.axios.get('http://127.0.0.1:88/listPage').then(response => {
				this.dataset = response.data.data.results;
//				console.log(this.dataset[0].id);
			}).catch(function (error) {
//			    console.log(error);
			});
		}
	}
</script>