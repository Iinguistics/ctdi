<template>
<div class="mainWrap">
   <div class="slideshow-container">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src="https://i.ibb.co/Vjn9dNH/ctdi-at-work-2.png" alt="ctdi-at-work-2" border="0" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
          <h5>State of the art facility</h5>
          <p>Networking, services</p>
        </div>
      </div>
      <div class="carousel-item trucks">
        <img src="https://i.ibb.co/VTKcWDz/ctdi-trucks.png" alt="ctdi-trucks" border="0" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
      <a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/PDF/CTDIPressRelease_2018AT&TSupplier-Award.pdf" target="_blank"><img src="https://i.ibb.co/R21npZh/ctdi-att-award.png" class="d-block w-100" alt="ctdi-att-award" border="0"></a>
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p></p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
  <div>
     <h2 class="topMid">Expertise</h2>
      <p id="topMidP container">World-class communications test design at your fingertips</p>
  </div>
   <div class="global container">
     <a class="globalChild">
    <img src="https://i.ibb.co/CH0Q5MB/nasa-Q1p7bh3-SHj8-unsplash.jpg" alt="planet earth" style="width:250px; height:195px;">
    <div class="thumbnail-text-overlay"></div>
     </a>
      <a class="globalChild">
    <img src="../assets/CTDI-Locations.jpg" alt="planet earth" style="width:250px; height:195px;">
    <div class="thumbnail-text-overlay"></div>
     </a>
     <a class="globalChild" href="#">
    <div class="module mid">
      <h3>Global Locations</h3>
    </div>
     </a>
  </div>
</div>
</template>


<script>
import axios from 'axios';



export default {
  name: 'Home',
 data() {
      return {
        
      }
    },
    methods: {
      
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mainWrap{
   text-align: center !important;
   background-color: #FEFFFF;
 }

.slideshow-container {
  max-width: 75%;
  position: relative;
  margin: auto;
}

.trucks{
  opacity: 0.8;
}

.topMid{
  padding-top: 90px;
  text-transform: uppercase;
  line-height: 230%;
  color: #000000;
}
#topMidP{
  color: #363636;
}

.global {
  display: flex;
  height: 300px;
  justify-content: space-evenly;
  position: relative;
}

.globalChild{  
  margin: auto;
}

.module {
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(../assets/CTDI-Locations.jpg);
    background-size: cover;
    width: 300px;
    height: 200px;
    margin: 10px 0 0 10px;
    position: relative;
}

.mid h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
}

@media (max-width: 576px) { 
  .global{
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;

}


 }

</style>