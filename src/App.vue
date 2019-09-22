<template>
  <div id="app">
    <router-view/>
    <TopNav class="nav"/>
  </div>
</template>

<script>
import TopNav from '@/components/project/TopNav.vue'

export default {
  name: 'App',
  components:{
    TopNav
  }
}
</script>

<style>
@import './styles/base.css';
@import './styles/normalize.css';
@import '//at.alicdn.com/t/font_1408960_lef05kmc59s.css';

.nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
#app{
  background-color: rgb(244, 244, 244);
}
</style>
