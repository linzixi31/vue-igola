<template>
	<section class="checkInTime" >
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

<style>
	.checkInTime{
		height: 100%;
		width: 100%;
	}
	.select-time{
		height: 100%;
	}
	.select-time>div{
		height: 100%;
		line-height:50px;
	}
	.checkInTime .row>div span:nth-child(1){
		font-size: 16px;
	}
	.checkInTime .row>div:nth-child(3){
		text-align: right;
	}
	.checkInTime .row>div:nth-child(3) .night{
		background: #FFFFFF;
		color: #9D9D9D;
	}
	
	.date {
          position: fixed;
          top: 0;
          left: 0;
          background: #fff;
          z-index: 100;
          width: 100%;
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
         
      }

      .date h4{
        font-size:1.48rem; text-align: center;line-height: 4rem;
      }


      .date .action {
          margin-top: 0.266667rem;
      }
      .date .title{
        font-size:0.373333rem;line-height:0.8rem;
      }

      .date .title div{
         display: inline;
      }

      .date ul li {
          display: inline-block;
          font-size: 1.32rem;
          line-height: 1.666667rem;
          width: 14.285%;
          text-align: center;
      }

      .week li {
         background-color: #f1f1f1;
      }

      .day .enter {
          background-color: #3e93fa;
          color: #fff
      }

      .day .leave {
          background-color: salmon;
          color: #fff
      }

      .day .disable {
          background-color: #ccc
      }

      .close-btn {
          position: fixed;
          font-size:1.426667rem;
          top: 0.266667rem;
          left: 0.266667rem;
          padding: 0.026667rem 0.266667rem;
          background: #3e93fa;
          color: #fff;
      }
	
</style>