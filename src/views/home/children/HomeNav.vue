<template>
  <div>
    <TopNav class="top-nav">
      <template #left>
        <div class="left-nav-container">
          <a class="logo">
            <span class="logo-icon"></span>
            <span class="logo-title" v-show="!changeNav">少数派</span>
          </a>
          <SubNav v-show="changeNav" :navLists="navLists" class="sub-nav" />
        </div>
      </template>
      <template #center>
        <ul class="center-nav-lists" v-show="!changeNav">
          <li class="nav-list-item">
            <img src="~@/icons/nav/matrix.svg" />
            <span>Matrix</span>
          </li>
          <li class="nav-list-item">
            <img src="~@/icons/nav/column.svg" />
            <span>付费订阅</span>
          </li>
          <li class="nav-list-item">
            <img src="~@/icons/nav/mall.svg" />
            <span>特别策划</span>
          </li>
          <li class="nav-list-item">
            <img src="~@/icons/nav/lobaro.svg" />
            <span>Pi Store</span>
          </li>
          <li class="nav-list-item tron">
            <img src="~@/icons/nav/special.svg" />
            <span>Tron 计划</span>
            <div class="tron-box">
              <a href="javascript:0" class="tron-link">加入Tron 计划</a>
              <a href="javascript:0" class="tron-link">
                <img src="~@/icons/nav/shortcut.svg" alt />
              </a>
            </div>
          </li>
        </ul>
      </template>
      <template #right>
        <div class="right-nav-container">
          <div class="right-nav-lists" v-if="changeNav">
            <a href="javascript:0">
              <img src="~@/icons/nav/1.svg" />
            </a>
            <a href="javascript:0">
              <img src="~@/icons/nav/2.svg" />
            </a>
            <a href="javascript:0">
              <img src="~@/icons/nav/3.svg" />
            </a>
            <a href="javascript:0">
              <img src="~@/icons/nav/4.svg" />
            </a>
            <a href="javascript:0">
              <img src="~@/icons/nav/5.svg" />
              <div class="right-tron-box">
                <a href="javascript:0" class="right-tron-link">加入Tron 计划</a>
                <a href="javascript:0" class="right-tron-link">
                  <img src="~@/icons/nav/shortcut.svg" />
                </a>
              </div>
            </a>
            <div class="line"></div>
          </div>
          <i class="iconfont" @click="showSearchInput" :class="iconStyle"></i>
          <Search v-show="isShowSearch" class="home-search" @hideSearch="hideSearch" />
          <div
            class="home-nav-login"
            @click="clickLogin"
            :class="{'login-btn-black': changeNav}"
            v-if="!isLoginSuc"
          >登录</div>
          <NavUser v-else />
        </div>
      </template>
    </TopNav>
  </div>
</template>

<script>
import TopNav from '@/components/project/nav/TopNav'
import Search from '@/components/project/nav/Search'
import NavUser from '@/components/project/nav/NavUser'
import SubNav from './SubNav'

export default {
  name: 'HomeNav',
  data() {
    return {
      isShowSearch: false,
      navLists: ['推荐', '最热', '应用推荐', '生活方式', 'Power+']
    };
  },
  components: {
    TopNav,
    Search,
    SubNav,
    NavUser
  },
  methods: {
    showSearchInput() {
      this.isShowSearch = !this.isShowSearch;
    },
    clickLogin() {
      this.$store.state.isShowLogin = true;
      this.isShowSearch = false;
    },
    hideSearch() {
      this.isShowSearch = false;
    }
  },
  computed: {
    changeNav() {
      return this.$store.state.changeNav;
    },
    iconStyle() {
      let res = this.isShowSearch ? 'icon-guanbi' : 'icon-search';
      let res1 = this.changeNav ? ' icon-color' : '';
      return res + res1;
    },
    isLoginSuc() {
      return this.$store.state.isLoginSuc;
    }
  }
};
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
  z-index: 1;
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
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      img{
        width: 24px;
      }
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
          img {
            width: 80px;
          }
        }
        .right-tron-link:hover {
          background-color: rgba(10, 10, 10, 1);
        }
      }
    }
    a:hover {
      background-color: #eee;
    }
    a:hover .right-tron-box {
      height: 80px;
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
/* line */
.line {
  height: 40px;
  width: 1px;
  background-color: #ccc;
  margin-right: 30px;
}
.sub-nav {
  margin-left: 30px;
}
</style>