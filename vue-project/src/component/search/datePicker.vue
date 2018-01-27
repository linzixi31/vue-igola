<template>
	<section class="checkInTime" id="searchDatePick">
		<div class="row select-time">
			<div>
				<span class="time entertime"></span>
				<span>入住</span>
			</div>
			
			<div>
				<span class="time leavetime"></span>
				<span>离店</span>
			</div>
			<div>
				<span class="night">共1晚</span>
			</div>
		</div>
	</section>
</template>

<script>
	import "../../assets/js/date.js";
	export default{
		data(){
			return {}
		},
		mounted(){
			$(".select-time").hotelDate();
		}
	}
	
</script>

<style >
	#searchDatePick{
		height: 100%;
		/*width: 100%;*/
	}
	#searchDatePick .select-time{
		height: 100%;display: flex;padding-left:35px;
	}
	#searchDatePick .select-time>div{
		flex:1;
		line-height:50px;
	}
	#searchDatePick  .row>div span:nth-child(1){
		font-size: 16px;
	}
	#searchDatePick .row>div:nth-child(3){
		text-align: left;
	}
	#searchDatePick .row>div:nth-child(3) .night{
		background: #FFFFFF;
		color: #9D9D9D;
	}
	


	#searchDatePick .date {
          position: fixed;
          top: 0;
          left: 0;
          background: #fff;
          z-index: 100;
          width: 100%;
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          z-index:200001;
      }

      #searchDatePick .date h4{
        font-size:1.48rem; text-align: center;line-height: 4rem;
      }


      #searchDatePick .date .action {
          margin-top: 0.266667rem;
      }
      #searchDatePick .date .title{
        font-size:1.5rem;line-height:2.4rem;
      }

      #searchDatePick .date .title div{
         display: inline;
      }

      #searchDatePick .date ul li {
          display: inline-block;
          font-size: 1.32rem;
          line-height: 1.666667rem;
          width: 14.285%;
          text-align: center;
      }

      #searchDatePick .week li {
         background-color: #f1f1f1;
      }

      #searchDatePick .day .enter {
          background-color: #3e93fa;
          color: #fff
      }

     #searchDatePick  .day .leave {
          background-color: salmon;
          color: #fff
      }

      #searchDatePick .day .disable {
          background-color: #ccc
      }

      #searchDatePick .close-btn {
          position: fixed;
          font-size:1.426667rem;
          top: 0.266667rem;
          left: 0.266667rem;
          padding: 0.5rem;
          background: #3e93fa;
          color: #fff;
      }
	
</style>