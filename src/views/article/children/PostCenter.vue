<template>
  <div class="flex-column-center post-center">
    <div ref="postcontent" class="post-article-content wangEditor-text" v-html="content" />
    <div ref="postleft" class="post-center-left flex-column-center">
      <i
        class="iconfont icon-chongdian center"
        :class="{like_active:likeArt.includes(Number(article_id))}"
        @click="likeArticle"
      />
      <span>{{ likeNumber }}</span>
      <i class="iconfont icon-liuyan" @click="toComment" />
      <span>{{ comment }}</span>
      <i class="iconfont icon-share" />
    </div>
    <div style="width: 100%;height:1px;background-color:#eee;max-width:750px;" />
    <div class="content-bottom">
      <div class="info-left">
        <img :src="headImg">
        <span class="author">{{ author }}</span>
        <span class="attention-btn">关注</span>
      </div>
    </div>
  </div>
</template>

<script>
import { chongDian, reqUserLikeArticle } from '@/network/data'
export default {
  name: 'PostCenter',
  props: {
    content: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    view: {
      type: Number,
      default: 0
    },
    comment: {
      type: Number,
      default: 0
    },
    headImg: {
      type: String,
      default: ''
    },
    likeNumber: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      likeArt: [],
      article_id: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLoginSuc
    }
  },
  watch: {
    isLogin() {
      const uid = localStorage.getItem('uid') || 0
      const res = reqUserLikeArticle(Number(uid))
      if (res) this.likeArt = res.data
    }
  },
  created() {
    this.article_id = this.$route.params.id
    // 判断是否登录
    if (this.isLogin) {
      // 已登录
      // 请求充电数据
      const uid = localStorage.getItem('uid')
      const res = reqUserLikeArticle(Number(uid))
      if (res) this.likeArt = res.data
    }
  },
  mounted() {
    window.addEventListener('scroll', this.fixedLeft, false)
  },
  updated() {
    const uid = localStorage.getItem('uid')
    if (uid) {
      const res = reqUserLikeArticle(Number(uid))
      if (res) this.likeArt = res.data
    }
  },
  destroyed() {
    document.documentElement.scrollTop = 0
    window.removeEventListener('scroll', this.fixedLeft) //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    fixedLeft() {
      const clientCenter = document.documentElement.clientHeight / 2 // 视口高度中心位置
      const content = this.$refs.postcontent // 内容元素
      const left = this.$refs.postleft // 左边功能区
      const rect = content.getBoundingClientRect()
      const contentTop = rect.top // 内容顶部到视口顶部的距离
      const contentHeight = rect.height // 内容的总高度
      const contentBottom = rect.bottom // 内容尾部到视口顶部的距离
      const leftHeight = left.getBoundingClientRect().height // 左边元素高度
      if (clientCenter >= contentTop + leftHeight / 2) {
        left.style.position = 'fixed'
        left.style.top = clientCenter - leftHeight / 2 + 'px'
      } else if (clientCenter < contentTop + leftHeight / 2) {
        left.style.position = 'absolute'
        left.style.top = '0px'
      }
      if (
        contentHeight > clientCenter * 2 &&
        contentBottom <= clientCenter + leftHeight / 2
      ) {
        left.style.position = 'absolute'
        left.style.top = contentHeight - leftHeight + 'px'
      }
    },
    toComment() {
      const top = document.querySelector('.post-main').getBoundingClientRect()
        .height
      var m = document.documentElement
      var n = document.body
      var timer = setInterval(function() {
        // 获取滚动条的滚动高度
        var osTop = m.scrollTop || n.scrollTop
        // 用于设置速度差，产生缓动的效果
        var speed = Math.floor((top - osTop) / 8) // 每次向下移动的距离
        m.scrollTop = n.scrollTop = osTop + speed
        if (speed === 0) {
          // 向下距离等于0 时
          m.scrollTop = n.scrollTop = top
          clearInterval(timer)
        }
      }, 5)
    },
    likeArticle() {
      if (!this.isLogin) {
        this.$store.state.isShowLogin = true
        return
      }
      // 充电
      const uid = localStorage.getItem('uid') || 0
      const id = this.$route.params.id
      const res = chongDian(Number(uid), Number(id))
      if (res) {
        // 重新请求文章
        this.$emit('chongdian')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-center {
  position: relative;
  .post-article-content {
    width: 670px;
    font-size: 16px;
    color: #666;
    line-height: 2;
    overflow: hidden;
  }
  .post-center-left {
    position: absolute;
    top: 0;
    left: calc((100% - 1110px) / 2);
    .iconfont {
      font-size: 24px;
      padding: 10px;
      color: #333;
      cursor: pointer;
    }
    .icon-chongdian {
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #eee;
      line-height: 24px;
      transition: color 0.2s;
    }
    .icon-chongdian:hover {
      color: #fff;
      background-color: #f90;
    }
    .like_active {
      color: #fff;
      background-color: #f90;
    }
    span {
      font-size: 14px;
      color: #999;
      padding: 5px 0 20px 0;
    }
  }
  .content-bottom {
    padding: 40px 0;
    .info-left {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .attention-btn {
        display: inline-block;
        margin-left: 150px;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        border-radius: 15px;
        background-color: #eee;
        color: #f30000;
        cursor: pointer;
        transition: all 0.2s;
      }
      .attention-btn:hover {
        background-color: #f30000;
        color: #fff;
      }
    }
  }
}
</style>
