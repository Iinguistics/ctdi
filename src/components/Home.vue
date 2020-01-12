<template>
<div>
  <!--==========================
    Intro Section
  ============================-->
 
  <section id="intro">
    <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/cellphone-1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/ctdi-design.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/ctdi-att-award.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
</section>
  

  <main id="main">
  <!--==========================
      Company Description
    ============================-->
     <section>
       <div class="company-desc container">
         <h3>CTDI - Global Engineering <br> Repair & Logistics</h3>
          <div class="statement">We support our customers in planning, modernizing, maintaining and dismantling their technical equipment, their networks, and in their project planning. In addition, we provide distribution or after-sales services for their products.</div>
       </div>
     </section>


     <!--==========================
      Services Section
    ============================-->
  <section>
         <div class="divider-title container">
         <div class="divider"></div>
      <h3 id="services-title">Services</h3>  
        <div class="divider"></div>   
       </div>
      
      <div class="container service-wrap">
         <router-link to=/leadership/jerry-parsons data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="600"><div class="blendParent item"><div class="blend" ></div></div><h5>STB/CPE</h5></router-link>
           
         <router-link to=/leadership/jerry-parsons data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="800"><div class="blendParent item"><div class="blend2" ></div></div><h5>Mobile <br>& <br> Consumer Electronics</h5></router-link>
            
         <router-link to=/leadership/jerry-parsons data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="1000"><div class="blendParent item"><div class="blend" ></div></div><h5>Network Services</h5></router-link>
      </div>
        
        <div class="container service-wrap">
        <router-link to=/leadership/jerry-parsons data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="600"><div class="blendParent item"><div class="blend" ></div></div><h5>Products</h5></router-link>
           
         <router-link to=/leadership/jerry-parsons data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="800"><div class="blendParent item"><div class="blend" ></div></div><h5>Network <br> Deployment Solutions</h5></router-link>
            
         <router-link to=/leadership/jerry-parsons data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="1000"><div class="blendParent item"><div class="blend" ></div></div><h5>Supply</h5></router-link>
        </div>
       
    </section>


    <!--==========================
      About Us Section
    ============================-->
    <section id="about">
      <div class="container">
         <header class="section-header">
          <h3>CTDI - Global Engineering, Repair & Logistics</h3>
          <p>We support our customers in planning, planning, modernizing, maintaining and reducing their technology and networks. We also take on distribution or after-sales service for their products.</p>
        </header>
        <div class="row about-cols">
          <div class="col-md-4" >
            <div class="about-col" data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="600" >
              <div class="img" >
                <img src="../assets/ctdi-monika-ruth.jpg" alt="" class="img-fluid" >
              </div>
              <h2 class="title"><a href="#">Our Mission</a></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div class="col-md-4" >
            <div class="about-col" data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="800" >
              <div class="img">
                <img src="../assets/ctdi-monika-ruth.jpg" alt="" class="img-fluid">
              </div>
              <h2 class="title"><a href="#">Our Plan</a></h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          
          <div class="col-md-4" >
            <div class="about-col" data-aos="fade-up" data-aos-easing="linear"
                 data-aos-delay="1000" >
              <div class="img">
                <img src="../assets/ctdi-monika-ruth.jpg" alt="" class="img-fluid">
              </div>
              <h2 class="title"><a href="#">Our Plan</a></h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>



         
  </main>
           <div class="blendParent"><div class="blend" ></div></div>
          <div class="blendParent">  <div class="blend">
           <a href="#">
           <video autoplay muted loop id="myVideo" data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="900">
  <source src="../assets/Ethernet.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video></a></div></div>



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
      
},

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@-ms-viewport {
		width: device-width;
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

#main{
  background-color: #ffffff;
}

/*-----------------------------
 intro / carousel 
-----------------------------*/
.carousel-item{
  max-width: 100%;
  height: 100vh;
  opacity: 1.0;
  background-position: center !important;
  background-size: cover !important;
}

.carousel-caption h5{
     color: #000;
     font-weight: bolder;
     padding-bottom: 15%;
     font-size: 28px;
     text-transform: uppercase;
}

.carousel-caption p{
     color: #000;
     font-weight: bolder;
     padding-bottom: 25%;
     font-size: 20px;
}

.carousel-caption{
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.d-block{
  opacity: 1.0;    
}

#intro{
  align-items: center !important;
  margin-top: 40px;
}

div{
  color: #111111;
}

body p{
  font-size: 17px;
  color: #111111;
}

.company-desc{
  text-align: center;
  padding-top: 100px;
  max-width: 70%;
}

.company-desc h3{
  font-size: 38px;
  color: #002C5F;
 
}

.statement{
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 100px;
  line-height: 30px;
  text-align: left;
  
}

#services-title{
  padding-right: 20px;
  padding-left: 20px;
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
}

.divider-title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    text-align: center;
    width: 70%;
    padding-bottom: 30px;
}

.divider {
    flex: 1;
    height: 3px;
    background: #444;
}



.service-wrap{
  display: flex;
  flex-direction: row;
  height: 315px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 71%;
}

.service-wrap h5{
  color: #111111;
  font-weight:bold;
  font-size: 18px;
}

.service-wrap a{
  text-decoration: none;
}




.item{
  
  
  
}

  #myVideo {
  position: relative;
  right: 0;
  bottom: 0;
  width: 350px;
  height: 200px;
}

.blendParent {
    width: 300px;
    height: 190px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.blend{
      background-image: url('../assets/ElectronicsImg/laptop-consumer.jpg');
			height: 100%;
      width: 100%;
      display: block;
      background-size: cover;
      box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
      background-repeat: no-repeat;
     transition: all 200ms ease-in-out;
}

.blendParent:hover .blend, .blendParent:focus .blend{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.blend:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

/* 2nd img ect...*/
.blend2{
      background-image: url('../assets/ElectronicsImg/consumers.jpg');
			height: 100%;
      width: 100%;
      display: block;
      background-size: cover;
      box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
      background-repeat: no-repeat;
     transition: all 200ms ease-in-out;
}

.blendParent:hover .blend2, .blendParent:focus .blend2{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.blend2:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}


@media (max-width: 576px) { 
  .carousel-control-prev{
    margin-top: -250px;
  }
  .carousel-control-next{
    margin-top: -250px;
  }
}


@media (max-width: 576px) {
  .service-wrap{
   display: flex; 
  flex-direction: column;
  height: 750px;
  max-width: 100%;
  margin: auto;
  align-items: center;
}

 .divider-title {
    width: 72%;
    padding-bottom: 10px;
}

.blendParent {
    width: 315px;
    height: 195px;
}

}

@media(min-width: 1500px){
  .company-desc{
  max-width: 55%;
}
}

@media (max-width: 960px) {
  
  .blendParent {
    width: 250px;
    height: 170px;
    overflow: hidden;
    position: relative;
    padding: 2px;
  }
 }



</style>