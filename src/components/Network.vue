<template>
<div>
  <div class="top-wrap">
    <div id="wrapper" @mouseover="mouseOver" @mouseleave="mouseLeave"></div>
      <div class="hero-title" ><h1>Network Services</h1></div>
  </div>
   <div class="head"><h3>network services</h3></div>
      <div class="flex-passion container">
       <div class="passion-item">
       <h5>Repair of network infrastructure</h5>
        <p id="desc-mce">
         CTDI's Network Services (NS) Division offers a service portfolio that includes component level repair and refurbishment of legacy and wireless infrastructure equipment, warehousing, and distribution on behalf of our Carrier and OEM customers.  Additionally, we offer LTE Base Station testing, engineering, installation and maintenance and removal services.
      </p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Services/network/network-repair.jpg" alt="mce 360 machine">
     </div>
      <div class="container content">
      <p>
        The cumulative effect of over 45 years of engineering and test development efforts has provided CTDI with a strong technical foundation on which to expand our service offerings. As an important strategic partner in our customers' supply chain, we strive to stay ahead of the technology curve, ensuring no break in repair service as new products are developed and deployed by our customers.
      </p>
     <p>
       CTDI's NS repair portfolio contains the most comprehensive capabilities list in the entire telecommunications service industry. With the ability to repair over 75,000 different unit types in-house, CTDI performs over 4.3 million in-house repairs for the following network equipment repair:
     </p>
     <li class ="fa fa-caret-right">Wireless Network Infrastructure (LTE Base Station)</li>
     <li class ="fa fa-caret-right">Enterprise</li>
     <li class ="fa fa-caret-right">Data Network</li>
     <li class ="fa fa-caret-right">Legacy Network Infrastructure (Optical) (Switching & Transport)</li>
     <img src="../assets/CTDI-Services/network/future.jpg" alt= "futuristic lights & people" id="ctdiImg">
     <p>
        CTDI is able to provide in-house multi-vendor repair services for more than 75,000 different types of advanced electronics.
     </p>
     <p id="bottom-p">
         The basis for providing these services is that over 450 engineers develop and design all our test environments independently of the OEMs. CTDI tests are performed in a real network environment and provide full parametric testing to include all functionality respective to industry standards.
     </p>
   </div>
   <div class="divider"></div>
   <!-- card wrapper -->
<div class="cards-wrapper container">
     <router-link to=/services/stb-cpe class="cards-item-wrapper"> 
        <div class="card-item-image" id="blue-img"><img src="../assets/CTDI-Services/product/modem.jpg" class="img-fluid"></div>
            <div class="card-item-content-wrapper blue" id="blue-text">
              <div class="card-item-title"><h6>stb / cpe</h6></div>
            <div class="card-item-body-text"><p>CTDI has in-depth experience with many in-region, high-volume STB / CPE test, repair and logistics programs.  This allows us to provide our customers a comprehensive end-to-end, integrated solution that not only leverages CTDI’s extensive CPE management expertise, but also provides high-quality, web-based control and management for all test, repair and logistics activity via ETOS.</p>
          </div>
        </div>
    </router-link>
    <router-link to=/services/mobile class="cards-item-wrapper">
        <div class="card-item-image" id="red-img"><img src="../assets/CTDI-Services/stb/mobile-link.jpg" class="img-fluid"></div>
            <div class="card-item-content-wrapper red" id="red-text">
              <div class="card-item-title"><h6>Mobile</h6></div>
            <div class="card-item-body-text"><p>To provide a more comprehensive and total service solution, CTDI recently developed and launched a technical supply chain solution specifically for the Mobile & Consumer Device Industries, called MCE-360.</p>
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

    name: 'Network',
    data() {
      return {
        texture1: require('../assets/CTDI-Services/network/cell-phone.jpg'),
        texture2: require('../assets/CTDI-Services/network/tower.jpg'),
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
      left: 30%;
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

  .flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 475px;
  padding-top: 50px;
}

.flex-passion img{
    height: 270px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
  }


.passion-item{
  width: 450px; 
  align-items: flex-start; 
}

.passion-item h5, p{
  margin-top: 25px;
}

 

.content p{
    font-size: 17px;
    line-height: 26px;
    color: #202124;
    text-align: left; 
}

.content{
  max-width: 65%;
  margin-bottom: 100px;
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

#bottom-p{
  margin-bottom: 50px;
  
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
  grid-template-rows: 625px 625px;
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
    height: 335px;
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

.flex-passion{
  display: flex;
  flex-direction: column;
  height: 825px;
  padding-top: 5px;
  align-content: center;
  }

  .passion-item{
   margin: auto;
   max-width: 95%;
 }

   .flex-passion img{
    height: 250px;
    width: 385px;
    max-width: 100%;
  }
  

}


@media (min-width: 1400px) {
   
   #wrapper{
     width: 1000px;
     height: 650px;
   }

  .content{
    max-width: 53%;
  }

  .hero-title {
      left: 35%; 
}

.flex-passion{
   max-width: 67%;
  }


}

</style>