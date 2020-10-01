<template>
  <div id="main">
    <Goback></Goback>
    <div id="content">
      <router-view></router-view></div>
  </div>
</template>

<script>
import Goback from "../../components/Goback";
export default {
  components: {
    Goback,
  },
  data() {
    return {
      value: "",
    };
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
  flex: 1;
  overflow: auto;
  margin-bottom: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  background-color: #f8f8f8;
}

</style>
