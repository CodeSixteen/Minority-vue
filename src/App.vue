<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './styles/base.css';
@import './styles/normalize.css';
@import '//at.alicdn.com/t/font_1408960_i80d6kzge0e.css';

#app{
  background-color: rgb(244, 244, 244);
}
</style>
