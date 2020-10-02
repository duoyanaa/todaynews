<template>
  <div id="header" class="">
    <ul class="search-1">
      <li><van-icon @click="goBack" size="22" color="#262626" name="arrow-left" /></li>
      <li>
        <i><van-icon color="#393939" name="search"/></i
        ><input type="search" placeholder="二手车估价计算方法" autofocus="autofocus" />
      </li>
      <li>搜索</li>
    </ul>
    <ul class="search-2">
      <li>二手车估价计算方法</li>
      <li>华为Mate40快充升级</li>
    </ul>
    <div class="search-3">
      <ul class="search-31">
        <li>历史记录<van-icon size="16" name="arrow-down" /></li>
        <li><van-icon name="delete" size="18" /></li>
      </ul>
      <ul class="search-32">
        <li>苹果12</li>
        <li>懂车帝网上报价大全</li>
        <li>懂车帝</li>
        <li>蔚领</li>
        <li>领动</li>
        <li>苹果12最新官方消息</li>
        <li>吃不胖娘心账号朵朵</li>
        <li>app排行榜</li>
      </ul>
    </div>
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

  methods: {
      goBack(){
          this.$router.go(-1)
      }
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
  height: 100px;
  position: relative;
  //   border-bottom: 1px solid #cccccc;
}
#header .search-1 {
  padding: 10px;
  height: 40px;
  display: flex;
  :nth-child(1) {
    width: 10%;
    line-height: 40px;
    line-height: 40p;
  }
  :nth-child(3) {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
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
    i {
      position: absolute;
      left: 5px;
    }
  }
}
#header .search-2 {
  display: flex;
  margin: 5px 0 10px;
  flex-wrap: wrap;
  > li {
    padding: 0 18px;
    width: 40%;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color: #222222;
    margin: 5px 0;
  }
  :nth-child(2n + 1) {
    // padding: 0 40px 0 15px;
    padding: 0 10px 0 20px;
    border-right: 1px solid #d8d8d8;
  }
}
#header .search-3 {
  .search-31 {
    margin: 0 20px;
    padding: 10px 0;
    border-top: 1px solid #e8e8e8;
    display: flex;
    li {
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      color: #999999;
      i {
        position: relative;
        top: 2px;
        left: 2px;
      }
    }
    :nth-child(2) {
      i {
        position: relative;
        top: 0px;
        left: 251px;
        
      }
    }
  }
  .search-32 {
    display: flex;
    margin: 5px 0 10px;
    flex-wrap: wrap;
    > li {
      padding: 0 18px;
      width: 40%;
      height: 16px;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      color: #222222;
      margin: 8px 0;
    }
    :nth-child(2n + 1) {
      // padding: 0 40px 0 15px;
      padding: 0 10px 0 20px;
      border-right: 1px solid #d8d8d8;
    }
  }
}
</style>
