//详情页房间列表组件
<template>
	<section class="hotelRoomList">
		<ul>
			<li v-for="(item,idx) in roomList" >
				<div>
					<p class="roomTitle">{{item.type}}</p>
					<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
					<p class="roomDescribe">不可取消</p>
				</div>
				<div>
					<span class="hotelPrice">￥{{item.znePrice}}</span>
					<div class="hotelBookBtn" @click="showInput">预订</div>
				</div>
			</li>
			<!-- <li v-if="dataset == []">此酒店暂无房间可选哦</li> -->
		</ul>
		<mt-popup  v-model="show" position="popup-fade">
			<orderInput></orderInput>
		</mt-popup>
	</section>
</template>

<script type="text/javascript">
	import orderInput from './orderInput.vue';

	export default {
		data(){
			return {
				show:false,
			}
		},
		components:{
			orderInput
		},
		props:['roomList'],
		methods:{
			showInput:function(){
				this.show = true;
			},
		}
	}
</script>