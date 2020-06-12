import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
const ArticleDetails = () => import('@/views/article/ArticleDetails.vue')
const AddArticle = () => import('@/views/addarticle/AddArticle')
const Page404 = () => import('@/components/common/404/NotFound')
const Matrix = () => import('@/views/matrix/index')
const Subscription = () => import('@/views/subscription/index')
const Topics = () => import('@/views/topics/index')
const Writing = () => import('@/views/writing/index')
const Columns = () => import('@/views/columns/index')

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/articledetails/:id',
  component: ArticleDetails
}, {
  path: '/addarticle',
  component: AddArticle
}, {
  path: '/Matrix',
  component: Matrix
}, {
  path: '/Subscription',
  component: Subscription
}, {
  path: '/topics',
  component: Topics
}, {
  path: '/columns',
  component: Columns
}, {
  path: '/apply/writing',
  component: Writing
}, {
  path: '/Page404',
  component: Page404
}, {
  path: '*',
  redirect: '/Page404'
}]

export default new Router({
  base: process.env.BASE_URL,
  routes
})
