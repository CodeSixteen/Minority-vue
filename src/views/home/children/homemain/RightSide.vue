<template>
  <div class="right-side">
    <div class="top">
      <a :href="adImgHref">
        <img :src="adImgSrc" v-show="isShow" />
      </a>
    </div>
    <div class="matrix-title">
      <img src="~@/assets/images/icon-matrix.png" />
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
      <a class="matrix-all-link" href="https://sspai.com/matrix">查看全部 >></a>
    </div>
    <div class="line"></div>
    <Blogroll/>
    <BottomLink/>
  </div>
</template>

<script>
import { getRightAdImg, getMatrixLists } from '@/network/home'
import Blogroll from './Blogroll'
import BottomLink from './BottomLink'

export default {
  name: 'RightSide',
  components:{
    Blogroll,
    BottomLink
  },
  data() {
    return {
      adImgSrc: '',
      adImgHref: '',
      matrixLists: []
    };
  },
  created() {
    getRightAdImg()
      .then(res => {
        this.adImgSrc = res.data[0].img_src;
        this.adImgHref = res.data[0].img_href;
      })
      .catch(err => {
        console.log(err);
      });
    getMatrixLists()
      .then(res => {
        this.matrixLists = res.data;
      })
      .catch(err => {
        console.log(err);
      });
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
      img {
        width: 100%;
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