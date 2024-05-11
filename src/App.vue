<!-- App.vue -->
<template>
  <div class="container">
    <Header/>
    <router-view class="content"/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default{
  name:'App',
  components : {Header, Footer},
    
}


</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: roboto;
    
}

.content {
  flex: 1; 
  overflow: auto;
}

</style>
