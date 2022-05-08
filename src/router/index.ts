import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'homeIndex',
  component: () => import('../views/home/homeIndex.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import('../views/login/loginPage.vue')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
