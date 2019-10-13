<template>
  <div class="flex-column-center">
    <div class="comment-comtainer">
      <div class="comment-title">全部评论（{{comment}}）</div>
      <div class="comment-input">
        <!-- 未登录时显示请登录 -->
        <!-- 用户评论，登录后才显示 -->
        <div class="left">
          <img class="user-head-img" src="http://localhost:8102/upload/head_img.png" />
        </div>
        <div class="right">
          <input
            type="text"
            v-if="!isShowRe"
            placeholder="写下你的评论"
            class="write-comment"
            @focus="writeComment"
          />
          <div v-if="isShowRe">
            <p class="user-name">{{username}}</p>
            <textarea class="comment-textarea" autofocus="true" v-model="commentContent"></textarea>
            <div class="write-comment-bottom">
              <span class="comment-submit" @click="subComment()">评论</span>
            </div>
          </div>
        </div>
      </div>
      <div class="no-comment" v-if="isNo">还没有评论哦！</div>
      <ul class="comment-ul">
        <div class="comment-item" v-for="(item,index) in commentList" :key="index">
          <li class="comment-li">
            <!-- 头像 -->
            <div class="left">
              <img class="user-head-img" :src="item.head_img" />
            </div>
            <!-- 评论内容 -->
            <div class="right">
              <p class="user-name">{{item.username}}</p>
              <p class="comment-created-time">{{item.createdTime}}</p>
              <p class="comment-content" v-html="item.content"></p>
              <div class="comment-icon">
                <i class="iconfont icon-liuyan" @click="showTexterea(item.createdTime)"></i>
                <span class="amount">{{item.reNumber}}</span>
                <i
                  v-if="!likeList.includes(item.comment_id.toString())"
                  class="iconfont icon-like"
                  @click="clickZan(item.comment_id)"
                ></i>
                <i v-else class="iconfont icon-xin" @click="cancleClickZan(item.comment_id)"></i>
                <span class="amount">{{item.likeNumber}}</span>
              </div>
              <div class="texterea-container" :data-index="item.createdTime">
                <textarea class="comment-textarea" autofocus="true" v-model="commentContent"></textarea>
                <div class="write-comment-bottom">
                  <span class="comment-submit" @click="subComment(item.comment_id)">评论</span>
                </div>
              </div>
              <ul class="user-reply">
                <!-- 评论的评论和回复 -->
                <li class="comment-li" v-for="(i,index) in item.reComment" :key="index">
                  <div class="left">
                    <img class="user-head-img" :src="i.head_img" />
                  </div>
                  <div class="right">
                    <p class="user-name">
                      {{i.username}}
                      <span
                        class="reply-username"
                        v-if="i.re_username"
                      >回复 {{i.re_username}}</span>
                    </p>
                    <p class="comment-created-time">{{i.createdTime}}</p>
                    <p class="comment-content" v-html="i.content"></p>
                    <div class="comment-icon">
                      <i class="iconfont icon-liuyan" @click="showTexterea(i.createdTime)"></i>
                      <span class="amount">{{i.reNumber}}</span>
                      <i
                        v-if="!likeList.includes(i.comment_id.toString())"
                        class="iconfont icon-like"
                        @click="clickZan(i.comment_id)"
                      ></i>
                      <i v-else class="iconfont icon-xin" @click="cancleClickZan(i.comment_id)"></i>
                      <span class="amount">{{i.likeNumber}}</span>
                    </div>
                    <div class="texterea-container" :data-index="i.createdTime">
                      <textarea class="comment-textarea" autofocus="true" v-model="commentContent"></textarea>
                      <div class="write-comment-bottom">
                        <span
                          class="comment-submit"
                          @click="subComment(item.comment_id,i.username,i.comment_id)"
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
import {
  getArticleComment,
  submitComment,
  reqClickZan,
  reqIsClickZ,
  cancleClickZ
} from "@/network/articledetils";
export default {
  name: "comment",
  props: {
    isShowRe: {
      type: Boolean,
      default: false
    },
    comment: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      username: "",
      commentList: [],
      isNo: true,
      commentContent: "",
      likeList: []
    };
  },
  created() {
    this.reqIsClickZan();
    this.reqComment();
    this.username = localStorage.getItem("user_name");
  },
  methods: {
    cc(){
console.log(this.commentContent);
    },
    writeComment() {
      this.$emit("showRe", true);
      let boxAll = document.querySelectorAll(`.texterea-container`);
      boxAll.forEach(item => {
        item.style.display = "none";
      });
    },
    //请求数据
    reqComment() {
      let id = this.$route.params.id;
      getArticleComment(id)
        .then(res => {
          if (res.data) {
            this.isNo = false;
          }
          this.commentList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    subComment(commentId = 0, reUsername = "0", subComment = 0) {
      this.$emit("showRe", false);
      if (this.commentContent.trim()) {
        let article_id = this.$route.params.id;
        let re_comment_id = commentId;
        let user_id = localStorage.getItem("uid");
        let re_username = reUsername;
        let subCommentId = subComment;
        let content = this.commentContent.replace(/\n|\r\n/g,'<br/>');
        submitComment({
          article_id, //文章id
          re_comment_id, //回复的哪条评论的id，新评论就是0
          user_id, //用户id，写这条评论的人
          re_username, //被回复人的用户名
          subCommentId,
          content //评论的内容
        })
          .then(res => {
            this.$emit("reqNewData");
            this.commentContent = "";
            let box = document.querySelectorAll(`.texterea-container`);
            box.forEach(item => {
              item.style.display = "none";
            });
            this.reqComment();
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$store.state.toastMsg = "不能提交空内容！";
        this.$store.state.isShowPopup = true;
      }
    },
    showTexterea(index) {
      let boxAll = document.querySelectorAll(`.texterea-container`);
      boxAll.forEach(item => {
        item.style.display = "none";
      });
      let box = document.querySelector(
        `.texterea-container[data-index='${index}']`
      );
      box.style.display = "block";
    },
    clickZan(id) {
      let uid = localStorage.getItem("uid");
      if (!uid) {
        this.$store.state.isShowLogin = true;
        return;
      }
      let comment_id = id;
      //发送点赞请求
      reqClickZan({
        uid,
        comment_id
      }).then(res => {
        if (!res.err) {
          this.reqIsClickZan();
          this.reqComment();
        }
      });
    },
    reqIsClickZan() {
      let uid = localStorage.getItem("uid");
      uid = uid || 0;
      reqIsClickZ({
        uid
      }).then(res => {
        this.likeList = res.data;
        console.log(this.likeList)
      });
    },
    cancleClickZan(comment_id) {
      let uid = localStorage.getItem("uid");
      if (!uid) {
        return;
      }
      uid = uid || 0;
      cancleClickZ({
        uid,
        comment_id
      }).then(res => {
        console.log(res);
        if (!res.err) {
          this.reqIsClickZan();
          this.reqComment();
        }
      });
    }
  }
};
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
  height: 160px;
  width: 100%;
  margin-top: 30px;
  border: none;
  outline: none;
  color: #666;
  font-size: 16px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding:10px;
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
    color: #292525;
    font-weight: 700;
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