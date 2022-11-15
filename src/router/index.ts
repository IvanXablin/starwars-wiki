import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import CharactersPage from "@/pages/CharactersPage.vue";
import PlanetsPage from "@/pages/PlanetsPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/characters',
        component: CharactersPage,
    },
    {
        path: '/planets',
        component: PlanetsPage,
    },
    {
        path: '/starships',
        component: CharactersPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;