import { request } from "@/network/request"

export function getDataByBanner() {
    return request({
        url: "home/banner"
    })
}

export function getHomeAdImg() {
    return request({
        url: "home/ad_img"
    })
}

export function getArticleLists() {
    return request({
        url: "home/article_lists"
    })
}



