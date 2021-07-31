import axios from 'axios'
import store from "../store";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 15000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.isAuthenticated) {
      config.headers['Authorization'] = store.getters.token;
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
)

export default service;