<template>
  <div class="subs-item-box">
    <div>
      <img
        src="https://cdn.sspai.com/article/ac5aba26-50eb-52b8-bd54-5973e6501b56.jpg?imageMogr2/quality/95/thumbnail/!394x524r/gravity/Center/crop/394x524"
        alt
      >
      <div class="subs-info">
        <h4>玩转ios 13：让你的iphonezc asd</h4>
        <p class="subs-info-content">我们在 iOS 13 更新之际，挖掘整理了系统更新中加入的新功能，希望你能在更新系统后第一时间上手这些新功能。</p>
        <p class="subs-info-subcontent">免费试读1章</p>
      </div>
    </div>
    <h3>玩转ios 13：让你的iphonezc asd</h3>
    <p class="subs-price">
      ￥
      <span class="reality-price">1.99</span>
      <span class="original-price">￥3.89</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SubsItem',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.subs-item-box {
  width: 194px;
  box-sizing: border-box;
  user-select: none;
  padding-top: 30px;
  div {
    width: 100%;
    height: 260px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    img {
      width: 100%;
      border-radius: 10px;
    }
    .subs-info {
      transition: all .3s;
      opacity: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: absolute;
      background-color: rgba($color: #000000, $alpha: 0.9);
      top: 0;
      left: 0;
      padding: 20px;
      color: #fff;
      h4 {
        font-size: 16px;
        padding-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .subs-info-content {
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .subs-info-subcontent {
        position: absolute;
        bottom: 30px;
      }
    }
  }
  div:hover .subs-info{
    opacity: 1;
  }
  h3 {
    display: inline-block;
    color: #292525;
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .subs-price {
    color: red;
    font-size: 12px;
    .reality-price {
      font-size: 18px;
      font-weight: 700;
    }
    .original-price {
      color: #999;
      padding-left: 10px;
      text-decoration: line-through;
    }
  }
}
</style>
