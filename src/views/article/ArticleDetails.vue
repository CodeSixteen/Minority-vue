<template>
  <div @click="colseComment">
    <PostMain>
      <template #top>
        <post-banner
          :banner="banner"
          :title="title"
          :head-img="head_img"
          :author="author"
          :created-time="created_time"
        />
      </template>
      <template #center>
        <PostCenter
          :content="content"
          :head-img="head_img"
          :author="author"
          :like-number="like_number"
          :comment="comment"
          @userClickZan="reqNewData"
          @chongdian="reqNewData"
        />
      </template>
    </PostMain>
    <Comment :is-show-re="isShowRe" @showRe="showRe" @reqNewData="reqNewData" @commentCount="commentCount" />
    <recommend />
    <Postbottom />
    <goTop class="go-top-component" />
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/project/nav/index'
import PostMain from './children/PostMain'
import PostBanner from './children/PostBanner'
import PostCenter from './children/PostCenter'
import goTop from '@/components/common/gobacktop/goTop'
import recommend from './children/recommend'
import Postbottom from './children/Postbottom'
import Comment from './children/Comment'
import { getArticle } from '@/network/data'
import { parseTime } from '@/utils/index'

export default {
  name: 'Post',
  components: {
    Nav,
    PostMain,
    PostBanner,
    PostCenter,
    goTop,
    recommend,
    Postbottom,
    Comment
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShowRe: false,
      banner: '',
      title: '',
      head_img: '',
      author: '',
      created_time: '',
      content: '',
      view: 1,
      like_number: 1,
      comment: 0
    }
  },
  created() {
    this.reqArticleData()
    if (localStorage.getItem('username')) {
      this.$store.state.isLoginSuc = true
    }
  },
  methods: {
    reqArticleData() {
      const id = this.$route.params.id
      const data = getArticle(id)
      if (!data.id) {
        this.$router.push('/Page404')
        return
      }
      this.created_time = parseTime(data.created_time).toString().slice(0, 10)
      this.banner = data.banner_img_src
      this.title = data.title
      this.head_img = data.headerImg
      this.author = data.author
      this.content = data.content
      this.view = data.view
      this.like_number = data.like_number
    },
    colseComment(e) {
      const ev = e.target
      const arr = [
        'comment-input',
        'comment-submit',
        'texterea-container',
        'file-btn',
        'comment-textarea',
        'iconfont icon-liuyan',
        'el-textarea__inner',
        'comment-li',
        'comment-item',
        'write-comment-bottom'
      ]
      const have = arr.includes(ev.className)
      if (!have) {
        this.isShowRe = false
        const box = document.querySelectorAll(`.texterea-container`)
        box.forEach(item => {
          item.style.display = 'none'
        })
      }
    },
    showRe(x) {
      this.isShowRe = x
    },
    reqNewData() {
      this.reqArticleData()
    },
    commentCount(number) {
      this.comment = number
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
