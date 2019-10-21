<template>
  <div>
    <Nav />
    <div class="write-page-content">
      <img src="https://cdn.sspai.com/2018/08/06/e2670299b4aa60ddbbfe4a2515e45fe4.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" />
      <h2>成为少数派 Matrix 作者</h2>
      <p>Matrix 是少数派旗下的写作平台。在这里有对产品体验和实用技巧的分享，有开发经验和思路的介绍，还有更多围绕数字生活的思考。在 Matrix 写作，分享有趣的观点，了解更丰富的数字生活体验，收获意想不到的回应。</p>
      <p>你可以在 Matrix 自由写作，优秀文章有机会被编辑评为 Matrix 精选，甚至登上少数派首页。如果你既能写出好文章，又能保持长期活跃，你还可以成为少数派签约作者，获得包括稿酬在内的更多福利……</p>
      <div class="new-info"> 相关内容完善中...</div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/project/nav/index";
import Footer from "@/components/project/Footer";

export default {
  name: "Writing",
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang='scss' scoped>
.write-page-content {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 80px 0 30px 0;
  img{
    width:100%;
    margin-bottom:20px;
  }
  @media (max-width:750px){
    h2,p,img,.new-info{
        padding: 0 20px;
        box-sizing: border-box;
    }
  }
  h2{
    color: #292525;
    text-align: center;
    padding-bottom: 30px;
  }
  p{
    padding-bottom: 10px;
    line-height: 1.5;
    font-size:16px;
  }
}
.new-info{
  font-size: 18px;
  margin-top: 50px;
  color: #000;
  font-weight: 700;
}
</style>