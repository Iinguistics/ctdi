<template>
  <div>
     <!--==========================
      Services Section
    ============================-->
  <section>
      
      <div class=" service-wrap-top">
         <router-link to=/services/stb-cpe  id="item-1">
         <div class="blendParent-top "><div class="blend all" ></div></div><h5 id="stb">STB/CPE</h5></router-link>
           
         <router-link to=/services/mobile>
         <div class="blendParent-top "><div class="blend-2 all" ></div></div><h5 id="mobile">Mobile <br>& <br> Consumer Electronics</h5></router-link>
            
         
      </div>
        
        <div class=" service-wrap">
          <router-link to=/services/network>
           <div class="blendParent item"><div class="blend-3 all" ></div></div><h5 id="network-services">Network Services</h5></router-link>
        
        <router-link to=/services/product>
          <div class="blendParent item"><div class="blend-4 all" ></div></div><h5 id="product">Products/Supply</h5></router-link>
           
         <router-link to=/services/deployment>
           <div class="blendParent item"><div class="blend-5 all" ></div></div><h5 id="network-deployment">Network <br> Deployment Solutions</h5></router-link>
            
        </div>
    </section>

        <div class="divider-title " id="services-title-wrap">
          <div class="divider"></div>
            <h3 id="services-title">About us</h3>  
         <div class="divider"></div>   
       </div>
      <div class="company-desc container"><h3>CTDI - Global Engineering <br> Repair & Logistics</h3></div>
      <div class="statement container">
        <p>Founded in 1975, CTDI is a full-service, global engineering, repair and logistics company providing best-cost solutions to the communications industry. CTDI's one-stop service commitment to customers has fueled the growth from a core business of network and CPE equipment repair.</p><br>
        <p>We support our customers in planning, modernizing, maintaining and dismantling their technical equipment and their networks, and in their project planning. In addition, we provide distribution or after-sales services for their products.</p>
        </div>
         <div class="divider2"></div>
         <div class="flex-passion container">
       <div class="passion-item">
       <h5>Engineering</h5>
       <p>We develop our own test systems for troubleshooting electronic devices and systems. That is our core competence. Our portfolio includes over 75,000 different assembly types. Over 450 engineers worldwide work for the CTDI and are constantly developing new test systems or improving existing ones. This enables us to offer our customers maximum service, flexibility and security.</p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Home/engineering.jpg" alt="blueprints sitting on table with ruler">
         <img class="img-fluid passion-item" src="../assets/CTDI-Home/end-service.jpg" alt="two people working together on computer">
        <div class="passion-item">
       <h5 id="end">End to end service</h5>
       <p>Our customers are looking for a partner who can provide comprehensive services. CTDI offers repair and logistics at the highest level and takes over a sub-process for your customers and "end-to-end" the complete process chain.</p>
       </div>
     </div>
     <div class="divider2"></div>
     <!--==========================
      vid links
    ============================-->
        <div class="flex-vid">
          <router-link to=/sustainability/environment class="vid-item"> 
             <video autoplay muted loop id="envVid">
                <source src="../assets/CTDI-Home/environment-link.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
                </video>
                <h5 id="envText">Environment</h5>
            </router-link>

             <router-link to=/locations class="vid-item"> 
             <video autoplay muted loop id="locVid">
                <source src="../assets/CTDI-Home/locations-link.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
                </video>
                 <h5 id="locText">Locations</h5>
            </router-link>
        </div>

        <div class="divider-title ">
          <div class="divider"></div>
            <h3 id="services-title">Our QA Standards</h3>  
         <div class="divider"></div>   
       </div>
         <div class="flex-passion-2 container">
        <router-link to="/quality"><img class="img-fluid passion-item" src="../assets/CTDI-Quality/ctdi-quality-tech.jpg" alt="qa technician inspecting a part"> </router-link>
       <div class="passion-item">
       <router-link to="/quality"><h5>Quality Assured</h5></router-link>
       <p>The satisfaction of our customers is the starting point and goal of our quality policy. We measure all our decisions and activities against this guiding principle.</p>
       <p>The quality of each individual's work and, overall, the quality of our services is one of the decisive factors for the success of our customers.</p>
       </div>
     </div>
       
        <div class="divider-title ">
          <div class="divider"></div>
            <h3 id="services-title">Working at CTDI</h3>  
         <div class="divider"></div>   
       </div>
         <div class="flex-passion-2 container">
       <div class="passion-item">
       <a href="#"><h5>Let's Connect</h5></a>
       <p>We invite you to search our career opportunities and apply online today to come explore our dynamic culture.  Experience the CTDI difference and put the power of our successful 40-year history behind your career!</p>
       <p>With more than 4,800 employees in Europe and over 16,500 worldwide, we are a strong partner for our customers and an attractive employer.</p>
       </div>
       <a href="https://ctdicareers.silkroad.com/"><img class="img-fluid passion-item" src="../assets/CTDI-Home/working-at-ctdi.jpg" alt="two employees standing side by side"></a> 
     </div>
     <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>  
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
        toTop: function () {
         window.scrollTo({
         top: 0,
         behavior: 'smooth',
});
      }
},
   mounted(){
      this.toTop();
   }

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
  margin-bottom: 90px;
}

