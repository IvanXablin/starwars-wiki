import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CharactersPage from "@/pages/CharactersPage.vue";
import PlanetsPage from "@/pages/PlanetsPage.vue";
import StarshipsPage from "@/pages/StarshipsPage.vue";
import Layout from "@/layout/Layout.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        name: 'Layout',
        redirect: {
            name: "HomePage",
        },
        children: [
            {
                path: '/home',
                name: 'HomePage',
                component: HomePage,
            },
            {
                path: '/characters',
                name: 'CharactersPage',
                component: CharactersPage,
            },
            {
                path: '/planets',
                name: 'PlanetsPage',
                component: PlanetsPage,
            },
            {
                path: '/starships',
                name: 'StarshipsPage',
                component: StarshipsPage,
            },
        ],
    },
];

const router = createRouter({
    routes,
    history: createWebHistory('/starwars-wiki/'),
});

export default router;