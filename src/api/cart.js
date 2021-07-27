import request from '../utils/request'

export function getCartList() {
    const url = "/cart/list";
    return request({
        url:'/cart.json', //rul
        method:'get'
      });
  }

  
export function postCartDelete(ids) {
const url = "/cart/delete";
return request({
    url:'/cart.json', //rul
    method:'post'
    });
}