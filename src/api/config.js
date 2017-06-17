/**
 * 配置编译环境和线上环境之间的切换
 *
 * localapi: 是否使用本地API接口
 * prodapi: 是否使用线上API接口
 * BaseUrl: 域名地址
 * ImgUrl: static服务器所在域名地址
 * ApiUrl: 业务服务器请求地址
 *
 */
import axios from 'axios/dist/axios'

let BaseUrl = ''
let ApiUrl = 'http://www.iqinban.com/v2/api'
let ImgUrl = 'http://www.iqinban.com/v2/api'

// 预定义AJAX请求
const fetch = axios.create({
  baseURL: ApiUrl,
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 预定义FORM请求
const form = axios.create({
  baseURL: ApiUrl,
  timeout: 10 * 1000,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
})

export {
  ApiUrl,
  ImgUrl,
  BaseUrl,
  fetch,
  form
}
