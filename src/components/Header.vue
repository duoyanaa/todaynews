<template>
  <header id="header">
    <div class="header">
      <div class="header-1"><p>大众蔚领评测 | 曝iPhone12Mini参数</p></div>
      <div class="header-2" @click="Issue">
        <div></div>
        <p>发布</p>
      </div>
    </div>
    <div class="secnav">
      <ul>
        <router-link tag='li' to='/first/attention'>关注</router-link>
        <router-link tag='li' to='/first/recommend'>推荐</router-link>
        <router-link tag='li' to='/first/loaclcity'>郑州</router-link>
        <router-link tag='li' to='/first/epidemic'>抗疫</router-link>
        <router-link tag='li' to='/first/hotsearch'>热榜</router-link>
        <router-link tag='li' to='/first/gratis'>免费小说</router-link>
        <router-link tag='li' to='/first/society'>社会</router-link>
        <router-link tag='li' to='/first/recreation'>娱乐</router-link>
        <router-link tag='li' to='/first/technology'>科技</router-link>
        <router-link tag='li' to='/first/military'>军事</router-link>
        <router-view></router-view>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Issue() {
      this.$router.push({
        path: "/goissue",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 90px;
  position: relative;
  border-bottom: 1px solid #cccccc;
}

#header .header {
  background: #e54847;
  height: 52px;
  width: 95%;
  padding-left: 5%;
}
#header .header .header-1 {
  background: #fff;
  margin-top: 8px;
  float: left;
  height: 35px;
  width: 86%;
  border-radius: 20px;
}
#header .header .header-1 p {
  height: 35px;
  line-height: 35px;
  margin-left: 30px;
  font-size: 14px;
  color: #222222;
}
#header .header .header-2 {
  width: 10%;
  margin-right: 1%;
  margin-top: 8px;
  float: right;
}
#header .header .header-2 div {
  background: url("../assets/img/fabu.jpg") -1px -1px;
  background-size: 26px 24px;
  width: 24px;
  height: 22px;
  margin-bottom: 2px;
}
#header .header .header-2 p {
  height: 12px;
  line-height: 1;
  font-size: 12px;
  color: white;
}

#header .secnav {
  height: 38px;
  width: 100%;
  position: relative;
}
#header .secnav ul {
  height: 38px;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

#header .secnav ul li {
  padding: 0 10px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
}
.router-link-exact-active{
  color: red;
  border-bottom: 2px solid red;
}
</style>
