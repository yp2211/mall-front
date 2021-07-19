import request from '../utils/request'

export function getHomeContent() {
    return request({
        url:'/sso/getAuthCode',
        method:'get'
      });
}
