<template>
  <div class="products-page">
    <div v-if="productStore.isLoading" class="loading-container">
      <div class="spinner"></div>
      <p>Loading Goodies...</p>
    </div>

    <div v-else class="product-grid">
      <div class="product-card" v-for="product in productStore.products" :key="product.id">
        <div class="image-container">
          <img :src="product.image" class="product-image" />
        </div>
        <div class="details">
          <div class="category">{{ product.category }}</div>
          <h3 class="title">{{ product.title }}</h3>
          <div class="price-add-row">
            <div class="price">${{ product.price }}</div>
            <button class="cart-btn" @click="cartStore.addToCart(product)">
              <font-awesome-icon :icon="['fas', 'cart-plus']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore";
import { useProductStore } from "@/stores/productStore";

export default {
  setup() {
    const cartStore = useCartStore();
    const productStore = useProductStore();
    return { cartStore, productStore };
  },
  mounted() {
    this.productStore.fetchProducts();
  },
};
</script>

<style scoped>
.products-page {
  background-color: #f8f9fa;
  padding: 20px;
  min-height: calc(100vh - 130px);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.product-card {
  
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.image-container {
  width: 100%;
  height: 250px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.details {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  border-top: 1px solid #f0f0f0; 
}

.category {
  font-size: 0.8rem;
  color: #6c757d;
  text-transform: capitalize;
  margin-bottom: 8px;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  color: #343a40;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 32px;
  margin-bottom: 15px;
}

.price-add-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #34b3a0;
}

.cart-btn {
  background-color: #fafafa; 
  border: 2px solid #ddd;
  color: #34b3a0;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.cart-btn:hover {
  background-color: #34b3a0;
  color: white;
  border-color: #34b3a0;
}

.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 170px);
}
.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #34b3a0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.5s linear infinite;
  margin-bottom: 20px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-container p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
</style>