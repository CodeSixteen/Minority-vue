<template>
  <div class="matrix-banner-container">
    <img class="matrix-banner" src="https://cdn.sspai.com/article/6dbae5f9-aa47-8928-2457-54430ab1fceb.jpg?imageMogr2/quality/95/thumbnail/!1110x/gravity/Center/crop/1110x" alt="成为签约作者" @click="toWriting">
  </div>
</template>

<script>
export default {
name:'MatrixBanner',
methods:{
  toWriting(){
    this.$router.push('/apply/writing');
  }
}
}
</script>

<style lang="scss" scoped>
.matrix-banner-container{
  padding-top: 80px;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  .matrix-banner{
    width: 100%;
    cursor: pointer;
  }
}
</style>