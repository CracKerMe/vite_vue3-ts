
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from './plugins/element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './styles/index.scss'
import '../mock/system/index.ts'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus, { locale: zhCn })
  .mount('#app')
