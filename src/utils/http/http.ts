import axios, { AxiosInstance } from 'axios'
import Router from '@/router/index'

const TOKEN = window.localStorage.getItem('token')
const INVALID_TOKEN = '990010004'
export class Interceptors {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: '/',
      headers: {
        token: TOKEN,
      },
    })
  }
  // 初始化拦截器
  init() {
    // 请求接口拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 判断一下是否有cookie 如果有的话则把cookie放入请求头中
        if (!TOKEN) {
        }
        return config
      },
      (err) => {
        console.error(err)
      },
    )

    // 响应拦截器
    this.instance.interceptors.response.use((response) => {
      if (
        response.data.retCode === INVALID_TOKEN &&
        response.data.retMessage === '无效的Token'
      ) {
        window.localStorage.removeItem('token')
        localStorage.removeItem('userinfo')
        Router.push('/user/login')
        // window.location.href = '/user/login'
        return
      }
      return response
    })
  }
  // 返回一下
  getInterceptors() {
    return this.instance
  }
}
