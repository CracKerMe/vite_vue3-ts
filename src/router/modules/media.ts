import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/media',
  component: RouterView,
  children: [{
    path: 'list',
    name: 'mediaIndex',
    component: () => import('../../views/media/mediaIndex.vue')
  }, {
    path: 'offline',
    name: 'mediaOffline',
    component: () => import('../../views/media/mediaOffline.vue')
  }]
}
export default routes
