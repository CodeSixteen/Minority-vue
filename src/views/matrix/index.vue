
<template>
  <div class="Matrix-container">
    <MatrixNav />
    <MatrixBanner />
    <div class="matrix-main">
      <MatrixLeft class="matrix-main-left" />
      <MatrixRight class="matrix-main-right" />
    </div>
    <Footer />
  </div>
</template>

<script>
import MatrixNav from '@/components/project/nav/index'
import MatrixBanner from './children/Banner'
import MatrixLeft from './children/Left'
import MatrixRight from './children/Right'
import Footer from '@/components/project/Footer'

export default {
  name: 'Matrix',
  components: {
    MatrixNav,
    MatrixBanner,
    MatrixLeft,
    MatrixRight,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.Matrix-container{
  background-color: #fff;
  .matrix-main{
    margin: 0 auto;
    padding-top: 30px;
    width: 1110px;
    display: flex;
    justify-content: flex-start;
    .matrix-main-left{
      width: 70%;
      margin-right: 3%;
    }
    .matrix-main-right{
      width: 27%;
    }
  }
}
</style>

