<template>
	<div id="star">
		<p>星级</p>
		<div class="startList">
			<mt-button size="small" v-for="item in starset" @click="selected(item.value)" :class="{active:activeName == item.value}" style="width:30%;float:left">{{item.text}}</mt-button>
		</div>
		<p>价格</p>
		<div class="price">
			<mt-range
			  v-model="rangeValue"
			  :min="0"
			  :max="2000"
			  :step="500"
			  :bar-height="5">
			</mt-range>
			<div class="rangeList">
				<span v-for="obj in rangeList">￥{{obj.text}}</span>
			</div>
		</div>
		<mt-button type="default" size="large" class="clear" @click="clearAll">清除</mt-button>
		<mt-button type="primary" size="large" @click="send">确认</mt-button>
	</div>
</template>

<script>
	import bCss from './base.css'
	export default{
		data () {  
		    return {  
		        starset:[
		        	{text:'全部',value:'all'},
		        	{text:'0-1星级',value:1},
		        	{text:'2星级',value:2},
		        	{text:'3星级',value:3},
		        	{text:'4星级',value:4},
		        	{text:'5星级',value:5}
		        ],
		        activeName:'',
		        msg:[],
		        rangeValue:500,
		        rangeList:[
		        	{text:'0'},
		        	{text:'500'},
		        	{text:'1000'},
		        	{text:'1500'},
		        	{text:'2000'}
		        ]
		    }  
		},
		methods:{
			selected:function(starname){
				this.activeName = starname;
			},
			clearAll:function(){
				this.activeName = '';
				this.rangeValue=500;
			},
			send:function(){
				if(this.activeName&&this.rangeValue){
					this.axios.get('http://127.0.0.1:88/upDataList',{params:{stars:this.activeName,price:this.rangeValue}}).then(response => {
						this.msg = response.data.data.results;
						this.$emit('e1',this.msg);
						console.log(this.msg);
					}).catch(function (error) {
					    console.log(error);
					});
				}
			}
  		}
	}
</script>

<style>
	.clear{background:#FFFFFF;box-shadow:0px;}
	.startList{display:flex;justify-content:space-around;flex-wrap:wrap;padding:10px}
	.startList button{width:28%;border-radius:45px;margin-bottom:5%;}
	.rangeList{display:flex;justify-content:space-between;flex-wrap:wrap;font-size:24px;}
	.price{padding:20px;}
	.active{background:#ccc;}
	.mint-cell-wrapper{height:60px;}
	#star button{display:inline-block;height:80px;font-size:26px;}
	#star p{height:80px;font-size:28px;text-align: center;line-height:80px;font-weight:normal}
</style>