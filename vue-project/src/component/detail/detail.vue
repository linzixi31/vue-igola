<template>
	<div id="hotelBooking">
		<section class="hotelImg">
			<img src="../../assets/img/hotel.jpg">
			<a class="backToList" href="#/list"><i class="glyphicon glyphicon-menu-left"></i></a>
			<div class="hotelImgNum"><span>{{picNum}}</span>张</div>
		</section>
		<section class="hotelInfor">
			<p class="hotelTitle">
				<span>{{title}}</span>
				<span class="hotelStar">
					<i class="glyphicon glyphicon-star"></i>
					<i class="glyphicon glyphicon-star"></i>
					<i class="glyphicon glyphicon-star"></i>
				</span>
			</p>
			<p class="hotelEngName">Guang Zhou Masia Hotel</p>
			<p class="hotelAdr">Buiding E,NO.10 Xintai Commertial St. Daguang ZhongGuo</p>
		</section>
		<section class="checkInTime">
			<div><span>1月20日</span><span>入住</span></div>
			<div><span>1月20日</span><span>退房</span></div>
			<div><span>1晚</span></div>
		</section>
		<section class="userChoose">
			<span>含早</span><span>可取消</span>
		</section>
		<section class="hotelRoomList">
			<ul>
				<li>
					<div>
						<p class="roomTitle">apartment suite</p>
						<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
						<p class="roomDescribe">不可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥628</span>
						<div class="hotelBookBtn">预订</div>
					</div>
				</li>
				<li>
					<div>
						<p class="roomTitle">apartment suite</p>
						<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
						<p class="roomDescribe">不可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥628</span>
						<div class="hotelBookBtn">预订</div>
					</div>
				</li>
				<li>
					<div>
						<p class="roomTitle">apartment suite</p>
						<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
						<p class="roomDescribe">不可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥628</span>
						<div class="hotelBookBtn">预订</div>
					</div>
				</li>
				<li>
					<div>
						<p class="roomTitle">apartment suite</p>
						<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
						<p class="roomDescribe">不可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥628</span>
						<div class="hotelBookBtn">预订</div>
					</div>
				</li>
				<li>
					<div>
						<p class="roomTitle">apartment suite</p>
						<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
						<p class="roomDescribe">不可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥628</span>
						<div class="hotelBookBtn">预订</div>
					</div>
				</li>
				<li>
					<div>
						<p class="roomTitle">apartment sapartment suite</p>
						<p class="roomDescribe"><span>1大床或2单床</span>|<span>可住2人</span>|<span>无早餐</span></p>
						<p class="roomDescribe">不可取消</p>
					</div>
					<div>
						<span class="hotelPrice">￥12628</span>
						<div class="hotelBookBtn">预订</div>
					</div>
				</li>
			</ul>
		</section>
		<section class="aboutHotel">
			<ul>
				<li class="aboutHotelLink"><span>酒店简介</span><span><i class="glyphicon glyphicon-menu-right"></i></span></li>
				<li class="aboutHotelLink"><span>酒店政策</span><span><i class="glyphicon glyphicon-menu-right"></i></span></li>
				<li class="aboutHotelLink"><span>酒店设施</span><span><i class="glyphicon glyphicon-menu-right"></i></span></li>
				<li><span>iGola服务热线：</span><span class="igolaTel"><i class="glyphicon glyphicon-phone-alt" aria-hidden="true"></i>400-900-7280</span></li>
				<li>iGola服务时间：7 &times; 24h</li>
				<li class="aboutHotelLink"><span>iGola酒店问答</span><span><i class="glyphicon glyphicon-menu-right"></i></span></li>
			</ul>
		</section>
	</div>
</template>


<script type="text/javascript">
	export default {
		data(){
			return {
				picNum:18,
				title:'广州大酒店',
				id:12
			}
		},
		methods:{

		},
		mounted:function(){

			//请求当前酒店房间数据
			this.axios.get('/getHotelRoom',{hotelId:this.id}).then(function(res){
				console.log(res);
			})
		}
	}
