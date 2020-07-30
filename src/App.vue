<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// import Home from './components/Home.vue' dont need with router-view
import NavBar from './components/NavBar'
import Footer from './components/Footer'


   

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
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
#app {
   font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
   font-weight: 400;
		line-height: 1.75em;
		letter-spacing: 0.025em;
}

a {
  
  transition: 0.5s;
}

a:hover,
a:active,
a:focus {
  outline: none;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0 0 30px 0;
  font-size: 17px;
  font-family: 'IBM Plex Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  margin: 0 0 20px 0;
  padding: 0;
}

/* Prelaoder */

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #f2f2f2;
  border-top: 6px solid #00D177;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1s linear infinite;
  animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}



</style>
