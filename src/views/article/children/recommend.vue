<template>
  <div class="flex-column-center">
    <div class="post-rec">
      <h3>推荐阅读</h3>
      <ul class="recommend-list">
        <li v-for="(item,index) in recommentedList" :key="index" @click="toX(item.id)">
          <div class="li-list-img">
            <img :src="item.list_img_src" />
          </div>
          <h3>{{item.title}}</h3>
          <div class="article-author-info">
            <div class="left">
              <img :src="item.headerImg" class="author-header-img" />
              <span class="author-username">{{item.author}}</span>
            </div>
            <div class="right">
              <span class="article-view">
                <i class="iconfont icon-like"></i>
                {{item.view}}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRecommented } from "@/network/articledetils";
export default {
  name: "recommend",
  data() {
    return {
      recommentedList: []
    };
  },
  created() {
    this.reqData();
  },
  methods: {
    reqData() {
      getRecommented()
        .then(res => {
          this.recommentedList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toX(id) {
      const { href } = this.$router.resolve({
        path: `/post/${id}`
      });
      window.open(href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.post-rec {
  width: 750px;
  h3 {
    font-size: 18px;
    text-align: center;
    padding: 40px 0;
  }
  .recommend-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 32%;
      background-color: #fff;
      margin-bottom: 15px;
      cursor: pointer;
      .li-list-img {
        width: 100%;
        height: 120px;
        overflow: hidden;
        img {
          width: 100%;
          transition: all 0.2s;
        }
      }
      h3 {
        font-size: 18px;
        height: 64px;
        color: #000;
        padding: 15px;
        font-weight: 700;
        box-sizing: border-box;
        line-height: 1.3;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    li:hover .li-list-img img {
      transform: scale(1.1);
    }
  }
}

.article-author-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 10px 20px 10px;
  .left {
    .author-header-img {
      display: inline-block;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background-color: #999;
    }
    .author-username {
      font-size: 13px;
      color: #999;
      padding-left: 10px;
    }
  }
  .right {
    .article-view {
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
</style>