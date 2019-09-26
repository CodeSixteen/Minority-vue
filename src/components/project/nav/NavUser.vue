<template>
  <div class="nav-user-box">
      <img src="http://localhost:8102/upload/head_img.png" class="user-head-photo">
      <div class="user-function-list">
          <ul>
              <a><li>个人主页</li></a>
              <a><li>我的私信</li></a>
              <a><li>账号设置</li></a>
              <a><li>付费栏目</li></a>
              <a><li>购买/订单</li></a>
              <a><li>优惠券</li></a>
              <a><li>反馈</li></a>
              <a><li>退出登录</li></a>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "NavUser"
};
</script>

<style lang="scss" scoped>
.nav-user-box{
    height: 60px;
    width: 120px;
    padding-left: 20px;
    position: relative;
    .user-head-photo{
        display: block;
        height: 40px;
        width: 40px;
        margin: 10px 0;
        border-radius: 50%;
    }
    .user-function-list{
        position: absolute;
        display: none;
        top:50px;
    }
}
</style>