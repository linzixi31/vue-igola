<template>
    <div>
        <mt-header fixed title="订单页面"></mt-header>
        <mt-navbar  fixed style='margin-top:40px; border-bottom:1px solid #eee; color:#000;'>
          <mt-tab-item ><a @click ='xue' id="1">全部</a></mt-tab-item>
          <mt-tab-item ><a @click ='xue' id="2">待出行</a></mt-tab-item>
          <mt-tab-item ><a @click ='xue' id="3">已完成</a></mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected" swipeable='true'>
          <mt-tab-container-item id="1"  >
            <ul class='order_list'>
                <li class='line1'>
                  <div>
                    <img slot="icon" src="../../assets/img/icon3.png" style='width:2rem'>
                  </div>
                  <div style='flex:0.8'>
                    <span class='black'>深圳海景奥斯延酒店</span><br />
                    <span>2018-02-11至2018-02-13</span><br />
                    <span>2晚，1间，Superior Room（East Wing）</span>  
                    <span>linzixi</span>
                  </div>
                  <div style='flex:0.2'>
                    <span class='black' >￥1240</span><br />
                    <span>等待支付</span>
                  </div>
                </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" />
          </mt-tab-container-item>
        </mt-tab-container>
        <footernav></footernav> 
    </div>
</template>



<script type="text/javascript">
    import footernav from '../footernav/footernav.vue'
    import './order.scss'
    import http from '../../http/baseUrl.js'
    export default  {
        mounted(){
            this.axios.get(http.url+'/order').then((response) => {
                console.log(response.data)
            })
        },
        components:{
            footernav
        },
        data(){
            return{
                selected: '1'
            }
        },
        methods:{
            xue(event){
               this.selected = event.target.id
            }
        }
    }

</script>