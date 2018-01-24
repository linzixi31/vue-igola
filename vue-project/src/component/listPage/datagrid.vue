<template>
	<!--<div id="datagrid">
		<mt-spinner type="triple-bounce" :size="80" v-show="switchShow">
		</mt-spinner>
		<ul v-show="!switchShow">
			<li v-for="(obj,index) in dataset" :id="obj.id" @click='saveHistory(obj.id,obj.hotelName)'>
				
				<img class="goodImg" :src="obj.image1"/>
				<div style="display:inline-block" class="description">
					<h3>{{obj.hotelName}}</h3>
					<p>{{obj.enghotelName}}</p>
					<p><img v-for="(item,index) in stars" :src="item.img" v-if="index<obj.stars"> {{obj.score}} , 神享受</p>
					<p>{{obj.address}}</p>
					<p>￥ <span>{{obj.minPrice}}</span> 起</p>
				</div>
	
			</li>
		</ul>
	</div>-->
</template>

<script>
//	import http from '../../http/baseUrl.js'
//	export default{
//		data(){
//			return {
//				dataset:[],
//				id:'',
//				img:[],
//				switchShow:true,
//				stars:[
//					{img:'./src/assets/img/star.jpg'},
//					{img:'./src/assets/img/star.jpg'},
//					{img:'./src/assets/img/star.jpg'},
//					{img:'./src/assets/img/star.jpg'},
//					{img:'./src/assets/img/star.jpg'}
//				]
//			}
//		},
//		prop:['dataUp'],
//		methods:{
//			saveHistory:function(_id,_hotelName){
//		        var now = new Date();
//		        now.setDate(now.getDate()+7);
//		        var cookie = document.cookie;
//				var arrAll = [];
//				if(window.localStorage.username){
//					var username = window.localStorage.username
//					this.axios.get(http.url + '/userHistory',{id:_id}).then(response =>{
//						console.log(response);
//					}).catch(function(error){
//						console.log(error);
//					})
//				}else{
//					if(document.cookie){
//				        cookie = cookie.split('; ');
//				        cookie.forEach(function(item){
//				            let arr = item.split('=');
//				            if(arr[0]=='localHistory'){
//				                arrAll = JSON.parse(arr[1]);
//				            }
//				        })
//				        var newAll = arrAll.filter(function(item){
//				        	return (item.hName != _hotelName);
//				        })
//				        newAll.unshift({hName:_hotelName});
//				        document.cookie = "localHistory=" + JSON.stringify(newAll) + ';expires=' + now.toUTCString();
//					}else{
//						arrAll.unshift({hName:_hotelName});
//						document.cookie = "localHistory=" + JSON.stringify(arrAll) + ';expires=' + now.toUTCString();
//					}
//				}
//				this.$router.push({ path: '/detail', query: { id: _id }});
//			}
//		},
//		beforeMount(){
//			if(this.$route.query.add && this.$route.query.hotelName){
//				var add = this.$route.query.add;
//				var hotelName = this.$route.query.hotelName;
//				this.axios.get(http.url+'/listPageReceive',{params:{add:add,hotelName:hotelName}}).then(response => {
//					window.setTimeout(()=>{
//						this.switchShow = false;
//						this.dataset = response.data.data.results;
//					},500)
//				}).catch(function (error) {
//				    console.log(error);
//				})
//			}else{
//				this.axios.get(http.url + '/listPage').then(response => {
//					window.setTimeout(()=>{
//						this.switchShow = false;
//						this.dataset = response.data.data.results;
//					},500)
//				}).catch(function (error) {
//				    console.log(error);
//				});
//			}
//		}
//	}
</script>