//详情页房间列表组件
<template>
	<section class="hotelRoomList">
		<ul>
			<li v-for="(item,idx) in roomList" :key="item.id">
				<div>
					<p class="roomTitle">{{item.type}}</p>
					<p class="roomDescribe"><span>{{item.bedScale}}</span>|<span>可住{{item.availablePerson}}人</span>|<span>无早餐</span></p>
					<p class="roomDescribe">不可取消</p>
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
</template>

<script type="text/javascript">
	import store from '../../vuex/store.js';

	export default {
		data(){
			return {

			}
		},
		computed:{
			orderInfor:function(){
				return store.state.orderDate;
			}
		},
		props:['roomList','hotelId'],
	}
</script>