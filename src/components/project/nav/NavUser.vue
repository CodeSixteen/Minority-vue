<template>
  <div class="nav-user-box">
    <img :src="headImg" class="user-head-photo" />
    <div class="triangle"></div>
    <div class="user-function-list">
      <ul>
        <a>
          <li>个人主页</li>
        </a>
        <a>
          <li>我的私信</li>
        </a>
        <a>
          <li>账号设置</li>
        </a>
        <a>
          <li>付费栏目</li>
        </a>
        <a>
          <li>购买/订单</li>
        </a>
        <a>
          <li @click="toAddArticle">新增文章</li>
        </a>
        <a>
          <li>反馈</li>
        </a>
      </ul>
      <div class="login-out-box">
        <p class="login-out" @click="loginOut">退出登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavUser",
  data() {
    return {
      headImg: "https://cdn.sspai.com/2019/07/16/fa8b7ce5ea91003b55e6ae64657b89d3.png",
    };
  },
  created(){
    this.headImg = localStorage.getItem('headImg');
  },
  methods: {
    loginOut() {
      localStorage.clear(); //清除locaStorage
      let date = new Date()
      date.setTime(date.getTime() + (24 * 360 * 1000 * -1))
      window.document.cookie = `token='';path=/;expires=${date.toGMTString()}`;//清除cookie中的token
      this.$store.state.isLoginSuc = false;//改变全局状态
      location.href = window.location.href; //重新加载当前网页
    },
    toAddArticle() {
      this.$router.push("/addarticle");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-user-box {
  height: 60px;
  padding-left: 20px;
  position: relative;
  .user-head-photo {
    display: block;
    height: 40px;
    width: 40px;
    margin: 10px 0;
    border-radius: 50%;
  }
  .user-function-list {
    filter: drop-shadow(0 1px 2px #ccc);
    position: absolute;
    display: none;
    top: 61px;
    left: -10px;
    ul {
      padding: 10px 0;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      a {
        display: block;
        li {
          width: 100px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
        }
        li:hover {
          background-color: #ddd;
          color: #333;
        }
      }
    }
    .login-out-box {
      background-color: #fff;
      padding: 10px 0;
      .login-out {
        display: block;
        width: 100px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
      }
      .login-out:hover {
        background-color: #ddd;
        color: #333;
      }
    }
  }
  .user-function-list::after {
    position: absolute;
    content: "";
    top: -8px;
    left: 44px;
    height: 0;
    width: 0;
    border-bottom: 10px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
.nav-user-box:hover .user-function-list {
  display: block;
}
</style>