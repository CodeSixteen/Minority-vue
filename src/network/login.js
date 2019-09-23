import axios from 'axios'

export function requestLogin(config) {
    //创建实例
    const instance = axios.create({
        baseURL: 'http://localhost:8102/',
        timeout: 5000,
        method: 'post',
        transformRequest: [
            function (data) {
                // 对 data 进行任意转换处理
                data = JSON.stringify(data)
                return data;
            }
        ]
    })
    //axios拦截
    //请求拦截
    instance.interceptors.request.use(config => {
        //做一些事情：如改变config，让页面显示请求动画（响应时清除动画）,登录验证等
        return config;
    }, err => {
        console.log(err);
    });
    //响应拦截
    instance.interceptors.response.use(res => {
        //做一些事情
        return res.data;
    }, err => {
        console.log(err);
    })
    //发送请求
    return instance(config)
}