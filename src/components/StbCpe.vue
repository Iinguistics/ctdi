<template>
  <div > 
    <div id="wrapper"></div>
  </div>
</template>


<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
    <script src="../../hover-effect.umd.js"></script>
<script>

import moment from 'moment'
import hoverEffect from 'hover-effect';


  export default {
    name: 'StbCpe',
    data() {
      return {
     container: null,
     bunny: null,
     app: null,
     texture1: require('../assets/CTDI-Culture/ctdi-passion.jpg'),
     texture2: require('./motherboard-ripple.jpg'),
     texture3: require('../assets/Hover/ripple.png'),
     hoverDistort: null
    }
  },
    created() {
    
  },

   methods: {  
        hover: function(){
           const hoverDistort = new hoverEffect({
            parent: document.getElementById('wrapper'),
            intensity: 0.3,
            image1:  this.texture1,
            image2: this.texture3,
            displacementImage:  '../assets/CTDI-Culture/ctdi-passion.jpg'
      });
      
     }
   },
  mounted(){
       this.hover();
       window.scrollTo(0, 0)
     
  
  }
}
 


</script>



<style scoped>

#wrapper{
  height: 500px;
  width: 500px;
  margin: auto;
  
}






</style>