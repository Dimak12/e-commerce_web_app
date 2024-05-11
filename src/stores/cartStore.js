// cartStore
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: [],
        status: 'Your cart is empty',
        subtotal: 0,
        vat: 0,
        total:0,
    }),
    actions: {
        addToCart(product) {
            this.cart.push(product);
            console.log(this.cart);
            this.calctotals();
        },

        removeFromCart(item){
            this.cart.splice(this.cart.indexOf(item), 1)
            this.calctotals();
        },

        calctotals(){
            this.subtotal = parseFloat((this.cart.reduce((total, item) => total + item.price, 0)).toFixed(2));
            this.vat = parseFloat((this.subtotal * 0.1).toFixed(2));
            this.total = parseFloat((this.subtotal + this.vat).toFixed(2));
        },

    }
    
})