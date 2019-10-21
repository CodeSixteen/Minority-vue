<template>
  <div class="subscription-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in slideList" :key="index">
        <a :href="item.href">
          <img :src="item.src" :alt="item.title" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Banner",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        pagination : {
          el:'.swiper-pagination'
        }
      },
      slideList: [
        {
          src: "https://cdn.sspai.com/article/2503ce00-5c5e-2c1b-b58f-d7cbe61bd1ae.jpg?imageMogr2/quality/95/thumbnail/!1560x648r/gravity/Center/crop/1560x648", title: "1", href: "javascript:;"
        },
        {
          src: "https://cdn.sspai.com/article/441e23e4-dcee-5b62-ceff-c7c8517b5a90.jpg?imageMogr2/quality/95/thumbnail/!1560x648r/gravity/Center/crop/1560x648", title: "2", href: "javascript:;"
        },
        {
          src: "https://cdn.sspai.com/article/18c78ef9-65aa-6733-6438-efe516fde441.jpg?imageMogr2/quality/95/thumbnail/!1560x648r/gravity/Center/crop/1560x648", title: "3", href: "javascript:;"
        },
        {
          src:"https://cdn.sspai.com/article/d9dbc5ab-af2a-018d-b723-d1a47ee83a8b.jpg?imageMogr2/quality/95/thumbnail/!1560x648r/gravity/Center/crop/1560x648", title: "4", href: "javascript:;"
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    this.swiper.slideTo(0, 1000, true);
  }
};
</script>

<style lang="scss" scoped>
.subscription-banner {
  position: relative;
  width: 780px;
  background-color: #eee;
}
</style>