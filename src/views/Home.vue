<template>
  <div class="home">
    <HomeSlide />
    <div class="main">
      <HomeAdImg />
      <HomeMainWrap />
    </div>
    <TopNav class="top-nav">
      <ul class="nav-lists">
        <li class="nav-list-item">
          <img src="~@/assets/images/matrix.svg" />
          <span>Matrix</span>
        </li>
        <li class="nav-list-item">
          <img src="~@/assets/images/column.svg" />
          <span>付费订阅</span>
        </li>
        <li class="nav-list-item">
          <img src="~@/assets/images/mall.svg" />
          <span>特别策划</span>
        </li>
        <li class="nav-list-item">
          <img src="~@/assets/images/lobaro.svg" />
          <span>Pi Store</span>
        </li>
        <li class="nav-list-item">
          <img src="~@/assets/images/special.svg" />
          <span>Tron 计划</span>
        </li>
      </ul>
    </TopNav>
    <goTop class="go-top-component" />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/project/TopNav.vue";
import HomeSlide from "./children/HomeSlide";
import HomeAdImg from "./children/HomeAdImg";
import HomeMainWrap from "./children/HomeMainWrap";
import goTop from "@/components/common/goTop";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    TopNav,
    HomeSlide,
    HomeAdImg,
    HomeMainWrap,
    goTop
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  .nav-lists {
    display: flex;
    justify-content: center;
    height: 100%;
    .nav-list-item {
      height: 100%;
      margin: 0 5px;
      padding: 0 10px;
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all .2s;
      img {
        padding-right: 5px;
      }
    }
    .nav-list-item:hover{
      background-color:rgb(14,7,6);
    }
  }
}
.home {
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main {
    width: 1110px;
    position: relative;
  }
  .go-top-component {
    position: fixed;
    bottom: 60px;
    right: 60px;
  }
}
</style>