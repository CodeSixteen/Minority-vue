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
      adImages: [
        {id:1,img_src:"https://cdn.sspai.com/article/f21c8653-8170-18aa-452b-18f31271be2a.jpg",img_title:"管理文件",img_href:"javascript:0"},
        {id:1,img_src:"https://cdn.sspai.com/article/a9b271d2-dbae-8e99-17d4-58d536879a1f.jpg",img_title:"管理文件",img_href:"javascript:0"},
        {id:1,img_src:"https://cdn.sspai.com/article/4319e17a-d9ad-f483-6a78-1adfa213fbc1.jpg",img_title:"管理文件",img_href:"javascript:0"},
        {id:1,img_src:"https://cdn.sspai.com/article/4a3cfa17-157e-68da-f89f-5c554b750f12.jpg",img_title:"管理文件",img_href:"javascript:0"}
      ]
    };
  },
  created() {
    //请求小广告数据
    // getHomeAdImg()
    //   .then(res => {
    //     this.adImages = res.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
      height: 100%;
      border-radius: 5px;
      transition: all .3s;
    }
    img:hover{
      transform: scale(1.1);
    }
  }
  
}
</style>