<template>
  <div>
      
  <!--==========================
      Top Title
    ============================-->
     <section>
       <div class="company-desc container">
         <h3>CTDI - Global Engineering <br> Repair & Logistics</h3>
       </div>
     </section>


     <!--==========================
      Services Section
    ============================-->
  <section>
      
      <div class=" service-wrap-top">
         <router-link to=/leadership/jerry-parsons  id="item-1">
         <div class="blendParent-top "><div class="blend" ></div></div><h5 id="stb">STB/CPE</h5></router-link>
           
         <router-link to=/leadership/jerry-parsons>
         <div class="blendParent-top "><div class="blend-2" ></div></div><h5 id="mobile">Mobile <br>& <br> Consumer Electronics</h5></router-link>
            
         
      </div>
        
        <div class=" service-wrap">
          <router-link to=/leadership/jerry-parsons>
           <div class="blendParent item"><div class="blend-3" ></div></div><h5 id="network-services">Network Services</h5></router-link>
        
        <router-link to=/leadership/jerry-parsons >
          <div class="blendParent item"><div class="blend-4" ></div></div><h5 id="product">Products/Supply</h5></router-link>
           
         <router-link to=/leadership/jerry-parsons>
           <div class="blendParent item"><div class="blend-5" ></div></div><h5 id="network-deployment">Network <br> Deployment Solutions</h5></router-link>
            
        </div>
    </section>

        <div class="divider-title ">
          <div class="divider"></div>
            <h3 id="services-title">Services</h3>  
         <div class="divider"></div>   
       </div>
    
     <!--==========================
      vid links
    ============================-->
        <div class="flex-vid">
          <router-link to=/leadership/jerry-parsons class="vid-item"> 
             <video autoplay muted loop id="envVid">
                <source src="../assets/CTDI-Home/environment-link.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
                </video>
                <h5 id="envText">Environment</h5>
            </router-link>

             <router-link to=/leadership/jerry-parsons class="vid-item"> 
             <video autoplay muted loop>
                <source src="../assets/Ethernet.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
                </video>
                 <h5>Environment</h5>
            </router-link>

             <router-link to=/leadership/jerry-parsons class="vid-item"> 
             <video autoplay muted loop>
                <source src="../assets/Ethernet.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
                </video>
                 <h5>Environment</h5>
            </router-link>

             <router-link to=/leadership/jerry-parsons class="vid-item"> 
             <video autoplay muted loop>
                <source src="../assets/Ethernet.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
                </video>
                 <h5>Environment</h5>
            </router-link>
        </div>




         
  
       <div class="blendParent"><div class="blend" ></div></div>
         <div class="blendParent">  <div class="blend">
           <a href="#">
           <video autoplay muted loop id="myVideo" data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="900">
  <source src="../assets/Ethernet.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
  </video></a>
 </div>
</div>



  </div>
 
  
  
   

</template>


<script>



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



div{
  color: #111111;
}

body p{
  font-size: 17px;
  color: #111111;
}

.company-desc{
  text-align: center;
  margin-top: 90px;
  max-width: 70%;
  margin-bottom: 30px;
}

.company-desc h3{
  font-size: 38px;
  color: #002C5F;
 
}

.statement{
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 100px;
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
    width: 68%;
    margin-bottom: 30px;
}

.divider {
    flex: 1;
    height: 3px;
    background: #444;
}

.service-wrap-top{
  display: flex;
  flex-direction: row;
  height: 340px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 80%;
  margin-bottom: 77px;
}

.service-wrap-top h5{
  color: #ffffff;
  font-weight:bold;
  font-size: 18px;
  background-color: #212428;
  height: 75px;
  margin: auto;
  max-width: 800px;
}



.service-wrap-top a{
  text-decoration: none;
  padding-right: 3px;
}

#mobile{
  padding-top: 5px;
}


#stb{
    padding-top: 25px;
}

#product{
   padding-top: 25px;
}

#network-services{
  padding-top: 25px;
}

#network-deployment{
  padding-top: 15px;
}


.service-wrap{
  display: flex;
  flex-direction: row;
  height: 315px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 71%;
  margin-bottom: 100px;
}

