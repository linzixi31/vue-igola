<template >
	<div id="hotelBooking">
		<detailHead ref="head" :hotelName="hotelName" :addr="address" :stars="stars" :imgurl="imgUrl" :enghotelName="enghotelName" :hotelId="id" :kindDescription="kindDescription"></detailHead>
		<detailDatePick></detailDatePick>
		<detailRoomList :roomList="dataset" :hotelId="id" :loading="loading" :stars="stars"></detailRoomList>
		<aboutIgola></aboutIgola>
	</div>

</template>


<script type="text/javascript">
	

            //引入scss
	require('./detail.scss');
	// import { MessageBox } from 'mint-ui';


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
					try{
						var msg = {
							id:this.dataset[0].id,
							hotelName:this.dataset[0].hotelName
						}
						this.$store.commit('saveHistory',msg);
					}
					catch(err){
					}
					this.hotelInfor(this.dataset);
					
				}.bind(this));
			},
			hotelInfor:function(res){
				//提取酒店名，地址，星级，图片
				try{
					this.address = res[0].address;
					this.hotelName = res[0].hotelName;
					this.stars = res[0].stars;
					this.imgUrl = res[0].image1;
					this.enghotelName = res[0].enghotelName;
					this.kindDescription = res[0].kindDescription.split('，');
				}
				catch(err){
				}
			},
			toCeil:function(ele,height){
				
				//酒店标题吸顶
				var scrollTop = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop >= height){
					
					$(ele).addClass('hotelInforFixed');
				}else if(scrollTop < height){
					$(ele).removeClass('hotelInforFixed');
				}
				
			}
			
		},
		mounted:function(){
			var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
            		document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
            		var scale = 1/window.devicePixelRatio;
            		var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
            		document.getElementById("vp").content = mstr;

            		//获取路由中的参数（酒店ID）
            		this.id = this.$route.query.id;
			this.detailAjax(this.id);
			

			var el = this.$refs.head.$el.lastChild;

			var headTop = $(el).position().top;
			//酒店标题吸顶
			window.addEventListener('scroll',function(){
				this.toCeil(el,headTop);
			}.bind(this));
		},
		beforeRouteLeave(to,from,next){
			document.getElementById("vp").content = ''
			document.getElementById("vp").content = 'width=device-width, initial-scale=1.0'
			document.getElementsByTagName("html")[0].style.fontSize = 10+"px"
			
			next()
		}
	}
</script>
