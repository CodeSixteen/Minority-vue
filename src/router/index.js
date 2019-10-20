import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
const ArticleDetails = () => import ('@/views/article/ArticleDetails.vue')
const AddArticle = () => import ('@/views/addarticle/AddArticle')
const Page404 = () => import ('@/components/common/404/NotFound')
const Matrix = () => import ('@/views/matrix/index')
const Subscription = () => import ('@/views/subscription/index')
const SpecPlanning = () => import ('@/views/specplanning/index')

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [{
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
        path: '/SpecPlanning',
        component: SpecPlanning
    },{
        path: '/Page404',
        component: Page404
    }, {
        path: '*',
        redirect: '/Page404'
    }]
})