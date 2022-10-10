import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js' // index.js는 생략가능 (=>./store)
import loadImage from './plugins/loadImage'

createApp(App)
.use(router)  // $route, $router
.use(store) // $store
.use(loadImage) // $loadImage
.mount('#app')

