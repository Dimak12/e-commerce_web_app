<template>
  <header>
    <!-- Logo (only icon on mobile) -->
    <div class="logo">
      <router-link to="/" class="router-link">
        <i class="fa-solid fa-store"></i>
        <span class="title desktop-only">Goodies</span>
      </router-link>
    </div>

    <!-- Burger button (mobile only) -->
    <button class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navigation -->
    <nav :class="['nav_links', { open: isMenuOpen }]">
      <ul>
        <li>
          <router-link to="/products" class="link" @click="closeMenu">
            Products
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="link" @click="closeMenu">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contacts" class="link" @click="closeMenu">
            Contacts
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Cart always visible -->
    <router-link class="cart" to="/cart">
      <button>
        <font-awesome-icon :icon="['fas', 'cart-shopping']" size="2x" />
        <span class="cart-count" v-if="cartStore.cart.length > 0">
          {{ cartStore.cart.length }}
        </span>
      </button>
    </router-link>
  </header>
</template>

<script>
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";

export default {
  name: "Header",
  setup() {
    const cartStore = useCartStore();
    const isMenuOpen = ref(false);

    const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
    const closeMenu = () => (isMenuOpen.value = false);

    return { cartStore, isMenuOpen, toggleMenu, closeMenu };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #34b3a0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 30px;
}

.router-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.router-link i {
  font-size: 40px;
  margin-right: 10px;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
}

/* Hide title on mobile */
.desktop-only {
  display: inline;
}
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

/* Nav */
.nav_links {
  display: flex;
  gap: 20px;
}

.nav_links ul {
  display: flex;
  list-style: none;
  gap: 15px;
}

.link {
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}

/* Cart */
.cart button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 3px solid;
  cursor: pointer;
  position: relative;
  background: #34b3a0;
  text-decoration: none;
  color: inherit,
}

.cart-count {
  background-color: rgb(204, 43, 43);
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -5px;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 auto; /* Center burger */
}

.burger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 768px) {
.nav_links {
    display: none;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%); /* center under burger */
    background: #34b3a0;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    width: 200px; /* fixed width for nice alignment */
  }

  .nav_links.open {
    display: flex;
  }

  .nav_links ul {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    text-align: center;
  }

  .burger {
    display: flex;
  }
}
</style>