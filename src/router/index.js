import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from "../layout/Layout.vue";

const routes = [
    // 主页
    {
        path:'/',
        name:'Layout',
        component: Layout,
        redirect: '/login',
        children: [
            {
                path:'home',
                name:'Home',
                component: () => import("../views/Home.vue")
            },
            {
                path:'personaltransfer',
                name:'Personaltransfer',
                component: () => import("../components/Personaltransfer.vue")
            },
            {
                path:'innertransfer',
                name:'Innerbanktransfer',
                component: () => import("../components/Innerbanktransfer.vue")
            },
            {
                path:'intertransfer',
                name:'Interbanktransfer',
                component: () => import("../components/Interbanktransfer.vue")
            },
        ]
    },
    // 登录页
    {
        path:'/login',
        name:'Login',
        component: () => import("../views/Login.vue")
    },
    // 注册页
    {
        path:'/register',
        name:'Register',
        component: () => import("../views/Register.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



export default router