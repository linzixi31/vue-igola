<template>
    <div>
        <mt-header fixed title="订单详情" id='paySuc_zx'>
                 <mt-button icon="back" slot='left'>返回</mt-button>
              <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div id="container_paysus">
            
        </div>
        <mt-cell title="总计" is-link style='margin-top:40px'>
          <span style="color: #EC9222">这里是元素</span>
        </mt-cell>
        <ul>
            <li><span>订单状态</span><span></span>    </li>
            <li><span>订单号</span><span></span>    </li>
            <li><span>下单日期</span><span></span>    </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
import './paySuccess.scss'
    export default {
        data(){
            return{
                paydata:[]
            }
        },
        mounted(){
            var Id = this.$route.query.orderId
            this.axios.post(http.url + '/payment',{id: Id}).then((response) => {
                            //console.log(333)
                            //console.log(response.data.data.results)
                            this.paydata = response.data.data.results

                        })
        }
    }
</script>