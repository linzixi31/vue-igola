<template>
		<div class="orderCom">
			<mt-header title="预订">
				<router-link to="/" slot="left" >
				    	<mt-button icon="back"  @click="$router.go(-1)"></mt-button>
				</router-link>
			</mt-header>
			<div class="orderBody">
				<div class="hotelInformation">
					<p class="hotelName">
						<i class="iconfont icon-shoucang"></i>
						{{hotelName}}
						<span class="starsNum">{{stars}}</span>
					</p>
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
				<div class="userInfor"  > 
					<div class="userinformation" v-for="(val,idx) in userinformation"  @click = "yourInfor(val,$event)">
						<div><i :class="icon[idx]"></i><span >{{val}}</span></div>
						<div class="addInfor" >添加&nbsp;&nbsp;&gt;</div>
					</div>
				</div>
				
				<p class="attention">备注&取消政策</p>
			</div>
			<div class="orderFoot">
				<div >
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
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';

	require ('./orderInput.scss');
	

	export default {
		data(){
			return {
				userinformation:['入住人(必填)','联系电话(必填)','住客偏好(可选)'],
				icon:['iconfont icon-lianxirenxuanzhong','iconfont  icon-lianxirenqunzu','iconfont icon-msnui-email'],
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
			stars:function(){
				return this.$route.params.stars;
			}
		},
		methods:{
			createOrder:function(){
				//验证用户是否登录
				var userName = window.localStorage.username;
				if(!userName){
					MessageBox.alert('请先登录哦！').then(action => {
					  	this.$router.replace('/login');
					})
					return;
				};

				if(this.linkman != '' && this.tel != ''){
					Indicator.open('正在为您生成订单...');
					//生成订单信息
					//生成订单的时间
					var createOrderTime = new Date();
					//订单失效时间(15分钟后过期)
					var failureTime = new Date(createOrderTime.getTime() + 900000).toLocaleString();
					
					var newOrder = {
						loginer:userName,
						room_id:this.roomId,
						hotel_id:this.hotelId,
						night:this.nightNum,
						linkman:this.linkman,
						telephone:this.tel,
						startTime:this.data.data.dateIn,
						endTime:this.data.data.dateOut,
						orderTime:createOrderTime.toLocaleString(),
						failureTime:failureTime,
						price:this.data.price * this.nightNum,
						hint:this.hint
					};
					console.log(newOrder);
					this.axios.get(http.url + '/createOrder',{params:newOrder}).then(function(result){
						if(result.status){
							var order_id = result.data.orderId;
							console.log(order_id);
							Indicator.close();
							this.$router.push({path:'/payment',query:{id:order_id}});
						};
					}.bind(this))
				}else{
					Toast({
					 	 message: '请填写入住信息！',
					 	 position: 'middle',
					 	 duration: 800
					});
				}
			},
			yourInfor:function(val,e){
				
				MessageBox.prompt(val,'').then(({ value, action }) => {
					
					// 验证用户输入信息
					if($(e.target.parentNode).index() == 0){
						if(value == null){
							Toast({
							 	 message: '请输入入住人信息！',
							 	 position: 'middle',
							 	 duration: 800
							});
							return;
						}else{
							this.linkman = value;
							$(e.target.parentNode).find('.addInfor').text(value);
						};
					}
					
					if($(e.target.parentNode).index() == 1){
						if(!/^1[34578]\d{9}$/g.test(value)){
							Toast({
							 	 message: '请输入正确电话！',
							 	 position: 'middle',
							 	 duration: 800
							});
							return;
						}else{
							this.tel = value;
							$(e.target.parentNode).find('.addInfor').text(value);
						};
					};

					if($(e.target.parentNode).index() == 2){
						if(value != null){
						 $(e.target.parentNode).find('.addInfor').text(value);
						 this.hint = value;
						}
					}
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
				console.log(this.$route.params.data)
			}.bind(this));

			$('body').click(function(){
				Indicator.close();
			})
		}
	}
</script>

<style type="text/css">
	html,body{height: 100%;}
	#app{height: 100%;}

	.mint-msgbox-title,.mint-msgbox-message,.mint-msgbox-btn{font-size:1.6rem;}
	.mint-msgbox-message,.mint-msgbox-btn{line-height: 3rem;}
	.mint-msgbox .mint-msgbox-input input{height:3.8rem;font-size:1.6rem;}

</style>