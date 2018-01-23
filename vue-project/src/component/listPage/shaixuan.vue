<template>
	<div id="shaixuan">
		<div class="score">
			<p>评分</p>
			<div class="scoreList">
				<mt-button size="small" v-for="item in scoreSet" @click="selected(item.value)" :class="{active:activeName == item.value}" style="width:30%;float:left">{{item.text}}</mt-button>
			</div>
		</div>
		<div>
			<p>酒店设施</p>
			<div class="equipList">
				<mt-button size="small" v-for="item in equipment" @click="find(item.value)" :class="{active:EactiveName == item.value}" style="width:30%;float:left">{{item.text}}</mt-button>
			</div>
		</div>
		<mt-button type="default" size="large" class="clear">清除</mt-button>
		<mt-button type="primary" size="large" @click = 'send'>确认</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				scoreSet:[
					{text:'全部',value:'all'},
					{text:'8分以上',value:8},
					{text:'6分以上',value:6}
				],
				activeName:'',
				equipment:[
					{text:'WiFi',value:'hasWifi'},
					{text:'停车场',value:'hasParking'},
					{text:'票务',value:'Ticket'},
					{text:'餐厅',value:'Restaurant'},
					{text:'洗衣间',value:'Laundry'},
					{text:'游泳池',value:'swimming'},
					{text:'Spa',value:'Spa'},
					{text:'酒吧',value:'bar'},
					{text:'健身设施',value:'fit'},
					{text:'儿童看护',value:'children'},
					{text:'电梯',value:'lift'},
					{text:'',value:''}
				],
				EactiveName:''
			}
		},
		methods:{
			selected:function(scoreName){
				this.activeName = scoreName;
			},
			find:function(equipmentName){
				this.EactiveName = equipmentName;
			},
			send:function(){
				this.msg = [{type:"shaixuan"},{params:{score:this.activeName,equipment:this.EactiveName}}];
				this.$emit('e1',this.msg);
			}
		}
	}
</script>