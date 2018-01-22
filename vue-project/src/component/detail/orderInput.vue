<template>
	<div class="orderCom">
		<mt-header title="预订">
			<router-link :to="backUrl" slot="left">
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
				<div class="userinformation">
					<div><i class="glyphicon glyphicon-signal"></i><span >入住人</span><span class="content"></span></div>
					<div class="addInfor">添加&nbsp;&nbsp;&gt;</div>
				</div>
				<div class="userInput">
					<span>入住人一：</span>
					<input type="text" class="form-control" placeholder="请输入入住人1" v-model="linkman">
					<button type="button" class="btn btn-info">确定</button>
				</div>
				
				<div class="userinformation">
					<div><i class="glyphicon glyphicon-signal"></i><span >联系电话</span><span class="content"></span></div>
					<div class="addInfor">添加&nbsp;&nbsp;&gt;</div>
				</div>
				<div class="userInput">
					<span>联系电话：</span>
					<input type="tel" class="form-control" placeholder="请输入您的联系电话" v-model="tel">
					<button type="button" class="btn btn-info">确定</button>
				</div>
				<div class="userinformation">
					<div><i class="glyphicon glyphicon-signal"></i><span>住客偏好</span><span class="content"></span></div>
					<div class="addInfor">添加&nbsp;&nbsp;&gt;</div>
				</div>
				<div class="userInput">
					<span>住客偏好：</span>
					<input type="text" class="form-control" placeholder="住客偏好" maxlength="10" v-model="hint">
					<button type="button" class="btn btn-info">确定</button>
				</div>
			</div>
			<router-view></router-view>
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

	import { MessageBox } from 'mint-ui';

	// require ('./orderInput.scss');
	

	export default {
		data(){
			return {
				roomData:[],
				hotelName:'',
				addr:'',
				type:'',
				bedScale:'',
				linkman:'',
				tel:'',
				hint:''
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
				return n.slice(1,-1) * 1;
			},
			backUrl:function(){
				return '/detail/?id=' + this.$route.params.hotelId;
			}
		},
		methods:{
			createOrder:function(){
				
				var userName = window.localStorage.username;
				if(!userName){
					MessageBox.alert('请先登录哦！').then(action => {
					  	this.$router.replace('/login');
					})
					return;
				};

				if(this.linkman === '' || this.tel == ''){
					MessageBox('提示', '请输入住户信息！');
					return;
				}else if(!/^1[34578]\d{9}$/g.test(this.tel)){
					MessageBox('提示', '请输入正确的电话号码！');
					return;
				}else{
					var newOrder = {
						loginer:userName,
						room_id:this.roomId,
						hotel_id:this.hotelId,
						night:this.nightNum,
						linkman:this.linkman,
						telephone:this.tel,
						startTime:this.data.data.dateIn,
						endTime:this.data.data.dateOut,
						orderTime:new Date().toLocaleString(),
						roomNumer:1,
						price:this.data.price * this.nightNum,
						hint:this.hint
					};
					console.log(newOrder);
					this.axios.get(http.url + '/createOrder',{params:newOrder}).then(function(result){
						var order_id = result.data.orderId;
						console.log(order_id)
						this.$router.replace(`/payment/${order_id}`);
					}.bind(this))
				}
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
					console.log(this.$route.params.data)
				}.bind(this));

				$('.addInfor').on('click',function(e){
					$(this).parent().next().slideDown();
					$(this).parent().next().find('input').select();
				});

				$('.btn').on('click',function(){
					
					var value = $(this).prev().val();
					if(value === ''){
						MessageBox('提示', '请输入住户信息！');
					}else{
						$(this).parent().prev().find('.content').text(value);
						$(this).parent().slideUp();
					}
					
				})
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
	.userInfor .userinformation{display: flex;border-bottom:1px solid #CDCDCD;padding:0 10px;}
	.userInfor .userinformation span{padding-left:10px;width:100%;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;}
	.userInfor .userinformation div:first-child{flex:2;}
	.userInfor .userinformation div a{display: block;color:#9A9A9A;}
	.userInfor .userinformation div:last-child{flex:1;text-align: right;}
	
	.userInfor .userInput{border-bottom: 1px solid #CDCDCD;display: none;}
	.userInfor .userInput span{width: 30%;}
	.userInfor .userInput input{display: inline-block;width: 63%;}


	.attention{text-align: center;line-height: 40px;background: #fff;margin-top:5px;color:#bbb;}


	.orderFoot{display: flex;padding:0 10px;}

	.orderFoot div{flex:1;}

	.orderFoot .toPay{display: block;background: #159696;color:#fff;width: 100px;line-height: 40px;margin-left:80px;text-align: center;border-radius: 20px;}

</style>