<template>
  <div class="nav-container">
    <header>
      <div class="nav-content">
        <div class="nav-left">
          <a class="logo">
            <span class="logo-icon"></span>
            <span class="logo-title">少数派</span>
          </a>
        </div>
        <div class="nav-center">
          <span></span>
        </div>
        <div class="nav-right">
          <div>
            <i class="iconfont icon-pen"></i>
          </div>
          <div>
            <i class="iconfont icon-search" @click="showSearchInput"></i>
            <input type="text" class="home-nav-search" placeholder="搜索" @blur="hideSearchInput"/>
          </div>
          <div class="home-nav-login" @click="clickLogin">登录</div>
        </div>
      </div>
    </header>
    <Login v-show="isLogin" class="login-component" @is-login="isShowLogin"/>
  </div>
</template>

<script>
import Login from "./Login";

export default {
  name: "TopNav",
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    Login
  },
  methods: {
    showSearchInput() {
      const input = document.querySelector(".home-nav-search");
      const width = input.getBoundingClientRect().width;
      if (width) {
        input.style.width = "0px";
      } else {
        input.style.width = "200px";
        input.focus();
      }
    },
    hideSearchInput(){
        const input = document.querySelector(".home-nav-search");
        input.style.width = "0px";
    },
    clickLogin(){
        this.isLogin = true;
    },
    isShowLogin(x){
       this.isLogin = x;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";

.nav-container {
  height: 60px;
  background-color: $themeColor;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-content {
  width: 1110px;
  height: 100%;
  display: flex;
  position: relative;
}
.nav-left {
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
}
.nav-center {
  width: 100%;
  height: 60px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  line-height: 60px;
}
.nav-right {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
}
.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
.logo-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d7191a;
  padding: 10px;
  background-image: url("~@/icons/logo.svg");
  background-size: auto 100%;
}
.logo:hover .logo-icon{
    background-color: #fc191a;
}
.logo-title {
  padding-left: 10px;
  font-size: 18px;
  color: #fff;
}
.nav-right div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-pen,
.icon-search {
  color: #aaa;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
}
.home-nav-login {
  height: 30px;
  padding: 0px 30px;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  line-height: 30px;
  margin-left: 20px;
}
.home-nav-search {
  background-color: transparent;
  color: #fff;
  border-bottom: 1px solid #fff;
  height: 30px;
  width: 0px;
  transition: all 0.3s;
}
.login-component{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
</style>