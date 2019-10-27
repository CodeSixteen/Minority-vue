<template>
  <div class="swiper-slide-container">
    <a :href="slideLink" class="slide-link">
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
@media (max-width:960px) {
  .slide-link{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 300px;
  }
  .slide-img{
    transform: scale(1.7);
  }
}
@media (max-width:900px) {
  .slide-link{
    height: 280px;
  }
}
@media (max-width:840px) {
  .slide-link{
    height: 260px;
  }
}
@media (max-width:780px) {
  .slide-link{
    height: 240px;
  }
  .slide-img{
    transform: scale(1.8);
  }
}
@media (max-width:720px) {
  .slide-link{
    height: 220px;
  }
  .slide-img{
    transform: scale(1.8);
  }
}
@media (max-width:660px) {
  .slide-link{
    height: 210px;
  }
  .slide-img{
    transform: scale(1.9);
  }
}
@media (max-width:600px) {
  .slide-link{
    height: 200px;
  }
  .slide-img{
    transform: scale(2);
  }
}
@media (max-width:530px) {
  .slide-link{
    height: 190px;
  }
  .slide-img{
    transform: scale(2.2);
  }
}
@media (max-width:480px) {
  .slide-link{
    height: 180px;
  }
  .slide-img{
    transform: scale(2.3);
  }
}
@media (max-width:460px) {
  .slide-link{
    height: 170px;
  }
  .slide-img{
    transform: scale(2.4);
  }
}
@media (max-width:480px) {
  .slide-img{
    transform: scale(2.3);
  }
}
@media (max-width:480px) {
  .slide-img{
    transform: scale(2.3);
  }
}
</style>