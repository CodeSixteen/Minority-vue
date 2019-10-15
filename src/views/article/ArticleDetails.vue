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
          :like_number="like_number"
          :comment="comment"
          @userClickZan="reqNewData"
          @chongdian="reqNewData"
        />
      </template>
    </PostMain>
    <Comment :isShowRe="isShowRe" @showRe="showRe"  @reqNewData="reqNewData" @commentCount="commentCount"/>
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
import { getArticle } from "@/network/data";
import { parseTime } from "@/utils/index";

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
      banner: "",
      title: "",
      head_img: "",
      author: "",
      created_time: "",
      content: "",
      view: 1,
      like_number: 1,
      comment: 0
    };
  },
  created() {
    this.reqArticleData();
    if(localStorage.getItem('username')){
      this.$store.state.isLoginSuc = true;
    }
  },
  methods: {
    reqArticleData() {
      let id = this.$route.params.id;
      let data = getArticle(id);
      if (!data.id) {
        this.$router.push("/");
        return;
      }
      this.created_time = parseTime(data.created_time).toString().slice(0,10);
      this.banner = data.banner_img_src;
      this.title = data.title;
      this.head_img = data.headerImg;
      this.author = data.author;
      this.content = data.content;
      this.view = data.view;
      this.like_number = data.like_number;
    },
    colseComment(e) {
      let ev = e.target;
      let arr = [
        "comment-input",
        "comment-submit",
        "file-btn",
        "comment-textarea",
        "iconfont icon-liuyan"
      ];
      let have = arr.includes(ev.className);
      if (!have) {
        this.isShowRe = false;
        let box = document.querySelectorAll(`.texterea-container`);
        box.forEach(item => {
          item.style.display = "none";
        });
      }
    },
    showRe(x) {
      this.isShowRe = x;
    },
    reqNewData() {
      this.reqArticleData();
    },
    commentCount(number){
      this.comment = number;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>