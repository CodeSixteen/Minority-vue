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
      :createdTime="item.created_time"
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
import { getArticleLists } from "@/network/home";

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
    this.getLazyLoadingEl();
    this.lazyLoading();
    // 监听（绑定）滚轮滚动事件
    window.addEventListener("scroll", this.handleScroll, false);
  },
  updated(){
    this.getLazyLoadingEl();
    this.lazyLoading();
  },
  methods: {
    reqData() {
      //根据分类返回数据
      this.articleLists = resArticleList(this.articleClassifyId)
      function resArticleList(classifyId){
        switch(classifyId){
          case "推荐":
            return [
              {id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"一周 App 派评 | 近期值得关注的 15 款应用",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b3699c55-1b24-152f-9e21-14403636f767.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/abb7b13a-e945-a266-261c-01ec5b23c9ba.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/8dc31f25-65eb-f2fc-40bb-25887ffe3d70.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/2019/10/11/9c184fb6744195c4e3b0df2bb8773a56.png?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/9fc095bd-725f-116b-699b-7b9957d3affe.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"}
              ];
            break;
          case "最热":
            return [{id:6, title:"功能全面还免费，它才是iOS 需要的文件管理工具：Documents",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/d6adff9e-0fb5-d903-2508-0839c48b55a9.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:7, title:" 给 Windows 电脑硬盘分区，真的有必要吗？",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/ed3c740a-c0d5-23dc-185a-2e49d2c34cba.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:8, title:"macOS Catalina 正式版来了，更新后先来试试这些新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/e01c7983-242f-6b12-61cd-fc4ca25f444a.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:9, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/76510ee6-c1b5-d2c7-315b-f8e726893ace.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"}
              ];
            break;
          case "应用推荐":
            return [{id:1, title:"「同屏多开」的新功能，让这些 App 在 iPad 上变得更好用",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/86680eda-617d-e780-5592-b97d8d24283c.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"Material Design 设计奖揭晓，Google 选出了 4 款最佳应用",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/6bbcccb2-7a5d-4df3-75cd-086b0e81d790.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"Surface 手机来了，还有新电脑和双屏平板：微软硬件发布会汇总",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/2019/10/03/7358f014182474c91d8773ee9203a481.png?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"}];
            break;
          case "生活方式":
            return [{id:1, title:"在 B 站学做美食，我关注了这些 UP 主",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/619b5bc4-0fa0-ff09-6293-021195c3c90a.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"在 Kindle 上看漫画、RSS、PDF？5 个小工具帮你获得最佳体验",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/fad71661-1950-66ff-3d49-9dca0874d39c.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"FM 3.14 周报 | 让人迷醉的后摇序曲、音乐动画电影《声怒》上线、盘尼西林、麻油叶新专发布",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b2d7cf4e-2b3d-e6e9-3b95-34900d1e3b11.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"全新的桌面布局，提供选择不同图标大小",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"}];
            break;
          case "Power+":
            return [{id:1, title:"Power+ Live 02",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/d44a82eb-3732-a9d3-4f4b-408fb3f689d7.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"国庆看什么：DC 新片《猛禽小队和哈莉·奎因》正式预告，《我和我的祖国》上映",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/3156926e-2b92-b834-735b-9edb3daea9c1.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"展示来自用户的最真实的体验和观点",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/2019/10/13/a6f195e0291a70e52f8b9966b2519cf1.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:1, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},{id:1, title:"把 Spotlight 搜索栏变成 Siri 快捷指令启动器",created_time:"6月07日",author:"Minja",view:32,comment:13,list_img_src:"https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"},
              {id:2, title:"如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",created_time:"7月15日",author:"Clyde",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"},
              {id:3, title:"如何让 Android 10 拥有不输 iOS 的暗色模式体验？",created_time:"2月15日",author:"SpencerWoo",view:18,comment:6,list_img_src:"https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:4, title:"Docker 的入门「指北」",created_time:"5月16日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"},
              {id:5, title:"除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",created_time:"2月15日",author:"SpencerWoo",view:88,comment:0,list_img_src:"https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",headerImg:"https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"}];
            break;
        }
      }
      //根据文章分类请求文章列表数据
      // getArticleLists(this.articleClassifyId)
      //   .then(res => {
      //     this.articleLists = res.data;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
          this.imgSrcArr[i].src = this.imgSrcArr[i].getAttribute("data-src");
          this.imgSrcArr[i].style.width = "100%";
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