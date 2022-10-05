import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js' // index.js는 생략가능 (=>./store)

createApp(App)
.use(router)
.use(store)
.mount('#app')

