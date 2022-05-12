import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import productRoutes from './modules/product'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/loginPage.vue')
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'homeIndex',
        component: () => import('../views/home/homeIndex.vue')
      },
      productRoutes,
      mediaRoutes,
      permissionRoutes
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/common-view/page-404.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
