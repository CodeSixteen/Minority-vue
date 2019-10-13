<!-- 友情链接 -->
<template>
  <div class="blogroll-box">
    <a href="javascript:0">
      <i class="iconfont icon-weibo"></i>
    </a>
    <span>
      <i class="iconfont icon-WeChat"></i>
    </span>
    <a href="javascript:0">
      <i class="iconfont icon-tuite"></i>
    </a>
    <a href="javascript:0">
      <i class="iconfont icon-rss"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Blogroll"
};
</script>

<style lang='scss' scoped>
.blogroll-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  a,
  span {
    display: block;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;
    line-height: 32px;
    text-align: center;
    color: #999;
    cursor: pointer;
    .iconfont {
      font-size: 16px;
    }
  }
  a:hover .iconfont {
    color: #666;
  }
  span:hover .iconfont {
    color: #666;
  }
}
</style>