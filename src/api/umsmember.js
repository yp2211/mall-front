import request from '../utils/request'

export function getAuthCode() {
    return request({
        url:'/sso/getAuthCode',
        method:'get'
      });
}
