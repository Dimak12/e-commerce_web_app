<template>
  <div class="container">
    <Header />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
/* Use a global style tag here for base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto Mono", monospace; /* Using the font you imported */
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* This is the key! */
}

.content {
  flex: 1; /* This makes the content area grow */
  overflow-y: auto; /* Add scroll only to the content area if needed */
}
</style>