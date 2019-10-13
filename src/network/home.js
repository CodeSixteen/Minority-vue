import { get } from "./get"
//请求banner
export function getDataByBanner() {
    return get({
        url: "home/banner"
    })
}
//请求banner下面的广告位
export function getHomeAdImg() {
    return get({
        url: "home/ad_img"
    })
}
//请求文章列表
export function getArticleLists(id) {
    return get({
        url: `home/article_lists/${id}`
    })
}
//请求右侧小广告
export function getRightAdImg() {
    return get({
        url: "home/ad_img_info"
    })
}
//请求matrix列表
export function getMatrixLists() {
    return get({
        url: "home/matrix_lists"
    })
}



