import request from '@/utils/request'

export function getData() {
  return request({
    url: '/v1/combo/recommend/page/get?limit=2&offset=0&t=1591857660819',
    method: 'get'
  })
}
