<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
body{
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: roboto;
}
</style>
