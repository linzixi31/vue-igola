<template>
	<div>
	<input type="text" placeholder="入住日期" @focus="openPicker" v-model="checkIn" />
		<mt-datetime-picker ref="picker" type="date" @confirm="handleConfirm" >
  	</mt-datetime-picker>
	</div>
</template>

<script>
	import {DatetimePicker} from "mint-ui";
	
  export default {
  	data(){
  		return{
  			checkIn:""
  		}
  	},
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(value){
//    	console.log(value.toUTCString());
		this.checkIn = value.toUTCString();
      }
    }
  }		
</script>
