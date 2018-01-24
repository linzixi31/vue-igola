<template>
	<div class="orderCom">
		<mt-header title="预订">
			<router-link to="/" slot="left">
			    	<mt-button icon="back" @click="$router.go(-1)"></mt-button>
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
			<div class="userInfor"> 
				<div class="userinformation">
					<div><i class="iconfont icon-lianxirenxuanzhong"></i><span >入住人</span><span class="content"></span></div>
					<div class="addInfor">添加&nbsp;&nbsp;&gt;</div>
				</div>
				<div class="userInput">
					<span>入住人一：</span>
					<input type="text" class="form-control" placeholder="请输入入住人1" v-model="linkman">
					<button type="button" class="btn btn-info">确定</button>
				</div>
				
				<div class="userinformation">
					<div><i class="iconfont icon-lianxirenqunzu"></i><span >联系电话</span><span class="content"></span></div>
					<div class="addInfor">添加&nbsp;&nbsp;&gt;</div>
				</div>
				<div class="userInput">
					<span>联系电话：</span>
					<input type="tel" class="form-control" placeholder="请输入您的联系电话" v-model="tel">
					<button type="button" class="btn btn-info">确定</button>
				</div>
				<div class="userinformation">
					<div><i class="iconfont icon-rili"></i><span>住客偏好</span><span class="content"></span></div>
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



	require ('./orderInput.scss');
	

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
				hint:'',
				summation:false
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
			},
			stars:function(){
				return this.$route.params.stars;
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
							console.log(order_id)
							this.$router.push({path:'/payment',query:{id:order_id}});
						};
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

</style>