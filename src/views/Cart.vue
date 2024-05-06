<template>
    <div class="main">
        <div v-if="cart.length === 0"><h1>Your cart is empty</h1></div>
        <div v-else>
            <div class="cart-item" v-for="item in cart" :key="item.id">
                <img :src="item.image" class="product-image" />
                <div class="details">
                    <div class="title">{{ item.title }}</div>
                    <div class="category">{{ item.category }}</div>
                    <div class="price">${{ item.price }}</div>
                </div>
                <button class="remove-btn" @click="removeFromCart(item)">Remove</button>
            </div>
        </div>
    </div>
    
</template>

<script>


export default {
    data(){
        return{
            cart:[]
        }
    },

    methods: {
        
            
    },

        
}
</script>

<style scoped>
    .main {
        flex: 1;
        background-color: white;
    }
</style>