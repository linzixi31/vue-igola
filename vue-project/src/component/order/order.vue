<template>
    <div>
       
        <mt-header fixed title="订单页面" id='order_zx'></mt-header>
        <mt-spinner type="triple-bounce" :size="60" v-if='this.dataset.length==0' v-show="switchShow"  color="#26a2ff" class="order_spinner">
        </mt-spinner>
        <mt-navbar  fixed style='margin-top:40px; border-bottom:1px solid #eee; color:#000;'>
          <mt-tab-item ><a @click ='xue' id="1">全部</a></mt-tab-item>
          <mt-tab-item ><a @click ='xue' id="2">待出行</a></mt-tab-item>
          <mt-tab-item ><a @click ='xue' id="3">已完成</a></mt-tab-item>
        </mt-navbar>
         <div  v-if='this.dataset.length==0' class='order_containter' v-show="!switchShow" >
            
            <img src="src/assets/img/cute.svg" alt="" />
            <p style='line-height:3rem;margin-bottom:2rem'>您暂时没有订单哦</p>
            <router-link to='/list'>
              <mt-button >找酒店</mt-button>
            </router-link>  
           
          </div>
        <mt-tab-container v-model="selected" :swipeable='swipeable' >
         
          <mt-tab-container-item id="1" v-show="!switchShow" >
            <ul class='order_list' >
             
                <li class='line1' v-for='(item,idx) in dataset' :key="idx" @click='pay(item)'>
                  
                  <div>
                    <img slot="icon" src="../../assets/img/hotel.png" style='width:2rem'>
                  </div>
                  <div style='flex:0.8'>
                    <span class='black'>{{item.hotelName}}</span><br />
                    <span>{{item.startTime}}至{{item.endTime}}</span><br />
                    <span>{{item.livingPeriod}}晚，1间，Superior Room（East Wing）</span><br />  
                    <span class='name'>{{item.linkman}}</span>
                  </div>
                  <div style='flex:0.2'>
                    <span class='black' >￥{{item.totalPrice}}</span><br />
                    <span v-if="item.status== 1" style='color:blue'>待出行</span>
                    <span v-else-if="item.status== 2">已完成</span>
                    <span v-else-if="item.status== 0" style='color:red'>等待支付</span>
                    <span v-else-if="item.status== 3">订单过期</span>
                  </div>
                
                </li>
               
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="2" v-show="!switchShow">
            <ul class='order_list' >
                <li class='line1' v-for='(item,idx) in dataset' :key="idx" v-if='item.status== 1' @click='pay(item)'>
                  <div>
                    <img slot="icon" src="../../assets/img/hotel.png" style='width:2rem'>
                  </div>
                  <div style='flex:0.8'>
                    <span class='black'>{{item.hotelName}}</span><br />
                    <span>{{item.startTime}}至{{item.endTime}}</span><br />
                    <span>{{item.livingPeriod}}晚，1间，Superior Room（East Wing）</span><br />  
                    <span class='name'>{{item.linkman}}</span>
                  </div>
                  <div style='flex:0.2'>
                    <span class='black' >￥{{item.totalPrice}}</span><br />
                    <span v-if="item.status== 1" style='color:blue'>待出行</span>
                    <span v-else-if="item.status== 2">已完成</span>
                    <span v-else-if="item.status== 0" style='color:red'>等待支付</span>
                    <span v-else-if="item.status== 3">订单过期</span>
                  </div>
                </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="3" v-show="!switchShow">
            <ul class='order_list' >
                <li class='line1' v-for='(item,idx) in dataset' :key="idx" v-if='item.status== 2' @click='pay(item)'>
                  <div>
                    <img slot="icon" src="../../assets/img/hotel.png" style='width:2rem'>
                  </div>
                  <div style='flex:0.8'>
                    <span class='black'>{{item.hotelName}}</span><br />
                    <span>{{item.startTime}}至{{item.endTime}}</span><br />
                    <span>{{item.livingPeriod}}晚，1间，Superior Room（East Wing）</span><br />  
                    <span class='name'>{{item.linkman}}</span>
                  </div>
                  <div style='flex:0.2'>
                    <span class='black' >￥{{item.totalPrice}}</span><br />
                    <span v-if="item.status== 1" style='color:blue'>待出行</span>
                    <span v-else-if="item.status== 2">已完成</span>
                    <span v-else-if="item.status== 0" style='color:red'>等待支付</span>
                    <span v-else-if="item.status== 3">订单过期</span>
                  </div>
                </li>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
        <footernav></footernav> 
    </div>
</template>



<script type="text/javascript">
    import footernav from '../footernav/footernav.vue'
    import './order.scss'
    import http from '../../http/baseUrl.js'
    import { Spinner } from 'mint-ui';
    import { Navbar, TabItem } from 'mint-ui';
    export default  {
        mounted(){
            var name = localStorage.getItem("username")
            this.axios.post(http.url+'/order',{name:name}).then((response) => {
                this.dataset = response.data.data.results;
              this.switchShow = false;
              if(this.dataset.length==0){
                this.switchShow = false;
              }
            })

        },
        components:{
            footernav
        },
        data(){
            return{
                selected: '1',
                dataset:[],
                swipeable:true,
                switchShow:true
            }
        },
        methods:{
            xue(event){
               this.selected = event.target.id
            },
            pay(item){
              if(item.status=='0'){
                    this.$router.push({path:'/payment',query:{id:item.orderId}})
              }else{
                this.$router.push({path:'/paySuccess',query:{orderId:item.orderId}})
              }
            },

        }
    }

</script>
