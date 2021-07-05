import request from '../utils/request'

export function getProductDetail(id) {
    console.log("product.js.getProductDetail");
    return request({
        url:'/product.json',
        method:'get'
      });
}

export function getRelatedProducts(id) {
    console.log("product.js.getRelatedProducts");
    return request({
        url:'/relatedProducts.json',
        method:'get'
      });
}

export function getRecentProducts(id) {
  console.log("product.js.getRecentProducts");
  return request({
      url:'/recentProducts.json',
      method:'get'
    });
}

export function getProducts(id) {
  console.log("product.js.getProducts");
  return request({
      url:'/products.json',
      method:'get'
    });
}