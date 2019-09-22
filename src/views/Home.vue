<template>
  <div class="home">
    <HomeSlide />
    <div class="main">
      <HomeAdImg/>
      <HomeMainWrap/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlide from "./children/HomeSlide"
import HomeAdImg from "./children/HomeAdImg"
import HomeMainWrap from './children/HomeMainWrap'

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HomeSlide,
    HomeAdImg,
    HomeMainWrap
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
  .main{
    width: 1110px;
    position: relative;
  }
}

</style>