<!-- cart.vue -->

<template>
    <div class="cart-page">
        <div class="main">
            <div class="status" v-if="cartStore.cart.length === 0"><h1>{{cartStore.status}}</h1></div>
            <div class="cart-container" v-else>
                <div class="cart-item" v-for="item in cartStore.cart" :key="item.id">
                    <img :src="item.image" class="product-image" />
                    <div class="details">
                        <div class="title">{{ item.title }}</div>
                        <div class="category">{{ item.category }}</div>
                        <div class="price">${{ item.price }}</div>
                    </div>
                    <button class="remove-btn" @click="cartStore.removeFromCart(item)"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="checkout">
                <div class="elements subtotal">
                    <p>Subtotal</p>
                    <p>${{cartStore.subtotal}}</p>
                </div>
                <div class="elements vat">
                    <p>VAT</p>
                    <p>${{cartStore.vat}}</p>
                </div>
                <div class="elements total">
                    <p>Total</p>
                    <p>${{cartStore.total}}</p>
                </div>
                <div class="elements coupon">
                    <label for="">Coupon</label>
                    <input type="text">
                </div>
                <div class="elements btn"><button>Check Out</button></div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { useCartStore } from '@/stores/cartStore';

export default {
    setup () {
        const cartStore = useCartStore()

        return {cartStore}
    }
    
}
</script>

<style scoped>

    .cart-page {
        max-height: calc(100vh - 130px);
        overflow-y: auto;
        padding-bottom: 20px; 
    }

    .main {
        display: grid;
        grid-template-columns: 3fr 1fr;
        background-color: white;
        padding: 10px 10px;
        gap: 40px;
        height: calc(97vh - 130px);
    }

    .cart-container {
        display: grid;
        border: 1px solid;
        gap: 10px;
        padding: 10px;
        max-height: calc(97vh - 130px);
        overflow-y: auto; 
        grid-template-columns: 1fr 1fr 1fr;
    }

    .cart-item {
        display: grid;
        grid-template-columns: 1fr 2fr 0.3fr;
        margin-bottom: 10px;
        margin-top: 10px;
        border: 1px solid;
        gap: 10px;
        align-items: center;
        width: 340px;
        height: 200px;
        justify-self: center;
    }

    .product-image{
        width:100%;
        height: 100%;
        max-width: 150px; 
        max-height: 100%;
        grid-area: 1/1/2/3;
        justify-self: center;
        grid-column: 1/2;
        border-right: 1px solid;
    }

    .details{
        grid-column: 2/3;
    }

    .checkout{
        grid-column: 2/3;
        border: 1px solid;
        padding: 10px;
        
    }

    .elements{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .subtotal{
        margin-top: 15px;
    }

    .btn{
        justify-content: center;
        margin-top: 40px;
        
    }
    .btn button{
        width: 200px;
        background: #34b3a0;
        height: 30px;
        box-shadow: 4px 5px 9px #34b3a0;
        font-family: roboto;
        font-weight: bold;
        border: 1px solid;
        cursor: pointer;
    }

    .remove-btn{
        cursor: pointer;
        border-radius: 500px;
        grid-column: 3/4;
        height: 20px;
        width: 20px;
        border-color: red;
        color: red;
        background-color: white;
    }

    .title{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
    }

    .category{
        margin-bottom: 10px;
    }

    .status{
        justify-self: center;
        align-self: center;
    }

</style>