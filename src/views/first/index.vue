<template>
  <div id="main">
    <Header></Header>
    <div id="content">
      <div class="secnav">
        <ul>
          <router-link tag="li" to="/first/attention">关注</router-link>
          <router-link tag="li" to="/first/recommend">推荐</router-link>
          <router-link tag="li" to="/first/loaclcity">郑州</router-link>
          <router-link tag="li" to="/first/epidemic">抗疫</router-link>
          <router-link tag="li" to="/first/hotsearch">热榜</router-link>
          <router-link tag="li" to="/first/gratis">免费小说</router-link>
          <router-link tag="li" to="/first/society">社会</router-link>
          <router-link tag="li" to="/first/recreation">娱乐</router-link>
          <router-link tag="li" to="/first/technology">科技</router-link>
          <router-link tag="li" to="/first/military">军事</router-link>
        </ul>
      </div>
      <router-view> </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
#content {
  width: 100%;
  flex: 1;
  overflow-y: auto;
  margin-bottom: 50px;
  position: relative;
  height: 2500px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.secnav {
  height: 38px;
  width: 100%;
  position: relative;
}
.secnav ul {
  height: 38px;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  // scrollbar-width: none; /* firefox */
  // -ms-overflow-style: none; /* IE 10+ */
}
.secnav ul::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.secnav ul li {
  padding: 0 10px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
}
.router-link-exact-active {
  color: red;
  border-bottom: 2px solid red;
}
</style>
