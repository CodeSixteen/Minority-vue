<template>
  <div class="subs-classify">
    <h2>精选试读</h2>
    <div>
        <ul class="flex-start">
            <li>
                <ChoicenessItem/>
            </li>
            <li>
                <ChoicenessItem/>
            </li>
            <li>
                <ChoicenessItem/>
            </li>
            <li>
                <ChoicenessItem/>
            </li>
            <li>
                <ChoicenessItem/>
            </li>
        </ul>
    </div>
  </div>
</template>

<script> 
import ChoicenessItem from './ChoicenessItem'
export default {
  name: "ChoicenessRead",
  components:{
    ChoicenessItem
  }
};
</script>

<style lang="scss" scoped>
.subs-classify{
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px;
  user-select:none;
  h2{
    color: #292525;
    font-size: 18px;
    font-weight: 400;
  }
}
.flex-start li{
    margin-right: 20px;
}
.flex-start li:nth-of-type(5n){
    margin-right: 0;
}
</style>