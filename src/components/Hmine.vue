<template>
  <header id="header">
    <div class="header">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "喵喵电影",
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  background: #f8f8f8;
  // border-bottom: 1px solid #e54847;
  position: relative;
}
.header {
  height: 60px;
  width: 92%;
  margin-left: 4%;
  > div {
    float: left;
    height: 24px;
    width: 24px;
    margin: 18px 0;
    background: url(~@/assets/img/mine-1.jpg) -2px -2px;
     background-size:26px  26px;
  }
  > :nth-child(2) {
    float: right;
    background: url(~@/assets/img/mine-3.jpg) -2px -2px ;
  background-size:26px  26px;
    
  }
  > :nth-child(3) {
    float: right;
    margin-right: 24px;
    background: url(~@/assets/img/mine-2.jpg) -2px -2px  ;
    background-size:27px  27px;
  }
}
</style>
