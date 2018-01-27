//关于酒店模块的组件
<template>
	<section class="aboutHotel">
		<ul @click="showIgola">
			<li v-for="(val,idx) in aboutIgola" :id="idx" class="aboutHotelLink"><span>{{val}}</span><span><i class="iconfont icon-arrow-right-copy"></i></span></li>
			<li id="igolaServerTele"><span>iGola服务热线：</span><span class="igolaTel"><i class="iconfont icon-dingwei" aria-hidden="true"></i>{{igolaTele}}</span></li>
			<li>iGola服务时间：7 &times; 24h</li>
			<li class="aboutHotelLink"><span>iGola酒店问答</span><span><i class="iconfont icon-arrow-right-copy"></i></span></li>
		</ul>
		<mt-popup v-model="show" position="right" >
		 	<div class="aboutHotelContent" v-for="(val,key) in IgolaData"  @click="hideIgola">
		 		<p>{{key}}</p>
		 		<p>{{val}}</p>
		 	</div>
		</mt-popup>
	</section>
</template>

<script type="text/javascript">

	import { MessageBox } from 'mint-ui';

	export default {
		data(){
			return {
				show:false,
				IgolaData:{},
				igolaTele:'400-900-7280',
				aboutIgola:{
					aboutHotel:'酒店简介',
					hotel_policy:'酒店政策',
					hotel_equip:'酒店设施'
				},
				aboutHotel:{
					'酒店位置':'酒店位置在广州珠江新城的广州威珀斯酒店，您将很靠近广州大剧院和琶洲展馆。 该 4.5 星级酒店紧邻广东省博物馆及花城广场。',
					'客房':'客房 有 680 间客房提供迷你吧和平板电视；您定能在旅途中找到家的舒适。免费的有线和无线上网帮助您与朋友保持联系；此外客房还提供有线节目，以满足您的娱乐需求。配备淋浴设施的独立浴室提供免费洗浴用品和拖鞋。',
					'设施':'便利设施包括保险箱和书桌；而且每天提供客房服务。设施 您可抽空慰劳一下自己，享受一下全方位服务的 SPA。',
					'餐饮':'餐饮 这家酒店的餐饮设施包括 2 间餐厅和一家咖啡馆。您可以任选一家就餐，也可以在房间里享受24 小时客房送餐服务。',
					'商务及其他服务设施':' 特色服务/设施包括免费高速有线上网、商务中心和干洗/洗衣服务。酒店提供免费自助停车。'
				},
				hotel_policy:{
					'入住时间/退房时间':'入住时间开始于中午退房时间中午',
					'取消政策':'不同类型的客房附带不同的取消政策，详情请参阅客房的政策描述。',
					'酒店接受的银行卡类型':'美国运通卡 (American Express)大来卡 (Diners Club)JCB 国际卡万事达卡 (MasterCard)维萨卡 (Visa)',
					'注意事项':'可自行办理入住手续的最低年龄1824 小时登记入住不提供婴儿床不提供折叠床不允许宠物入住',
					'费用':'早餐费用：每人 CNY 80 至 CNY 100（约计金额）',
					'其他':'上面所列内容可能并不完整。这些费用和押金可能不包括税款，并且可能会随时发生变化。'
				},
				hotel_equip:{
					'酒店设施':'无障碍浴室，酒吧/酒廊，提供早餐（收费），商务中心，咖啡店或咖啡厅，礼宾服务，指定吸烟区，干洗/洗衣服务，健身设施，免费自助停车设施，免费 Wi-Fi，免费有线高速上网，全面服务健身 SPA，花园，康体俱乐部，房内无障碍设施，行李寄存，大堂报纸（收费），餐厅数目 -2，户外泳池，前台保险箱，店内 SPA 服务，露台，房间总数 -680，旅游/票务帮助',
					'房间设施':'空调，浴缸或淋浴，有线电视服务，温度控制，每天打扫客房，书桌，平面电视，免费瓶装水，免费报纸，免费洗浴用品，免费 Wi-Fi，免费有线高速上网，吹风机(按需求提供)，室内保险箱，熨斗/熨衣板，迷你吧，高级寝具，私人浴室，冰箱(按需求提供)，24小时客房送餐服务，独立卧室，仅可淋浴，拖鞋'
				}
			}
		},
		methods:{
			showIgola:function(e){
				this.show = true;
				if(e.target.parentNode.id == 'aboutHotel'){
					this.IgolaData = this.aboutHotel;
				}else if(e.target.parentNode.id == 'hotel_policy'){
					this.IgolaData = this.hotel_policy;
				}else if(e.target.parentNode.id == 'hotel_equip'){
					this.IgolaData = this.hotel_equip;
				}else if(e.target.parentNode.id == 'igolaServerTele'){
					MessageBox.confirm(this.igolaTele, '是否呼叫？');
					this.show = false;
				}else{
					this.show = false;
				}
				
			},
			hideIgola:function(){
				this.show = false;
			}
		},
		
	}
</script>


<style type="text/css" lang="scss">
	//电话呼叫弹出层样式
		.mint-msgbox {
		  font-size: 0.48rem;
		}
		.mint-msgbox-title {
		  font-size: 0.6rem;
		  line-height: 0.8rem;
		  font-weight: normal;
		}
		.mint-msgbox-message {
		  line-height: 1.5rem;
		}
</style>