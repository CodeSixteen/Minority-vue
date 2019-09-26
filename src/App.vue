<template>
  <div id="app">
    <router-view/>
    <Login class="login-component" v-if="isShowLogin"/>
    <Logup class="logup-component" v-else-if="isShowLogup"/>
  </div>
</template>

<script>
import Login from '@/components/project/Login'
import Logup from '@/components/project/Logup'

export default {
  name: 'App',
  components:{
    Login,
    Logup
  },
  computed: {
    isShowLogin () {
      return this.$store.state.isShowLogin
    },
    isShowLogup(){
      return this.$store.state.isShowLogup
    }
  }
}
</script>

<style>
@import './styles/base.css';
@import './styles/normalize.css';
@import '//at.alicdn.com/t/font_1408960_i80d6kzge0e.css';

#app{
  background-color: rgb(244, 244, 244);
}
.login-component,
.logup-component {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1  }
</style>
