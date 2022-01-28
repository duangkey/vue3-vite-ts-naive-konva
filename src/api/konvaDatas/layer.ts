import http from '@/utils/http/axios'

export function getResourcesList() {
  return http.request({
    method: 'GET',
    url: 'public/mock/resources.json',
  })
}
