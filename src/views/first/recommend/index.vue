<template>
  <div id="" class="attention">
    <div class="moudle" v-for="(item, index) in list" :key="index">
      <div class="title">
        <div class="imgbox">
          <img
            :src=item.headportrait
            alt=""
          />
        </div>
        <ul class="name">
          <li>
            <h4>{{ item.username}}</h4>
            <i><van-icon name="cross" size="14" color='#c7c7c7'/></i>
          </li>
          <li>
            <span>09-21 20:07 </span><span>工程师 </span
            ><span>优质历史领域创作者</span>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="main_text">
          {{ item.message.article.text }}
        </div>
        <div class="main_img">
          <img :src="item.message.article.imgurl" alt="" />
        </div>
      </div>
      <div class="talk">
        <ul>
          <li><van-icon name="share-o" size="18" /><span>分享</span></li>
          <li><van-icon name="chat-o" size="18" /><span>评论</span></li>
          <li><van-icon name="good-job-o" size="18" /><span>点赞</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      img_base_url: "http://localhost:8989/",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
  },
  methods: {
    getList() {
      
      this.$http.get("/getlist").then((res) => {
        // console.log(res);
        res.data.list.forEach((item) => {
          item.message.article.imgurl = this.img_base_url + item.message.article.imgurl;
          item.headportrait =  this.img_base_url+item.headportrait;
        });
        this.list = res.data.list;
      });
    },
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
.attention {
  width: 100%;
  overflow-x: hidden;
  background-color: #f2f2f2;
  // height: 100%;
  .moudle {
    margin-bottom: 7px;
    padding: 10px;
    background-color: #ffffff;
    .title {
      height: 40px;
      .imgbox {
        float: left;
        height: 35px;
        width: 35px;
        img {
          display: block;
          height: 35px;
          width: 35px;
          border-radius: 30px;
          border: 1px solid #666666;
        }
      }
      .name {
        float: left;
        margin-left: 15px;
        height: 30px;
        li {
          height: 15px;
          margin-bottom: 5px;
          position: relative;
          h3 {
            font-size: 16px;
            font-weight: 600;
          }
          i {
            position: absolute;
            padding: 2px 6px ;
            top: 0;
            right: -26px;
            background-color: #f8f8f8;
            border-radius: 3px;
          }
          span {
            font-size: 14px;
            color: #666666;
          }
        }
      }
    }
    .main {
      margin-top: 5px;
      height: 90px;
      .main_text {
        padding: 5px 0px 15px 5px;
        float: left;
        width: 58%;
        height: 65px;
        line-height: 26px;
        overflow: hidden;
      }
      .main_img {
        float: left;
        width: 30%;
        height: 50px;
        img {
          display: block;
          width: 140px;
          height: 90px;
        }
      }
    }
    .talk {
      margin-top: 10px;
      height: 30px;
      ul {
        height: 30px;
        display: flex;
        li {
          justify-content: space-between;
          width: 33.3%;
          line-height: 30px;
          text-align: center;
          font-size: 14px;
          i {
            position: relative;
            top: 4px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
