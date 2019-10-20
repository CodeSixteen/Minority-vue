<template>
  <div class="post-bottom">
    <div class="post-bottom-main flex-between">
      <div class="left">
        <div class="left-logo">
          <span class="logo-icon"></span>
          <span class="logo-title">少数派</span>
        </div>
        <Blogroll />
        <p class="copyright">© 2013-2019 少数派 | 粤ICP备09128966号-4 | CC BY-NC 4.0</p>
      </div>
      <div class="right">
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
    </div>
  </div>
</template>

<script>
import Blogroll from "@/components/project/Blogroll";

export default {
  name: "Postbottom",
  components: {
    Blogroll
  }
};
</script>

<style lang="scss" scoped>
.post-bottom {
  width: 100%;
  margin-top: 30px;
  background-color: #292525;
  .post-bottom-main {
    margin: 0 auto;
    width: 100%;
    max-width: 1110px;
    .left,
    .right {
      width: 100%;
      max-width: 260px;
      padding-top: 30px;
    }
    .left {
      .left-logo {
        color: #fff;
        font-size: 20px;
        padding: 10px  0;
        display: flex;
        .logo-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #d7191a;
          padding: 5px;
          background-image: url("~@/icons/common/logo.svg");
          background-size: auto 100%;
        }
        .logo-title {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          padding-left: 20px;
          font-size: 18px;
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      .link-box {
        a {
          display: block;
          padding: 10px 0;
          text-align: center;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
}
.copyright {
  display: block;
  line-height: 1.6;
  padding: 20px 0;
  font-size: 13px;
  color: #f4f4f4;
  padding-bottom: 40px;
}
</style>