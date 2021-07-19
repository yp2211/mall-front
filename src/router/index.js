import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/home/HomeView.vue'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name:'home',
            component: HomeView,
            redirect:'/index',
            children:[
                {
                  path: '/index',
                  name: 'index',
                  component: () => import('../views/home/index.vue')
                }, {
                  path: '/shop',
                  name: 'shop',
                  component: () => import('../views/home/shop.vue')
                }, {
                  path: '/products',
                  name: 'productGrid',
                  component: () => import('../views/home/productGrid.vue')
                }, {
                  path: '/product/:pid',
                  name: 'productDetails',
                  component: () => import('../views/home/productDetails.vue')
                }, {
                  path: '/cart',
                  name: 'cart',
                  component: () => import('../views/home/cart.vue')
                }, {
                  path: '/wishlist',
                  name: 'wishlist',
                  component: () => import('../views/home/wishlist.vue')
                }, {
                  path: '/checkout',
                  name: 'checkout',
                  component: () => import('../views/home/checkout.vue')
                }, {
                  path: '/order-tracking',
                  name: 'OrderTracking',
                  component: () => import('../views/home/OrderTracking.vue')
                }, {
                  path: '/compare',
                  name: 'compare',
                  component: () => import('../views/home/Compare.vue')
                }, {
                  path: '/about',
                  name: 'about',
                  component: () => import('../views/home/about.vue')
                }, {
                  path: '/404',
                  name: 'notfound',
                  component: () => import('../views/home/notfound.vue')
                // }, {
                //   path: '/product/:id',
                //   name: 'product',
                //   component: () => import('./pages/product.vue')
                // }, {
                //   path: '/detail/:id',
                //   name: 'detail',
                //   component: () => import('./pages/detail.vue')
                // }, {
                //   path: '/secKillDetail/:id',
                //   name: 'secKillDetail',
                //   component: () => import('./pages/secKillDetail.vue')
                // }, {
                //   path: '/secKillOrderConfirm/:id/:token',
                //   name: 'secKillOrderConfirm',
                //   component: () => import('./pages/secKillOrderConfirm.vue')
                }
              ]
        },
    ]
})

export default router
