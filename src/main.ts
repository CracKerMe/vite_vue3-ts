import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './styles/index.scss'
import '../mock/system/index.ts'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
