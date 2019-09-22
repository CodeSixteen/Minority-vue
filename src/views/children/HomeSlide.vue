<template>
  <div>
    <Swiper :swiperSlides='swiperSlides' :isIndicator='true'/>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'
import { getDataByBanner } from "@/network/home";

export default {
  name: "HomeSlide",
  data() {
    return {
      swiperSlides: []
    };
  },
  components:{
    Swiper
  },
  created() {
    getDataByBanner()
      .then(res => {
        //处理数据（res）
        res.data.forEach(item => {
          this.swiperSlides.push(item);
        });
      })
      .catch(err => {
        //错误时的处理（err）
      });
  }
};
</script>

<style lang="scss" scoped>
</style>