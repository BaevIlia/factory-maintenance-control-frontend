import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import RequestsPage from "../pages/RequestsPage.vue";
import HomePage from "../pages/HomePage.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import RequestDetailPage from "@/pages/RequestDetailPage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes : Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/auth',
    },
    {
        path: '/auth',
        name: 'Auth',
        component: AuthPage,
    },
    {
        path: '/home',
        name: 'MainLayout',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomePage
            },
            {
                path: '/requests',
                name: 'Requests',
                component: RequestsPage
            },
            {
                path: '/profile',
                name: 'Profile',
                component: ProfilePage
            },
            {
                path: '/requests/:id',
                name: 'requests-detail',
                component: RequestDetailPage
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;