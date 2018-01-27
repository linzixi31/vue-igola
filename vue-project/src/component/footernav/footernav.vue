<template>
        <mt-tabbar id='footer' v-model="selected" @click.native.stop="send" >
              <mt-tab-item id="tab1"  >
                <img slot="icon" src="../../assets/img/icon1.png"  >
                首页
              </mt-tab-item>
              <mt-tab-item id="tab2" >
                <img slot="icon" src="../../assets/img/icon3.png">
                优选
              </mt-tab-item>
              <mt-tab-item id="tab3"  >
                <img slot="icon" src="../../assets/img/icon2.png">
               订单
              </mt-tab-item>
              <mt-tab-item id="tab4" >
                <img slot="icon" src="../../assets/img/icon4.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
</template>

<script>
import './footernav.scss'

export default {
  data(){
    return{
      selected:''
    }
  },
  computed:{
    // selected:{
    //   get:function(){},
    //   set: function (val, oldVal) {
    //     // 这里就可以通过 val 的值变更来确定
    //     switch(val)
    //     {
    //       case "tab1":

    //          this.$router.push({path:'/index'})
    //         break;
    //       case "tab2":
    //         this.$router.push({path:'/choice'})
    //         break;
    //       case "tab3":
    //         this.$router.push({path:'/order'})
    //         break;
    //       case "tab4":
    //         this.$router.push({path:'/my'})
    //         break;
    //     }
    // }
    // }
  },
  methods:{
    send:function(e){
      var arr = ['A',"DIV","IMG"]
      console.log(e.target.tagName);
      $(e.target).addClass('is-selected')
      if(arr.includes(e.target.tagName)){
          switch(this.selected)
          {
            case "tab1":
              this.$router.push({path:'/'})
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
    
  }
}
</script>