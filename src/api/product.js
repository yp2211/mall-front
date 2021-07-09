import request from '../utils/request'

export function getProductDetail(id) {
    console.log("product.js.getProductDetail");
    return request({
        url:'/product.json',
        method:'get'
      });
}

export function getRelatedProducts(pid) {
    console.log("product.js.getRelatedProducts");
    return request({
        url:'/relatedProducts.json',
        method:'get'
      });
}

export function getRecentProducts(pid) {
  console.log("product.js.getRecentProducts");
  return request({
      url:'/recentProducts.json',
      method:'get'
    });
}

export function getProducts() {
  console.log("product.js.getProducts");
  return request({
      url:'/products.json',
      method:'get'
    });
}

export function getWishList(uid) {
  console.log("product.js.getWishList");
  return request({
      url:'/wishlist.json',
      method:'get'
    });
}

export function getCompareList(uid) {
  console.log("product.js.getCompareList");
  return request({
      url:'/compareProducts.json',
      method:'get'
    });
}
