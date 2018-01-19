<template>
  <div>
      <div>
        <div class="form-group">
          <label for="name">name</label>
          <input type="text" class="form-control" id="name" placeholder="name">
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input type="password" class="form-control" id="Password" placeholder="Password">
        </div>
       
        <div class="checkbox">
          <label>
            <input type="checkbox"> Check me out
          </label>
        </div>
        <button  class="btn btn-default" @click="submit">submit</button>
      </div>
  </div>
</template>

<script>
import footernav from '../footernav/footernav';
import http from '../../http/baseUrl'
export default{
    components:{
        footernav
    },
    data(){
        return {

        }
    },
    methods:{
      submit:function(){
        console.log(33)
        this.axios.get(http.url+'/login').then((response) => {
            console.log(response.data)
        })
      }
    }

}
    
</script>