.service-wrap h5{
  color: #ffffff;
  font-weight:bold;
  font-size: 18px;
  background-color: #212428;
  height: 75px;
  margin: auto;
  max-width: 800px;
}

.service-wrap a{
  text-decoration: none;
  padding-right: 3px;
}





  #myVideo {
  position: relative;
  right: 0;
  bottom: 0;
  width: 350px;
  height: 200px;
}

.blendParent-top {
    width: 670px;
    height: 340px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding-left: 0px;
}


.blendParent {
    width: 445px;
    height: 250px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding-left: 0px;
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

.blend-2{
      background-image: url('../assets/ElectronicsImg/pink-cellphone.jpg');
			height: 100%;
      width: 100%;
      display: block;
      background-size: cover;
      box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
      background-repeat: no-repeat;
     transition: all 200ms ease-in-out;
}

.blend-3{
      background-image: url('../assets/ElectronicsImg/pink-cellphone.jpg');
			height: 100%;
      width: 100%;
      display: block;
      background-size: cover;
      box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
      background-repeat: no-repeat;
     transition: all 200ms ease-in-out;
}

.blend-4{
      background-image: url('../assets/ElectronicsImg/pink-cellphone.jpg');
			height: 100%;
      width: 100%;
      display: block;
      background-size: cover;
      box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
      background-repeat: no-repeat;
     transition: all 200ms ease-in-out;
}

.blend-5{
      background-image: url('../assets/ElectronicsImg/pink-cellphone.jpg');
			height: 100%;
      width: 100%;
      display: block;
      background-size: cover;
      box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
      background-repeat: no-repeat;
     transition: all 200ms ease-in-out;
}

/* top */
.blendParent-top:hover .blend, .blendParent-top:focus .blend{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.blendParent-top:hover .blend-2, .blendParent-top:focus .blend-2{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}


/* ----------------------- */



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

.blend-2:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.blend-3:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.blend-4:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.blend-5:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

/* blend-2 */

.blendParent:hover .blend-2, .blendParent:focus .blend-2{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

/* blend-3 */

.blendParent:hover .blend-3, .blendParent:focus .blend-3{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

/* blend-4 */

.blendParent:hover .blend-4, .blendParent:focus .blend-4{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

/* blend-5 */

.blendParent:hover .blend-5, .blendParent:focus .blend-5{
  background-color: #00d177;
  background-blend-mode:luminosity;
  transition-delay: 0s;
   -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}


/* vid links */

.flex-vid{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 700px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 83%;
  margin-bottom: 100px;
}


.flex-vid a{
  text-decoration: none;
}

#envVid:hover ~ #envText{
  color:#00d177;
}

.vid-item video{
  width: 505px;
  height: 215px;
}



/*
.vid-item video
  border-radius: 20px;
*/
.vid-item h5{
  width: 383px;
  margin: auto;
  margin-top: -8px;
  color: #ffffff;
  font-weight:bold;
  font-size: 18px;
  background-color: #212428;
  height: 60px;
  padding-top: 18px;
}





@media (max-width: 667px) {
  .service-wrap{
   display: flex; 
  flex-direction: column;
  height: 850px;
  max-width: 100%;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
}



.service-wrap-top{
  display: flex;
  flex-direction: column;
  height: 850px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 100%;
}

.blendParent-top {
    width: 415px;
    height: 340px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding-left: 0px;
}

.service-wrap-top h5{
  width: 415px;
}

 .divider-title {
    width: 99%;
    padding-bottom: 10px;
}

.blendParent {
    width: 415px;
    height: 207px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding-left: 0px;
}
  

 


}

@media(min-width: 1400px){
 
 .divider-title {
    width: 60%;
}

  .company-desc{
  max-width: 55%;
}
   
   .blendParent-top {
    width: 945px;
}

.service-wrap-top h5{
  max-width: 945px;
}

  .blendParent {
    width: 629px;
}

.service-wrap h5{
  max-width: 630px;
}

.flex-vid{
  max-width: 66%;
  height: 850px;
}

.vid-item video{
  width: 540px;
  height: 305px;
}

  .vid-item h5{
  margin-top: -10px;
  max-width: 540px;
 
}
.vid-item{
  max-width: 550px;
}

.vid-item h5{
 width: 540px;
  margin: auto;
  margin-top: -10px;
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