.company-desc h3{
  font-size: 38px;
  color: #002C5F;
 
}

.statement{
  height: 300px;
  max-width: 65%;
}

.statement p{
  font-size: 17px;
  line-height: 28px;
  text-align: left;
  margin: auto;
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

.divider2 {
    height: 1px;
    background: #444;
    margin: auto;
    max-width: 80%;
  }

.service-wrap-top{
  display: flex;
  flex-direction: row;
  height: 340px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 80%;
  margin-bottom: 77px;
  margin-top: 70px;
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
      background-image: url('../assets/CTDI-Home/stb.jpg');
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
}

.all{
  	height: 100%;
    width: 100%;
    display: block;
     background-size: cover;
     box-shadow: 0 0 10px rgba(0,0,0 ,0.1 );
     background-repeat: no-repeat;
    transition: all 200ms ease-in-out;
}



.blend-3{
      background-image: url('../assets/CTDI-Home/sat-shot.jpg');
}

.blend-4{
      background-image: url('../assets/CTDI-Home/product-supply.jpg');
}

.blend-5{
      background-image: url('../assets/CTDI-Home/bit-cloud-J5-Kqu_fxyo-unsplash (1).jpg');
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



.all:before{
   content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.blendParent:hover .all, .blendParent:focus .all{
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
  height: 350px;
  justify-content: space-evenly;
  margin: auto;
  max-width: 83%;
  margin-top: 75px;
  margin-bottom: 100px;
}


.flex-vid a{
  text-decoration: none;
}

#envVid:hover ~ #envText{
  color:#00d177;
}

#locVid:hover ~ #locText{
  color:#00d177;
}

.vid-item video{
  width: 505px;
  height: 215px;
}



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


 .flex-passion img{
    height: 270px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
  }

   .flex-passion-2 img{
    height: 270px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
  }


 
.flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 75%;
  justify-content: space-evenly;
  height: 800px;
  margin-top: 100px;
}

.flex-passion-2{
  display: flex;
  flex-direction: row;
  max-width: 75%;
  justify-content: space-evenly;
  height: 350px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.flex-passion-2 a{
  color: #111111;
}


.passion-item{
  width: 450px; 
  align-items: flex-start; 
}

.passion-item p{
  text-align: left;
}

#end{
  margin-top: 40px;
}

#to-top a{
 text-align: right;
 color: #202124;
 font-size: 16px;
 line-height: 24px;
 font-weight: 500;
 margin-bottom: 40px;
 margin-top: 50px;
}

#to-top a{
  text-decoration: none;
}

#to-top a:hover{
  cursor: pointer;
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

.statement{
  height: 625px;
  max-width: 65%;
}
  
   .flex-passion{
  display: flex;
  flex-direction: column;
  height: 1700px;
  padding-top: 5px;
  align-content: center;
  margin-bottom: 50px;
  }

    .flex-passion-2{
  display: flex;
  flex-direction: column;
  height: 850px;
  padding-top: 5px;
  align-content: center;
  margin-bottom: 50px;
  }

  .passion-item{
     margin: auto;
   max-width: 95%;
  }
 
 .flex-vid{
   height: 625px;
 }


}

@media(min-width: 1400px){
 
 .divider-title {
    width: 60%;
}

  .company-desc{
  max-width: 55%;
}
   /* added height to both blend parents */
   .blendParent-top {
    width: 945px;
    height: 480px;
}

.service-wrap-top{
  height: 480px;
  margin-bottom: 77px;
  margin-top: 70px;
}

.service-wrap-top h5{
  max-width: 945px;
}

  .blendParent {
    width: 629px;
    height: 400px;
}

.service-wrap h5{
  max-width: 630px;
}

.flex-vid{
  max-width: 66%;
  height: 400px;
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

.flex-passion{
  max-width: 65%;
}

.flex-passion-2{
  max-width: 65%;
}

#services-title-wrap{
  margin-top: 225px;
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
