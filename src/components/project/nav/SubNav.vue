<template>
  <ul class="sub-nav">
    <li
      v-for="(item,index) in navLists"
      :key="index"
      :class="isActive(item)"
      @click="cutArticleClassify(item)"
    >{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'SubNav',
  props: {
    navLists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      curIndex: 0
    }
  },
  computed: {
    changeNav() {
      return this.$store.state.changeNav
    },
    articleClassifyId() {
      return this.$store.state.articleClassifyId
    }
  },
  methods: {
    cutArticleClassify(item) {
      this.$store.state.articleClassifyId = item
    },
    isActive(item) {
      if (item === this.articleClassifyId) {
        return this.changeNav ? 'nav-active' : 'active'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~@/styles/variables";

.sub-nav {
  display: flex;
  justify-content: flex-start;
  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 20px;
    color: #999;
  }
  li:hover {
    color: $red;
  }
  .active {
    color: $red;
    border-bottom: 2px solid $red;
  }
  .nav-active {
    padding: 0 20px;
    height: 58px;
    color: $red;
    border-bottom: 2px solid $red;
  }
}
@media (max-width: 960px) {
  .sub-nav{
    height: 50px;
  }
  .sub-nav li{
    font-size: 14px;
    padding: 0 10px;
    height: 38px;
  }
  .nav-active{
    height: 38px !important;
  }
}
</style>
