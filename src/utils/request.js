import axios from 'axios'
import store from "../store";
// import user from "../store/modules/user"

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 15000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    console.log("interceptors");
    console.log(store.getters);
    if (!!localStorage.getItem("user-token")) {
      console.log(localStorage.getItem("user-token"));
      config.headers['Authorization'] = localStorage.getItem("user-token");
    }
    // if (store.getters.isAuthenticated) {
    //   console.log(store.getters.token);
    //   config.headers['Authorization'] = store.getters.token;
    // }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
)

export default service;