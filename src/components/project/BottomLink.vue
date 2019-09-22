<template>
<div>
  <div class="bottom-box">
    <div class="flex-between">
      <a href="https://sspai.com/page/support">关于我们</a>
      <a href="contact@sspai.com">联系我们</a>
    </div>
    <div class="flex-between">
      <a href="https://sspai.com/apply/writing">成为作者</a>
      <a href="https://sspai.com/post/37793">常见问题</a>
    </div>
    <div class="flex-between">
      <a href="https://sspai.com/post/37739">用户协议</a>
      <a href="https://sspai.com/page/client">客户端</a>
    </div>
  </div>
  <p class="copyright">© 2013-2019 少数派 | 粤ICP备09128966号-4 | CC BY-NC 4.0</p>
  </div>
</template>

<script>
export default {
  name: "BottomLink"
};
</script>

<style lang='scss' scoped>
.bottom-box {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  .flex-between {
    a {
      display: block;
      padding-top: 10px;
      text-align: center;
      color: #777;
      font-size: 12px;
    }
    a:hover {
      color: #333;
    }
  }
}
.copyright{
    display: block;
    line-height: 1.6;
    padding: 20px 0;
    font-size: 12px;
    color: #999;
}
</style>