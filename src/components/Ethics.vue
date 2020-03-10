<template>
<div class="container">
  <div class="statement" >
      <h5 id="statement"></h5>
      <p>Communications Test Design, Inc. (CTDI) and its subsidiaries conduct business consistent with our long established corporate values. These values include providing exceptional service to our customers and operating with the highest standards of quality while valuing our employees and making a positive contribution to the communities in which we conduct business. Our commitment to fulfilling our social responsibilities is an extension of the way we do business and adds value to our corporation. </p>
</div>
  <div class="flex-passion container" id="employees-1>
       <div class="passion-item">
       <h5>Our Employees</h5>
       <p>CTDI is committed to maintaining the highest standards of business and personal integrity and ethics in accordance with the company's Ethics Policy. All employees are trained on the company ethics policy which covers areas such as conflict of interest, confidential information, dishonest conduct, and bribery.</p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Ethics/employee.jpg" alt="employee's reviewing documents">
     </div>
      <div class="divider"></div>
       <div class="flex-passion container" id="bg-1">
        <img class="img-fluid passion-item" src="../assets/CTDI-Ethics/supplies.jpg" alt="employee's reviewing documents" id="employee-img">
       <div class="passion-item">
       <h5>Our Suppliers and Supplier Diversity</h5>
       <p>CTDI commits time, energy, and resources to the development of minority, women, and service-disabled businesses within the US and Canada. We recognize the importance of the inclusion of diverse businesses within our Supply Chain as these businesses are growth engines for the communities in which they are based and drive increased employment.  Our Procurement Organization works to provide the maximum practical opportunity, consistent with the Company's procurement policy, to compete for our business. Please see our
           <router-link to=/diversity>Supplier Diversity Page</router-link> for more information.
       </p>
       </div>
     </div>
      <div class="divider"></div>
      <div class="flex-passion container" id="bg-1">
       <div class="passion-item">
       <h5>Supplier Code of Conduct</h5>
       <p>CTDI requires that all suppliers agree to adhere to our 
        <a href="#" target="_blank">Supplier Code of Conduct</a> <!-- need to find out what the link is -->
        CTDI’s policy is to select suppliers who are leaders in their industries and are willing to demonstrate along with our company a strong commitment to sustainable development by adopting health & safety, labor, environmental, and ethical principles that ensure the well-being of their employees. Consistent with the application of CTDI’s sustainability principles, this Supplier Code of Conduct outlines the company’s expectations in regards to sustainability practices of its suppliers. By adopting this Supplier Code of Conduct, CTDI aims to promote sustainable development and minimize legal, financial and reputation risks.
       </p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Ethics/documents.jpg" alt="employee's reviewing documents" id="employee-img-2">
     </div>
     <div class="divider"></div>
      <div class="flex-passion container" id="bg-2">
        <img class="img-fluid passion-item" src="../assets/CTDI-Ethics/human.jpg" alt="employee's reviewing documents" id="employee-img">
       <div class="passion-item">
       <h5>Our Human Rights & Workforce Management Policy</h5>
       <p>CTDI is adopting a new Human Rights & Workforce Management Policy. It will be adopted and ready for implementation by the end of 2015. This new policy reflects our firm commitment to ensuring that basic human rights are respected throughout CTDI, and to creating a working environment conducive to mutual cooperation and dialogue. Through our policy commitments, we strive to assure fair and just workforce practices. </p>
       </div>
     </div>
     <div class="statement" >
      <h5 id="bottom-statement">Policy Goals for 2016</h5>
      <p>CTDI will conduct training for all US senior managers and supervisors on the Human Rights & Workforce Management Policy rights, requirements, and responsibilities. We will roll out training on the policy in the US in the first half of 2016 and for the international facilities in the second half of 2016. All training will be completed by the end of 2016. </p>
</div>
     <div class="divider"></div>
     <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
</div>



</template>



