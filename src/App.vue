<template>
  <div id="app">
    <Header />
    <!-- <DropNav /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import DropNav from './components/DropNav'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    DropNav
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
