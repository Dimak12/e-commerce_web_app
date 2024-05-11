import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Cart from '../views/Cart.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },

    {
        path: '/products',
        name: 'Products',
        component: Products 
    },

    {
        path: '/about',
        name: 'About',
        component: About 
    },

    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts 
    },

    {
        path: '/cart',
        name: 'Cart',
        component: Cart 
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router