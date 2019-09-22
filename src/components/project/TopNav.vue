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
          <slot></slot>
        </div>
        <div class="nav-right">
          <div>
            <i class="iconfont icon-search" @click="showSearchInput" ref="searchicon"></i>
          </div>
          <div class="home-nav-login" @click="clickLogin">登录</div>
        </div>
      </div>
    </header>
    <HomeSearch v-show="isShowSearch" class="home-search" @hideSearch="hideSearch" />
    <Login v-show="isLogin" class="login-component" @hideLogin="hideLogin" />
  </div>
</template>

<script>
import Login from "./Login";
import HomeSearch from "./HomeSearch";

export default {
  name: "TopNav",
  data() {
    return {
      isLogin: false,
      isShowSearch: false
    };
  },
  components: {
    Login,
    HomeSearch
  },
  methods: {
    showSearchInput() {
      this.isShowSearch = !this.isShowSearch;
      let el = this.$refs.searchicon;
      if (this.isShowSearch) {
        el.className = "iconfont icon-guanbi";
      } else {
        el.className = "iconfont icon-search";
      }
    },
    clickLogin() {
      this.isLogin = true;
      this.isShowSearch = false;
      this.$refs.searchicon.className = "iconfont icon-search";
    },
    hideLogin(x) {
      this.isLogin = x;
    },
    hideSearch(x) {
      this.isShowSearch = x;
      this.$refs.searchicon.className = "iconfont icon-search";
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
  div .iconfont {
    color: #fff;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
  }
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
.logo:hover .logo-icon {
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
.home-nav-login {
  height: 30px;
  padding: 0px 16px;
  border-radius: 15px;
  color: #666;
  line-height: 30px;
  margin-left: 20px;
  background-color: #fff;
  cursor: pointer;
}
.home-nav-login:hover {
  color: #333;
}
.login-component {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.home-search {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>