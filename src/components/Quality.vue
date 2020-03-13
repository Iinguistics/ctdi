<template>
<div>
  <div class="header-wrap"><header class="container"><h1>QUALITY COMMITMENT</h1><p>"CTDI will achieve second-to-none quality status in serving the Communications Industry by making a commitment to continual improvement throughout the company."</p><p class="quote">Jerry Parsons, CTDI Chairman & CEO Leo Parsons,
CTDI President and COO</p>
</header>
</div>
<div class="container"><h6>CTDI is committed to establishing the benchmark for quality in the telecommunications industry, and has achieved the following Management System certifications at various locations around the world:</h6>
<div class="committee-flex container">
  <li class="committee-item fa fa-angle-right">ISO 9001 Quality Management System (Various locations, per Certificate)</li>
  <li class="committee-item fa fa-angle-right">TL 9000 Quality Management System (Various locations, per Certificate)</li>
  <li class="committee-item fa fa-angle-right">ISO 14001 Environmental Management (Various locations, per Certificate)</li>
  <li class="committee-item fa fa-angle-right">OHSAS 18001 Occupational Health and Safety Management (Various locations, per Certificate)</li>
  <li class="committee-item fa fa-angle-right">R2 Responsible Recycling (Various locations, per Certificate)</li>
  </div>
  <p id="cert" class="fa fa-angle-right">Certificate available upon request</p>
  </div>
  <div class="divider"></div>
  <div class="container content">
    <p>
      The satisfaction of our customers is the starting point and goal of our quality policy. We measure all our decisions and activities against this guiding principle. The quality of each individual's work and, overall, the quality of our services is one of the decisive factors for the success of our customers.
    </p><br>
    <p>
      Our ISO certification stands for consistently high quality through defined processes. These standards offer customers a uniform standard by which they can measure all suppliers. We also meet the strict quality requirements of the automotive industry and successfully passed audits by leading automobile manufacturers.
    </p><br>
  
  </div>
    <div class="flex-passion container">
       <div class="passion-item">
       <h5>Our quality standards</h5>
        <p id="desc-mce">
         To measure our quality, we have implemented key performance indicators for our programs and hold operational status meetings with our customers with the aim of continuously improving our processes.
      </p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Quality/qa-tech-2.jpg" alt="quality technician inspecting a part" id="techImg">
     </div>
       <div class="divider"></div>
    
  <div class="divider"></div>
  <div class="container award-safe-flex">
    <a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/CTDI_AWARDS.pdf" id="wrapper1" target="_blank"><h5>Awards Won</h5></a><a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/REF-00004-Rev-4-Environmental-Health-Safety-Policy.pdf" id="wrapper2" target="_blank"><h5>Environmental Health & Safety</h5>
  </a>
  </div>
  <div class="container award-safe-flex-mobile"><a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/CTDI_AWARDS.pdf" target="_blank"><img src="../assets/CTDI-Quality/award.jpg"><h5>Awards Won</h5></a><a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/REF-00004-Environmental-Health-Safety-Policy-2.pdf" target="_blank"><img src="../assets/CTDI-Quality/grown-trees2.jpg"><h5>Environmental Health & Safety</h5></a></div>
  <div class="container"><h6 id="TBBRRF">CTDI plays an active role with Reliability Forums such as TBBRRF to identify and implement repair process improvements. For questions or concerns relating to quality you may contact us at <a href="mailto:quality@ctdi.com">quality@ctdi.com</a></h6>
  </div>
   <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
  </div>
  </template>

  <script>
  
  import hoverEffect from 'hover-effect';

  export default {

    name: 'Quality',
    data() {
      return {
        texture1: require('../assets/CTDI-Quality/award-2.jpg'),
        texture2: require('../assets/CTDI-Quality/award.jpg'),
        texture3: require('../assets/ctdi-att-award.png'),
        texture4: require('../assets/CTDI-Quality/small-trees.jpg'),
        texture5: require('../assets/CTDI-Quality/grown-trees2.jpg'),
        texture6: require('../assets/Hover/displacement.png'),
        hoverDistort: '',
        hoverDistort2: ''
    }
  }

  ,
  created() {}

  ,

  methods: {
    hover: function() {
      this.hoverDistort=new hoverEffect( {
          parent: document.getElementById('wrapper1'),
          intensity: 0.3,
          image1: this.texture1,
          image2: this.texture2,
          displacementImage: this.texture3
        }

      );

      this.hoverDistort2=new hoverEffect( {
          parent: document.getElementById('wrapper2'),
          intensity: 0.3,
          image1: this.texture4,
          image2: this.texture5,
          displacementImage: this.texture6
        }

      );
    },
    toTop: function () {
         window.scrollTo({
         top: 0,
         behavior: 'smooth',
});
      }

  },

  mounted() {
    this.hover();
    window.scrollTo(0, 0);
    this.toTop();
  }
}



