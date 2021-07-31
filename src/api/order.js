import request from '../utils/request'

export function getOrderList(pageNum, pageSize, status) {
    return request({
        url:'/order/list',
        method:'get',
        params: {
            "pageNum": pageNum,
            "pageSize": pageSize,
            "status": status
        }
      });
}
