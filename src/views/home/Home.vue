<template>
  <div class="home">
    <Nav />
    <HomeSlide />
    <div class="main">
      <HomeAdImg />
      <div class="main-wrap">
        <LeftSide class="left-side" @isShowGoTop="isShowGoTop"/>
        <RightSide class="right-side" />
      </div>
    </div>
    <goTop class="go-top-component" v-show="showGoTop"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/project/nav/index";
import HomeSlide from "./children/HomeSlide";
import HomeAdImg from "./children/HomeAdImg";
import LeftSide from "./children/LeftSide";
import RightSide from "./children/RightSide";
import goTop from "@/components/common/gobacktop/goTop";

export default {
  name: "home",
  components: {
    Nav,
    HomeSlide,
    HomeAdImg,
    LeftSide,
    RightSide,
    goTop
  },
  data(){
    return{
      showGoTop: false
    }
  },
  methods:{
    isShowGoTop(b){
      this.showGoTop = b;
    }
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
      }
      .right-side {
        width: 23.4%;
      }
    }
  }
}
@media (max-width:1110px) {
  .left-side{
    width: auto !important;
    padding-right: 20px; 
  }
  .right-side{
    width: 260px !important;
  }
}
@media (max-width:960px) {
  .left-side{
    width: 100% !important;
    padding-right: 20px; 
    padding-left: 20px;
  }
  .right-side{
    display: none;
  }
  .main-wrap{
    margin-top: 80px !important;
  }
}
</style>