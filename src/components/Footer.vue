<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/first"
        ><i><van-icon size="24" name="wap-home-o"/></i>
        <p>首页</p></router-link
      >
      <router-link tag="li" to="/viodes"
        ><i><van-icon size="24" name="video-o"/></i>
        <p>西瓜视频</p></router-link
      >
      <router-link tag="li" to="/videohall"
        ><i><van-icon size="24" name="play-circle-o"/></i>
        <p>放映厅</p></router-link
      >
      <router-link tag="li" to="/mine" @click="flagshow"
        ><i><van-icon size="24" name="manager-o"/></i>
        <p>我的</p></router-link
      >
    </ul>
  </footer>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
import{getToken}from '../utils/auth'
export default {
  data() {
    return {};
  },
  methods:{
    flagshow(){
      if(getToken()){
        this.$router.push({
          path:'/mine/message',
        })
        
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 45px;
  background: white;
  border-top: 1px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 45px;
  align-items: center;
  color: #555555;
}
#footer ul li {
  flex: 1;
  height: 45px;
 
}

#footer ul li i {
  height: 25px;
  padding-top: 5px;
}
#footer ul li p {
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  margin-top: -4px;
}
.router-link-active {
  color: red;
}
</style>
