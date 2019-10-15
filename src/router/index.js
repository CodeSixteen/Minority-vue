import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
const ArticleDetails = () => import('@/views/article/ArticleDetails.vue')
const AddArticle = () => import('@/views/addarticle/AddArticle')
const NotFound = () => import('@/components/common/404/NotFound')

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/home',
      component: Home
    },{
      path: '/articledetails/:id',
      component: ArticleDetails
    },{
      path: '/addarticle',
      component: AddArticle
    },{
      path:'*',
      redirect: '/'
    }
  ]
})
