<template>
  <div class="flex-column-center post-banner">
    <div class="bgbox" />
    <div class="post-banner-content">
      <img class="post-banner-img" :src="banner">
      <h2>{{ title }}</h2>
      <div class="post-banner-info flex-between">
        <div class="info-left">
          <img :src="headImg">
          <span class="author">{{ author }}</span>
        </div>
        <div class="info-right">{{ createdTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostBanner',
  props: {
    banner: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    headImg: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    createdTime: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.post-banner {
  padding-top: 20px;
  width: 100%;
  position: relative;
  .post-banner-content {
    z-index: 0;
    width: 750px;
    .post-banner-img {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 360px;
      overflow: hidden;
      background: #f5f5f5;
    }
    h2 {
      font-size: 30px;
      color: #292525;
      padding: 40px;
      line-height: 1.2;
    }
    .post-banner-info {
      padding: 0 40px 40px 40px;
      .info-left {
        img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }
      }
      .info-right {
        color: #666;
        font-size: 14px;
      }
    }
  }
}
.bgbox {
  position: absolute;
  width: 100%;
  height: 50%;
  top: -10px;
  background-color: #f5f5f5;
}
</style>
