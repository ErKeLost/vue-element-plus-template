import { createAxios } from '@erkelost/axios-ext'
const http = createAxios({
  baseURL: '/api',
  timeout: 5000
})
console.log(http)
