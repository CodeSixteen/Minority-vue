<template>
  <div>
    <div class="bottom-box">
      <div class="link-box">
        <a href="javascript:0">关于我们</a>
        <a href="javascript:0">联系我们</a>
      </div>
      <div class="link-box">
        <a href="javascript:0">成为作者</a>
        <a href="javascript:0">常见问题</a>
      </div>
      <div class="link-box">
        <a href="javascript:0">用户协议</a>
        <a href="javascript:0">客户端</a>
      </div>
    </div>
    <p class="copyright">© 2013-2019 少数派 | 粤ICP备09128966号-4 | CC BY-NC 4.0</p>
  </div>
</template>

<script>
export default {
  name: 'BottomLink'
}
</script>

<style lang='scss' scoped>
.bottom-box {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  .link-box {
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
    font-size: 13px;
    color: #999;
}
</style>
