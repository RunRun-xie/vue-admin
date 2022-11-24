import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const pinia = createPinia()

const SecretPiniaPlugin = () => {
  return { secret: 'the cake is a lie' }
}

const app = createApp(App)
pinia.use(SecretPiniaPlugin)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
