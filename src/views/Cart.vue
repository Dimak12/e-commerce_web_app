<template>
  <div class="cart-page">
    <div class="empty-cart" v-if="cartStore.cart.length === 0">
      <i class="fa-solid fa-cart-arrow-down empty-icon"></i>
      <h2>Your Cart is Empty</h2>
      <p>Looks like you haven't added any goodies yet.</p>
      <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
    </div>

    <div class="main-grid" v-else>
      <div class="cart-items-container">
        <div class="cart-item" v-for="item in cartStore.cart" :key="item.id">
          <img :src="item.image" class="product-image" />
          <div class="details">
            <div class="title">{{ item.title }}</div>
            <div class="category">{{ item.category }}</div>
            <div class="price">${{ item.price }}</div>
          </div>
          <button class="remove-btn" @click="cartStore.removeFromCart(item)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      <div class="checkout-summary">
        <h2>Order Summary</h2>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>${{ cartStore.subtotal }}</span>
        </div>
        <div class="summary-row">
          <span>VAT (20%)</span>
          <span>${{ cartStore.vat }}</span>
        </div>
        <div class="summary-row total">
          <span>Total</span>
          <span>${{ cartStore.total }}</span>
        </div>
        <div class="coupon">
          <input type="text" placeholder="Enter Coupon Code" />
          <button class="apply-btn">Apply</button>
        </div>
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore";

export default {
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
};
</script>

<style scoped>
.cart-page {
  background-color: #f8f9fa;
  padding: 30px;
  min-height: calc(100vh - 130px);
}

.main-grid {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr; /* stack */
  }
  .checkout-summary {
    position: relative; /* remove sticky on mobile */
    top: auto;
    margin-top: 20px;
  }
}

.cart-items-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  gap: 20px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  background-color: #fff;
  border-radius: 4px;
}

.details {
  flex-grow: 1;
}

.title {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 5px;
}

.category {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.price {
  font-weight: bold;
  font-size: 1.1rem;
}

.remove-btn {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.remove-btn:hover {
  background-color: #fbebee;
  color: #b02a37;
}

/* Checkout Summary Card */
.checkout-summary {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  position: sticky; /* Makes it stay in place on scroll */
  top: 20px;
}

.checkout-summary h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #555;
}

.summary-row.total {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.coupon {
  display: flex;
  margin-top: 20px;
  gap: 10px;
}

.coupon input {
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}

.coupon .apply-btn {
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  padding: 0 15px;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background: #34b3a0;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 25px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 9px rgba(52, 179, 160, 0.4);
}

.checkout-btn:hover {
  background: #2a8d7d;
}

/* Empty Cart Styles */
.empty-cart {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  font-size: 5rem;
  color: #34b3a0;
  margin-bottom: 20px;
}

.empty-cart h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.empty-cart p {
  color: #6c757d;
  margin-bottom: 30px;
}

.shop-now-btn {
  background-color: #34b3a0;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #2a8d7d;
}
</style>