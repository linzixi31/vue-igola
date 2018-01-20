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
      <footernav></footernav>
  </div>
</template>
<script type="text/javascript">
var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
  //物理像素*设备像素比=真实像素
  document.getElementsByTagName("html")[0].style.fontSize = wd + "px";
  // 把屏幕的倍率缩小到N分之一（N是window.devicePixelRatio）
  var scale = 1/window.devicePixelRatio;
  var mstr = 'initial-scale='+ scale +', maximum-scale='+ scale +', minimum-scale='+ scale +', user-scalable=no';
  document.getElementById("vp").content = mstr;
</script>
<script>
import footernav from '../footernav/footernav';
import http from '../../http/baseUrl';



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
