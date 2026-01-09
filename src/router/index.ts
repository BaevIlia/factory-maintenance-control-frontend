import {createRouter, createWebHistory} from "vue-router";
import RequestsPage from "../pages/RequestsPage.vue";
import HomePage from "../pages/HomePage.vue";
import MainLayout from "../Layouts/MainLayout.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomePage
            },
            {
                path: 'requests',
                name: 'Requests',
                component: RequestsPage
            },
            {
                path: 'profile',
                name: 'Profile',
                component: ProfilePage
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;