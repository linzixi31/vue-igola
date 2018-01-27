<template>
	<mt-popup class="shaixuan" v-model="$store.state.showScreen" position="bottom" modal=false>
		<div id="screen">
			<div class="score">
				<p>评分</p>
				<div class="scoreList">
					<mt-button size="small" v-for="(item,idx) in scoreSet" :key="item.idx" @click="selected(item.value)" :class="{active:activeName == item.value}" style="width:30%;float:left">{{item.text}}</mt-button>
				</div>
			</div>
			<div>
				<p>酒店设施</p>
				<div class="equipList">
					<mt-button size="small" v-for="(item,idx) in equipment" v-if="idx < showNum" :key="item.idx" @click="find(item)" :class="{active:item.type == 1}" style="width:30%;float:left">{{item.text}}</mt-button>
					<div @click="changeState" class="showtips">{{showTip}}</div>
				</div>
			</div>
			<div class="sortBottom">
				<mt-button type="default" size="large" class="clear" @click='clear'>清除</mt-button>
				<mt-button type="primary" size="large" @click = "send">确认</mt-button>
			</div>
		</div>
	</mt-popup>
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
					{text:'WiFi',value:'hasWifi',type:0},
					{text:'停车场',value:'hasParking',type:0},
					{text:'票务',value:'Ticket',type:0},
					{text:'餐厅',value:'Restaurant',type:0},
					{text:'洗衣间',value:'Laundry',type:0},
					{text:'游泳池',value:'swimming',type:0},
					{text:'Spa',value:'Spa',type:0},
					{text:'酒吧',value:'bar',type:0},
					{text:'健身设施',value:'fit',type:0},
					{text:'儿童看护',value:'children',type:0},
					{text:'电梯',value:'lift',type:0},
					{text:'',value:'',type:0}
				],
				EactiveName:'',
				listStatus:false,
				showNum:6,
				showTip:'更多'
			}
		},
		methods:{
			selected:function(scoreName){
				this.activeName = scoreName;
			},
			find:function(equipmentName){
				//console.log(equipmentName)
				if(equipmentName.type == 0){
					equipmentName.type = 1;
				}else{
					equipmentName.type = 0;
				}
			},
			clear:function(){
				this.equipment.forEach(function(item){
					item.type = 0;
				})
				this.activeName = false;
			},
			send:function(){
				this.$store.state.showScreen = false;
				this.msg = [{type:"shaixuan"},{params:{score:this.activeName,equipment:JSON.stringify(this.equipment)}}];
				this.$store.commit('listDataLoad',this.msg);
			},
			changeState:function(){
				if(this.listStatus == false){
					this.listStatus = true;
					this.showNum = 12;
					this.showTip = '收起';
				}else{
					this.listStatus = false;
					this.showNum = 6;
					this.showTip = '更多';
				}
			}
		}
	}
</script>