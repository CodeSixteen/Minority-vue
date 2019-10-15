<template>
  <div class="login" @click="hideLogin">
    <div class="login-content">
      <div class="login-logo">
        <img src="~@/icons/common/logo.png" />
      </div>
      <div class="sign-in-btn">
        <span @click="toLogup">+ 注册</span>
      </div>
      <div>
        <form class="login-form">
          <div class="form-phone">
            <input
              class="form-phone-input"
              type="number"
              placeholder="手机号"
              v-model="phoneNumber"
              @input="phoneNumLen"
            />
          </div>
          <div class="form-password">
            <input
              class="form-password-input"
              type="password"
              placeholder="密码"
              v-model="password"
              maxlength="16"
              minlength="6"
            />
          </div>
          <div class="password-dispose">
            <span>
              <input type="checkbox" v-model="check" /> 记住密码
            </span>
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
import { getLogin } from "@/network/data";

export default {
  name: "Login",
  data() {
    return {
      phoneNumber: "18882372781",
      password: "123456",
      check: false
    };
  },
  mounted() {
    this.getCookie();
    if (this.phoneNumber) {
      this.check = true;
    }
  },
  methods: {
    hideLogin(e) {
      let divClass = e.target.className;
      if (divClass === "login login-component") {
        this.$store.state.isShowLogin = false;
      }
    },
    reql() {
      //校验手机号
      let phoneNumber = this.parityPhoneNumber(this.phoneNumber);
      if (!phoneNumber) return;
      //判断密码是否为空
      if (!this.password) {
        this.showPopup("请输入密码");
        return;
      }

      //发送登录请求（模拟），实际上是ajx请求
      let res = getLogin(this.phoneNumber, this.password);
      if (!res.code) {
        //登录成功
        //记住密码
        if (this.check) {
          this.setCookie(this.phoneNumber, this.password, 30);
        } else {
          this.clearCookie();
        }
        //存储数据
        let data = res.data;
        localStorage.setItem("uid", data.uid);
        localStorage.setItem("headImg", data.headerImg);
        localStorage.setItem("username", data.username);
        
        //存储token
        let exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * 1 ); //保存1天
        window.document.cookie = `token=${data.token};path=/;expires=${exdate.toGMTString()}`;
        //提示登录成功
        this.showPopup("登录成功");

        this.$store.state.isLoginSuc = true; //显示用户信息
        this.$store.state.isShowLogin = false; //关闭登录框
      } else {
        this.showPopup(res.msg);
      }
    },
    toLogup() {
      this.$store.state.isShowLogin = false;
      this.$store.state.isShowLogup = true;
    },
    //限制手机号输入的长度
    phoneNumLen() {
      if (this.phoneNumber.length >= 11) {
        this.phoneNumber = this.phoneNumber.slice(0, 11);
      }
    },
    //校验手机号
    parityPhoneNumber(value) {
      let Reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (value.trim() == "") {
        this.showPopup("请输入手机号码");
        return false;
      } else if (!Reg.test(value)) {
        this.showPopup("请输入正确的手机号码");
        return false;
      }
      return value;
    },
    showPopup(str) {
      //弹出弹窗信息
      this.$store.state.isShowPopup = true;
      this.$store.state.toastMsg = str;
    },
    //设置cookie
    setCookie(phoneNumber, pwd, exdays) {
      let exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie = `phoneNumber=${phoneNumber};path=/;expires=${exdate.toGMTString()}`;
      window.document.cookie = `password=${pwd};path=/;expires=${exdate.toGMTString()}`;
    },
    //读取cookie
    getCookie() {
      if (document.cookie.length > 0) {
        let arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        arr.forEach(item => {
          let arr2 = item.split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "phoneNumber") {
            this.phoneNumber = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "password") {
            this.password = arr2[1];
          }
        });
      }
    },
    //清除cookie
    clearCookie() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }
  }
};
</script>

<style lang="scss" scoped>
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
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin: 0 auto;
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
  height: 58px;
  line-height: 58px;
  padding: 0 20px;
}
.password-dispose {
  padding: 20px 0;
  position: relative;
  color: #333;
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