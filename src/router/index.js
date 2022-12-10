import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from "../layout/Layout.vue";

const routes = [
    // 主页
    {
        path:'/',
        name:'Layout',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path:'home',
                name:'Home',
                component: () => import("../views/Home.vue")
            },
            {
                path:'transfer',
                name:'Transfer',
                component: () => import("../views/Transfer.vue")
            },
        ]
    },
    // 登录页
    {
        path:'/login',
        name:'Login',
        component: () => import("../views/Login.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router