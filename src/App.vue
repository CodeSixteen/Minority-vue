<template>
  <div id="app">
    <router-view />
    <Login class="login-component" v-if="isShowLogin" />
    <Logup class="logup-component" v-else-if="isShowLogup" />
    <popup class="toast-component" v-if="isShowPopup" @clickColse="clickColse" />
  </div>
</template>

<script>
import Login from "@/components/project/Login";
import Logup from "@/components/project/Logup";
import popup from "@/components/project/popup";

export default {
  name: "App",
  components: {
    Login,
    Logup,
    popup
  },
  created() {
    if (localStorage.getItem("phoneNumber")) {
      this.$store.state.isLoginSuc = true;
    }
  },
  methods: {
    clickColse() {
      this.$store.state.isShowPopup = false;
    }
  },
  computed: {
    isShowLogin() {
      return this.$store.state.isShowLogin;
    },
    isShowLogup() {
      return this.$store.state.isShowLogup;
    },
    isShowPopup() {
      return this.$store.state.isShowPopup;
    }
  }
};
</script>

<style>
@import "//at.alicdn.com/t/font_1408960_ew8vv7uz0mo.css";

#app {
  background-color: rgb(244, 244, 244);
}
.login-component,
.logup-component,
.toast-component {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>
