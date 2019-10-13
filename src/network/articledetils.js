import { get } from "./get"
import { post } from './post'
//请求文章详情
export function getArticle(data) {
    return post({
        url: "article",
        method: 'post',
        data: data
    })
}
//请求评论内容
export function getArticleComment(id) {
    return get({
        url: `article/comment/${id}`
    })
}
//请求推荐文章列表
export function getRecommented() {
    return get({
        url: `article/recommented`
    })
}
//提交评论
export function submitComment(data) {
    return post({
        url: `article/submitcomment`,
        method: 'post',
        data: data
    })
}

//提交评论
export function reqClickZan(data) {
    return post({
        url: `article/clickZan`,
        method: 'post',
        data: data
    })
}

//请求当前用户的点赞数据
export function reqIsClickZ(data) {
    return post({
        url: `article/isclickzan`,
        method: 'post',
        data: data
    })
}

//请求取消点赞
export function cancleClickZ(data) {
    return post({
        url: `article/cancleclickzan`,
        method: 'post',
        data: data
    })
}

export function articleclickZan(data) {
    return post({
        url: `article/articleclickZan`,
        method: 'post',
        data: data
    })
}
//请求取消文章点赞
export function canclearticleclickZan(data) {
    return post({
        url: `article/canclearticleclickZan`,
        method: 'post',
        data: data
    })
}
//请求取消文章点赞
export function articleIsClickZ(data) {
    return post({
        url: `article/articleIsClickZ`,
        method: 'post',
        data: data
    })
}













