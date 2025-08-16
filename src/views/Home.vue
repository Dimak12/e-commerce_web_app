<template>
  <div class="home-container">
    <div class="hero">
      <h1>Welcome to the Goodies Store</h1>
      <p>Discover a world of unique and amazing products just for you.</p>
      <router-link to="/products" class="cta-button"
        >Shop Now</router-link
      >
    </div>
    <div class="features">
      <div class="feature-item">
        <i class="fa-solid fa-truck-fast"></i>
        <h3>Fast Shipping</h3>
        <p>Get your goodies delivered to your doorstep in no time.</p>
      </div>
      <div class="feature-item">
        <i class="fa-solid fa-shield-halved"></i>
        <h3>Secure Payments</h3>
        <p>Shop with confidence using our secure payment gateway.</p>
      </div>
      <div class="feature-item">
        <i class="fa-solid fa-gem"></i>
        <h3>Quality Products</h3>
        <p>We handpick the best products to ensure top quality.</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style scoped>
.home-container {
  text-align: center;
  color: #333;
  background-color: #f4f4f9;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070")
      no-repeat center center/cover;
  color: white;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: "Roboto Mono", monospace;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #34b3a0;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  font-size: 1.2rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  box-shadow: 4px 5px 9px #2a8d7d;
}

.cta-button:hover {
  background-color: #2a8d7d;
  transform: translateY(-2px);
}

.features {
  display: flex;
  justify-content: space-around;
  padding: 60px 20px;
  background-color: white;
}

.feature-item {
  flex-basis: 30%;
  padding: 20px;
}

.feature-item i {
  font-size: 3rem;
  color: #34b3a0;
  margin-bottom: 20px;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
</style>