import axios from 'axios'
// import { getToken } from './auth'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 15000
  });

//   // request拦截器
// service.interceptors.request.use(config => {
//     if (store.getters.token) {
//       config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config
//   }, error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   })

export default service