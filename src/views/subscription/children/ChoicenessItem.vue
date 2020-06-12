<template>
  <div class="choiceness-item">
    <img src="https://cdn.sspai.com/article/cb15b009-d17b-f670-63b0-e9cd5b751f6e.jpg?imageMogr2/quality/95/thumbnail/!394x196r/gravity/Center/crop/394x196" alt="">
    <p class="column-title">栏目：每个人都应该学会正确管理自己的时间</p>
    <p class="synopsis">前言 | 现在开始整理文件吧</p>
  </div>
</template>

<script>
export default {
  name: 'ChoicenessItem'
}
</script>

<style lang="scss" scoped>
.choiceness-item{
    width: 194px;
    padding-top: 30px;
    img{
        width: 100%;
        border-radius: 5px;
    }
}
.column-title{
    color: #999;
    padding: 10px 0;
    font-size: 12px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.synopsis{
    color: #292525;
}
</style>
