<template>
  <div class="main-wrap">
    <LeftSide class="left-side"/>
    <RightSide  class="right-side"/>
  </div>
</template>

<script>
import LeftSide from './homemain/LeftSide'
import RightSide from './homemain/RightSide'
export default {
name:'HomeMainWrap',
components:{
    LeftSide,
    RightSide
}
}
</script>

<style lang="scss" scoped>
.main-wrap{
    margin-top: 200px;
    display: flex;
    justify-content: space-between;
    .left-side{
        width:800px;
    }
    .right-side{
        width:260px;
    }
}
</style>