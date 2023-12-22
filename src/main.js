import '../scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'
import store from './store'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(store)

app.use(router)
app.mount('#app')
