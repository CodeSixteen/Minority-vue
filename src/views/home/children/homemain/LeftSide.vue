<template>
  <div class="left-side-box">
    <SubNav
      :navLists="navLists"
      class="sub-nav-component"
      @cutArticleClassify="cutArticleClassify"
      ref="subnav"
    />
    <ArticleItem
      v-for="(item,index) in articleLists"
      :key="index"
      :listImg="item.list_img_src"
      :aritcleTitle="item.title"
      :headerImg="item.headerImg"
      :author="item.author"
      :createdTime="item.created_time"
      :view="item.view"
      :comment="item.comment"
      class="article-item-component"
    />
  </div>
</template>

<script>
import SubNav from "@/components/project/SubNav";
import ArticleItem from "@/components/project/ArticleItem";
import { getArticleLists } from "@/network/home";

export default {
  name: "LeftSide",
  data() {
    return {
      navLists: ["推荐", "最热", "应用推荐", "生活方式", "Power+"],
      articleLists: [],
      articleClassify: "推荐",
      subnavOffsetop: 0
    };
  },
  components: {
    SubNav,
    ArticleItem
  },
  created() {
    this.reqData();
  },
  mounted() {
    this.xx();
    window.addEventListener("scroll", this.handleScroll, false); // 监听（绑定）滚轮滚动事件
  },
  methods: {
    cutArticleClassify(id) {
      this.articleClassify = id;
    },
    reqData() {
      getArticleLists(this.articleClassify)
        .then(res => {
          this.articleLists = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    xx() {
      setTimeout(() => {
        let c = this.$refs.subnav.$el.getBoundingClientRect().top;
        this.subnavOffsetop = c;
      }, 200);
    },
    handleScroll() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 设备/屏幕高度
      let scrollObj = document.documentElement || document.body; // 滚动区域
      let scrollTop = scrollObj.scrollTop; // div 到头部的距离
      let c = this.$refs.subnav.$el.getBoundingClientRect().top;
      if (c <= 0) {
      }
      let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      //滚动条到底部的条件
      if (scrollTop + clientHeight == scrollHeight) {
        // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
      }
    }
  },
  watch: {
    articleClassify() {
      this.reqData();
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
};
</script>

<style lang='scss' scoped>
.left-side-box {
  position: relative;
  .sub-nav-component {
    position: absolute;
    top: -60px;
  }
}
.article-item-component {
  margin-bottom: 20px;
}
</style>