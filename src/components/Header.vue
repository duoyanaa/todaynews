<template>
  <header id="header">
    <div class="header">
      <div class="header-1" @click="search">
        <p>
          <i><van-icon name="search" size="18"/></i>大众蔚领评测 |
          曝iPhone12Mini参数
        </p>
      </div>
      <div class="header-2" @click="Issue">
        <div></div>
        <p>发布</p>
      </div>
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
    search() {
      this.$router.push({
        path: "/search",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 50px;
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

  p {
    height: 35px;
    line-height: 35px;
    margin-left: 8px;
    font-size: 14px;
    color: #222222;
    i {
      padding: 0 3px;
      position: relative;
      top: 2px;
    }
  }
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

</style>
