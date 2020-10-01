<template>
  <div id="header" class="">
    <ul class="search">
      <li><van-icon size="22" color="#262626" name="arrow-left" /></li>
      <li><i><van-icon color="#393939" name="search" /></i><input type="search" placeholder="二手车估价计算方法" /></li>
      <li>搜索</li>
    </ul>
    <ul>
        <li>二手车估价计算方法</li>
        <li>华为Mate40快充升级</li>
    </ul>
  </div>
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
  height: 60px;
  position: relative;
  border-bottom: 1px solid #cccccc;
}
#header .search {
  padding: 10px;
  height: 40px;
  display: flex;
  :nth-child(1){
      width: 10%;
       line-height: 40px;   
          line-height: 40p
  }
  :nth-child(3) {
      height: 40px;
       line-height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #222222;
  }
  :nth-child(2) {
    width: 76%;
    border-radius: 40px;
    margin-right: 4%;
    background-color: #f2f2f2;
    position: relative;
    input {
      width: 85%;
      background-color: #f2f2f2;
      height: 40px;
      line-height: 40px;
      border: none;
      outline: none;
      font-size: 16px;
      margin-left: 30px;
      border-radius: 0 50% 50% 0;
      caret-color: #999999;
    }
    i{
        position: absolute;
        left: 5px;

    }
  }
}
</style>
