import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
const PostArticle = () => import('@/views/article/post.vue')
const AddArticle = () => import('@/views/addarticle/AddArticle')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/home',
      component: Home
    },{
      path: '/post/:id',
      component: PostArticle
    },{
      path: '/addarticle',
      component: AddArticle
    }
  ]
})
