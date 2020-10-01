<template>
  <header id="header">
    <div class="header">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>

    <div class="list">
      <ul>
        <router-link tag="li" to="/goissue/smalltext" class="active"
          >微头条</router-link
        >
        <router-link tag="li" to="/goissue/bigtext">文章</router-link>
        <router-link tag="li" to="/goissue/bigvideo">视频</router-link>
        <router-link tag="li" to="/goissue/smallvideo">小视频</router-link>
      </ul>
    </div>
    
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("fenxiang");
    },
  },

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

#header {
  width: 100%;
  height: 84px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
}

.list {
  background-color: #ffffff;
  height: 40px;
  ul {
    width: 95%;
    margin-left: 5%;
    li {
      float: left;
      width: 20%;
      margin-right: 5%;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
    .router-link-exact-active {
      // background-color: wheat;
      color: red;
    }
  }
}
</style>
