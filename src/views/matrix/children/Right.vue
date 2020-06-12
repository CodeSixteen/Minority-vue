<template>
  <div class="matrix-right">
    <div class="matrix-right-top flex-between">
      <h3 class="font14">推荐专栏</h3>
      <p>查看全部</p>
    </div>
    <div class="line" />
    <ul class="matrix-spec-list">
      <li class="matrix-spec">
        <div class="matrix-spec-img">
          <img src="https://cdn.sspai.com/other/718855_1498618531057.png?imageMogr2/quality/95/thumbnail/!828x442r/gravity/Center/crop/828x442" alt="我和我的故事">
        </div>
        <div class="matrix-spec-content">
          <h4>我和我的故事</h4>
          <P>回顾 App 进入你生活的时光，你在这个 App 遇见了什么人？哪个 App 陪你度过de de</P>
        </div>
        <div class="matrix-spec-item-bottom flex-between">
          <span class="spec-attention">208人关注</span>
          <span class="spec-btn">查看专栏</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MatrixRight',
  data() {
    return {

    }
  },
  created() {
  // 获取专栏列表数据（展示三个）
  },
  methods: {
    toMatrixSpec() {
    // 跳转到所有专栏页面
    },
    toSpecDetails(id) {
    // 根据专栏id跳转到专栏详情
    }
  }
}
</script>

<style lang="scss" scoped>

.matrix-right-top{
  line-height: 30px;
  .font14{
    height: 30px;
    color: #292525;
    border-bottom: 1px solid #292525;
    position: relative;
    z-index: 1;
  }
  p{
    color: #999;
    cursor: pointer;
  }
}
.line{
  position: relative;
  top: -11px;
}
.matrix-spec-list{
  width: 100%;
  .matrix-spec{
    border: 1px solid #ccc;
    cursor: pointer;
    .matrix-spec-img{
      img{
        width: 100%;
      }
    }
    .matrix-spec-content{
      padding: 20px;
      h4{
        color: #292525;
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 5px;
      }
      p{
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .matrix-spec-item-bottom{
      padding: 0 20px 20px 20px;
      align-items: center;
      .spec-attention{
        color: #999;
      }
      .spec-btn{
        color: #292525;
        border: 1px solid #292525;
        padding: 8px 20px 8px 20px;
        border-radius: 17px;
      }
      .spec-btn:hover{
        background-color: #292525;
        color: #fff;
      }
    }
  }
}

</style>
