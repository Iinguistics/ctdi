<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// import Home from './components/Home.vue' dont need with router-view
// import BootstrapVue from 'bootstrap-vue'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import bootstrap from 'bootstrap'


   

export default {
  name: 'app',
  components: {
      'NavBar': NavBar,
      'Footer': Footer,
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
   font-family: 'Roboto', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
   font-weight: 400;
		line-height: 1.75em;
		letter-spacing: 0.025em;
}



</style>
