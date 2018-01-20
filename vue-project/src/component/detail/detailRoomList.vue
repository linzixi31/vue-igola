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
						<router-link :to="{name:'orderCom', params:{ id: item.id,data:roomList} }">预订</router-link>
					</div>
				</div>
			</li>
			<!-- <li v-if="dataset == []">此酒店暂无房间可选哦</li> -->
		</ul>
	</section>
</template>

<script type="text/javascript">

	export default {
		data(){
			return {
				
			}
		},
		props:['roomList']
	}
</script>