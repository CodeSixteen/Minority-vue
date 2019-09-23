<template>
  <div class="swiper" ref="swiper" @mouseover="clearIn" @mouseout="startIn">
    <div class="swiper-container" ref="swiperItem">
      <SwiperSlide
        v-for="(item,index) in newSwiperSlides"
        :key="index"
        :slideTitle="item.title"
        :slideSrc="item.banner"
        :slideLink="item.href"
        class="swiper-item-container"
      />
    </div>
    <div class="indicator-container" v-if="isIndicator">
      <span
        class="indicator-item"
        v-for="i in swiperSlides.length"
        :key="i"
        :class="{active:curIndex===i}"
      ></span>
    </div>
    <div class="cut-slide">
      <div class="prev" @click="prev">
        <i class="iconfont icon-next"></i>
      </div>
      <div class="next" @click="next">
        <i class="iconfont icon-next"></i>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperSlide from "./SwiperSlide";
export default {
  name: "Swiper",
  props: {
    swiperSlides: {
      type: Array,
      default() {
        return [];
      }
    },
    isIndicator: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newSwiperSlides: [
        {
          title: "de",
          banner:
            "https://cdn.sspai.com/topic/3adf2abe-606b-c6a8-7209-38c0c49b151d.jpg?imageMogr2/quality/95/thumbnail/!1440x330r/gravity/Center/crop/1440x330",
          href: "javascript:0"
        }
      ],
      curIndex: 1,
      timer: null,
      cutIsClick: true
    };
  },
  components: {
    SwiperSlide
  },
  computed: {
    distance() {
      //获取幻灯片每次切换需要移动的距离
      return this.$refs.swiper.offsetWidth;
    }
  },
  mounted() {
    //开启自动播放
    this.startAutoPlay();
  },
  methods: {
    //对数据进行处理
    modifyData(slide) {
      this.newSwiperSlides = [...slide];
      //两张以上时，前后个添加一张
      if (slide.length > 1) {
        this.newSwiperSlides.unshift(slide[slide.length - 1]);
        this.newSwiperSlides.push(slide[0]);
      }
    },
    prev() {
      //切换下一张，要判断是否可以点击，动画没有执行完时，点击不切换
      let item = this.$refs.swiperItem;
      if (this.cutIsClick) {
        this.curIndex--;
        this.moveSlide();
        this.cutIsClick = false;
      }
      item.addEventListener("transitionend", () => {
        //监听动画结束事件，切换为可以点击
        this.cutIsClick = true;
      });
    },
    next() {
      //切换下一张，要判断是否可以点击，动画没有执行完时，点击不切换
      let item = this.$refs.swiperItem;
      if (this.cutIsClick) {
        this.curIndex++;
        this.moveSlide();
        this.cutIsClick = false;
      }
      item.addEventListener("transitionend", () => {
        //监听动画结束事件，切换为可以点击
        this.cutIsClick = true;
      });
    },
    startAutoPlay() {
      //执行后开始自动播放
      this.timer = setInterval(this.next, 5000);
    },
    clearIn() {
      //鼠标移入时停止自动播放
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    startIn() {
      //鼠标移出后开启自动播放
      this.startAutoPlay();
    },
    moveSlide() {
      //移动swiper
      let item = this.$refs.swiperItem;
      let len = this.newSwiperSlides.length - 1;
      item.style.transitionDuration = `0.5s`;
      item.style.transform = `translate(-${this.distance * this.curIndex}px,0)`;
      if (this.curIndex === len) {
        this.curIndex = 1;
        this.setTransfrom(item);
      } else if (this.curIndex === 0) {
        this.curIndex = this.newSwiperSlides.length - 2;
        this.setTransfrom(item);
      }
    },
    setTransfrom(el) {
      el.addEventListener("transitionend", () => {
        el.style.transitionDuration = `0s`;
        el.style.transform = `translate(-${this.distance * this.curIndex}px,0)`;
      });
    }
  },
  watch: {
    swiperSlides() {
      this.modifyData(this.swiperSlides);
    }
  }
};
</script>

<style lang='scss' scoped>
.swiper,
.swiper-container,
.swiper-item-container {
  width: 100%;
}
.swiper {
  position: relative;
  overflow: hidden;
  height: auto;
  max-height: 410px;
}
.swiper-container {
  display: flex;
  transition: all 0.5s;
  transform: translate(-100%, 0);
}
.swiper-item-container {
  flex-shrink: 0;
}

/* 指示器 */
.indicator-container {
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin-left: -50%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.indicator-item {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #f1f1f1;
}
.active {
  background-color: #fff;
  padding: 1px;
}
/* 切换按钮 */
.cut-slide {
  width: 100%;
  max-width: 1110px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -555px;
}
@media (max-width: 1110px) {
  .cut-slide {
    margin-left: -50%;
  }
}
.next,
.prev {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 36px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s;
}
.prev {
  transform: rotate(180deg) translate(20px, 0);
  left: 0;
}
.next {
  transform: translate(20px, 0);
  right: 0;
}
.swiper:hover .prev {
  display: block;
  transform: rotate(180deg) translate(0px, 0px);
  opacity: 0.8;
}
.swiper:hover .next {
  display: block;
  transform: translate(0, 0);
  opacity: 0.8;
}
.icon-next {
  font-size: 16px;
  color: #666;
}
</style>