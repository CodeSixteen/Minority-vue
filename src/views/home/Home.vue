<template>
  <div class="home">
    <HomeNav/>
    <HomeSlide />
    <div class="main">
      <HomeAdImg />
      <HomeMainWrap />
    </div>
    <goTop class="go-top-component" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from './children/HomeNav'
import HomeSlide from './children/HomeSlide'
import HomeAdImg from './children/HomeAdImg'
import HomeMainWrap from './children/HomeMainWrap'
import goTop from '@/components/common/gobacktop/goTop'

export default {
  name: 'home',
  components: {
    HomeNav,
    HomeSlide,
    HomeAdImg,
    HomeMainWrap,
    goTop,
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
  }
  .go-top-component {
    position: fixed;
    bottom: 60px;
    right: 60px;
  }
}
</style>