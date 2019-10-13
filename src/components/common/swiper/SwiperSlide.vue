<template>
  <div class="swiper-slide-container">
    <a href="javascript:0" class="slide-link">
      <img :src="slideSrc" :alt="slideTitle" class="slide-img"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "SwiperSlide",
  props: ["slideLink", "slideSrc", "slideTitle"]
};
</script>

<style lang='scss' scoped>
.swiper-slide-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.slide-link,
.slide-img {
  display: block;
  width: 100%;
}
</style>