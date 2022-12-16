import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import './permission'
//import mockXHR from '../mock'

//mockXHR.mockXHR()

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
