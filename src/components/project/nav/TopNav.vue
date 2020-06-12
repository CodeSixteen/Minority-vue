<template>
  <div class="nav-container" :class="{'nav-container-bgcolor':changeNav}">
    <header>
      <div class="nav-content">
        <div class="nav-left">
          <slot name="left" />
        </div>
        <div class="nav-center">
          <slot name="center" />
        </div>
        <div class="nav-right">
          <slot name="right" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  computed: {
    changeNav() {
      return this.$store.state.changeNav
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";

.nav-container {
  height: 60px;
  background-color: $themeColor;
  transition: background-color 0.3s;
}

.nav-content {
  margin: 0 auto;
  width: 1110px;
  height: 100%;
  display: flex;
  position: relative;
}
.nav-left {
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
}
.nav-center {
  width: 100%;
  height: 60px;
}
.nav-right {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
}

/* 改变导航时变化的样式 */
.nav-container-bgcolor {
  background-color: #fff !important;
  border-bottom: 1px solid #ccc;
}

@media (max-width: 1110px) {
  .nav-content{
    width: 100%;
  }
  .nav-left{
    left: 20px;
  }
  .nav-right{
    right: 20px;
  }
}
</style>
