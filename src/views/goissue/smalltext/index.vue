<template>
  <div id="" class="">
    <div class="content_body">
      <div class="content_main">
        <div class="text_title">
          头条内容：
          <span @click="onIssue">发布</span>
        </div>
        <div class="text">
          <textarea v-model="text" name="" id="" cols="30" rows="15"></textarea>
          <van-uploader
            class="upload"
            :after-read="afterRead"
            v-model="fileList"
            multiple
            :max-count="9"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken } from "../../../utils/auth";
export default {
  components: {},
  data() {
    return {
      text: "",
      title: "",
      fileList: [],
      mark: "pass",
      imgurl: "",
      // img_base_url: "http://localhost/8888/",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file.file);
      const uploadData = new FormData();
      uploadData.append("avatar", file.file);
      this.$http.post("/upload", uploadData).then((res) => {
        this.imgurl =  res.data.path;
      });
    },
    onIssue() {
      if (getToken()) {
        var account=JSON.parse(localStorage.getItem("userid"));
        console.log(account.imgurl)
        this.$http
          .post("/issuenews", {
            p:account,
            username:account.username,
            headportrait:account.imgurl,
            text: this.text,
            imgurl: this.imgurl,
          })
          .then((res) => {
            console.log(res)
            this.$router.push({
              path: "/first",
            });
          });
      } else {
        this.$router.push({
          path: "/mine/login",
          query: {
            mark: this.mark,
          },
        });
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    alert(111)
  },
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
  margin-top: 20px;
  .content_title {
    margin: 20px 4%;
    background-color: #fcfcfc;
  }
  .content_main {
    margin: 20px 4%;
    background-color: white;
    text-indent: 2;
    min-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    .text_title {
      height: 50px;
      line-height: 50px;
      margin: 0 15px;
      font-size: 16px;
      color: #666666;
      background-color: white;
      span {
        color: #666666;
        font-size: 16px;
        background-color: #eeeeee;
        padding: 5px 10px;
        position: relative;
        left: 180px;
      }
    }
    .text {
      height: 300px;
      overflow: auto;
      padding-left: 4%;
      position: relative;
      textarea {
        width: 94%;

        border: 1px solid #eeeeee;
        // background-color:#fcfcfc ;
      }
      .upload {
        position: absolute;
        bottom: 25px;
        right: 20px;
      }
    }
  }
}
</style>
