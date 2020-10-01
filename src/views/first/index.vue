<template>
  <div id="main">
    <Header></Header>
    <div id="content">
      <router-view>
      
      </router-view>
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
  display: flex; flex-direction:column;
    overflow-x: hidden;
}
</style>
