import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'

import router from './router/index'
import '@/assets/css/reset.scss'
import AppProvider from '@/components/application/Application.vue'
const appProvider = createApp(AppProvider)
const app = createApp(App)
appProvider.mount('#appProvider', true)
setupStore(app)
app.use(router).mount('#app')
