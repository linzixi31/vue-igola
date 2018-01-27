<template>
        <mt-tabbar id='footer' v-model="selected"  @click.native ="send">
              <mt-tab-item id="tab1" >
                <img slot="icon" src="../../assets/img/icon1.png"  >
                <a >首页</a>
              </mt-tab-item>
              <mt-tab-item id="tab2" >
                <img slot="icon" src="../../assets/img/icon3.png">
                <a >优选</a>
              </mt-tab-item>
              <mt-tab-item id="tab3"  >
                <img slot="icon" src="../../assets/img/icon2.png">
               <a > 订单</a>
              </mt-tab-item>
              <mt-tab-item id="tab4" >
                <img slot="icon" src="../../assets/img/icon4.png">
                <a >我的</a>
            </mt-tab-item>
        </mt-tabbar>
</template>

<script>
import './footernav.scss'

export default {
  computed:{
    selected:{
      get:function(){},
      set: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        switch(val)
        {
          case "tab1":
             this.$router.push({path:'/index'})
            break;
          case "tab2":
            this.$router.push({path:'/choice'})
            break;
          case "tab3":
            this.$router.push({path:'/order'})
            break;
          case "tab4":
            this.$router.push({path:'/my'})
            break;
        }
    }
    }
  },
  methods:{
    send:function(e){
      console.log(e.target);
    }
    
  }
}
</script>