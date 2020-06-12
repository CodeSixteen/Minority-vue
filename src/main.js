import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './styles/normalize.scss'
import './styles/base.scss'
import './styles/style.scss'
import './styles/variables.scss'
import './plugins/element.js'
import './plugins/swiper.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
