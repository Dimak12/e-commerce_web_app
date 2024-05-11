<!-- Products.vue -->
<template>
    <div class="products-container">
        <div class="main">
        <div class="items" v-for="product in productStore.products" :key="product.id">
            <img :src="product.image" class="product-image" />
            <div class="details">
                <div class="title">{{product.title}}</div>
                <div class="category">{{product.category}}</div>
                <div class="price">${{product.price}}</div>
            </div>
            <div class="add">
                <button class="cart-btn" @click="cartStore.addToCart(product)"><font-awesome-icon :icon="['fas', 'cart-plus']" size="2x"/></button>
            </div>
        </div>
    </div>
    </div>
    
    
</template>

<script >
import { useproductStore } from '../stores/products';
import { useCartStore } from '@/stores/cartStore';

export default{
    setup (){
       const  productStore = useproductStore()
       const cartStore = useCartStore()

       productStore.fetchProducts()

       return {productStore, cartStore}
    }
}

</script>

<style scoped>
    .products-container {
  max-height: calc(100vh - 130px);
  overflow-y: auto;
  padding-bottom: 20px; 
}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  padding: 20px;
  gap: 20px;
}

    .items{
        display: grid;
        grid-template-columns: 2fr 0.7fr;
        grid-template-rows: 1fr 0.7fr;
        border: 1px solid;

             
    }


    .product-image{
        max-width: 70%;
        height: 100%;
        grid-area: 1/1/2/3;
        justify-self: center;
        
    }

    .details{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        grid-area: 2/1/3/2;
        align-items: space-between;
        padding-left: 7px;

    }
     
    .cart-btn{
        grid-area: 2/2/3/3;
        border-radius: 50px;
        height: 50px;
        width: 50px;
        border: 3px solid;
        cursor: pointer;

    } 

    .add{
        margin-top: 20px;
        justify-self: end;
        padding-right: 5px;
    }

    .title{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
    }

    .category{
        margin-bottom: 10px;
    }
    

       
</style>