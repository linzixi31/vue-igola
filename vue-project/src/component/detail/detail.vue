<template >
	<div id="hotelBooking">
		<detailHead :hotelName="hotelName" :addr="address" :stars="stars" :imgurl="imgUrl" :enghotelName="enghotelName"></detailHead>
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
				enghotelName:'',
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
				this.enghotelName = res[0].enghotelName;
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
