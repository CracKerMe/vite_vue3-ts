import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/permission',
  component: RouterView,
  children: [{
    path: 'admin',
    name: 'permissionAdmin',
    component: () => import('../../views/permission/adminIndex.vue')
  }, {
    path: 'role',
    name: 'permissionRole',
    component: () => import('../../views/permission/roleIndex.vue')
  }, {
    path: 'rule',
    name: 'permissionRule',
    component: () => import('../../views/permission/ruleIndex.vue')
  }]
}
export default routes
