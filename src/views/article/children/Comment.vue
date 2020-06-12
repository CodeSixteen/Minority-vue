<template>
  <div class="flex-column-center">
    <div class="comment-comtainer">
      <div class="comment-title">全部评论（{{ commentCount }}）</div>
      <div class="comment-input">
        <!-- 未登录时显示请登录 -->
        <!-- 用户评论，登录后才显示 -->
        <div class="left">
          <img class="user-head-img" :src="headImg">
        </div>
        <div class="right">
          <input
            v-if="!isShowRe"
            type="text"
            placeholder="写下你的评论"
            class="write-comment"
            @focus="writeComment"
          >
          <div v-if="isShowRe">
            <p class="user-name">{{ username }}</p>
            <el-input
              v-model="commentContent"
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              :autofocus="true"
              class="comment-textarea"
            />
            <div class="write-comment-bottom">
              <span class="comment-submit" @click="subComment()">评论</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isNo" class="no-comment">还没有评论哦~</div>
      <ul class="comment-ul">
        <div v-for="(item,index) in commentList" :key="index" class="comment-item">
          <li class="comment-li">
            <!-- 头像 -->
            <div class="left">
              <img class="user-head-img" :src="item.head_img">
            </div>
            <!-- 评论内容 -->
            <div class="right">
              <p class="user-name">{{ item.username }}</p>
              <p class="comment-created-time">{{ item.created_time }}</p>
              <p class="comment-content" v-html="item.content" />
              <div class="comment-icon">
                <i class="iconfont icon-liuyan" @click="showTexterea(item.created_time)" />
                <span class="amount">{{ item.reply_num }}</span>
                <i
                  v-if="!likeList.includes(item.id)"
                  class="iconfont icon-like"
                  @click="clickZan(item.id)"
                />
                <i v-else class="iconfont icon-xin" @click="cancleClickZan(item.id)" />
                <span class="amount">{{ item.like_number }}</span>
              </div>
              <div class="texterea-container" :data-index="item.created_time">
                <el-input
                  v-model="commentContent"
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  :autofocus="true"
                  class="comment-textarea"
                />
                <div class="write-comment-bottom">
                  <span class="comment-submit" @click="subComment(item.id)">评论</span>
                </div>
              </div>
              <ul class="user-reply">
                <!-- 评论的评论和回复 -->
                <li v-for="(subItem, idx) in item.re_comment" :key="idx" class="comment-li">
                  <div class="left">
                    <img class="user-head-img" :src="subItem.head_img">
                  </div>
                  <div class="right">
                    <p class="user-name">
                      {{ subItem.username }}
                      <span
                        v-if="subItem.re_username"
                        class="reply-username"
                      >回复 {{ subItem.re_username }}</span>
                    </p>
                    <p class="comment-created-time">{{ subItem.created_time }}</p>
                    <p class="comment-content" v-html="subItem.content" />
                    <div class="comment-icon">
                      <i class="iconfont icon-liuyan" @click="showTexterea(subItem.created_time)" />
                      <span class="amount">{{ subItem.reply_num }}</span>
                      <i
                        v-if="!likeList.includes(subItem.id)"
                        class="iconfont icon-like"
                        @click="clickZan(subItem.id)"
                      />
                      <i v-else class="iconfont icon-xin" @click="cancleClickZan(subItem.id)" />
                      <span class="amount">{{ subItem.like_number }}</span>
                    </div>
                    <div class="texterea-container" :data-index="subItem.created_time">
                      <el-input
                        v-model="commentContent"
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        :autofocus="true"
                        class="comment-textarea"
                      />
                      <div class="write-comment-bottom">
                        <span
                          class="comment-submit"
                          @click="subComment(item.id,subItem.username,subItem.id)"
                        >评论</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getComment, getUserInfo, submitComment, clickZanReq, cancleClickZanReq, reqClickZanCommentId } from '@/network/data'
