<template>
  <div id="content" class="">
    <div class="login_body" v-if="flag == true">
      <div class="uploadimg">
        上传头像
        <van-uploader
          class="upimg"
          v-model="fileList"
          multiple
          :max-count="1"
          :after-read="afterRead"
        />
      </div>

      <van-field
        v-model="register.username"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '昵称' }]"
      />
      <van-field
        v-model="register.account"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="register.password1"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="register.password2"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="密码"
        :rules="[{ required: true, message: '再次确认密码' }]"
      />
      <van-field
        v-model="register.phone"
        type="phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <div style="margin: 16px;">
        <van-button
          class="submit"
          round
          block
          type="info"
          native-type="submit"
          @click="onRegister()"
        >
          注册
        </van-button>
      </div>

      <div class="login_link">
        <a href="#" @click="flag = false">立即登录</a>
        <a href="#">找回密码</a>
      </div>
    </div>
    <div class="login_body" v-else>
      <van-field
        v-model="account"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <div style="margin:20px"></div>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          class="submit"
          round
          block
          type="info"
          native-type="submit"
          @click="onSubmit"
        >
          登录
        </van-button>
      </div>

      <div class="login_link">
        <a href="#" @click="flag = true">立即注册</a>
        <a href="#">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { Dialog, Loading } from "vant";
Vue.use({ Dialog, Loading });
import { setToken } from "../../../utils/auth";
export default {
  components: {},
  data() {
    return {
      password: "",
      account: "",
      register: {
        username: "",
        account: "",
        password1: "",
        password2: "",
        phone: "",
        imgurl: "",
      },
      flag: false,
      fileList: [],

      mark: "",
      username: "",
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
        this.register.imgurl = res.data.path;
      });
    },
    onSubmit() {
      this.Mark = this.$route.query.mark;
      this.$http
        .get("/gologin", {
          params: {
            account: this.account,
            password: this.password,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            setToken(res.data.token);
            localStorage.setItem("userid", JSON.stringify(res.data.list[0]));
            if (this.Mark === "pass") {
              this.$router.push({
                path: "/goissue",
              });
            } else {
              this.$router.push({
                path: "/first",
              });
            }
          } else {
            Dialog.confirm({
              title: "标题",
              message: "账号或者密码不正确,请重新登录",
            })
              .then(() => {})
              .catch(() => {
                // on cancel
              });
          }
        });
    },
    onRegister() {
      this.$http
        .post("/personmessage", {
          username: this.register.username,
          account: this.register.account,
          password1: this.register.password1,
          password2: this.register.password2,
          phone: this.register.phone,
          imgurl: this.register.imgurl,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code === 201) {
            Dialog.confirm({
              title: "标题",
              message: res.data.msg,
            })
              .then(() => {})
              .catch(() => {
                // on cancel
              });
          }
          if(res.data.code === 200){
            this.flag=false
          }
        });
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
#content {
  background-color: #f8f8f8;

  .login_body {
    width: 94%;
    padding: 0 3%;
  }
}

.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  // margin: 10px 20px;
  font-size: 12px;
  color: #e54847;
}
.submit {
  background-color: #e54847;
  border: 1px solid #e54847;
}
.uploadimg {
  background-color: white;
  padding: 10px;
  height: 80px;
  font-size: 14px;
  color: #666666;
  .upimg {
    margin-left: 40px;
  }
}
</style>
