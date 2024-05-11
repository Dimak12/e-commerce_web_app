<template>
    <header>
        <div class="logo">
            <router-link to="/" class="router-link"><i class="fa-regular fa-hand-peace"></i></router-link>
            <router-link to="/" class="router-link title">My Store</router-link>
        </div>
        <nav>
            <ul class="nav_links">
                <li><router-link to="/products" class="link">Products</router-link></li>
                <li>|</li>
                <li><router-link to="/about" class="link">About</router-link></li>
                <li>|</li>
                <li><router-link to="/contacts" class="link">Contacts</router-link></li>
            </ul>
            
        </nav>
        <router-link class="cart" to="/cart">
            <button>
                <font-awesome-icon :icon="['fas', 'cart-shopping']" size="2x"/>
                <span class="cart-count" v-if="cartStore.cart.length > 0">{{ cartStore.cart.length }}</span>
            </button>
        </router-link>
    </header>
</template>

<script>

import { useCartStore } from '@/stores/cartStore';

export default {
    
    name:'Header',
    setup () {
        const cartStore = useCartStore()

        return {cartStore}
    }
}
</script>

<style scoped>

    *{
        background-color: #34b3a0;
    }

    header {
        display: grid;
        grid-template-columns: 0.7fr 1fr 1fr;
        align-content: center;
        padding: 30px 20px;
        height: 80px;
        
    }

    button{
        border-radius: 50px;
        height: 50px;
        width: 50px;
        border: 3px solid;
        cursor: pointer;
    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        font-size: 30px;
        
    }

    nav{
        align-self: center;
    }
    
    .nav_links{
        list-style: none;
        font-size: 20px;
        font-weight: bold;
        
    }

    .nav_links li{
        display: inline-block;
        padding: 0px 8px;
        color: inherit; 
        text-decoration: none;
    }

    .link{
        color: inherit; 
        
    }

    
    .router-link{
       text-decoration: none;
       color: inherit; 
    }

    .router-link i{
        font-size:60px;
    }

    .cart{
        display:flex;
        justify-self: end;
        text-decoration: none;
        flex:1;
    }

    .title{
        font-weight: bold;
    }

    .cart-count {
        background-color: rgb(204, 43, 43);
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        position: absolute;
        top: 0;
        right: 1;
}

</style>