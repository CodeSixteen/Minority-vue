<template>
  <div class="post-main">
      <div class="post-main-top"><slot name="top"></slot></div>
      <div class="post-main-center"><slot name="center"></slot></div>
  </div>
</template>

<script>
export default {
  name:'PostMain',
}
</script>

<style lang="scss" scoped>
.post-main{
  margin-top:60px;
}
.post-main-top{
    width: 100%;
    background-color: #fff;
}
.post-main-center{
    width: 100%;
    background-color: #fff;
}

</style>