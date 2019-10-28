<template>
  <div class="popup">
    <div class="popup-box">
      <p>{{msg}}</p>
      <div @click="clickColse">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  methods: {
    clickColse() {
      this.$emit("clickColse");
    }
  },
  computed:{
    msg(){
      return this.$store.state.toastMsg;
    }
  }
};
</script>

<style lang='scss' scoped>
.popup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .popup-box {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    p {
      font-size: 20px;
      color: #292525;
      padding: 40px 0;
    }
    div {
      height: 30px;
      padding: 0 30px;
      line-height: 30px;
      border-radius: 15px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      background-color: rgb(215, 25, 26);
      margin-bottom: 40px;
    }
  }
}
</style>