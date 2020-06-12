<template>
  <div>
    <TopNav class="top-nav">
      <template #left>
        <div class="left-nav-container">
          <router-link to="/">
            <a class="logo">
              <span class="logo-icon" />
              <span v-show="!changeNav" class="logo-title">少数派</span>
            </a>
          </router-link>
          <SubNav v-show="changeNav" :nav-lists="navLists" class="sub-nav" />
        </div>
      </template>
      <template #center>
        <ul v-show="!changeNav" class="center-nav-lists">
          <li class="nav-list-item" @click="toMatrix">
            <img src="~@/icons/nav/matrix.svg">
            <span class="nav-text">Matrix</span>
          </li>
          <li class="nav-list-item" @click="toSubscription">
            <img src="~@/icons/nav/column.svg">
            <span class="nav-text">付费订阅</span>
          </li>
          <li class="nav-list-item" @click="toTopics">
            <img src="~@/icons/nav/special.svg">
            <span class="nav-text">特别策划</span>
          </li>
          <li class="nav-list-item" @click="toTaobao">
            <img src="~@/icons/nav/mall.svg">
            <span class="nav-text">Pi Store</span>
          </li>
          <li class="nav-list-item tron">
            <img src="~@/icons/nav/lobaro.svg">
            <span class="nav-text">Tron 计划</span>
            <div class="tron-box">
              <a href="javascript:0" class="tron-link">加入Tron 计划</a>
              <a href="javascript:0" class="tron-link">
                <img src="~@/icons/nav/shortcut.svg" alt>
              </a>
            </div>
          </li>
        </ul>
      </template>
      <template #right>
        <div class="right-nav-container">
          <div v-if="changeNav" class="right-nav-lists">
            <div class="nav-icon">
              <a href="javascript:0" @click="toMatrix">
                <img src="~@/icons/nav/1.svg">
              </a>
              <a href="javascript:0" @click="toSubscription">
                <img src="~@/icons/nav/2.svg">
              </a>
              <a href="javascript:0" @click="toTopics">
                <img src="~@/icons/nav/3.svg">
              </a>
              <a href="javascript:0" @click="toTaobao">
                <img src="~@/icons/nav/4.svg">
              </a>
              <a href="javascript:0">
                <img src="~@/icons/nav/5.svg">
                <div class="right-tron-box">
                  <a href="javascript:0" class="right-tron-link">加入Tron 计划</a>
                  <a href="javascript:0" class="right-tron-link">
                    <img src="~@/icons/nav/shortcut.svg">
                  </a>
                </div>
              </a>
              <div class="line" />
            </div>
          </div>
          <i class="iconfont" :class="iconStyle" @click="showSearchInput" />
          <Search v-show="isShowSearch" class="home-search" @hideSearch="hideSearch" />
          <i class="iconfont icon-caidan" :class="{'icon-color':changeNav}" @click="showMenu" />
          <div
            v-if="!isLoginSuc"
            class="home-nav-login"
            :class="{'login-btn-black': changeNav}"
            @click="clickLogin"
          >登录</div>
          <NavUser v-else />
          <div v-show="isShowMenu" class="nav-menu">
            <ul>
              <li @click="toMatrix">Matrix</li>
              <li @click="toSubscription">付费订阅</li>
              <li @click="toTopics">特别策划</li>
              <li @click="toTaobao">Pi Store</li>
              <li>加入Tron 计划</li>
            </ul>
          </div>
        </div>
      </template>
    </TopNav>
  </div>
</template>

<script>
import TopNav from './TopNav'
import Search from './Search'
import NavUser from './NavUser'
import SubNav from './SubNav'

