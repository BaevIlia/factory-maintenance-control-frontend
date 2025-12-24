import {createRouter, createWebHistory} from "vue-router";
import RequestsPage from "../pages/RequestsPage.vue";
import HomePage from "../pages/HomePage.vue";
import MainLayout from "../Layouts/MainLayout.vue";

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
                path: '/requests',
                name: 'Requests',
                component: RequestsPage
            }

        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;