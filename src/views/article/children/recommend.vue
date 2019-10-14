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
      recommentedList: [
        {
          id: 1,
          title: "Power+ Live 02",
          created_time: "2月15日",
          author: "SpencerWoo",
          view: 88,
          comment: 0,
          list_img_src:
            "https://cdn.sspai.com/article/d44a82eb-3732-a9d3-4f4b-408fb3f689d7.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",
          headerImg:
            "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"
        },
        {
          id: 2,
          title:
            "国庆看什么：DC 新片《猛禽小队和哈莉·奎因》正式预告，《我和我的祖国》上映",
          created_time: "2月15日",
          author: "SpencerWoo",
          view: 88,
          comment: 0,
          list_img_src:
            "https://cdn.sspai.com/article/3156926e-2b92-b834-735b-9edb3daea9c1.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",
          headerImg:
            "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"
        },
        {
          id: 3,
          title: "展示来自用户的最真实的体验和观点",
          created_time: "2月15日",
          author: "SpencerWoo",
          view: 88,
          comment: 0,
          list_img_src:
            "https://cdn.sspai.com/2019/10/13/a6f195e0291a70e52f8b9966b2519cf1.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708",
          headerImg:
            "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"
        },
        {
          id: 4,
          title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能",
          created_time: "2月15日",
          author: "SpencerWoo",
          view: 88,
          comment: 0,
          list_img_src:
            "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",
          headerImg:
            "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg"
        },
        {
          id: 5,
          title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧",
          created_time: "7月15日",
          author: "Clyde",
          view: 88,
          comment: 0,
          list_img_src:
            "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",
          headerImg:
            "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64"
        },
        {
          id: 6,
          title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？",
          created_time: "2月15日",
          author: "SpencerWoo",
          view: 18,
          comment: 6,
          list_img_src:
            "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400",
          headerImg:
            "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48"
        }
      ]
    };
  },
  created() {
    this.reqData();
  },
  methods: {
    reqData() {
      // getRecommented()
      //   .then(res => {
      //     this.recommentedList = res.data;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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