<template>
  <div>
    <h3 class="sub-title font14">热门文章</h3>
    <ul class="matrix-article-list">
      <li class="matrix-article-list-item">
        <div class="item-top flex-between">
          <div class="item-top-left flex-start">
            <div class="head-img">
              <img
                src="https://cdn.sspai.com/2019/06/19/d438c3901ed45e401dae7e6a21dd6b06.jpg?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80"
                alt="name"
              >
            </div>
            <div>
              <p class="user-name font14">色彩</p>
              <p class="create-time font12">2天前</p>
            </div>
          </div>
          <div class="item-top-right">
            <div class="handle-btn flex-between">
              <span class="s-circle" />
              <span class="s-circle" />
              <span class="s-circle" />
            </div>
            <div class="handle-list">
              <span>收藏</span>
              <span>举报</span>
            </div>
          </div>
        </div>
        <div class="item-center flex-start">
          <div class="item-center-left">
            <h1 @click="toArticleDetails(2)">iPad分屏+随航+暗黑模式，宝藏配色应用：「色采」重磅更新</h1>
            <p>自六月份被少数派推荐后，「色采」获得AppStore多地区「新鲜App」推荐、「拿出📱测量一下」专题推荐。此间我们也不断更新优化app，增加了适配iPad平台、支持横屏｜分屏｜浮屏、专属列表新增简洁支持横屏｜分屏｜浮屏、专属列表新增简洁...支持横屏｜分屏｜浮屏、专属列表新增简洁...</p>
          </div>
          <div class="matrix-article-list-img">
            <img
              src="https://cdn.sspai.com/2019/10/17/8d6ace63e3680220d44cc9004587ca15.jpg?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220"
              alt="img"
            >
          </div>
        </div>
        <div class="item-bottom flex-between">
          <p> 出自<span class="spec-name" @click="toColumn(1)">我和App的故事</span> </p>
          <div class="flex-start font14">
            <span>
              <i class="iconfont icon-like" />13
            </span>
            <span>
              <i class="iconfont icon-liuyan" />9
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="load-more font16" @click="loadMore">加载更多</div>
  </div>
</template>

<script>
export default {
  name: 'MatrixLeft',
  data() {
    return {
      articleList: [],
      page: 1
    }
  },
  created() {
    // 请求热门文章列表
    this.requestArticleList(1)
  },
  methods: {
    // 请求热门文章列表方法
    requestArticleList(page) {
      console.log('请求文章列表')
      this.page++
    },
    // 根据文章ID跳转文章详情页
    toArticleDetails(id) {
      this.$router.push(`/articledetails/${id}`)
    },
    // 继续加载文章
    loadMore() {
      this.requestArticleList(this.page)
    },
    // 跳转到相关专栏
    toColumn(id) {
      this.$router.push(`/column/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.sub-title {
  color: #292525;
}
.matrix-article-list {
  width: 100%;
  .matrix-article-list-item {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin-top: 20px;
    padding: 20px;
    .item-top {
      align-items: center;
      .item-top-left {
        .head-img {
          width: 40px;
          margin-right: 20px;
          img {
            width: 100%;
          }
        }
        div {
          line-height: 1.5;
          .user-name {
            color: #666;
          }
          .create-time {
            color: #999;
          }
        }
      }
      .item-top-right {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: relative;
        .handle-btn {
          width: 100%;
          height: 100%;
          align-items: center;
        }
        .handle-list {
          display: none;
          position: absolute;
          background-color: #fff;
          top: 26px;
          left: -30px;
          width: 80px;
          padding: 5px 0;
          filter: drop-shadow(0 0 1px #999);
          span {
            display: block;
            text-align: center;
            padding: 6px 10px;
          }
          span:hover {
            background-color: #f1f1f1;
          }
        }
        .handle-list::after {
          position: absolute;
          content: "";
          top: -8px;
          left: 34px;
          border-bottom: 8px solid #fff;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
      .item-top-right:hover .handle-list {
        display: block;
      }
    }
    .item-center {
      padding-top: 20px;
      .item-center-left {
        width: 600px;
        margin-right: 20px;
        h1 {
          color: #292525;
          font-size: 20px;
          cursor: pointer;
        }
        h1:hover {
          color: $red;
        }
        p {
          color: #666;
          padding-top: 20px;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
      }
    }
    .item-bottom {
      margin-top: 20px;
      p {
        color: #999;
        .spec-name {
          padding-left: 10px;
          color: $red;
          cursor: pointer;
        }
      }
      div {
        align-items: center;
        span {
          color: #999;
          display: flex;
          align-items: center;
          .iconfont {
            font-size: 18px;
            color: #999;
            padding-left: 20px;
            padding-right: 5px;
          }
        }
      }
    }
  }
}

.load-more{
  margin-top: 30px;
  width: 100%;
  color: #292525;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}
</style>
