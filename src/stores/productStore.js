import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    isLoading: false,
  }),
  actions: {
    async fetchProducts() {
      // If we already have products, don't fetch them again
      if (this.products.length > 0) {
        return;
      }

      this.isLoading = true;
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});