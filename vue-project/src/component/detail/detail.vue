<template >
	<div id="hotelBooking">
		<detailHead :hotelName="hotelName" :addr="address" :stars="stars" :imgurl="imgUrl"></detailHead>
		<detailDatePick></detailDatePick>
		<section class="userChoose">
			<span>含早</span><span>可取消</span>
		</section>
		<detailRoomList :roomList="dataset" :hotelId="id"></detailRoomList>
		<aboutIgola></aboutIgola>
	</div>
</template>


<script type="text/javascript">

            //引入scss
	require('./detail.scss');

	//引入各组件
	import  http from '../../http/baseUrl.js';
	import detailHead from './detailHead.vue';
	import detailDatePick from './detailDatePick.vue';
	import detailRoomList from './detailRoomList.vue';
	import aboutIgola from './aboutIgola.vue';
	

	export default {
		data(){
			return {
				dataset:[],
				address:'',
				hotelName:'',
				stars:0,
				imgUrl:'',
				id:'',
			}
		},
		components:{
			detailHead,
			detailDatePick,
			detailRoomList,
			aboutIgola
		},
		methods:{
			detailAjax:function(id){
				//请求当前酒店信息
				this.axios.get( http.url + '/getHotelRoom',{params:{hotelId:id}}).then(function(res){
					this.dataset = res.data.data.results;
					this.hotelInfor(this.dataset);
					console.log(this.dataset)
				}.bind(this));
			},
			hotelInfor:function(res){
				//提取酒店名，地址，星级，图片
				this.address = res[0].address;
				this.hotelName = res[0].hotelName;
				this.stars = res[0].stars;
				this.imgUrl = res[0].image1;
			}
		},
		mounted:function(){
			var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
            		document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
            		var scale = 1/window.devicePixelRatio;
            		var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
            		document.getElementById("vp").content = mstr;
            		console.log(this.$route.query.id)
            		this.id = this.$route.query.id;
			this.detailAjax(this.id);	
		},
		beforeRouteLeave(to,from,next){
			//console.log(333)
			document.getElementById("vp").content = ''
			document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
			document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
			// console.log(333)
			next()
		}
		
	}
</script>



<!-- /*<style type="text/css">
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
</style>*/ -->