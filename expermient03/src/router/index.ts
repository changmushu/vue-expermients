import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import LocationOne from "../components/LocationOne.vue"
import LocationTwo from "../components/LocationTwo.vue"
import LocationThree from "../components/LocationThree.vue"

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: 'locationone',
                component: LocationOne,
            },
            {
                path: 'locationtwo',
                component: LocationTwo,
            },
            {
                path: 'locationthree',
                component: LocationThree,
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})