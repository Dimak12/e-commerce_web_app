<template>
  <div class="about-container">
    <div class="about-content">
      <h1>About Goodies Store</h1>
      <div class="section">
        <h2>Our Story</h2>
        <p>
          The Goodies Store was born from a simple idea: to create a place where
          you can find a curated collection of high-quality, unique, and
          delightful products. We believe that shopping should be an experience,
          not a chore. Our journey started in a small workshop, driven by a
          passion for craftsmanship and an eye for detail. Today, we are proud
          to share our collection with you.
        </p>
      </div>
      <div class="section">
        <h2>What We Offer</h2>
        <p>
          We source products from all over the world, focusing on men's and
          women's fashion, cutting-edge electronics, and exquisite jewelry. Each
          item in our store is carefully selected to ensure it meets our high
          standards of quality, style, and value. We are constantly updating
          our inventory to bring you the latest trends and timeless classics.
        </p>
      </div>
      <div class="section">
        <h2>Our Commitment</h2>
        <p>
          Customer satisfaction is at the heart of everything we do. We are
          committed to providing you with an exceptional shopping experience,
          from our easy-to-navigate website to our dedicated customer support
          team. Thank you for choosing Goodies Store. We hope you find something
          you love!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
  flex: 1;
}

.about-content {
  max-width: 800px;
  width: 100%;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  border-bottom: 3px solid #34b3a0;
  display: inline-block;
  padding-bottom: 10px;
}

.section {
  margin-bottom: 30px;
  text-align: left;
}

.section h2 {
  font-size: 1.8rem;
  color: #34b3a0;
  margin-bottom: 15px;
}

.section p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}
</style>