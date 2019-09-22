<template>
  <div class="left-side-box">
    <SubNav :navLists="navLists" class="sub-nav-component" />
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
      articleLists: []
    };
  },
  components: {
    SubNav,
    ArticleItem
  },
  created() {
    getArticleLists()
      .then(res => {
        this.articleLists = res.data;
      })
      .catch(err => {
        console.log(err);
      });
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
.article-item-component{
  margin-bottom: 20px;
}
</style>