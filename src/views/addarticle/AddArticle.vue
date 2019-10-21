<template>
  <div class="add-article-container">
    <wangEditor class="wang-editor"/>
    <Nav class="nav"/>
  </div>
</template>

<script>
import Nav from "@/components/project/nav/index";
import wangEditor from "./children/wangEditor";

export default {
  name: "AddArticle",
  components: {
    Nav,
    wangEditor
  }
};
</script>

<style lang="scss" scoped>
.add-article-container{
    width: 100%;
    height: 2000px;
    background-color: #f5f5f5;
    padding-top:60px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.wang-editor{
    width: 100%;
    max-width:750px;
    background-color: #fff;
    padding: 10px;
    z-index: 0;
}




/* nav */
.nav{
    position: fixed;
    top: 0;
}
</style>