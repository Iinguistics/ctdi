<template>
<div>
  <div class="top-wrap">
    <div id="wrapper" @mouseover="mouseOver" @mouseleave="mouseLeave"></div>
      <div class="hero-title" ><h1>Network Deployment</h1></div>
  </div>
   <div class="head"><h3>network deployment</h3></div>
   <div class="container content">
     <p>
      CTDI's Network Deployment Solution's team has been helping its customers plan, engineer, and determine the financial impacts of their infrastructure for over 45 years with innovative solutions, practical designs, and expert implementations.  We exceed your expectations in terms of time, cost, and capability with feasibility studies to evaluate technology alternatives and identify the right solution for you.
      </p>
      <p>
          With over 100 global facilities, CTDI is strongly positioned to react swiftly to every customer need as it arises. Our goal is to help our customers determine the most cost effective approach to business decisions.  CTDI provides a total project management solution assuring our customers the successful completion of their network build projects.  From design through staging to implementation and testing you can be confident your projects will be on time and within budget.
      </p>
     <p>
       CTDI provides our Carrier, OEM and Enterprise customers the following services:
     </p>
     <li class ="fa fa-angle-right">Site Development: Zoning & Permits, A&E, Site Acquisition</li>
     <li class ="fa fa-angle-right">Materials Management: Planning, Procurement, Warehouse</li>
     <li class ="fa fa-angle-right">Order Fulfillment: Kitting, Staging, Configuration, Equipment Integration/Rack & Stack</li>
     <li class ="fa fa-angle-right">Deployment: Installation, Test, Integrate, Optimization, Decommissioning</li>
     <li class ="fa fa-angle-right">Maintenance: Asset Record Verification Services, Smart Hands, Depot Repair, Spares Management</li>
     <img src="../assets/CTDI-Services/deployment/technician.jpg" alt= "technician installing equipment" id="ctdiImg">
     <p>
        CTDI Engineers and Technicians complete multi-vendor and multi-technology certifications.  CTDI performs work in Central Office, Data Centers, Cell Sites, In Building Small Cell & DAS, and Outside Plant. 
     </p>
     <p id="bottom-p">
         As a highly qualified TL9000-certified workforce that relies on proven processes to deliver consistent results, we listen carefully to our customers to ensure our practices exceed all expectations and standards. With carefully developed processes, we will provide vital information about your network's health, capacity, and growth needs.
     </p>
   </div>
   <div class="services-scope">
     <h5>We make your roll-out flow</h5>
     <img src="../assets/CTDI-Services/deployment/scope-of-services.png" alt="scope of services">
   </div>
   <div class="divider"></div>
   <!-- card wrapper -->
<div class="cards-wrapper container">
    
    <router-link to=/services/product class="cards-item-wrapper"> 
        <div class="card-item-image" id="blue-img"><img src="../assets/CTDI-Services/mobile/product-link.jpg" class="img-fluid"></div>
            <div class="card-item-content-wrapper blue" id="blue-text">
              <div class="card-item-title"><h6>Product / Supply</h6></div>
            <div class="card-item-body-text"><p>To provide a more comprehensive and total service solution, CTDI recently developed and launched a technical supply chain solution specifically for the Mobile & Consumer Device Industries, called MCE-360.</p>
          </div>
        </div>
    </router-link>

     <router-link to=/services/network class="cards-item-wrapper">  
        <div class="card-item-image" id="red-img"><img src="../assets/CTDI-Services/deployment/network-services-link.jpg" class="img-fluid"></div>
            <div class="card-item-content-wrapper red" id="red-text">
              <div class="card-item-title"><h6>Network Services</h6></div>
            <div class="card-item-body-text"><p>CTDI's Network Services Division offers a service portfolio that includes component level repair and refurbishment of legacy and wireless infrastructure equipment, warehousing, and distribution on behalf of our Carrier and OEM customers.  Additionally, we offer LTE Base Station testing, engineering, installation and maintenance and removal services.</p>
          </div>
        </div>
    </router-link>
  </div>
  <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
