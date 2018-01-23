<template >
	<div id="hotelBooking">
		<detailHead :hotelName="hotelName" :addr="address" :stars="stars" :imgurl="imgUrl" :enghotelName="enghotelName" :hotelId="id" :kindDescription="kindDescription"></detailHead>
		<detailDatePick></detailDatePick>
		
		<detailRoomList :roomList="dataset" :hotelId="id" :loading="loading" @changeRoomList="changeRoom"></detailRoomList>
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
				loading:true,
				address:'',
				hotelName:'',
				enghotelName:'',
				stars:0,
				imgUrl:'',
				id:'',
				kindDescription:[],
				dataset:[]
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
				this.axios.get( http.url + '/getHotel',{params:{hotelId:id}}).then(function(res){
					this.dataset = res.data.data.results;
					this.loading = false;
					// console.log(this.dataset);
					this.hotelInfor(this.dataset);

				}.bind(this));
			},
			hotelInfor:function(res){
				//提取酒店名，地址，星级，图片
				this.address = res[0].address;
				this.hotelName = res[0].hotelName;
				this.stars = res[0].stars;
				this.imgUrl = res[0].image1;
				this.enghotelName = res[0].enghotelName;
				this.kindDescription = res[0].kindDescription.split('，');
			},
			changeRoom:function(newList){

				this.dataset = newList;
				// console.log(this.dataset);
			}
			
		},
		mounted:function(){
			var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
            		document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
            		var scale = 1/window.devicePixelRatio;
            		var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
            		document.getElementById("vp").content = mstr;

            		this.id = this.$route.query.id;
			this.detailAjax(this.id);	
		},
		beforeRouteLeave(to,from,next){
			document.getElementById("vp").content = ''
			document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
			document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
			next()
		}
	}
</script>
