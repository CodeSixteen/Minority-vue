<template>
  <ul class="sub-nav">
    <li
      v-for="(item,index) in navLists"
      :key="index"
      :class="{active:index===curIndex}"
      @click="cutArticleClassify(index,item)"
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
    cutArticleClassify(index, item) {
      this.curIndex = index;
      this.$emit("cutArticleClassify", item);
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
}
</style>