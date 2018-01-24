<template>
	<div class="searchLike">
		<div id="publicSearch">
			<div class="search fl">
				<span class="iconfont icon-sousuo fl"></span>
				<input class="fl" v-model="value" placeholder="搜索酒店名、关键字、地标" @focus="popUp" @blur="popDown" v-on:input="searchHotel">
			</div>
			<span @click='returnHistory1' class="fr">取消</span>	
		</div>
		<p v-if="watchEnter">{{value}}</p>
		<p>
			最近搜索: 
		</p>
		<p>
			<span v-for = "(obj,index) in historyHotel" :key="obj.index" v-if="index<2">{{obj.hName}}</span>
		</p>
		<ul>
			<li v-for="(obj,index) in searchList" v-heightLight="{index:index}" @click='sendNew(obj.id)' class="res">
				{{obj.hotelName}}
			</li>
		</ul>
		<div class="mask" v-if="searchSwitch"></div>
	</div>
</template>

<script>
	import publicSearch from './publicSearch.scss';
	import baseCss from '../listPage/base.css';
	import http from '../../http/baseUrl.js';
	export default{
		data(){
			return{
				searchSwitch:false,
				value:'',
				historyHotel:[],
				searchList:[],
				watchEnter:false
			}
		},
		components:{
			baseCss
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
			popUp:function(){
				this.searchSwitch = true;
			},
			popDown:function(){
				this.searchSwitch = false;
			},
			sendNew:function(_id){
				this.$router.push({ path: '/detail', query: { id: _id }});
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
			
		},
		mounted:function(){
			var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
            document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
            var scale = 1/window.devicePixelRatio;
            var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
            document.getElementById("vp").content = mstr;	
		},
		beforeRouteLeave(to,from,next){
			document.getElementById("vp").content = ''
			document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
			document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
			next()
		}
	}
</script>
