<template>
  <div id="app">
    <router-view />
    <Login v-if="isShowLogin" class="login-component" />
    <Logup v-else-if="isShowLogup" class="logup-component" />
    <popup v-if="isShowPopup" class="toast-component" @clickColse="clickColse" />
  </div>
</template>

<script>
import Login from '@/components/project/Login'
import Logup from '@/components/project/Logup'
import popup from '@/components/project/popup'
export default {
  name: 'App',
  components: {
    Login,
    Logup,
    popup
  },
  computed: {
    isShowLogin() {
      return this.$store.state.isShowLogin
    },
    isShowLogup() {
      return this.$store.state.isShowLogup
    },
    isShowPopup() {
      return this.$store.state.isShowPopup
    }
  },
  created() {
    if (localStorage.getItem('phoneNumber')) {
      this.$store.state.isLoginSuc = true
    }
  },
  methods: {
    clickColse() {
      this.$store.state.isShowPopup = false
    }
  }
}
</script>

<style>
@import "//at.alicdn.com/t/font_1408960_mqwag5oc8s.css";

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
  z-index: 1000000;
  overflow-y:auto;
}

</style>
