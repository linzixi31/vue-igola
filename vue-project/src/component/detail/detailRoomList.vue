//详情页房间列表组件
<template>
	<div>
		<section class="userChoose">
			<span>含早</span><span @click="filterRoom" :class="{cancelBtn:cancelAllow == 1}">可取消</span>
		</section>
		<section class="hotelRoomList">
			<ul>
				<li class="loadingIcon" v-show="loading">
					<img src="../../assets/img/loading.gif">
				</li>
				<li v-for="(item,idx) in roomList" :key="item.id">
					<div>
						<p class="roomTitle">{{item.type}}</p>
						<p class="roomDescribe"><span>{{item.bedScale}}</span>|<span>可住{{item.availablePerson}}人</span>|<span>无早餐</span></p>
						<p class="roomDescribe" v-if="item.cancelAllow == 0">不可取消</p>
						<p class="roomDescribe" v-if="item.cancelAllow == 1">可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥{{item.znePrice}}</span>
						<div class="hotelBookBtn">
							<router-link :to="{name:'orderCom', params:{ hotelId:hotelId,id: item.id,data:orderInfor,price:item.znePrice}}">预订</router-link>
						</div>
					</div>
				</li>
			</ul>
		</section>
	</div>
	
</template>

<script type="text/javascript">
	import store from '../../vuex/store.js';

	import http from '../../http/baseUrl.js';

	export default {
		data(){
			return {
				cancelAllow:0,//0为不可取消
			}
		},
		computed:{
			orderInfor:function(){
				return store.state.orderDate;
			},
		},
		props:['hotelId','loading','roomList'],
		methods:{
			filterRoom:function(){
				if(this.cancelAllow == 0){
					this.cancelAllow = 1;
				}else if(this.cancelAllow == 1){
					this.cancelAllow = 0;
				}
				this.RoomAjax(this.hotelId,this.cancelAllow);
			},
			RoomAjax:function(hotelid,cancel){
				
				//请求当前酒店信息
				this.axios.get( http.url + '/getHotelRoom',{params:{hotelId:hotelid,cancelAllow:cancel}}).then(function(res){
					this.$emit('changeRoomList', res.data.data.results)
					
				}.bind(this));
			}
		}
	}
</script>