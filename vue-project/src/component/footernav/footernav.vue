<template>
        <mt-tabbar id='footer'>
              <mt-tab-item id="tab1">
                <img slot="icon" src="../../assets/img/icon1.png">
                <router-link to="/index">首页</router-link>
              </mt-tab-item>
              <mt-tab-item id="tab2">
                <img slot="icon" src="../../assets/img/icon3.png">
                <router-link to="/choice">优选</router-link>
              </mt-tab-item>
              <mt-tab-item id="tab3">
                <img slot="icon" src="../../assets/img/icon2.png">
                <router-link to="/order">订单</router-link>
              </mt-tab-item>
              <mt-tab-item id="tab4">
                <img slot="icon" src="../../assets/img/icon4.png">
                <router-link to="/my">我的</router-link>
            </mt-tab-item>
        </mt-tabbar>
</template>

<script>
import './footernav.scss'

export default {

}
</script>