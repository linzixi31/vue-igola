<template>
	<div id="sort">
		<p>排序方式</p>
		<div class="sortMiddle">
			<mt-radio
			  	align="right"
			  	v-model="value"
			  	:options="options"
			  	>
			</mt-radio>
		</div>
		<mt-button type="primary" size="large" @click='check'>确认</mt-button>
	</div>
</template>

<script>
	export default{
		data () {  
		    return {  
		        //存放所选选项  
	            value:"",  
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
	            }]  
		    }  
		},
		methods:{  
        check: function(){  
	           console.log(this.value,this.type);
	           if(this.value){
	           		this.axios.get('http://127.0.0.1:88/sort',{params:{order:this.value}}).then(response => {
						this.msg = response.data.data.results;
						this.$emit('e1',this.msg);
					}).catch(function (error) {
					    console.log(error);
					    console.log(222);
					});
	           }
	       	}  
	  	}
	}
</script>