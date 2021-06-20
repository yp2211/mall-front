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
