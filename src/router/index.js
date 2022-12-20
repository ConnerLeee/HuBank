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
            {
                path:'userinfo',
                name:'UserInfo',
                component:()=>import("../components/UserInfo.vue")
            }
        ]
    },
    // 登录页
    {
        path:'/login',
        name:'Login',
        component: () => import("../views/Login.vue"),
        hidden:true
    },
    // 注册页
    {
        path:'/register',
        name:'Register',
        component: () => import("../views/Register.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export function resetRouter() {
    const newRouter = createRouter({
        history: createWebHashHistory(),
        routes,
    })
    router.matcher = newRouter.matcher // reset router
}



export default router