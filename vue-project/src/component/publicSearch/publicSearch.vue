<template>
	<div class="searchLike">
		<div id="publicSearch">
			<div class="search fl">
				<span class="iconfont icon-sousuo fl"></span>
				<input class="fl" v-model="value" placeholder="搜索酒店名、关键字、地标" @focus="popUp" @blur="popDown" v-on:input="searchHotel">
			</div>
			<span @click='returnHistory1' class="fr">取消</span>	
		</div>
		<ul>
			<li v-if="watchEnter">{{value}}</li>
			<li v-for="(obj,index) in searchList" v-heightLight="{index:index}"><router-link :to="{path:'/detail',query: {id: obj.id}}">{{obj.hotelName}}</router-link></li>
		</ul>
		<div class="mask" v-if="searchSwitch"></div>
	</div>
</template>

<script>
	import publicSearch from './publicSearch.scss';
	import baseCss from '../listPage/base.css';
	export default{
		data(){
			return{
				searchSwitch:false,
				value:'',
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
			searchHotel:function(){
				this.watchEnter = true;
				if(this.value != ''){
					this.axios.get('http://127.0.0.1:88/publicSearch',{params:{data:this.value}}).then(response =>{
						this.res = response.data.data.results;
						console.log(this.res);
						this.searchList = this.res;
					}).catch(function(error){
						console.log(error)
					})
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
