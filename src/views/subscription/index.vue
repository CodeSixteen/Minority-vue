<template>
  <div class="subscription">
    <Nav />
    <div class="subscription-main flex-between">
      <Banner />
      <div class="today">
        <div>
          <h4>今日推荐</h4>
          <h3>用 Keyboard Maestro 优化 Safari 使用体验</h3>
          <p
            class="today-content"
          >自动化并不意味着复杂，就优化 Safari（其实其他浏览器也能用）而言 Keyboard Maestro 是最合适的选择。它针对浏览器内置了不少模块，很多情况下不需要代码知识也能搭出一些实用动作。</p>
        </div>
        <p class="today-source">
          出自栏目：
          <span>Power+ 2.0</span> >
        </p>
      </div>
    </div>
    <div class="flex-between subscription-subnav">
      <div class="subs-classify-btn">
        <span class="subs-classify-active">全部分类</span>
        <span>我的订阅</span>
      </div>
      <div class="subs-search">
        <input type="text" placeholder="搜索" v-model="searchText" />
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="subs-classify-list">
      <SubsClassify :itemTitle="`最新上架`" />
      <ChoicenessRead />
      <div class="ad-img-box flex-between">
        <img
          src="https://cdn.sspai.com/article/b19a79e6-64f7-f662-d786-7b105b397e70.jpg?imageMogr2/quality/95/thumbnail/!1096x508r/gravity/Center/crop/1096x508"
        />
        <img
          src="https://cdn.sspai.com/article/a0c046b8-790e-d499-7581-cd0e3c005ea9.jpg?imageMogr2/quality/95/thumbnail/!1096x508r/gravity/Center/crop/1096x508"
        />
      </div>
      <SubsClassify :itemTitle="`发挥好工具的最大价值`" />
      <SubsClassify :itemTitle="`更有效地提升工作生产力`" />
      <SubsClassify :itemTitle="`有一种更好的生活方式`" />
      <SubsClassify :itemTitle="`从更多维度认识这个世界`" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/project/nav/index";
import Banner from "./children/banner";
import SubsClassify from "./children/SubsClassify";
import ChoicenessRead from "./children/ChoicenessRead";
import Footer from "@/components/project/Footer";

export default {
  name: "Subscription",
  components: {
    Nav,
    Banner,
    SubsClassify,
    ChoicenessRead,
    Footer
  },
  data() {
    return {
      searchText: ""
    };
  },
  updated() {
    //data内容有更新时执行
  }
};
</script>

<style lang="scss" scoped>
.subscription {
  background-color: #f4f4f4;
}
.subscription-main {
  padding-top: 80px;
  width: 1110px;
  margin: 0 auto;
  padding-bottom: 30px;
  .today {
    margin-left: 20px;
    width: 310px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    position: relative;
    div {
      cursor: pointer;
      h4 {
        font-weight: 400;
        color: #292525;
      }
      h3 {
        color: #292525;
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .today-content {
        color: #666;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
    .today-source {
      position: absolute;
      bottom: 20px;
      font-size: 12px;
      color: #999;
      span {
        color: #292525;
        cursor: pointer;
        font-size: 16px;
      }
      span:hover {
        color: red;
      }
    }
  }
}
/* 小导航 */
.subscription-subnav {
  width: 1110px;
  padding-bottom: 30px;
  margin: 0 auto;
  align-items: center;
  .subs-classify-btn {
    span {
      color: #999;
      font-size: 16px;
      padding-bottom: 5px;
      margin-right: 30px;
      cursor: pointer;
    }
    .subs-classify-active {
      color: red;
      border-bottom: 2px solid red;
    }
  }
  .subs-search {
    display: flex;
    align-items: center;
    input {
      width: 160px;
      padding: 5px 0px;
      background: none;
      border-bottom: 1px solid #666;
    }
    .iconfont {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
/* 订阅分类列表 */
.subs-classify-list {
  width: 1110px;
  margin: 0 auto;
  padding-bottom: 20px;
}
/* 小广告 */
.ad-img-box {
  padding-bottom: 20px;
  img {
    width: 49%;
    border-radius: 10px;
  }
}
</style>