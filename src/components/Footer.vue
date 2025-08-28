<template>
  <footer class="footer">
    <div>© 2025 Goodies Store</div>
    <div>All rights reserved</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

.footer div {
  flex: 1 1 200px;
}
</style>