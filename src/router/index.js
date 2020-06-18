import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/articledetails/:id',
  component: () => import('@/views/article/ArticleDetails.vue')
}, {
  path: '/addarticle',
  component: () => import('@/views/addarticle/AddArticle')
}, {
  path: '/Matrix',
  component: () => import('@/views/matrix/index')
}, {
  path: '/Subscription',
  component: () => import('@/views/subscription/index')
}, {
  path: '/topics',
  component: () => import('@/views/topics/index')
}, {
  path: '/columns',
  component: () => import('@/views/columns/index')
}, {
  path: '/apply/writing',
  component: () => import('@/views/writing/index')
}, {
  path: '/Page404',
  component: () => import('@/components/common/404/NotFound')
}, {
  path: '*',
  redirect: '/Page404'
}]

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes
})
