import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isShowLogin: false,
  isShowLogup: false,
  changeNav: false,
  articleClassifyId: '推荐',
  isLoginSuc: false,
  isShowPopup: false,
  toastMsg: '确定'
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
