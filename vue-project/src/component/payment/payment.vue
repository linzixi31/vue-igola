<template>
        <mt-header title="支付页面">
          <router-link to="/" slot="left">
            <mt-button icon="back">back</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

</template>


<script type="text/javascript">
    import http from '../../http/baseUrl.js'
    export default {
        mounted(){
            //console.log(this.$route.query)
            var Id = this.$route.query.id
            this.axios.post(http.url + '/payment',{id: Id}).then((response) => {
                            console.log(333)
                            console.log(response)
                        })
                    }
    }
    
</script>