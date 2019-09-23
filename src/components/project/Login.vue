<template>
  <div class="login" @click="hideLogin">
    <div class="login-content">
      <div class="login-logo">
        <img src="~@/icons/login-logo.png" />
      </div>
      <div class="sign-in-btn">
        <span>+ 注册</span>
      </div>
      <div>
        <form class="login-form">
          <div class="form-phone">
            <input type="text" placeholder="手机号" class="form-phone-input" v-model="user.username" />
          </div>
          <div class="form-password">
            <input
              type="password"
              placeholder="密码"
              class="form-password-input"
              v-model="user.password"
            />
          </div>
          <div class="password-dispose">
            <span class="pwd-remember">记住密码</span>
            <span class="pwd-forget">忘记密码</span>
          </div>
          <button type="button" class="login-submit-btn" @click="reql">登录</button>
          <span class="line"></span>
          <div class="center other-ways">
            <i class="iconfont icon-weibo"></i>
            <i class="iconfont icon-WeChat"></i>
            <i class="iconfont icon-unread"></i>
          </div>
          <p class="center">其他登陆方式</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { requestLogin } from "@/network/login";

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "张山",
        password: "123456"
      }
    };
  },
  methods: {
    hideLogin(e) {
      let divClass = e.target.className;
      if (divClass === "login login-component") {
        this.$emit("hideLogin", false);
      }
    },
    reql() {
      requestLogin({
        url: "login",
        method: "post",
        data: this.user
      })
        .then(res => {
          if (!res.err) {
            this.$emit("hideLogin", false);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/variables";
.login {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content {
  width: 500px;
  padding: 50px;
  background-color: #fff;
}
.login-logo {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.sign-in-btn {
  color: #4a90e2;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.sign-in-btn span {
  cursor: pointer;
  font-size: 16px;
}
.login-form {
  font-size: 16px;
}
.form-phone,
.form-password {
  width: 100%;
  height: 60px;
  border: 1px solid $themeColor;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.form-phone-input,
.form-password-input {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}
.password-dispose {
  padding: 20px 0;
  position: relative;
  color: #333;
}
.pwd-remember {
  padding-left: 10px;
}
.pwd-forget {
  position: absolute;
  right: 0;
  cursor: pointer;
}
.login-submit-btn {
  width: 100%;
  height: 60px;
  background-color: $themeColor;
  color: #fff;
  cursor: pointer;
}
.line {
  margin: 30px 0;
  display: block;
  height: 1px;
  width: 100%;
  background: #ccc;
}
.other-ways {
  margin: 30px 0;
}
.icon-unread,
.icon-weibo,
.icon-WeChat {
  padding: 10px;
  border-radius: 50%;
  color: #fff;
  margin: 0 20px;
  font-size: 22px;
  cursor: pointer;
}
.icon-weibo {
  background-color: rgb(226, 85, 80);
}
.icon-unread {
  background-color: rgb(28, 140, 233);
}
.icon-WeChat {
  background-color: rgb(66, 189, 65);
}
</style>