<template>
	<div id="search_popup">
		
		<mt-popup position="bottom" modal=true v-model="a">
			<div class="add_header">
				<span @click='close'>取消</span>
				<h4>选项</h4>
				<span @click='close'>完成</span>
			</div>
			<div class="add_middle">
				<div class="chosen">
					<p>房间数</p>
					<div class="chosen_qty">
						<span class="iconfont icon-jianshao"></span>
						<span>{{rooms}}</span>
						<span class="iconfont icon-zengjia"></span>
					</div>
				</div>
				<div class="chosen">
					<p>成人</p>
					<div class="chosen_qty">
						<span class="iconfont icon-jianshao" ></span>
						<span>{{adults}}</span>
						<span class="iconfont icon-zengjia" ></span>
					</div>
				</div>
				<div class="chosen">
					<p>儿童</p>
					<div class="chosen_qty">
						<span class="iconfont icon-jianshao"></span>
						<span>{{children}}</span>
						<span class="iconfont icon-zengjia"></span>
					</div>
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import "./addCustomer.scss";
	import {Popup} from "mint-ui";
	import {PaletteButton} from "mint-ui";
	
	export default {
		data(){
			return {

				rooms:1,
				adults:2,
				children:0
			}
		},
		computed:{
			a:{
				get: function () {
			      return this.$store.state.tc.a || false
			    },
			    set: function () {
			    	
			    }
           }

		},
		methods:{
			close(){
				
				this.$store.dispatch('changetcStatus')
			}
		}
		
	}
</script>

<style>

</style>