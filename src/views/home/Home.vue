<template>
  <div class="home">
    <HomeNav />
    <HomeSlide />
    <div class="main">
      <HomeAdImg />
      <div class="main-wrap">
        <LeftSide class="left-side" />
        <RightSide class="right-side" />
      </div>
    </div>
    <goTop class="go-top-component" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "./children/HomeNav";
import HomeSlide from "./children/HomeSlide";
import HomeAdImg from "./children/HomeAdImg";
import LeftSide from "./children/LeftSide";
import RightSide from "./children/RightSide";
import goTop from "@/components/common/gobacktop/goTop";

export default {
  name: "home",
  components: {
    HomeNav,
    HomeSlide,
    HomeAdImg,
    LeftSide,
    RightSide,
    goTop
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main {
    width: 100%;
    max-width: 1110px;
    position: relative;
    .main-wrap {
      margin-top: 200px;
      display: flex;
      justify-content: space-between;
      .left-side {
        width: 72%;
        max-width: 800px;
      }
      .right-side {
        width: 23.4%;
        max-width: 260px;
      }
    }
  }
}
</style>