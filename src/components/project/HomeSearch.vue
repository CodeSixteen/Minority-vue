<template>
  <div class="search-box" @click="colseBox">
    <div class="search-box-wrap">
      <div class="search-input">
        <input type="text" placeholder="热门搜索" name="searchtext" />
        <i class="iconfont icon-search"></i>
      </div>
      <div class="search-hot">
        <div class="left">
          <span>热门搜索</span>
          <ul>
            <li>阅读</li>
            <li>捷径</li>
          </ul>
        </div>
        <span class="right">换一组</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSearch",
  methods: {
    colseBox(e) {
      let divClass = e.toElement.className;
      if (divClass === "search-box home-search") {
        this.$emit("hideSearch", false);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.search-box {
  background-color: rgba(10, 10, 10, 0.3);
  .search-box-wrap {
    width: 100%;
    height: 200px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .search-input {
      margin-top: 30px;
      height: 60px;
      width: 100%;
      max-width: 700px;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
      box-sizing: border-box;
      position: relative;
      input {
        width: 100%;
        max-width: 600px;
        background-color: transparent;
        height: 100%;
        padding: 0 20px;
      }
      .iconfont {
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        color: #000;
        cursor: pointer;
      }
    }
    .search-input:hover {
      border: 1px solid #e4e4e4;
    }
    .search-hot {
      width: 100%;
      margin-top: 40px;
      max-width: 700px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        justify-content: flex-start;
        span {
          display: block;
          font-size: 18px;
          height: 30px;
          line-height: 30px;
          color: #666;
        }
        ul {
          display: flex;
          height: 30px;
          justify-content: flex-start;
          align-items: center;
          margin-left: 20px;
          li {
            height: 24px;
            line-height: 24px;
            padding: 0 10px;
            background-color: #f5f5f5;
            margin-right: 10px;
            border-radius: 12px;
            color: #8e8787;
          }
        }
      }
      .right {
        color: #666;
        font-size: 18px;
        padding: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>