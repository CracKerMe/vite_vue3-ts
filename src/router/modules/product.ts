import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  component: RouterView,
  children: [{
    path: 'list',
    name: 'productList',
    component: () => import('../../views/product/productList.vue')
  }, {
    path: 'cate',
    name: 'productCate',
    component: () => import('../../views/product/productCate.vue')
  }, {
    path: 'attr',
    name: 'productAttr',
    component: () => import('../../views/product/productAttr.vue')
  }, {
    path: 'reply',
    name: 'productReply',
    component: () => import('../../views/product/productReply.vue')
  }]
}
export default routes
