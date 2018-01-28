<template>
	<mt-popup class="start" v-model="$store.state.listVuex.showStar" position="bottom" modal=false>
		<div id="star">
			<p>星级</p>
			<div class="startList">
				<mt-button size="small" v-for="(item,idx) in starset" :key="item.idx" @click="selected(item.value)" :class="{active:activeName == item.value}">{{item.text}}</mt-button>
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
			<div class="sortBottom">
				<mt-button type="default" size="large" class="clear" @click="clearAll">清除</mt-button>
				<mt-button type="primary" size="large" @click="send">确认</mt-button>
			</div>
		</div>
	</mt-popup>
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
				this.$store.state.listVuex.showStar = false;
				this.msg = [{type:"upDataList"},{params:{stars:this.activeName,price:this.rangeValue}}];
				this.$store.commit('listDataLoad',this.msg);
			}
  		}
	}
</script>