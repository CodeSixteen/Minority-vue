<template>
  <div @click="colseComment">
    <PostMain>
      <template #top>
        <PostBanner
          :banner="banner"
          :title="title"
          :head_img="head_img"
          :author="author"
          :created_time="created_time"
        />
      </template>
      <template #center>
        <PostCenter
          :content="content"
          :head_img="head_img"
          :author="author"
          :view="view"
          :comment="comment"
          @userClickZan="reqNewData"
          :like_number="like_number"
        />
      </template>
    </PostMain>
    <Comment :isShowRe="isShowRe" @showRe="showRe" :comment="comment" @reqNewData="reqNewData"/>
    <recommend />
    <Postbottom />
    <goTop class="go-top-component" />
    <PostNav />
  </div>
</template>

<script>
import PostNav from "./children/PostNav";
import PostMain from "./children/PostMain";
import PostBanner from "./children/PostBanner";
import PostCenter from "./children/PostCenter";
import goTop from "@/components/common/gobacktop/goTop";
import recommend from "./children/recommend";
import Postbottom from "./children/Postbottom";
import Comment from "./children/Comment";
import { getArticle } from "@/network/articledetils";

export default {
  name: "Post",
  props: ["id"],
  components: {
    PostNav,
    PostMain,
    PostBanner,
    PostCenter,
    goTop,
    recommend,
    Postbottom,
    Comment
  },
  data() {
    return {
      isShowRe: false,
      banner: "http://localhost:8102/upload/article_banner.png",
      title: "",
      head_img: "http://localhost:8102/upload/article_head_img.png",
      author: "",
      created_time: "",
      content: "",
      view: 1,
      comment: 1,
      like_number: 1
    };
  },
  created() {
    this.reqArticleData();
  },
  methods: {
    reqArticleData() {
      let id = this.$route.params.id;
      getArticle({ id })
        .then(res => {
          let data = res.data;
          let oDate = new Date(data.created_time * 1000);
          let month = oDate.getMonth() + 1;
          if (month.toString().length === 1) {
            month = "0" + month.toString();
          }
          let day = oDate.getDate();
          if (day.toString().length === 1) {
            day = "0" + day.toString();
          }
          this.created_time = `${oDate.getFullYear()}-${month}-${day}`;
          this.banner = data.banner_img_src;
          this.title = data.title;
          this.head_img = data.headerImg;
          this.author = data.author;
          this.content = data.content;
          this.view = data.view;
          this.comment = data.comment;
          this.like_number = data.like_number;
        })
        .catch(err => {
          console.log(err);
        });
    },
    colseComment(e) {
      let ev = e.target;
      let arr = [
        "comment-input",
        "comment-submit",
        "file-btn",
        "comment-textarea",
        'iconfont icon-liuyan'
      ];
      let have = arr.includes(ev.className);
      if (!have) {
        this.isShowRe = false;
        let box = document.querySelectorAll(`.texterea-container`);
        box.forEach(item=>{
          item.style.display = "none";
        })
      }
    },
    showRe(x) {
      this.isShowRe = x;
    },
    reqNewData(){
      this.reqArticleData();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>