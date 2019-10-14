<template>
  <div class="right-side">
    <div class="top">
      <a :href="adImgHref">
        <img :src="adImgSrc" v-show="isShow" />
      </a>
    </div>
    <div class="matrix-title">
      <img src="~@/icons/home/icon-matrix.png" />
      <span>Matrix精选</span>
    </div>
    <ul class="matrix-lists">
      <li v-for="(item,index) in matrixLists" :key="index" class="matrix-item">
        <div class="header-img">
          <img :src="item.user_header_img" />
        </div>
        <div class="list-info">
          <p class="list-username">{{item.username}}</p>
          <p class="list-summary">{{item.summary}}</p>
        </div>
      </li>
    </ul>
    <div class="matrix-all-btn">
      <a class="matrix-all-link" href="javascript:0">查看全部 >></a>
    </div>
    <div class="line" id='box'></div>
    <Blogroll/>
    <BottomLink/>
  </div>
</template>

<script>
import Blogroll from '@/components/project/Blogroll'
import BottomLink from '@/components/project/BottomLink'

export default {
  name: 'RightSide',
  components:{
    Blogroll,
    BottomLink
  },
  data() {
    return {
      adImgSrc: 'https://cdn.sspai.com/article/46423bae-efd5-0390-5b55-014e2ee5a6bf.jpg',
      adImgHref: 'javascript:0',
      matrixLists: [
        {user_header_img:"https://cdn.sspai.com/2019/10/14/5666a9d8a2310222bccff427675600d1.JPG",username:"不蠢会死的某翠",summary:"利用快捷指令连接Sony耳机"},
        {user_header_img:"https://cdn.sspai.com/2018/03/25/ce2a784deb3097acb6ee9d37ea0c13ea.jpg",username:"胖鱼要进步",summary:"攻略向 | 搬家到底有多难？"},
        {user_header_img:"https://cdn.sspai.com/attachment/origin/2014/06/27/76939.jpg",username:"Eis",summary:"巧用工具，制定一个人的日本旅行计划"}
      ]
    };
  },
  computed: {
    isShow() {
      if (this.adImgSrc) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.right-side {
  width: 100%;
  .top {
    width: 100%;
    a {
      display: block;
      width: 100%;
      height: 120px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width:400px;
      }
    }
  }
  .matrix-title {
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    img {
      width: 40px;
    }
    span {
      padding-left: 20px;
      font-size: 18px;
      color: #292525;
    }
  }
  .matrix-lists {
    width: 100%;
    .matrix-item {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      .header-img {
        width: 32px;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      .list-info{
        padding-left: 20px;
        .list-username{
          font-size: 14px;
          color: #292525;
        }
        .list-summary{
          padding: 20px 0;
        }
      }
    }
  }
  .matrix-all-btn{
    width: 100%;
    padding: 20px 0;
    .matrix-all-link{
      display: block;
      color: $red;
      width: 100%;
      text-align: center;
    }
  }
}
</style>