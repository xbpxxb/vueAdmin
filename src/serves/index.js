import axios from 'axios'
// import Cookies from 'js-cookie'
var qs = require('qs');

axios.defaults.baseURL = 'http://192.168.2.188:8888/'

axios.interceptors.request.use(
  config => {
      // 这里写死一个token，你需要在这里取到你设置好的token的值
      const token = sessionStorage.getItem('token');
      if (token) {
          // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
          config.headers.token = token;
      }
      return config
  },
  error => {
      return Promise.reject(error)
  });
export  {axios}


// 请求封装
export const get_serve = url =>{
  return axios.get(url).then(res => {
    if(res.data.code === 0){
        return res.data
    }
  }).catch(err => {
    console.log(err)
  })
}
export const post_serve = (url,params) =>{
  return axios.post(url,qs.stringify(params)).then(res => {
    if(res.data.code === 0){
      return res.data
    }
  }).catch(err => {
    console.log(err)
  })
}

// 登录
export const login_serve = (params) => {
  return post_serve('userapi/user/login',params)
}
