<template>
    <header>
        <div class="logo">
            <router-link to="/home" class="router-link"><i class="fa-regular fa-hand-peace"></i></router-link>
            <router-link to="/home" class="router-link">My Store</router-link>
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
        <router-link class="cart" to="/cart"><button><font-awesome-icon :icon="['fas', 'cart-shopping']" size="2x"/></button></router-link>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
        justify-self: end;
    }

</style>