<template>
    <div>
        <mt-header fixed title="订单页面"></mt-header>
        <mt-navbar style='margin-top:40px; border-bottom:1px solid #eee; color:#000;'>
          <mt-tab-item ><a @click ='xue' id="1">全部</a></mt-tab-item>
          <mt-tab-item ><a @click ='xue' id="2">待出行</a></mt-tab-item>
          <mt-tab-item ><a @click ='xue' id="3">已完成</a></mt-tab-item>
        </mt-navbar>
        
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
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