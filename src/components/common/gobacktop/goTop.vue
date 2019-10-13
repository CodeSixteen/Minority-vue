<template>
  <div class="go-top" @click="goTop">
    <i class="iconfont icon-gotop"></i>
  </div>
</template>

<script>
export default {
  name: "goTop",
  methods: {
    goTop() {
      var m = document.documentElement;
      var n = document.body;
      var timer = setInterval(function() {
        //获取滚动条的滚动高度
        var osTop = m.scrollTop || n.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 16);
        m.scrollTop = n.scrollTop = osTop + speed;
        if (speed == 0) {
          clearInterval(timer);
        }
      }, 5);
    }
  }
};
</script>

<style lang='scss' scoped>
.go-top {
  background: #ccc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  .icon-gotop {
    line-height: 40px;
    font-size: 24px;
    color: #fff;
  }
}
</style>