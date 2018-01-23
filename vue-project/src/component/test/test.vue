 <template>
	<div>
	<input type="text" placeholder="入住日期" @focus="openPicker" v-model="checkIn" />
	<input type="text" placeholder="离店日期" @focus="leavePicker" v-model="checkOut" />
	<mt-datetime-picker ref="picker" type="date" @confirm="handleConfirm" >
	</mt-datetime-picker>
	<mt-datetime-picker ref="picker" type="date" @confirm="leave"></mt-datetime-picker>
	</div>
</template>

<script>
	import {DatetimePicker} from "mint-ui";
	
  export default {
  	data(){
  		return{
  			checkIn:"",
  			checkOut:""
  		}
  	},
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      leavePicker(){
      	this.$refs.picker.open();
      },
      handleConfirm(value){
//    	console.log(value.toUTCString());
		this.checkIn = value.toUTCString();
//		this.checkOut = value.toUTCString();
      },
      leave(){
      	console.log(21);
      }
    }
  }		
</script>

<style>
	.mint-popup{
		background: #FFFFFF;
		height: auto;
	}
	input{
		width: 40%;
	}
</style>