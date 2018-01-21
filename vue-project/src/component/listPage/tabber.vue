<template>
	<div id="foot">
		<mt-tabbar fixed>
		  	<mt-tab-item id="tab1" @click.native="sortUp">
		    	<img slot="icon" src="../../assets/img/pingfeng.png">
		    	评分
		  	</mt-tab-item>
		  	<mt-tab-item id="tab2" @click.native="starUp">
		    	<img slot="icon" src="../../assets/img/price.png">
		    	价格/星级
		  	</mt-tab-item>
		  	<mt-tab-item id="tab3" @click.native="shaixuanUp">
		    	<img slot="icon" src="../../assets/img/shaixuan.png">
		    	筛选
		  	</mt-tab-item>
		</mt-tabbar>
		<mt-popup
			class="sort"
		    v-model="sortVisible"
		    position="bottom"
		    modal=false>
		    <sort @e1="send"></sort>
	   	</mt-popup>
	   
	   	<mt-popup
			class="start"
		    v-model="startVisible"
		    position="bottom"
		    modal=false>
		    <star @e1="send"></star>
	   	</mt-popup>
	   	<mt-popup
			class="shaixuan"
		    v-model="shaixuanVisible"
		    position="bottom"
		    modal=false>
		    <shaixuan @e1="send"></shaixuan>
	   	</mt-popup>
	</div>
</template>

<script>
	import sort from './sort.vue'
	import star from './star.vue'
	import shaixuan from './shaixuan.vue'
	export default{
		components:{sort,star,shaixuan},
		data(){
			return{
				sortVisible:false,
				startVisible:false,
				shaixuanVisible:false
			}
		},
	    methods: {
	        sortUp: function() {
	          	this.sortVisible = true;
	        },
	        starUp: function(){
	        	this.startVisible = true;
	        },
	        shaixuanUp: function(){
	        	this.shaixuanVisible = true;
	        },
	        send:function(msg){
	        	this.$emit('sendNew',msg);
	        	this.sortVisible = false;
	          	this.startVisible = false;
	          	this.shaixuanVisible = false;
	        }
	    }
	}
</script>

<style>
	.sort{
		width:100%;
	}
	.start{
		width:100%;
	}
	.shaixuan{
		width:100%;
	}
</style>