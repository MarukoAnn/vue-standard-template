import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// eslint-disable-next-line import/no-unresolved
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
