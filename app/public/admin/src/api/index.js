import axios from 'axios'
import qs from 'qs'
import Router from '../router'
import { Message } from 'element-ui'

let $router
// 响应拦截
axios.interceptors.response.use((response) => {
  return Promise.resolve(response)
}, (error) => {
  let status = null
  $router = Router.getRouter()
  if (error.response && error.response.status) {
    status = error.response.status
  } else {
    Message({
      type: 'error',
      message: '网络连接失败'
    })
  }
  if (status === 401) {
    $router.replace('/login')
    window.sessionStorage.removeItem('isLogin')
    window.localStorage.removeItem('isLogin')
  } else if (status === 500) {
    Message({
      type: 'error',
      message: error.response.data.message || error.response.data.errorMessage
    })
  } else {
    if ($router.currentRoute.path !== '/login') {
      Message({
        message: error.response.data.message || error.response.data.errorMessage,
        type: 'error',
        duration: 3 * 1000
      })
    }
  }
  return Promise.reject(error)
})

export default {
  request: function (api, params, success, error) {
    if (api.mock && api.mock.enable === true) {
      // console.log('mock data: [app=' + api.app + ', path=' + api.path + ']')
      if (typeof success === 'function') {
        success(api.mock.data)
      }
      return
    }
    // const app = apps[api.app]
    const config = {
      url: process.env.VUE_APP_BASE_URL + api.path,
      method: 'post',
      data: params,
      responseType: 'json',
      // TODO:这里增加额外负担
      headers: {
        'Content-Type': (api.contentType === 'json' ? 'application/json' : api.contentType) || 'application/x-www-form-urlencoded; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest'// 标记ajax的异步请求
      },
      timeout: null,
      withCredentials: true
    }

    if (api.method) {
      config.method = api.method
    }

    if (String(config.method).toLowerCase() === 'get') {
      config.params = params
    }
    if (String(api.contentType).toLowerCase() !== 'json' && String(api.contentType).toLowerCase() !== 'multipart/form-data') {
      config.transformRequest = [function (data) {
        return qs.stringify(data)
      }]
    }

    if (api.timeout) {
      config.timeout = api.timeout
    }
    config.responseType = api.dataType || 'json'
    let $http = axios(config)
    if (success) {
      $http = $http.then(function (response) {
        success(response.data)
      })
    }

    if (error) {
      $http = $http.catch(function (exception) {
        error(exception)
      })
    }
    return $http
  }
}
