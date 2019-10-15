<template>
  <div class="left-side-box">
    <SubNav :navLists="navLists" class="sub-nav-component" ref="subnav" />
    <ArticleItem
      v-for="(item,index) in articleLists"
      :key="index"
      :listImg="item.list_img_src"
      :aritcleTitle="item.title"
      :headerImg="item.headerImg"
      :author="item.author"
      :createdTime="parseTimec(item.created_time)"
      :view="item.view"
      :comment="item.comment"
      :article_id="item.id"
      class="article-item-component"
    />
  </div>
</template>

<script>
import SubNav from "./SubNav";
import ArticleItem from "./ArticleItem";
import { getArticleLists } from "@/network/data";
import { parseTime } from "@/utils/index";

export default {
  name: "LeftSide",
  data() {
    return {
      navLists: ["推荐", "最热", "应用推荐", "生活方式", "Power+"],
      articleLists: [],
      subnavTopDistance: 0,
      imgSrcArr: [],
      timer: null
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
    // 监听（绑定）滚轮滚动事件
    window.addEventListener("scroll", this.handleScroll, false);
    this.getLazyLoadingEl();
    this.lazyLoading();
  },
  updated(){
    this.getLazyLoadingEl();
    this.lazyLoading();
  },
  methods: {
    parseTimec(time){
      return parseTime(time).toString().slice(0,10)
    },
    reqData() {
      //根据分类请求数据
      this.articleLists = getArticleLists(this.articleClassifyId);
    },
    handleScroll() {
      //获取元素到顶部的距离
      this.subnavTopDistance = this.$refs.subnav.$el.getBoundingClientRect().top;
      let changeNav = this.$store.state.changeNav;
      if (this.subnavTopDistance <= 0) {
        if (!changeNav) {
          this.$store.state.changeNav = true;
        }
      } else {
        if (changeNav) {
          this.$store.state.changeNav = false;
        }
      }
      /* 获取页面可视区的高度，滚动条顶部所处的位置，元素可滚动的总高度 */
      let el = document.documentElement || document.body;
      let scrollTop = el.scrollTop;//滚动条顶部位置
      let visibleTop = el.clientHeight;//可视区高度
      let scrollheight = el.offsetHeight;//可滚动总高度
      if (scrollTop + visibleTop === scrollheight) {
        //已经滚动到底部，可以做一些事情
      }
      //添加定时器，避免执行次数过多
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.lazyLoading();
      }, 100);
    },
    lazyLoading() {
      for (let i = 0; i < this.imgSrcArr.length; i++) {
        if (this.isInVisibleArea(this.imgSrcArr[i])) {
          this.imgSrcArr[i].style.width = "100%";
          this.imgSrcArr[i].src = this.imgSrcArr[i].getAttribute("data-src");
          this.imgSrcArr.splice(i, 1);
          i--;
        }
      }
    },
    getLazyLoadingEl() {
      //把所有需要懒加载的图片放在一个数组中
      let arr = document.querySelectorAll(".lazy-loading");
      //将类数组转为数组
      this.imgSrcArr = Array.from(arr);
    },
    //判断元素是否在可视区
    isInVisibleArea(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top > 0 &&
        rect.top < window.innerHeight &&
        rect.left > 0 &&
        rect.left < window.innerWidth
      );
    }
  },
  computed: {
    articleClassifyId() {
      return this.$store.state.articleClassifyId;
    }
  },
  watch: {
    articleClassifyId() {
      this.reqData();
      let x = document.documentElement.scrollTop;
      if(x>this.subnavTopDistance){
        document.documentElement.scrollTop = 475;
      }
    }
  },
  destroyed() {
    document.documentElement.scrollTop = 0;
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
    this.$store.state.changeNav = false;//离开当前页面的时候将nav置为默认状态
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