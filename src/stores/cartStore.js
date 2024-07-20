// cartStore
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        status: 'Your cart is empty',
        subtotal: parseFloat(localStorage.getItem('subtotal')) || 0,
        vat: parseFloat(localStorage.getItem('vat')) || 0,
        total:parseFloat(localStorage.getItem('total')) || 0,
    }),
    actions: {
        addToCart(product) {
            this.cart.push(product);
            this.calctotals();
            this.updateLocalStorage();
            
        },

        removeFromCart(item){
            this.cart.splice(this.cart.indexOf(item), 1);
            this.calctotals();
            this.updateLocalStorage();
            
        },

        calctotals(){
            this.subtotal = parseFloat((this.cart.reduce((total, item) => total + item.price, 0)).toFixed(2));
            this.vat = parseFloat((this.subtotal * 0.1).toFixed(2));
            this.total = parseFloat((this.subtotal + this.vat).toFixed(2));
        },

        updateLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
            localStorage.setItem('subtotal', this.subtotal.toString());
            localStorage.setItem('vat', this.vat.toString());
            localStorage.setItem('total', this.total.toString());
        },
        


    }
    
})