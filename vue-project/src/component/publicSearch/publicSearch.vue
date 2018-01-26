<template>
	<div class="searchLike">
		<div id="publicSearch" class="clearfix">
			<div class="searchLeft"></div>
			<div class="search fl">
				<span class="fl iconfont icon-sousuo"></span>
				<input class="fl" v-model="value" placeholder="搜索酒店名、关键字、地标" v-on:input="searchHotel">
			</div>
			<span @click='returnHistory1' class="fr can">取消</span>	
		</div>
		<div class="searchBottom">
			<p v-if="watchEnter">
				{{value}}
			</p>
			<div class="historySearch">
				<p>
					最近搜索: 
				</p>
				<p>
					<span v-for = "(obj,index) in historyHotel" :key="obj.index" v-if="index>= (historyHotel.length-2) " @click="RouteToDetail(obj.hName)">{{obj.hName}}</span>
				</p>
			</div>
			<div class="jiudian">
				<p>你可能要找的酒店:</p>
				<ul>
					<li v-for="(obj,index) in searchList" v-heightLight="{index:index}" @click='sendNew(obj.id)' class="res">
						{{obj.hotelName}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import publicSearch from './publicSearch.scss';
	import http from '../../http/baseUrl.js';
	export default{
		data(){
			return{
				value:'',
				historyHotel:[],
				searchList:[],
				watchEnter:false
			}
		},
		directives:{
			heightLight:{
				inserted:function(element,binding){
					console.log(binding.value);
					if(binding.value.index %2 != 0){
						element.style.background = "#ccc";
					}
				}
			}
		},
		methods:{
			returnHistory1:function(){
				this.$router.go(-1);
			},
			sendNew:function(_id){
				this.$router.push({ path: '/detail', query: { id: _id }});
			},
			RouteToDetail:function(oName){
				this.axios.get( http.url +'/searchId',{params:{hotelName:oName}}).then(response =>{
					var hId = response.data.data.results[0].id;
					console.log(hId);
					this.$router.push({ path: '/detail', query: { id: hId }});
				})
				
			},
			searchHotel:function(){
				this.watchEnter = true;
				if(this.value != ''){
					this.axios.get( http.url + '/publicSearch',{params:{data:this.value}}).then(response =>{
						this.res = response.data.data.results;
						console.log(this.res);
						this.searchList = this.res;
					}).catch(function(error){
						console.log(error)
					})
				}
			}
		},
		beforeMount(){
			var arrAll = [];
			if(window.localStorage.username){
				var username = window.localStorage.username
				this.axios.get(http.url +'/getHistory',{params:{username:username}}).then(response =>{

					this.historyHotel = response.data.data.results;
					console.log(this.historyHotel);
				})
			}else{
				if(document.cookie){
					var cookie = document.cookie;
					cookie = cookie.split('; ');
			        cookie.forEach(function(item){
			            let arr = item.split('=');
			            if(arr[0]=='localHistory'){
			                arrAll = JSON.parse(arr[1]);
			            }
			        })
			        this.historyHotel = arrAll;
				}
			}
		}
	}
</script>
