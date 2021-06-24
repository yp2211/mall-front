import request from '../utils/request'

export function getHomeContent() {
    return request({
        url:'http://localhost:8888/home/content',
        method:'get'
      });
}
