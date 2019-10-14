<template>
  <div class="article-list-item" @click="toArticle">
    <div class="article-list-img">
      <img src="~@/icons/common/loading.gif" :data-src="listImg" class="lazy-loading"/>
    </div>
    <div class="article-list-info">
      <h2>{{aritcleTitle}}</h2>
      <div class="article-author-info">
        <div class="left">
          <img :src="headerImg" class="author-header-img" />
          <span class="author-username">{{author}}</span>
          <span class="article-created-time">{{createdTime}}</span>
        </div>
        <div class="right">
          <span class="article-view">
            <i class="iconfont icon-like"></i>
            {{view}}
          </span>
          <span class="article-comment">
            <i class="iconfont icon-liuyan"></i>
            {{comment}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: [
    "listImg",
    "aritcleTitle",
    "headerImg",
    "author",
    "createdTime",
    "view",
    "comment",
    "article_id"
  ],
  methods:{
    toArticle(){
      this.$router.push(`/post/${this.article_id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.article-list-item {
  cursor: pointer;
  width: 100%;
  height: 200px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  position: relative;
  .article-list-img {
    width: 50%;
    height: 100%;
    transition: all 0.3s ease-out;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      transition: all 0.3s ease-out;
    }
  }
 
  .article-list-info {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      width: 340px;
      color: #292525;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 20px;
      line-height: 1.4;
      text-align: left;
    }
    .article-author-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        .author-header-img {
          display: inline-block;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background-color: #999;
        }
        .author-username,
        .article-created-time {
          font-size: 13px;
          color: #999;
          padding-left: 10px;
        }
      }
      .right {
        .article-view,
        .article-comment {
          line-height: 18px;
          font-size: 13px;
          color: #999;
          padding-left: 10px;
          .iconfont {
            font-size: 16px;
            padding-right: 5px;
          }
        }
      }
    }
  }
}
.article-list-item:hover .article-list-img {
  width: 48%;
}
.article-list-item:hover .article-list-img img {
  transform: scale(1.1);
}
.article-list-item:hover .article-list-img::after {
  width: 48%;
  opacity: 0;
}
</style>