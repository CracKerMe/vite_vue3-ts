import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router/'

// 文档参考：https://axios-http.com/zh/docs/intro

// 一定要看：当前示例 是将登录后的token暂存在 sessionStorage，每次请求都在headers中token字段进行前后端鉴权。建议按照实际项目需求进行修改

// 设置请求头和请求路径
axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL
axios.defaults.timeout = 30000
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      // @ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 控制登录过期的锁
let isRefreshing = false

// 响应拦截
axios.interceptors.response.use((res) => {
  const status = res.status

  // 正确的情况（假定请求成功 前后台约定的code为0）
  if (status === 200 && res.data.code === 0) {
    return res
  }

  // 登录过期（假定登录过期 (前后台约定的code为401 或者 HTTP状态码 为410000)）
  if (status === 410000 || res.data.code === 401) {
    if (isRefreshing) return Promise.reject(res)
    isRefreshing = true
    sessionStorage.setItem('token', '')
    // token过期操作
    ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      // 登录过期的回调方法：比如清楚过期登录信息，跳转到登录页面
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
      // 抛出异常
    }).finally(() => {
      isRefreshing = false
    })
  }

  // 其它错误情况
  ElMessage.error(res.data.msg || '请求失败，请稍后重试')
  // 手动返回一个 Promise 异常
  return Promise.reject(res)
}, function (error) {
  ElMessage.error(error.message || '请求失败，请稍后重试')
  return Promise.reject(error)
})

interface ResType<T> {
  code: number
  data: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  put<T>(url: string, params?: unknown): Promise<ResType<T>>
  delete<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
  download(url: string): void
}

const request: Http = {
  get (url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  put (url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .put(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  delete (url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .delete(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload (url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download (url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}
export default request
