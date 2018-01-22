<template>
	<div id="listPage">
		<search></search>
		<datagrid :dataUp="newData"></datagrid>
		<tabber @sendNew="renew"></tabber>
	</div>
</template>

<script>
	import datagrid from './datagrid.vue';
	import search from './search.vue';
	import tabber from './tabber.vue';
	import baseCss from './base.css';
	import listPage from './listPage.scss';
	export default{
		name:'app',
		components:{datagrid,search,tabber},
		data(){
			return{
				newData:[]
			}
		},
		methods: {
	        renew:function(msg){
	        	this.newData=msg
	        	console.log(this.newData);
	        	this.$children[1].dataset = this.newData;
	        }
	  },
	  mounted:function(){
			var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
            document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
            var scale = 1/window.devicePixelRatio;
            var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
            document.getElementById("vp").content = mstr;	
            
//          console.log(this.$route.query.add,this.$route.query.hotelName);
		},
		beforeRouteLeave(to,from,next){
			//console.log(333)
			document.getElementById("vp").content = ''
			document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
			document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
//			console.log(333)
			next()
		}
	}
</script>
