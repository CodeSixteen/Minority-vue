<template>
  <div class="home-swiper">
    <Swiper :swiper-slides="swiperSlides" :is-indicator="true" />
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'

export default {
  name: 'HomeSlide',
  components: {
    Swiper
  },
  data() {
    return {
      swiperSlides: [
        { id: 1, title: '少数派3.0', banner: 'https://cdn.sspai.com/article/8592d458-d677-f58e-e82f-3d1745beeca8.jpg', href: 'javascript:0' },
        { id: 2, title: '玩转iOS13', banner: 'https://cdn.sspai.com/article/ca9d2250-6f2c-6319-7cbe-5d3a6b9d4d70.jpg', href: 'javascript:0' },
        { id: 3, title: '素材库', banner: 'https://cdn.sspai.com/article/df3b948c-c437-f73f-6dce-77c5ac65f091.jpg', href: 'javascript:0' },
        { id: 4, title: '印象笔记', banner: 'https://cdn.sspai.com/article/3f556a6e-e84e-6c00-45bb-ff4579d952f9.jpg', href: 'javascript:0' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-swiper {
  width: 100%;
}
</style>
