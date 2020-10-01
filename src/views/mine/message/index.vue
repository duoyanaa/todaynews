<template>
  <div id="content" class="">
    <div class="login_body">
      <div class="permessage">
        <div class="showmessage">
          <img
            class="picture"
            slot="icon"
            :src="message.imgurl"
            width="60"
            height="60"
          />

          <div class="sssss">
            <h3>{{ message.username }}</h3>
            <van-cell is-link class="person" v-show="showlogin == false"
              >个人主页</van-cell
            >
          </div>
          <van-cell v-show="showlogin == true" is-link @click="goLogin"
            >登录/注册</van-cell
          >
        </div>
      </div>
      <div class="personcenter" v-show="showlogin == false">
        <div class="personcenter-1">
          <ul>
            <li>
              <p>362</p>
              <p>头条</p>
            </li>
            <li>
              <p>562184</p>
              <p>获赞</p>
            </li>
            <li>
              <p>9856</p>
              <p>粉丝</p>
            </li>

            <li>
              <p>18</p>
              <p>关注</p>
            </li>
          </ul>
        </div>
        <div class="personcenter-2">
          <ul>
            <li>
              <p><van-icon name="volume-o" /></p>
              <p>消息通知</p>
            </li>
            <li>
              <p><van-icon name="description" /></p>
              <p>收藏</p>
            </li>
            <li>
              <p><van-icon name="underway-o" /></p>
              <p>浏览历史</p>
            </li>
            <li>
              <p><van-icon name="down" /></p>
              <p>下载管理</p>
            </li>
          </ul>
        </div>
        <div class="personcenter-3">
          <div><h4>放映厅</h4><p>全部 <i><van-icon name="arrow" size="16" /></i></p></div>
          
        </div>
      </div>
      <van-cell is-link>退出登录</van-cell>
      <van-cell is-link>退出登录</van-cell>
      <van-cell is-link>修改信息</van-cell>
      <van-cell is-link @click="logionOut">退出登录</van-cell>
      <!-- <van-popup v-model="show">内容</van-popup> -->
    </div>
  </div>
</template>

<script>
import { getToken, removeToken } from "../../../utils/auth";
export default {
  components: {},
  data() {
    return {
      show: "",
      showlogin: true,
      message: {},
      img_base_url: "http://localhost:8989/",
    };
  },
  created() {
    this.showLogin();
  },
  computed: {},
  watch: {},

  methods: {
    goLogin() {
      this.$router.push({
        path: "/mine/login",
      });
    },
    showLogin() {
      //  console.log(this.$router.query)
      if (getToken()) {
        this.showlogin = false;
        // console.log(this.showlogin)
        var person = JSON.parse(localStorage.getItem("userid"));
        console.log(person);
        person.imgurl = this.img_base_url + person.imgurl;

        this.message = person;
        console.log(this.message.imgurl);
      }
    },

    logionOut() {
      removeToken();
      localStorage.removeItem("userid");
      this.$router.push({
        path: "/mine/login",
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）

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
.permessage {
  height: 160px;
  border: none;

  .showmessage {
    margin: 20px 0 0 0;
    // width: 30px;
    height: 80px;
    padding: 0 2% 0 4%;
    // background-color: yellowgreen;
    .picture {
      display: inline-block;
      border-radius: 50%;
      border: 1px solid skyblue;
    }
    .sssss {
      background-color: #f8f8f8;
      width: 80%;
      height: 60px;
      display: inline-block;
      position: relative;
      top: -25px;

      h3 {
        display: inline-block;
        line-height: 60px;
        height: 60px;
        margin-left: 15px;
      }
      .person {
        background-color: #f8f8f8;
        width: 80px;
        position: absolute;
        top: 10px;
        right: 0px;
        padding: 10px 0;
        .van-cell__value {
          width: 60px;
          position: relative;
        }
      }
    }
  }
}
.personcenter {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: white;
  position: relative;
  top: -90px;

  .personcenter-1 {
    height: 50px;
    background-color: #f8f8f8;
    ul {
      height: 50px;
      display: flex;
      justify-content: space-around;
      li {
        height: 50px;
        width: 25%;
        text-align: center;
        :nth-child(1) {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          height: 20px;
          line-height: 20px;
        }
        :nth-child(2) {
          font-size: 12px;
          color: #9c9c9c;
          height: 16px;
          line-height: 16px;
        }
      }
    }
  }

  .personcenter-2 {
    height: 70px;
    background-color: white;
    border-top: 1px solid #f8f8f8;
    ul {
      padding: 10px 0;
      height: 50px;
      display: flex;
      justify-content: space-around;
      li {
        height: 50px;
        width: 25%;
        text-align: center;
        :nth-child(1) {
          font-size: 22px;
          color: red;
          height: 30px;
          line-height: 30px;
        }
        :nth-child(2) {
          font-size: 12px;
          color: #9c9c9c;
          height: 16px;
          line-height: 16px;
        }
      }
    }
  }

  .personcenter-3 {
    height: 130px;
    background-color: white;
    border-top: 20px solid #f8f8f8;
    padding: 10px;
    div{
      height: 40px;
      h4{
          height: 40px;
        float: left;
        font-weight: 500;
        line-height: 40px;
        color: #666666;
      }
      p{
          height: 40px;
          line-height: 40px;
        float: right;
        font-size: 14px;
        color: #9c9c9c;
        i{
          position: relative;
          top: 1px;
          height: 20px;
          color: #9c9c9c;
        }
      }
      
    }
    //   ul {
    //     padding: 10px 0;
    //     height: 50px;
    //     display: flex;
    //     justify-content: space-around;
    //     li {
    //       height: 50px;
    //       width: 25%;
    //       text-align: center;
    //       :nth-child(1) {
    //         font-size: 22px;
    //         color: red;
    //         height: 30px;
    //         line-height: 30px;

    //       }
    //       :nth-child(2) {
    //         font-size: 12px;
    //         color: #333333;
    //         height: 16px;
    //         line-height: 16px;
    //       }
    //     }
    //   }
    // }
  }
}
.van-cell__value {
          color:#9c9c9c;
        }
</style>
