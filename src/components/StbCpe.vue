<template>
<div class="top-wrap">
    <div id="wrapper" @mouseover="mouseOver" @mouseleave="mouseLeave"> <!--<p id="wrapper"></p> --> </div>
      <div class="hero-title" ><h1>offbeat</h1></div> 
  </div>
  </template>

  <script>
  
  import hoverEffect from 'hover-effect';

 

 import anime from 'animejs';





  export default {

    name: 'StbCpe',
    data() {
      return {
        texture1: require('../assets/CTDI-Quality/award-2.jpg'),
        texture2: require('../assets/CTDI-Quality/award.jpg'),
        texture3: require('../assets/ctdi-att-award.png'),
        
    }
  }

  ,
  created() {}

  ,

  methods: {
    hover: function() {
      const hoverDistort=new hoverEffect( {
          parent: document.getElementById('wrapper'),
          intensity: 0.3,
          image1: this.texture1,
          image2: this.texture2,
          displacementImage: this.texture3
        }
      );
    },

    mouseOver: function(){
    let textWrapper = document.querySelector('.hero-title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


      anime.timeline({loop: false})
      .add({
      targets: '.hero-title .letter',
      translateX: [80,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 100 + 40 * i
      });
      
    },

     mouseLeave: function(){
      anime.timeline({loop: false})
      .add({
      targets: '.hero-title .letter',
      translateX: [0,-80],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 800,
      delay: (el, i) => 40 * i
      });         
      }
     
  }, 

    

  

  mounted() {
    this.hover();
    this.hover2();
    window.scrollTo(0, 0)
  }
}



</script>
<style scoped>

.statement {
    max-width: 80%;
    margin: auto;
    padding-bottom: 35px;
    margin-bottom: 75px;
  }

  .statement h5 {
    font-size: 42px;
    line-height: 49px;
    color: #111111;
    font-weight: 600;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 135px;
  }

  .top-wrap{
     width: 100%;
      height: 100vh;
      background: #161616;
  }

#wrapper {
      margin-top: 25px;
      width: 800px;
      height: 550px;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
}


/*
#wrapper-1 p change to this for perfect sizing wrap div in p tag also change top wrapper to wrapper-1
  height: 550px;
  width: 800px;
  max-width: 100%; 
*/

.hero-title {
      position: absolute;
      top: 35%;
      left: 30%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-family: "Cosi Azure";
      font-size: 80px;
}

.hero-title .letter {
      display: inline-block;
      opacity: 0;
}


h1 {
  color: #ffffff;
  text-align: center;
  margin: auto;
  vertical-align: middle;
  font-size: 40px;
  padding-top: 220px;
  padding-bottom: 10px;
}




h6 {
  max-width: 80%;
  text-align: center;
  font-weight: 600;
  color: #202124;
  font-size: 23px;
  padding-top: 150px;
  padding-bottom: 45px;
  margin: auto;
}


.divider {
  height: 1px;
  background: #444;
  margin: auto;
  max-width: 75%;
}

h5 {
  color: #111111;
  font-weight: bold;
  font-size: 18px;
}

a {
  text-decoration: none !important;
}












@media (max-width: 667px) {
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 21px;
  }

  

}


@media (max-width: 920px) {


}

</style>