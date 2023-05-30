import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import LocationOne from "../components/LocationOne.vue"
import LocationTwo from "../components/LocationTwo.vue"
import LocationThree from "../components/LocationThree.vue"
import ShopOne from "../components/Shops/ShopOne.vue"
import ShopTwo from "../components/Shops/ShopTwo.vue"
import ShopThree from "../components/Shops/ShopThree.vue"

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
                path: 'locationone/shopone',
                component: ShopOne,
            },
            {
                path: 'locationone/shoptwo',
                component: ShopTwo,
            },
            {
                path: 'locationone/shopthree',
                component: ShopThree,
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