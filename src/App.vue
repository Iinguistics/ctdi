<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
// import Home from './components/Home.vue' dont need with router-view
// import BootstrapVue from 'bootstrap-vue'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrap from 'bootstrap'




export default {
  name: 'app',
  components: {
      'NavBar': NavBar,
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
}

</style>
