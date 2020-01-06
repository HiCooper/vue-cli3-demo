import axios from 'axios'
import { Message } from 'element-ui'

// api的base_url
axios.defaults.baseURL = window.serverConfig.serverAddress
// request timeout
axios.defaults.timeout = 5000

// request interceptor
axios.interceptors.request.use(config => {
  config.headers['X-Token'] = 'token'
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// respone interceptor
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('err' + error) // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default axios
