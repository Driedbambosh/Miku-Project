import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://8.129.223.209:8080/',
  timeout: 5000
})

export function get (url, params) {
  return instance.get(url, {
    params
  })
}

export function login (url, phone, pas) {
  return instance.post(url, null, {
    params: {
      phoneNum: phone,
      password: pas
    }
  })
}

export function post (url, data) {
  return instance.post(url, data)
}
