//详情页日期选择组件
<template>
	<div>
		<section class="checkInTime">
			<div><span @click="openPicker('in')">{{dateIn}}</span><span>入住</span></div>
			<div><span @click="openPicker('leave')">{{dateLeave}}</span><span>退房</span></div>
			<div><span>{{days}}晚</span></div>
			
		</section>
		<mt-datetime-picker ref="picker"  type="date" @confirm="handlevalue"></mt-datetime-picker>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				dateIn:'',
				dateLeave:'',
				days:1,//住店日期
				dayIn:1,//入店日期
				dayOut:1,//离店日期
				dateSwitch:3
			}
		},
		methods:{
			dateFormat:function(date){
				// 格式化日期。格式（-月-日）
				var m = date.getMonth() + 1;
				var d = date.getDate();
				if(this.dateSwitch == 3){
					this.dateIn = `${m}月${d}日`;
					this.dateLeave = `${m}月${d + 1}日`;
					this.dayIn = d;
					this.dayOut = d + 1;
					return;
				}else if(this.dateSwitch == 1){
					this.dateIn = `${m}月${d}日`;
					this.dayIn = d;
				}else if(this.dateSwitch == 0){
					this.dateLeave = `${m}月${d }日`;
					this.dayOut = d;
				};
				// console.log(this.dayIn,this.dayOut);
				if(this.dayOut <= this.dayIn){
					this.days = 1;
				}else{
					this.days =this.dayOut - this.dayIn
				};

			},
			 openPicker(type) {
			        this.$refs.picker.open();
			        //切换日期开关
			        if(type == 'in'){
			        		this.dateSwitch = 1;
			        }else if(type === 'leave'){
			        		this.dateSwitch = 0;
			        }
			},
			handlevalue(val){
				var date = new Date(val);
				var newDate =  this.dateFormat(date);	
			}
		},
		mounted:function(){
			this.dateFormat(new Date());
		}
	}
</script>