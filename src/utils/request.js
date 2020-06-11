import axios from 'axios'

const devUrl = '//sspai.com/api'
const prodUrl = '//sspai.com/api'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? prodUrl : devUrl,
  timeout: 0 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // if (Vue.ls.get('token')) {
    //   config.headers['Authorization'] = Vue.ls.get('token')
    // }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
