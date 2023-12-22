import '../scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')

