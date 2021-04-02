import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://8.129.223.209:8080/',
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token // 请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

export function get (url, params) {
  return instance.get(url, {
    params
  })
}

export function post (url, data) {
  return instance.post(url, data)
}

// 登录
export function login (url, phone, pas) {
  return instance.post(url, null, {
    params: {
      phoneNum: phone,
      password: pas
    }
  })
}

// 注册
export function insert (url, phone, pas, username) {
  return instance.post(url, null, {
    params: {
      password: pas,
      phoneNumber: phone,
      username: username
    }
  })
}

// 获取文章
export function article (url, pageNum, pageSize) {
  return instance.get(url, {
    params: {
      pageNum: pageNum,
      pageSize: pageSize
    }
  })
}

// 获取留言
export function leaveMsg () {
  return instance.get('leaveMsg/all', '')
}
