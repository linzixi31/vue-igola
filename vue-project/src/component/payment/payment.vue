<template>
<div >
        <mt-header title="支付" id='payment_zx'>
          <router-link to="/order" slot="left">
            <mt-button>稍后支付</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
          
        </mt-header>
        <mt-spinner type="triple-bounce" :size="60" v-show="switchShow"  color="#26a2ff" class="order_spinner">
        </mt-spinner>
        <div v-show="!switchShow">
          <div id="pay_container" >
              <h1>您的订单已经提交</h1>
              <p>你的订单号为<span style='color:#478D95'>{{paydata.orderId}}</span></p>
              <p>为了您能顺利完成预定，请尽快支付</p>
              <mt-button style='margin-top:2.1875rem' @click='paySuccess'>查看我的订单</mt-button>
          </div>
          <mt-checklist
                align="right"
                v-model="value"
                :options="options">
          </mt-checklist>
          <div id="pay_footer">
              <div class='totalPrice'><span>合计</span><br /><span class='price'>￥{{paydata.totalPrice}}</span></div>
              <div class="pay"><mt-button size="small" style="color:#fff;background:#F5B23D;text-align:center" @click='payment(event)'>支付</mt-button></div>
          </div>
         </div>
</div>
</template>


<script type="text/javascript">

    import http from '../../http/baseUrl.js'
    import { Toast } from 'mint-ui'
    import './payment.scss'
    export default {
        data(){
            return{
                paydata:{},
                value:[],
                switchShow:true,
                options : [
                  {
                    label: '支付宝支付',
                    value: 'sdf',
                
                  },
                  {
                    label: '微信支付',
                    value: 'dfsd',
                    
                  },
                  {
                    label: '银联支付',
                    value: 'sdfd'
                  }
                ]
                
            }
        },
        mounted(){
            //console.log(this.$route.query)
            var Id = this.$route.query.id
            this.axios.post(http.url + '/payment',{id: Id}).then((response) => {
                            //console.log(333)
                            //console.log(response.data.data.results)
                            this.paydata = response.data.data.results[0]
                            this.switchShow = false
                        })
        },
        methods:{
            payment(){
                var Id = this.paydata.orderId
                console.log(this.paydata.orderId)
                this.axios.post(http.url+'/changeStatus',{orderId:Id}).then((res)=>{
                    console.log(res)
                    if(res.data.status){
                        Toast({
                              message: '支付成功',
                              iconClass: 'glyphicon glyphicon-ok'
                            });
                        this.$router.push({path:'/paySuccess',query:{orderId:Id}});
                            
                    }else{
                        Toast({
                              message: '支付失败',
                              iconClass: 'glyphicon glyphicon-remove'
                            });
                    }
                })
            },
            paySuccess(){
              var Id = this.$route.query.id
                this.$router.push({path:'/paySuccess',query:{orderId:Id}})
            }
        }
    }
    
</script>
<style type="text/css">
    /* 设置滚动条宽度 */
::-webkit-scrollbar {
    width: 0px;
}
</style>