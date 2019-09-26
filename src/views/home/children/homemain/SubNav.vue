<template>
  <ul class="sub-nav">
    <li
      v-for="(item,index) in navLists"
      :key="index"
      :class="isActive(item)"
      @click="cutArticleClassify(item)"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "SubNav",
  props: {
    navLists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    cutArticleClassify(item) {
      this.$store.state.articleClassifyId = item;
    },
    isActive(item) {
      if (item === this.articleClassifyId) {
        return this.changeNav ? "nav-active" : "active";
      }
    }
  },
  computed: {
    changeNav() {
      return this.$store.state.changeNav;
    },
    articleClassifyId(){
      return this.$store.state.articleClassifyId;
    }
  }
};
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
</style>