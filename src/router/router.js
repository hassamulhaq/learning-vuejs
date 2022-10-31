import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import TemplateSyntax from "../components/TemplateSyntax.vue";
import Product from "../components/Product.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'about_us',
        component: About
    },
    {
        path: '/template-syntax',
        name: 'template-syntax',
        component: TemplateSyntax
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    }
]

const router =  createRouter({
    history: createWebHashHistory(),
    routes
})

export default router