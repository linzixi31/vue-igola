<template>
	<div id="listPage">
		<search></search>
		<div class="top"></div>
		<datagrid></datagrid>
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
				
			}
		},
		methods: {
	        renew:function(msg){
	        	this.$children[1].switchShow = true;
	        	var data;
        		this.axios.get('http://127.0.0.1:88/' + msg[0].type,msg[1]).then(response => {
					data= response.data.data.results;
					console.log(data);
				}).catch(function (error) {
				    console.log(error);
				});
        		window.setTimeout(()=>{
        			console.log(this);
	        		this.newData=data;
	        		this.$children[1].dataset = this.newData;
	        		this.$children[1].switchShow = false;
	        	},500)
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
			document.getElementById("vp").content = ''
			document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
			document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
			next()
		}
	}
</script>
