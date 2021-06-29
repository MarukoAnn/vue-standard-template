/* eslint-disable import/extensions */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
// eslint-disable-next-line import/no-unresolved
import router from './router/index'
// eslint-disable-next-line import/no-unresolved
import store from './store/index'
// 集成Element Plus 框架
// 引入样式
import 'element-plus/lib/theme-chalk/index.css'

const vue = createApp(App)
vue.use(router)
vue.use(ElementPlus)
vue.use(store)
vue.mount('#app')
