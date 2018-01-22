<template>
	<div class="orderCom">
		<mt-header title="预订">
			<router-link to="/detail" slot="left">
			    	<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="orderBody">
			<div class="hotelInfor">
				<p class="hotelName">{{hotelName}}</p>
				<p class="hotelAddr">{{addr}}</p>
			</div>
			<div class="roomInformation">
				<p>房型：<span>{{type}}</span></p>
				<p>床型：<span>{{bedScale}}</span></p>
				<p>早餐：<span>含早餐</span></p>
				<p class="totalNight">{{data.data.night}}</p>
				<p>入住：<span>{{data.data.dateIn}}</span></p>
				<p>退房：<span>{{data.data.dateOut}}</span></p>
			</div>
			<div class="roomInfor">
				<div>
					<p>房间数</p>
					<p>1间</p>
				</div>
				<div>
					<p>入住/退房</p>
					<p>{{data.data.dateIn}}-{{data.data.dateOut}}</p>
				</div>
			</div>
			<div class="userInfor"> 
				<div @click="popup = 'true'">
					<div><i class="glyphicon glyphicon-signal"></i>入住人</div>
					<div>
						<router-link to="/orderCom/person">添加&nbsp;&nbsp;&gt;</router-link>
					</div>
				</div>
				<router-view></router-view>
				<div>
					<div><i class="glyphicon glyphicon-signal"></i>联系人</div>
					<div>
						<router-link to="/orderCom/contact">添加&nbsp;&nbsp;&gt;</router-link>
					</div>
				</div>
				<div>
					<div><i class="glyphicon glyphicon-signal"></i>住客偏好</div>
					<div>
						<router-link to="/orderCom/hint">添加&nbsp;&nbsp;&gt;</router-link>
					</div>
				</div>
			</div>
			<p class="attention">备注&取消政策</p>
		</div>
		<div class="orderFoot">
			<div>
				<p>合计</p>
				<p>￥{{data.price * nightNum}}</p>
			</div>
			<div>
				
				<span class="toPay" @click="createOrder">去支付</span>
			</div>
		</div>
		
	</div>
	
</template>



<script type="text/javascript">
	

	import http from '../../http/baseUrl.js';

	// require ('./orderInput.scss');

	export default {
		data(){
			return {
				roomData:[],
				hotelName:'',
				addr:'',
				type:'',
				bedScale:''
			}
		},
		computed:{
			data:function(){
				return this.$route.params;
			},
			roomId:function(){
				return this.$route.params.id;
			},
			hotelId:function(){
				return this.$route.params.hotelId;
			},
			nightNum:function(){
				var n =this.$route.params.data.night;
				return n.substr(1,1) * 1;
			}
		},
		methods:{
			createOrder:function(){
				var newOrder = {
					roomId:this.roomId,
					hotelName:this.hotelName,
					night:this.nightNum,
					dateIn:this.data.data.dateIn,
					dateOut:this.data.data.dateOut,
					roomNumer:1,
					totalPrice:this.data.price * this.nightNum,
					type:this.type,
					bedScale:this.bedScale
				};
				console.log(newOrder);
				this.axios.get(http.url + '/createOrder',{params:newOrder}).then(function(result){
					console.log(result);
					// this.$router.replace('/pay');
				})
			}
		},
		mounted:function(){
			
			//请求当前房间信息
				this.axios.get( http.url + '/getRoomInformation',{params:{roomId:this.roomId,hotelId:this.hotelId}}).then(function(res){
					this.roomData = res.data.data.results;
					this.hotelName = this.roomData[0].hotelName;
					this.addr = this.roomData[0].address;
					this.type = this.roomData[0].type;
					this.bedScale = this.roomData[0].bedScale;
					console.log(this.roomData)
				}.bind(this));
		}
	}
</script>

<style type="text/css">
	html,body{height: 100%;}
	#app{height: 100%;}
	body{background: #F0F0F0;}

	.orderCom{height: 100%;display: flex;flex-direction: column;}

	.orderBody{flex:1;overflow-x: hidden;}

	.mint-header{background: #159696;color:#fff;font-size: 18px;}

	.hotelInfor,.roomInformation{padding:10px;border-bottom:1px solid #CDCDCD;background: #fff;}

	.roomInformation{padding-bottom:40px;color:#494949;}

	.hotelInfor .hotelName{line-height: 30px;font-size: 18px;color:#454545;}

	.hotelInfor .hotelAddr{width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 12px;color:#949494;}

	.roomInformation p{line-height: 24px;font-size:12px;}	

	.roomInformation .totalNight{color:#979797;margin-top:10px;}

	.roomInfor{display: flex;padding:5px 10px;font-size:12px;line-height: 18px;margin-bottom:5px;background: #fff;}

	.roomInfor div{flex:1;padding:0 30px;}

	.roomInfor div:first-child{border-right:1px solid #CDCDCD;text-align: center;}

	.roomInfor div p:first-child{color:#979797;}
	
	.userInfor{background: #fff;line-height: 50px;color:#9A9A9A;}
	.userInfor>div{display: flex;border-bottom:1px solid #CDCDCD;padding:0 20px;}
	.userInfor>div div{flex:1;}
	.userInfor>div div a{display: block;color:#9A9A9A;}
	.userInfor>div div:last-child{text-align: right;}

	.attention{text-align: center;line-height: 40px;background: #fff;margin-top:5px;color:#bbb;}


	.orderFoot{display: flex;padding:0 10px;}

	.orderFoot div{flex:1;}

	.orderFoot .toPay{display: block;background: #159696;color:#fff;width: 100px;line-height: 40px;margin-left:80px;text-align: center;border-radius: 20px;}

</style>