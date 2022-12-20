import axios from 'axios'
import {ElMessage,ElMessageBox} from 'element-plus'
import store from '../store'
import { getToken } from '../utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: "http://139.9.132.108:8080", // url = base url + request url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  //Success
  response => {
    const res = response.data
    if(res.code===20000){
      ElMessage({
        message: res.message || '成功',
        type: 'success',
        duration: 5 * 1000
      })
    }
    if(res.code===20001){
      ElMessage({
        message: res.message || '成功',
        type: 'success',
        duration: 5 * 1000
      })
    }


    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000&&res.code !== 20001&&res.code !== 20002) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } 
    else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
