<template>
    
    <div id='paySuc' >
         <mt-spinner type="triple-bounce" :size="60" v-show="switchShow"  color="#26a2ff" class="order_spinner">
        </mt-spinner>
        <mt-header fixed title="订单详情" id='paySuc_zx'>
                <router-link to='/order' slot='left'>
                 <mt-button icon="back" >返回</mt-button>
                </router-link>
              <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div v-show="!switchShow">
            <div id="container_paysus" :style="{backgroundImage: 'url(' +
            this.paySucdata.image1 + ')'}">
                <div class='container_pay_h'>
                    
                </div>
                <div class="inner">
                    <h1>{{this.paySucdata.hotelName}}</h1>
                    <p>{{this.paySucdata.enghotelName}}</p>
                </div>
            </div>
            <mt-cell title="总计" is-link style='border-bottom:0.09375rem solid #ccc;'>
              <span style="color: #EC9222">￥{{this.paySucdata.totalPrice}}</span>
            </mt-cell>
            <ul>
                <li class="paySuc_list listrow">
                    <div class='paySuc_left'>
                        <p >订单状态</p>
                        <p>订单号</p>
                        <p >下单日期</p>
                    </div>
                    <div class='paySuc_right'>
                        <span v-if="this.paySucdata.status== 1" style='color:blue'>待出行</span>
                        <span v-else-if="this.paySucdata.status== 2">已完成</span>
                        <span v-else-if="this.paySucdata.status== 0" style='color:red'>等待支付</span>
                        <span v-else-if="this.paySucdata.status== 3">订单过期</span> 
                        <p>{{this.paySucdata.orderId}}</p>    
                        <p>{{this.paySucdata.startTime}}</p>   
                    </div>
                </li>
                <li class="paySuc_list">
                    <div class='paySuc_title'>
                        <i></i><span>入住人</span>
                    </div>
                    <div class="paySuc_list_con">
                        <div class='paySuc_left'>
                            <p>房间1</p>
                        </div>
                        <div class='paySuc_right'>
                            <p>{{this.paySucdata.linkman}}</p>  
                        </div>
                    </div>
                    
                </li>
                <li class="paySuc_list">
                    <div class='paySuc_title'>
                        <i></i><span>联系人</span>
                    </div>
                    <div class="paySuc_list_con">
                        <div class='paySuc_left'>
                            <p>联系人</p>
                            <p>手机号码</p>

                        </div>
                        <div class='paySuc_right'>
                            <p>{{this.paySucdata.linkman}}</p>  
                            <p>{{this.paySucdata.telephone}}</p>  
                        </div>
                    </div>
                    
                </li>
                <li class="paySuc_list">
                    <div class='paySuc_title'>
                        <i></i><span>住客偏好</span>
                    </div>
                    <div class="paySuc_list_con">
                        <p>无</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
//返回数据时不要写双花括号【0】的格式，不然会报警告
import './paySuccess.scss'
import http from '../../http/baseUrl.js'

    export default {
        data(){
            return{
                switchShow:true,
                paySucdata:{}
            }
        },
        mounted(){
            var Id = this.$route.query.orderId
            var params = {
                api: '/payment',
                data: {
                    id: Id 
                }
            }
            this.$store.dispatch('refresh',params)
            
            if(this.$store.state.payment.orderdataset[0]){
                this.paySucdata = this.$store.state.payment.orderdataset[0]
                this.switchShow = false;
            }

        },
        methods: {
            refresh(){
                      
            }
        }
    }
</script>
