<template>
	<div id="datagrid">
		<mt-spinner type="triple-bounce" :size="80" v-show="switchShow">
		</mt-spinner>
		<ul v-show="!switchShow">
			<li v-for="(obj,index) in dataset">
				<router-link :to="{path:'/detail',query: {id: obj.id}}">
				<img :src="obj.image2" height="200px" width="300px"/>
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
import http from '../../http/baseUrl.js'
	export default{
		data(){
			return {
				dataset:[],
				id:'',
				img:[],
				switchShow:true,
				stars:[
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'},
					{img:'./src/assets/img/star.jpg'}
				]
			}
		},
		prop:['dataUp'],
		beforeMount(){
			console.log(this.$route.query);
			if(this.$route.query.add){
				var add = this.$route.query.add;
				var hotelName = this.$route.query.hotelName;
				console.log(add,hotelName);
				this.axios.get(http.url+'/listPageReceive',{params:{add:add,hotelName:hotelName}}).then(response => {
					console.log(1);
					console.log(response.data);
					window.setTimeout(()=>{
						this.switchShow = false;
						console.log(response.data);
						this.dataset = response.data.data.results;
					},500)
				}).catch(function (error) {
				    console.log(error);
				    alert(error);
				})
			}else{
				this.axios.get(http.url+'/listPage').then(response => {
					console.log(response);
					this.switchShow = false;
					this.dataset = response.data.data.results;
				}).catch(function (error) {
				    console.log(error);
				});
			}
		}
	}
</script>