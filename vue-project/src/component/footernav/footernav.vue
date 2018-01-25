<template>
        <mt-tabbar id='footer'>
              <mt-tab-item id="tab1" @touchstart="viewi()">
                <img slot="icon" src="../../assets/img/icon1.png" >
                <a @touchstart="viewi()">首页</a>
              </mt-tab-item>
              <mt-tab-item id="tab2"   @touchstart="viewc()">
                <img slot="icon" src="../../assets/img/icon3.png">
                <a @touchstart="viewc()">优选</a>
              </mt-tab-item>
              <mt-tab-item id="tab3"  @touchstart="viewo()">
                <img slot="icon" src="../../assets/img/icon2.png">
               <a @touchstart="viewo()"> 订单</a>
              </mt-tab-item>
              <mt-tab-item id="tab4" >
                <img slot="icon" src="../../assets/img/icon4.png">
                <a @touchstart="viewm()">我的</a>
            </mt-tab-item>
        </mt-tabbar>
</template>

<script>
import './footernav.scss'

export default {
  methods:{
    viewi(){
      this.$router.push({path:'/index'})
    },
    viewc(){
      this.$router.push({path:'/choice'})
    },
    viewo(){
      this.$router.push({path:'/order'})
    },
    viewm(){
      this.$router.push({path:'/my'})
    },

  }
}
</script>