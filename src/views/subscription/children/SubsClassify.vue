<template>
  <div class="subs-classify">
    <h2>{{ itemTitle }}</h2>
    <div>
      <ul>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
        <li class="subs-classify-li">
          <SubsItem />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubsItem from './subsItem'

export default {
  name: 'SubsClassify',
  components: {
    SubsItem
  },
  props: {
    itemTitle: {
      type: String,
      default: '最新上架'
    }
  }
}
</script>

<style lang="scss" scoped>
.subs-classify{
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px;
  user-select:none;
  div{
    ul{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
  h2{
    color: #292525;
    font-size: 18px;
    font-weight: 400;
  }
}
.subs-classify-li{
  margin-right: 20px;
}
.subs-classify-li:nth-of-type(5n){
  margin-right:0px;
}
</style>
