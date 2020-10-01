<template>
  <div id="" class="">
    <div class="content_body">
      <van-cell-group class="content_title">
        <van-field
          v-model="title"
          label="题目："
          placeholder="请输入文章题目"
        />
      </van-cell-group>

      <div class="content_main">
        <div class="text_title">文章内容：</div>
        <div class="text">
          <textarea v-model="text" name="" id="" cols="30" rows="15"></textarea>
        </div>
      </div>
      <van-button round type="info">圆形按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text:'',
      title:''
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

.content_body {
  height: 100%;
  margin-top: 20px;
  .content_title {
    margin: 20px 4%;
    background-color: #fcfcfc;
  }
  .content_main {
    margin: 20px 4%;
    background-color: #fcfcfc;
    text-indent: 2;
    min-height: 300px;
    overflow-y: auto;
    .text_title {
      height: 50px;
      line-height: 50px;
      margin-left: 15px;
      font-size: 14px;
      color: #666666;
      background-color: white;
    }
    .text {
      height: 300px;
      overflow: auto;
      padding-left: 4%;
      textarea {
        width: 94%;

        border: 1px solid #eeeeee;
        // background-color:#fcfcfc ;
      }
    }
  }
}
</style>