export default {
  name: 'PostNav',
  components: {
    TopNav,
    Search,
    NavUser,
    SubNav
  },
  data() {
    return {
      isShowSearch: false,
      navLists: ['推荐', '最热', '应用推荐', '生活方式', 'Power+'],
      isShowMenu: false
    }
  },
  computed: {
    changeNav() {
      return this.$store.state.changeNav
    },
    iconStyle() {
      const res = this.isShowSearch ? 'icon-guanbi' : 'icon-search'
      const res1 = this.changeNav ? ' icon-color' : ''
      return res + res1
    },
    isLoginSuc() {
      return this.$store.state.isLoginSuc
    }
  },
  created() {
    if (localStorage.getItem('username')) {
      this.$store.state.isLoginSuc = true
    }
  },
  methods: {
    showSearchInput() {
      this.isShowSearch = !this.isShowSearch
    },
    clickLogin() {
      this.$store.state.isShowLogin = true
      this.isShowSearch = false
    },
    hideSearch() {
      this.isShowSearch = false
    },
    toMatrix() {
      const link = this.$route.path
      if (link === '/Matrix') return
      this.$router.push('/Matrix')
    },
    toSubscription() {
      const link = this.$route.path
      if (link === '/Subscription') return
      this.$router.push('/Subscription')
    },
    toTopics() {
      const link = this.$route.path
      if (link === '/topics') return
      this.$router.push('/topics')
    },
    toTaobao() {
      const href =
        'https://shop549593764.taobao.com/?spm=a1z10.1-c.0.0.33ee1ba8XVHos6'
      window.open(href, '_blank')
    },
    showMenu() {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style lang='scss' scoped>
.top-nav {
  top: 0;
}
.top-nav,
.home-search {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
}

/* left */
.left-nav-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  cursor: pointer;
  .logo-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d7191a;
    padding: 5px;
    background-image: url("~@/icons/common/logo.svg");
    background-size: auto 100%;
  }
  .logo-title {
    padding-left: 10px;
    font-size: 18px;
    color: #fff;
  }
}
.logo:hover .logo-icon {
  background-color: #fc191a;
}

/* center */
.center-nav-lists {
  display: flex;
  justify-content: center;
  height: 100%;
  .nav-list-item {
    height: 100%;
    margin: 0 5px;
    padding: 0 10px;
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    img {
      padding-right: 5px;
      width: 24px;
    }
  }
  .nav-list-item:hover {
    background-color: rgb(14, 7, 6);
  }
  .tron:hover .tron-box {
    height: 80px;
  }
}

/* right */
.right-nav-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .right-nav-lists {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav-icon {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        .right-tron-box {
          position: absolute;
          top: 62px;
          right: 112px;
          width: 134px;
          height: 0px;
          overflow: hidden;
          transition: all 0.2s;
          .right-tron-link {
            display: block;
            width: auto;
            height: 40px;
            color: #fff;
            font-weight: 400;
            background-color: rgba(10, 10, 10, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .right-tron-link:hover {
            background-color: rgba(10, 10, 10, 1);
          }
        }
        img {
          padding-right: 5px;
          width: 24px;
        }
      }
      a:hover {
        background-color: #eee;
      }
      a:hover .right-tron-box {
        height: 80px;
        img {
          width: 80px;
        }
      }
    }
  }
  .iconfont {
    color: #fff;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
  }
  .home-nav-login {
    height: 30px;
    padding: 0px 16px;
    border-radius: 15px;
    color: #666;
    line-height: 30px;
    margin-left: 20px;
    background-color: #fff;
    cursor: pointer;
  }
  .home-nav-login:hover {
    color: #333;
  }
}

/* changNav styles */
.icon-color {
  color: #292525 !important;
}
.login-btn-black {
  background-color: #f1f1f1 !important;
}

/* tron-box */
.tron-box {
  position: absolute;
  top: 62px;
  left: -10px;
  width: 134px;
  height: 0px;
  overflow: hidden;
  transition: all 0.2s;
  .tron-link {
    display: block;
    height: 40px;
    color: #fff;
    font-weight: 400;
    background-color: rgba(10, 10, 10, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80px;
    }
  }
  .tron-link:hover {
    background-color: rgba(10, 10, 10, 1);
  }
}
/* search */
.home-search {
  top: 60px;
  border-top: 1px solid #ccc;
}
.icon-caidan {
  display: none;
}
/* line */
.line {
  height: 40px;
  width: 1px;
  background-color: #ccc;
  margin-right: 30px;
}
.sub-nav {
  margin-left: 30px;
  background-color: #fff;
}

@media (max-width: 960px) {
  .nav-text {
    display: none;
  }
  .sub-nav{
    margin-top: 56px;
    margin-left: 0;
    position: fixed;
    left: 0;
    right: 0;
  }
}
@media (max-width: 750px) {
  .logo-title {
    display: none;
  }
  .center-nav-lists {
    display: none;
  }
  .icon-caidan {
    display: block;
    cursor: pointer;
  }
  .nav-icon{
    display: none !important;
  }
}
.nav-menu{
  width:100%;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  top: 61px;
  left: 0;
  right: 0;
  ul{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    li{
      color: #292525;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    li:last-child{
    border:none;
  }
  }
}
</style>