<script>



  export default {
    name: 'Ethics',
    data() {
      return {
   
    }
  },
    created() {
    
  },

   methods: {  
      blotterText: function() {
         const container = document.getElementById("statement");

    const text = new Blotter.Text("Ethics", {
        
        size: 115,
        fill: "#000"
    });


    const material = new Blotter.RollingDistortMaterial();
    // setting for speed twisting motion
    // it is a float variable between 0.0 ~ 1.0
     material.uniforms.uSpeed.value = 0.25;

    // setting the degree of rotation of the distortion wave to be formed.
    // it is a degree variable from 0-360 degrees
    material.uniforms.uRotation.value = 220;

    // setting the wave noise, the higher the value the more noise appeared.
    // is a float variable of 0 ~ 1, we can arrange 
   // to find the noise animation according to our wishes
    material.uniforms.uSineDistortAmplitude.value = 0.152

    let blotter = new Blotter(material, {
        texts: text
    });

    let scope = blotter.forText(text);

    scope.appendTo(container);

      },

       toTop: function () {
         window.scrollTo({
         top: 0,
         behavior: 'smooth',
});
      },
   },
  mounted(){
       window.scrollTo(0, 0)
       this.blotterText();
       this.toTop();
  
  }
}
 

</script>



<style scoped>
/* good color #42AB9E;   #A50E0E   background-color: #f28b82; */


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

  .statement p {
    font-size: 21px;
    line-height: 29px;
    color: #333333;
    text-align: left; 
  }

   

.top-img{
  height: 600px;
  width: 610px;
  border-radius: 4px;
  margin-bottom: 50px;
}

   .divider {
    height: 1px;
    background: #444;
    margin: auto;
    max-width: 100%;
  }

  .mid-title h3{
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .mid-title p{
    font-size: 21px;
    line-height: 29px;
    color: #333333;
    text-align: left; 
  }

  .mid-title a{
    color: #3897F0 !important;
  }

  .mid-title a:hover{
   text-decoration: underline !important;
  }

  .mid-title{
    margin-bottom: 75px;
  }

  .bottom-title h4{
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 22px;
  }

  

  .bottom-title a:hover{
   text-decoration: underline !important;
  }



.fa{
  font-size: 18px;
  color: #333333;
}


  h6{
      font-size: 20px;
  }

    .flex-passion img{
    height: 270px;
    width: 400px;
    max-width: 100%;
    border-radius: 4px;
    transition: transform 2s ease-in-out;
  }

   .flex-passion img:hover{
    position: relative; 
    transform: scale(1.01);
    top: -1px;
}

#employees-1{
   display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 400px;
  margin-top: 75px;
  margin-bottom: 50px;
}

 
.flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 500px;
  margin-top: 75px;
  margin-bottom: 50px;
}


.passion-item{
  width: 450px; 
  align-items: flex-start;
}

.passion-item p{
    margin-top: 60px;
}

#employee-img{
  margin-top: 100px;
}

#employee-img-2{
  margin-top: 115px;
}

#to-top{
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

@media (max-width: 997px) {
         .top-img{
  height: 500px;
}
}




  @media (max-width: 667px) {
      .top-img{
  height: 450px;
}

  .committee-flex{
    display: flex;
  flex-direction: column;
  height: 1300px;
  padding-top: 5px;
  margin: auto;
  }

  .committee-item{
  list-style: none;
  max-width: 175px; 
  height: 125px; 
  margin: auto; 
 }

    .flex-passion img{
    width: 300px;
  }

  

   .flex-passion{
  display: flex;
  flex-direction: column;
  height: 800px;
  padding-top: 5px;
  align-content: center;
  }

  .passion-item{
   margin: auto;
   max-width: 95%;
 }

 #bg-1{
    display: flex;
  flex-direction: column;
  height: 1200px;
  padding-top: 5px;
  align-content: center;
 }

  #bg-2{
    display: flex;
  flex-direction: column;
  height: 1000px;
  padding-top: 5px;
  align-content: center;
 }

 h6{
   font-size: 24px;
 }

}

  

  @media (max-width: 820px) {



}

</style>
