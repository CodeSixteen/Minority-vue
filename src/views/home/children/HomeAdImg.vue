<template>
  <div class="home-ad-img">
    <a v-for="(item,index) in adImages" :key="index" :href="item.img_href" class="ad-img-container">
      <img :src="item.img_src" :alt="item.img_title" />
    </a>
  </div>
</template>

<script>
import { getHomeAdImg } from "@/network/home";
export default {
  name: "HomeAdImg",
  data() {
    return {
      adImages: []
    };
  },
  created() {
    getHomeAdImg()
      .then(res => {
        this.adImages = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.home-ad-img {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -30px;
  .ad-img-container {
    display: block;
    width: 260px;
    border-radius: 5px;
    box-shadow: 0 5px 8px rgba(100, 100, 100, .3);
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 5px;
      transition: all .3s;
    }
    img:hover{
      transform: scale(1.1);
    }
  }
  
}
</style>