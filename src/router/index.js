import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home'
import Products from '../views/Products'
import About from '../views/About'
import Contacts from '../views/Contacts'
import Cart from '../views/Cart'

const routes = [
    {
        path: '/home',
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
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router