</script>
<style scoped>

#container {
  margin: auto;
}

.header-wrap {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/ElectronicsImg/purple-cellphone.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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

p {
  color: #ffffff;
  text-align: center;
  margin: auto;
  font-size: 25px;
  line-height: 33px;
}

.quote {
  color: #ffffff;
  text-align: center;
  margin: auto;
  font-size: 19px;
  line-height: 33px;
}

#cert {
  color: #202124;
  text-align: left;
  margin: auto;
  font-size: 16px;
  max-width: 70%;
  padding-bottom: 45px;
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

.flex-passion h5{
  font-size: 20px;
}


.flex-passion p{
    color: #202124;
    font-size: 17px;
}


  .flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 415px;
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
  margin-top: 45px;
}

.content{
  margin-top: 75px;
  max-width: 75%;
  height:  300px;
}

.content p{
    font-size: 17px;
    line-height: 26px;
    color: #202124;
    text-align: left; 
}

#TBBRRF {
  max-width: 70%;
  text-align: left;
  font-weight: 600;
  color: #202124;
  font-size: 20px;
  padding-top: 100px;
  padding-bottom: 125px;
  margin: auto;
}

.divider {
  height: 1px;
  background: #444;
  margin: auto;
  max-width: 75%;
}

#techImg{
  margin-top: 25px;
  margin-bottom: 50px;
  border-radius: 4px;
}

h5 {
  color: #111111;
  font-weight: bold;
  font-size: 18px;
}

a {
  text-decoration: none !important;
}

.award-safe-flex a {
  height: 320px;
  width: 400px;
  max-width: 100%;
}


.award-safe-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: space-evenly;
  height: 475px;
  padding-top: 50px;
  margin-top: 75px;
}


.award-safe-item {
  width: 400px;
  align-items: flex-start;
  position: relative;
}

.award-safe-flex-mobile {
  display: none;
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




.committee-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: space-evenly;
  height: 325px;
}


.committee-item {
  list-style: none;
  width: 300px;
  height: 120px;
  margin: auto;
}







@media (max-width: 667px) {
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 21px;
  }

  .quote {
    font-size: 16px;
  }

  .header-wrap {
    background-attachment: scroll;
  }

  .content{
  height:  575px;
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

  .award-safe-flex {
    display: none;
  }

  .award-safe-flex-mobile {
    height: 750px;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 80%;
    justify-content: space-evenly;
  }

  .award-safe-flex-mobile img {
    height: 320px;
    width: 400px;
    max-width: 100%;
  }
}


@media (max-width: 920px) {

  .committee-flex {
    display: flex;
    flex-direction: column;
    height: 500px;
    padding-top: 5px;
  }

  .committee-item {
    list-style: none;
    width: 150px;
    height: 125px;
    margin: auto;
  }

  .award-safe-flex {
    height: 750px;
    padding-top: 50px;
  }
}


@media (min-width: 1400px) {
   
  .content{
    max-width: 54%;
  }



.flex-passion{
   max-width: 67%;
  }


}

</style>