import { parseTime } from '@/utils/index'
export default {
  name: 'Comment',
  props: {
    isShowRe: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      commentCount: 0,
      headImg: '',
      username: '',
      commentList: [],
      isNo: true,
      commentContent: '',
      likeList: []
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLoginSuc
    }
  },
  watch: {
    isLogin() {
      this.showUserName()
      this.reqIsClickZan()
    }
  },
  created() {
    // 显示用户名和头像
    this.showUserName()
    // 请求评论数据
    this.reqComment()
    // 获取用户点赞数据
    this.reqIsClickZan()
  },
  methods: {
    showUserName() {
      // 判断是否登录
      if (this.isLogin) {
        // 更换评论区头像和用户名
        const img = localStorage.getItem('headImg')
        const name = localStorage.getItem('username')
        if (img) this.headImg = img
        if (name) this.username = name
      } else {
        this.headImg =
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571071012103&di=246bbc25cc64b3ae9e466baf1755e816&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png%401280w_1l_2o_100sh.png'
      }
    },
    writeComment() {
      // 判断是否登录
      if (this.isLogin) {
        this.$emit('showRe', true)
        const boxAll = document.querySelectorAll(`.texterea-container`)
        boxAll.forEach(item => {
          item.style.display = 'none'
        })
      } else {
        this.$store.state.isShowLogin = true
      }
    },
    // 请求评论数据
    reqComment() {
      const id = this.$route.params.id
      // 根据文章id请求评论数据
      const datas = getComment(id)
      // 处理数据
      const data = []
      if (datas.length) {
        datas.forEach(item => {
          if (item.re_comment_id === 0) {
            const info = {}
            info.id = item.id
            info.article_id = item.article_id
            info.user_id = item.user_id
            info.username = getUserInfo(item.user_id).username
            info.head_img = getUserInfo(item.user_id).headerImg
            info.content = item.comment_content
            info.created_time = parseTime(item.created_time)
            info.like_number = item.like_number
            info.reply_num = item.reply_num
            info.re_comment = []
            data.unshift(info)
          } else {
            data.forEach(x => {
              if (x.id === item.re_comment_id) {
                const comment = {}
                comment.id = item.id
                comment.article_id = item.article_id
                comment.user_id = item.user_id
                comment.head_img = getUserInfo(item.user_id).headerImg
                comment.username = getUserInfo(item.user_id).username
                comment.created_time = parseTime(item.created_time)
                comment.content = item.comment_content
                comment.reply_num = item.reply_num
                comment.like_number = item.like_number
                if (item.re_username === '0') {
                  comment.re_username = ''
                } else {
                  comment.re_username = item.re_username
                }
                x.re_comment.push(comment)
              }
            })
          }
        })
      }
      this.commentList = data
      // 更改评论数量
      this.commentCount = data.length
      if (data.length > 0) {
        data.forEach(item => {
          this.commentCount = this.commentCount + item.re_comment.length
        })
      }
      this.$emit('commentCount', this.commentCount)
      // 隐藏'还没有评论'
      if (datas.length) this.isNo = false
    },
    subComment(commentId = 0, reUsername = 0, subCommentId = 0) {
      if (this.commentContent.trim()) {
        const article_id = this.$route.params.id
        const re_comment_id = commentId
        const user_id = localStorage.getItem('uid')
        const re_username = reUsername
        const content = this.commentContent.replace(/\n|\r\n/g, '<br/>')
        const data = submitComment({
          article_id,
          user_id,
          re_comment_id,
          re_username,
          content,
          subCommentId
        })
        if (data.msg === '成功') {
          this.reqComment()// 重新请求数据
          this.commentContent = ''// 清空输入框
          this.$emit('showRe', false)// 隐藏输入框
          this.hideTextereaAll()
        }
      } else {
        this.$store.state.toastMsg = '不能提交空内容！'
        this.$store.state.isShowPopup = true
      }
    },
    showTexterea(index) {
      if (!this.isLogin) {
        this.$store.state.isShowLogin = true
        return
      }
      this.$emit('showRe', false)// 隐藏输入框
      this.hideTextereaAll()
      const box = document.querySelector(
        `.texterea-container[data-index='${index}']`
      )
      box.style.display = 'block'
    },
    hideTextereaAll() {
      const boxAll = document.querySelectorAll(`.texterea-container`)
      boxAll.forEach(item => {
        item.style.display = 'none'
      })
    },
    clickZan(id) {
      // 判断登录
      if (!this.isLogin) {
        this.$store.state.isShowLogin = true
        return
      }
      // 发送点赞请求，向服务器提交用户id和文章id
      const uid = localStorage.getItem('uid')
      const res = clickZanReq(uid, id)
      if (res.msg === '成功') {
        this.reqComment()// 重新获取评论信息，更新点赞数量
        this.reqIsClickZan()// 重新获取点赞数据，更新icon
      }
    },
    reqIsClickZan() {
      // 根据用户id请求点赞过的评论
      const uid = localStorage.getItem('uid') || 0
      const res = reqClickZanCommentId(uid)
      if (res.data) {
        this.likeList = res.data
      }
    },
    cancleClickZan(comment_id) {
      // 取消点赞，根据评论id和用户id
      const uid = localStorage.getItem('uid')
      const res = cancleClickZanReq(uid, comment_id)
      if (res.msg === '成功') {
        this.reqComment()// 重新获取评论信息，更新点赞数量
        this.reqIsClickZan()// 重新获取点赞数据，更新icon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-comtainer {
  width: 100%;
  max-width: 750px;
}
.comment-title {
  height: 80px;
  line-height: 80px;
  width: 100%;
  font-size: 18px;
  text-align: center;
}
.comment-input {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  input {
    padding-left: 20px;
    font-size: 16px;
    width: 100%;
    height: 100%;
  }
  div .user-name {
    padding-top: 10px;
  }
}
/* 写评论 */
.comment-textarea {
  width: 100%;
  margin-top: 30px;
  border: none;
  outline: none;
  color: #666;
  font-size: 16px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.write-comment-bottom {
  position: relative;
  display: flex;
  align-items: center;
  span {
    padding: 5px 20px;
    background-color: #eee;
    color: #666;
    border-radius: 15px;
    cursor: pointer;
  }
  span:hover {
    color: #292525;
  }
}

.texterea-container {
  display: none;
}
/* 没有评论 */
.no-comment {
  margin-top: 10px;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #fff;
  font-size: 18px;
  color: #999;
}
/* 评论回复 */
.comment-ul {
  width: 100%;
  padding-bottom: 10px;
}
.comment-item {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 30px 30px 30px;
  margin-bottom: 10px;
}
.comment-li {
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: flex-start;
}
.left {
  padding-right: 20px;
  height: 36px;
}
.user-head-img {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}
.right {
  width: 100%;
  .user-name {
    font-size: 14px;
    color: #252929;
    .reply-username {
      color: #999;
    }
  }
  .comment-created-time {
    color: #999;
    font-size: 13px;
    padding: 5px 0;
  }
  .comment-content {
    font-size: 16px;
    color: #666;
    padding: 10px 0;
  }
  .comment-icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5px;
    .iconfont {
      font-size: 22px;
      color: #666;
    }
    .icon-xin {
      color: red;
    }
    span {
      font-size: 14px;
      color: #666;
      padding-right: 20px;
      padding-left: 5px;
    }
  }
}
</style>
