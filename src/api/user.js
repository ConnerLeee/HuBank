import request from '../utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function signup(data) {
  return request({
    url:'/user/signup',
    method:'post',
    data
  })
}

export function detail_info(username){
  return request({
    url:'/user/dinfo',
    method:'get',
    params:{username}
  })
}

export function upload_info(data){
  return request({
    url:'/user/dinfo',
    method:'post',
    data
  })
}

export function renew_info(data){
  return request({
    url:'user/update',
    method:'post',
    data
  })
}