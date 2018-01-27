<template>
	<mt-popup v-model= "$store.state.showSort" position="bottom" modal=false>
	   	<div id="sort">
			<p>排序方式</p>
			<div class="sortMiddle">
				<mt-radio align="right" v-model="value" :options="options"></mt-radio>
			</div>
			<div class="sortBottom">
				<mt-button type="primary" size="large" @click='check'>确认</mt-button>
			</div>
		</div>
   	</mt-popup>
</template>

<script>
	export default{
		data(){
			return{
				//存放所选选项  
	            value:'',  
	            //checklist设置  
	            options : [{  
	            label: '价格(由低到高)',  
	            value: 'priceUp'
	            },  
	            {  
	            label: '价格(由高到低)',  
	            value: 'priceDown'
	            },  
	            {  
	            label: '评分',  
	            value: 'score'  
	            },  
	            {  
	            label: '星级(由高到低)',  
	            value: 'starDown'
	            },
	            {
	            label: '星级(由低到高)',  
	            value: 'starUp'
	            }],
	            msg:[]
			}
		},
		methods:{  
        	check: function(){
	           if(this.value){
	           		this.$store.state.showSort = false;
	           		this.msg = [{type:"sort"},{params:{order:this.value}}];
	           		this.$store.commit('listDataLoad',this.msg);
	           }
	       	}  
	  	}
	}
</script>