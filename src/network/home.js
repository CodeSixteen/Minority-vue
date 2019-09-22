import { request } from "@/network/request"
//请求banner
export function getDataByBanner() {
    return request({
        url: "home/banner"
    })
}
//请求banner下面的广告位
export function getHomeAdImg() {
    return request({
        url: "home/ad_img"
    })
}
//请求文章列表
export function getArticleLists() {
    return request({
        url: "home/article_lists"
    })
}
//请求右侧小广告
export function getRightAdImg() {
    return request({
        url: "home/ad_img_info"
    })
}
//请求matrix列表
export function getMatrixLists() {
    return request({
        url: "home/matrix_lists"
    })
}