</script>



<style type="text/css">
	a{text-decoration: none;color:#000;}
	p,ul{margin:0;padding:0;}


	#hotelBooking{background: #eee;}


	.hotelImg{position: relative;font-size:0;height: 6.6rem;}
	.hotelImg img{width: 100%;}
	.hotelImg .backToList{display: block;width:1.066667rem;line-height:1.066667rem;text-align:center;position: absolute;color:#fff;;font-size:0.48rem;top:0.133333rem;left:0;}
	.hotelImg .hotelImgNum{position: absolute;right:0.44rem;bottom:0.333333rem;font-size:0.373333rem;color:#fff;}


	.hotelInfor{padding:0.16rem 0.333333rem;background: #fff;}
	.hotelInfor .hotelTitle{font-size:0.426667rem;color:#000;line-height: 0.666667rem;}
	.hotelInfor .hotelStar{color:#FFA100;}
	.hotelInfor .hotelEngName,.hotelInfor .hotelAdr{font-size:0.346667rem;line-height: 0.506667rem;}
	.hotelInfor .hotelAdr{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color:#A1A1A1;}


	.checkInTime{margin-top:0.133333rem;background: #fff;display:flex;align-items:center;padding:0.506667rem 0.426667rem;}
	.checkInTime div{flex:1;text-align: center;}
	.checkInTime div span:nth-child(1){font-size: 0.426667rem;}
	.checkInTime div span:nth-child(2){font-size:0.32rem;color:#A1A1A1;padding-left:0.24rem;}
	.checkInTime div:nth-child(3){text-align: left;}
	.checkInTime div:nth-child(3) span{background:#F1F1F1;padding:0 0.4rem;border-radius:0.226667rem;font-size: 0.32rem;}
	

	.userChoose{background: #FAFAFA;border-top:0.013333rem solid #F1F1F1;border-bottom:0.013333rem solid #F1F1F1;padding:0.24rem 0.133333rem;font-size: 0.346667rem;}
	.userChoose span{display: inline-block;padding:0.266667rem;background: #fff;margin-left:0.266667rem;border-radius:0.133333rem;border:0.013333rem solid #F1F1F1;}


	.hotelRoomList ul li{display: flex;padding:0.333333rem 0.266667rem ;border-bottom:0.066667rem solid #FAFAFA;background: #fff;}
	.hotelRoomList ul li .roomTitle{font-size: 0.44rem;line-height:0.506667rem;padding-bottom: 0.2rem;width: 5.6rem;word-break:break-all;word-wrap: break-word;}
	.hotelRoomList ul li .roomDescribe{color:#A5A5A5;font-size: 0.333333rem;line-height:0.613333rem;}
	.hotelRoomList ul li .roomDescribe span{padding:0 0.066667rem;}
	.hotelRoomList ul li >div:first-child{flex:6;padding-right:0.666667rem;}
	.hotelRoomList ul li >div:last-child{flex:2;padding-right:0.133333rem;text-align: center;display: flex;flex-direction: column;align-items:flex-end;}
	.hotelRoomList ul li >div:last-child span{color:#FFA100;font-size: 0.4rem;}
	.hotelRoomList ul li >div:last-child .hotelBookBtn{background: #FFA100;font-size:0.4rem;width:1.2rem;line-height: 1.2rem;margin-top:0.266667rem;border-radius: 0.133333rem;color:#fff;}
	

	.aboutHotel{background: #fff;margin-top:0.133333rem;}
	.aboutHotel li{font-size:0.4rem;border-bottom: 0.013333rem solid #F1F1F1;line-height:1.186667rem;padding-left:0.133333rem;}
	.aboutHotel .aboutHotelLink{display: flex;}
	.aboutHotel .aboutHotelLink span:first-child{flex:12;}
	.aboutHotel .aboutHotelLink span:last-child{flex:2;text-align: center;}
	.aboutHotel .igolaTel{color:#159696;font-size:0.426667rem;}
	.aboutHotel .igolaTel i{padding:0 0.066667rem;}

</style>