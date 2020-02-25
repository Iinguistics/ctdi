<template>
<div>
  <div class="top-wrap">
    <div id="wrapper" @mouseover="mouseOver" @mouseleave="mouseLeave"> <!--<p id="wrapper"></p> --> </div>
      <div class="hero-title" ><h1>STB-CPE</h1></div>
  </div>
   <div class="head"><h3>stb / cpe services division</h3></div>
   <div class="container">
     <p>
      In just ten years, CTDI has totally revolutionized the STB / CPE service business and has become the global leader in both the cable and telecom service industries.  CTDI has in-depth experience with many in-region, high-volume STB / CPE test, repair and logistics programs. This allows us to provide our customers a comprehensive end-to-end, integrated solution that not only leverages CTDI’s extensive CPE management expertise, but also provides high-quality, web-based control and management for all test, repair and logistics activity via ETOS. Our ability to establish regional hubs provides our customers with better control of their assets, eliminates transportation and customs fees, and greatly enhances service levels and product availability.  Numerous OEMs have certified CTDI’s CPE operations and test systems to perform in-and-out-of-warranty test and repair services.
      </p>
     <p>
       Today, CTDI’s STB operations network now includes 35 world-class facilities supported by over 9,500 CPE service professionals who are authorized to test and repair a variety of Carrier, MSO and OEM STBs, Modems, Gateways and Tablet Devices. CTDI offers a fully integrated service model whereby we provide in-region screen & clean, testing, refurbishment, warehousing and order fulfillment services, including Direct to Home. Today, CTDI’s innovative multi-unit test systems, the Gen-5 AND Gen-7 STB tester, CMTX 5.0 Modem and Gateway tester, help us test and process over 78 million units annually.
     </p>
     <img src="../assets/CTDI-Services/ctdi-stb.jpg" alt= "ctdi facility" id="stbImg">
     <p>CTDI also has over 30 of our STB / CPE operations OEM certified to perform in-warranty repair for STBs, Gateways and Tablet Devices.  OEM certifications include: ARRIS, Technicolor, Samsung, and Amazon. </p>
   </div>
</div>
  </template>

  <script>
  
  import hoverEffect from 'hover-effect';
  import anime from 'animejs';





  export default {

    name: 'StbCpe',
    data() {
      return {
        texture1: require('../assets/CTDI-Services/internal-hardware-2.jpg'),
        texture2: require('../assets/CTDI-Services/modem.jpg'),
        texture3: require('../assets/Hover/displacement.png'),
        
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


  .top-wrap{
     width: 100%;
     height: 100vh;
     background: #161616;
  }



#wrapper {
      margin-top: 50px;
      width: 800px;
      height: 600px;
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
      font-family: 'Major Mono Display';
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
  font-family: "Cosi Azure" !important;
}

    .head h3{
    font-size: 42px;
    line-height: 49px;
    font-weight: 600;
    text-align: center;
    color: #202124;
    margin-bottom: 150px;
    margin-top: 200px;
    text-transform: uppercase;
  }

p{
    font-size: 17px;
    line-height: 26px;
    color: #202124;
    text-align: left; 
}

#stbImg{
  width: 600px;
  height: 400px;
  border-radius: 4px;
  margin-top: 50px;
  margin-bottom: 50px;
}


.divider {
  height: 1px;
  background: #444;
  margin: auto;
  max-width: 75%;
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