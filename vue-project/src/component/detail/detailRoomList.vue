//详情页房间列表组件
<template>
	<div>
		<section class="userChoose">
			<span @click="breakFast" :class="{cancelBtn:breakfast == 1}">含早</span><span @click="cancelAllowed" :class="{cancelBtn:cancelAllow == 1}">可取消</span>
		</section>
		<section class="hotelRoomList">
			<ul>
				<li class="loadingIcon" v-show="loading">
					<img src="../../assets/img/loading.gif">
				</li>
				<li v-for="(item,idx) in room" :key="item.id">
					<div>
						<p class="roomTitle">{{item.type}}</p>
						<p class="roomDescribe">
							<span>{{item.bedScale}}</span>|
							<span>可住{{item.availablePerson}}人</span>|
							<span v-if="item.hasbreakfast == 0">无早餐</span>
							<span v-if="item.hasbreakfast == 1">含早餐</span>
						</p>
						<p class="roomDescribe" v-if="item.cancelAllow == 0">不可取消</p>
						<p class="roomDescribe" v-if="item.cancelAllow == 1">可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥{{item.znePrice}}</span>
						<div class="hotelBookBtn">
							<a @click="goToPay(item.id,item.znePrice)">预订</a>
						</div>
					</div>
				</li>
				<li v-if="room.length == 0" class="noRoom">没有找到合适的房间哦！<img src="https://content.igola.com/static/WEB/images/other/room-invalid.png" alt=""></li>
			</ul>
		</section>
	</div>
	
</template>

<script type="text/javascript">
	import store from '../../vuex/store.js';

	import http from '../../http/baseUrl.js';

	export default {
		props:['hotelId','loading','roomList','stars','timer'],
		data(){
			return {
				cancelAllow:0,//0为不可取消
				breakfast:1,//0为无早餐
				switch:0,//初始开关为零
				allRoom:[]
			}
		},
		computed:{
			orderInfor:function(){
				return store.state.orderDate;
			},
			room:function(){
				//开关为0时使用父组件传过来的数据，开关为1时使用过滤之后的数据
				return this.switch == 0 ? this.roomList :this.allRoom;
			}
		},
		methods:{
			breakFast:function(){
				//判断是否有早餐
				if(this.breakfast == 0){
					this.breakfast = 1;
				}else if(this.breakfast == 1){
					this.breakfast = 0;
				};
				
				this.filterRoom(this.breakfast,this.cancelAllow);
			},
			cancelAllowed:function(){
				//判断是否可取消
				if(this.cancelAllow == 0){
					this.cancelAllow = 1;
				}else if(this.cancelAllow == 1){
					this.cancelAllow = 0;
				};
				
				this.filterRoom(this.breakfast,this.cancelAllow);
			},
			filterRoom:function(bre,cal){
				//点击选择房间是开关变为1
				this.switch = 1;
				
				//过滤符合分类的房间
				this.allRoom = this.roomList.filter(function(item){
					console.log(bre,cal)
					return item.cancelAllow ==  cal && item.hasbreakfast == bre;
				})
				
			},
			goToPay:function(id,price){
				clearTimeout(this.timer);
				this.$router.push({
					name:'orderCom', 
					params:{
					 	hotelId:this.hotelId,
					 	id: id,
					 	data:this.orderInfor,
					 	price:price,
					 	stars:this.stars
					}
				})
			}
		}
	}
</script>