<template>
  <div class="subscription">
      <Nav/>
      <div class="subscription-main">
         付费订阅
      </div>
  </div>
</template>

<script>
import Nav from '@/components/project/nav/Nav'
export default {
name:'Subscription',
components:{
    Nav
}
}
</script>

<style lang="scss" scoped>
.subscription{
    background-color: #fff;
}
.subscription-main{
    margin-top: 80px;
}
</style>