<template>
  <div class="top-tabbar">
    <ul class="top-tabbar-list">
      <li
        class="tabbar-item"
        v-for="(item,index) in tabbarList"
        :key="index"
        :class="{'tabbar-active': isActive}"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTabbar",
  props: {
    tabbarList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
      return{
          isActive: true,
      }
  },
  computed:{
    
  }

};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";

.top-tabbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #ffffff;
}
.top-tabbar-list {
  display: flex;
  justify-content: center;
  width: 1110px;
  height: 40px;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
}
.tabbar-item {
  flex: 1;
  height: 40px;
  border-right: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  color: $themeColor;
  cursor: pointer;
}
.tabbar-active {
  border-bottom: 2px solid $themeColor;
}
</style>