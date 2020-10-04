<template>
  <div id="main" class="">
      <div id="header">awdaddddddd</div>
      <div id="content">
          serxxx<br/>
          xxxxxx<br/>
          xxxxxx<br/>
          xxxxgt<br/>
          serxxx<br/>
          xxxxxx<br/>
          xxxxxx<br/>
          xxxxgt<br/>
      </div>
  </div>
</template>

<script>
export default {
  components: {
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
#header {
  width: 100%;
  height: 50px;
  position: relative;
  border-bottom: 1px solid #cccccc;
}
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
 line-height: 100px;
 font-size: 30px;
}
</style>