</div>
 
  </template>

  <script>
  
  import hoverEffect from 'hover-effect';
  import anime from 'animejs';





  export default {

    name: 'Deployment',
    data() {
      return {
        texture1: require('../assets/CTDI-Services/deployment/yarn.jpg'),
        texture2: require('../assets/CTDI-Services/deployment/lightbulb.jpg'),
        texture3: require('../assets/Hover/displacement.png'),
        hoverDistort: ''
    }
  }

  ,
  created() {}

  ,

  methods: {
    hover: function() {
      this.hoverDistort=new hoverEffect({
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
      },

        toTop: function () {
         window.scrollTo({
         top: 0,
         behavior: 'smooth',
});
      }
     
  }, 

    

  

  mounted() {
    window.scrollTo(0, 0)
    this.hover();
    this.toTop();
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
      width: 900px;
      height: 525px;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
}



.hero-title {
      position: absolute;
      top: 35%;
      left: 28%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-family: 'Major Mono Display';
      font-size: 80px;
      line-height: 75px;
}

.hero-title .letter {
      display: inline-block;
      opacity: 0;
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

 

.content p{
    font-size: 17px;
    line-height: 26px;
    color: #202124;
    text-align: left; 
}

.content{
  max-width: 65%;
}

#ctdiImg{
  height: 317px;
  width: 476px;
  border-radius: 4px;
  margin-top: 50px;
  margin-bottom: 50px;
  transition: transform 2s ease-in-out;
  max-width: 100%;
}


   #ctdiImg:hover{
    position: relative; 
    transform: scale(1.01);
    top: -1px;
}

#bottom-p{
    margin-bottom: 90px;
}


.divider {
  height: 1px;
  background: #444;
  margin: auto;
  max-width: 75%;
}

li{
    padding: 25px;
}


a{
  color: #202124;
  text-decoration: none !important;
}

a:hover{
  color: #202124;
}

.services-scope h5{
  font-size: 38px;
   color: #202124;
   margin-bottom: 25px;
}


.services-scope img{
      height: 400px;
      margin-bottom: 75px;
}



/* --------------------*/
  .cards-wrapper{
  display: grid;
  grid-template-columns: 550px 550px;
  grid-template-rows: 375px 375px;
  grid-column-gap: 2px;
  margin: auto;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  }

  .card-item-image img{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 317px;
    width: 476px;
  }

.card-item-content-wrapper{
    height: 375px;
    width: 476px;
    margin:auto;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}

.blue{
  background-color: #97CAEF;
  transition: background-color 0.5s ease-in-out;
}
  
.blue:hover{
    background-color: #E8F0FE;
  color: #174EA6;
}

#blue-img:hover ~ #blue-text {
  background-color: #E8F0FE;
  color: #174EA6;
}


.blue h6{
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: left;
  margin-left: 20px;
}


.blue p{
  font-size: 23px;
  padding-top: 10px;
  text-align: left;
  margin-left: 20px;
}

.red{
  background-color: #f28b82;
  transition: background-color 0.5s ease-in-out;
}
  
.red:hover{
  background-color: #E8F0FE;
  color: #A50E0E;
}

#red-img:hover ~ #red-text {
  background-color: #E8F0FE;
  color: #A50E0E;
}

.red h6{
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: left;
  margin-left: 20px;
}


.red p{
  font-size: 23px;
  padding-top: 10px;
  text-align: left;
  margin-left: 20px;
}

.card-item-title{
   padding-top: 20px;
}

/*---------------------*/


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
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 21px;
  }

  .top-wrap {
      display: none;
}

  .head h3{
    font-size: 40px;
  }

  .content p{
    font-size: 16px;
}

  #ctdiImg {
  height: 250px;
  width: 380px;
  border-radius: 4px;
  margin-top: 50px;
  margin-bottom: 50px;
  transition: transform 2s ease-in-out;
  max-width: 100%;
}

    .cards-wrapper{
  display: grid;
  grid-template-columns: 390px;
  grid-template-rows: 575px 575px;
  margin: auto;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  }

  .card-item-image img{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 275px;
    width: 380px;
  }

.card-item-content-wrapper{
    height: 275px;
    width: 380px;
    margin:auto;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}

.red p{
  font-size: 18px;
}

.blue p{
  font-size: 18px;
}
  .services-scope{
      display: none;
}

}


@media (min-width: 1400px) {
   
   #wrapper{
     width: 1000px;
     height: 650px;
   }

  .content{
    max-width: 55%;
  }

  .hero-title {
      left: 35%; 
}


}

</style>