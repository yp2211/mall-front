import request from '../utils/request'
// import auth from "../store/modules/auth"
// import store from "../store";

export function postSsoLogin(u, p) {
    const url = "/sso/login";
    return request({
        url: url, //rul
        method:'post',
        params: {
            "password": p,
            "username": u,
        }
    });
  }

export function postSsoInfo(u) {
    const url = "/sso/info";
    return request({
        url: url, //rul
        method:'get',
        params: {
            "username": u,
        },
    });
}
