<template>
  <div class="flex-column-center post-banner">
      <div class="bgbox"></div>
      <div class="post-banner-content">
           <img class="post-banner-img" :src="banner">
           <h2>{{title}}</h2>
           <div class="post-banner-info flex-between">
               <div class="info-left">
                   <img :src="head_img">
                   <span class="author">{{author}}</span>
               </div>
               <div class="info-right">{{created_time}}</div>
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'PostBanner',
  props: {
      banner:{
        type: String,
        default: 'https://cdn.sspai.com/article/8dc31f25-65eb-f2fc-40bb-25887ffe3d70.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708'
      },
      title:{
        type: String,
        default: '本周看什么：皮克斯新作《1/2 的魔法》预告发布，吕克·贝松新电影《安娜》上映'
      },
      head_img:{
        type: String,
        default: 'https://cdn.sspai.com/2018/11/04/a5ae7198440f04585f4c6df1659aa96b.gif?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64'
      },
      author:{
        type: String,
        default: '一只索狗'
      },
      created_time:{
        type: String,
        default: '2天前'
      }
  }
}
</script>

<style lang="scss" scoped>
.post-banner{
    padding-top: 20px;
    width:100%;
    position: relative;
    .post-banner-content{
        z-index: 0;
        width: 750px;
        .post-banner-img{
            display: block;
            width: 100%;
        }
        h2{
            font-size: 30px;
            color: #292525;
            padding: 40px;
            line-height: 1.2;
        }
        .post-banner-info{
            padding: 0 40px 40px 40px;
            .info-left{
                img{
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                }
            }
            .info-right{
                color: #666;
                font-size: 14px;
            }
        }
    }
}
.bgbox{
    position: absolute;
    width:100%;
    height: 50%;
    top: -10px;
    background-color: #f5f5f5;
}
</style>