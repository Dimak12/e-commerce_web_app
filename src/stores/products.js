import { defineStore } from 'pinia'

export const useproductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        name: 'Your cart is empty'
    }),

    actions: {
        async fetchProducts(){
            try{
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                this.products = data
            } catch(err){
                console.log(err.message);
            }
        },
    }
})