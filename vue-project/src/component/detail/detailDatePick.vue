//详情页日期选择组件
<template>

		<section class="checkInTime" id="datepick">
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

<script type="text/javascript">
	import store from '../../vuex/store.js';

	//加载日期选择插件
	import "../../assets/js/date.js";


	export default {
		data(){
			return {

			}
		},
		mounted:function(){
			$('.select-time').hotelDate();
		}
	}
</script>

<style type="text/css">

	#datepick .date {
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

      #datepick .date h4{
        font-size:0.48rem; text-align: center;line-height: 1rem;
      }


      #datepick .date .action {
          margin-top: 0.266667rem;
      }
      #datepick .date .title{
        font-size:0.373333rem;line-height:0.8rem;
      }

      #datepick .date .title div{
         display: inline;
      }

      #datepick .date ul li {
          display: inline-block;
          font-size: 0.32rem;
          line-height: 0.666667rem;
          width: 14.285%;
          text-align: center;
      }

      #datepick .week li {
         background-color: #f1f1f1;
      }

      #datepick .day .enter {
          background-color: #3e93fa;
          color: #fff
      }

      #datepick .day .leave {
          background-color: salmon;
          color: #fff
      }

      #datepick .day .disable {
          background-color: #ccc
      }

     #datepick  .close-btn {
          position: fixed;
          font-size:0.426667rem;
          top: 0.266667rem;
          left: 0.266667rem;
          padding: 0.026667rem 0.266667rem;
          background: #3e93fa;
          color: #fff;
      }
</style>