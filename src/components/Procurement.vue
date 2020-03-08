<template>
  <div class="container">
    <div class="caresHead">
      <h3>Procurement</h3>
    </div>
     <div class="flex-passion container">
       <div class="passion-item">
       <h5>CTDI Procurement Overview</h5>
       <p>CTDI is a full-service, global engineering, repair and logistics company providing best-cost solutions to the communications industry. As a global leader, CTDI offers a wide range of services and products to the major Telecom and Cable service providers and major OEMs from around the world.</p>
       </div>
        <img class="img-fluid passion-item" src="../assets/Procurement/working-deal.jpg" id="team-working-1">
     </div>
      <div class="divider"></div>
       <div class="container"><h6>CTDI's one-stop service commitment to customers has fueled the growth from a core business of equipment repair to include:</h6>
       <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">Network Infrastructure Repair & Logistics</li>
      <li class="committee-item fa fa-angle-right">Engineering and Network Deployment Services</li>
      <li class="committee-item fa fa-angle-right">Product Engineering, Sourcing & Supply Services</li>
      <li class="committee-item fa fa-angle-right">IT Systems Integration and Development</li>
      <li class="committee-item fa fa-angle-right">CPE Product Set-Top Box, Modems & Data Test, Repair & Logistics</li>
      <li class="committee-item fa fa-angle-right">Automotive Reman & Logistics</li>
       </div>
    </div>
     <div class="divider"></div>
     <div class="flex-passion container">
          <img class="img-fluid passion-item" id="team-working" src="../assets/Procurement/team-working.jpg">
         <p class="passion-item">The CTDI Corporate Procurement organization is responsible for negotiating and contracting for goods and services for the CTDI Production areas. The supply chain is considered a strategic strength of our business and CTDI is constantly working towards continuous improvement in process performance and cost reduction. Improvements can be in the form of logistics improvements, process improvements, and material standardization and volume discounts for cost reductions</p>    
      </div>
      <div class="divider"></div>
     <div class="container content"><h6>Procurement Practices</h6>
       <p>CTDI purchases a diverse selection of products and services each year. Electronics (both passive and active), packaging, telecommunications equipment, and supporting supplies and services comprise a major portion of these expenditures. CTDI purchases telecommunications equipment from various distributors and value-added resellers as well as from the original equipment manufacturers (OEM's).</p>
       <p>For non-production parts and material, CTDI purchases from a wide variety of suppliers based upon regional and company-wire efficiencies. Corporate Procurement makes effort to combine volumes and encourage standardization by utilizing corporate contracts to ensure the best possible cost is achieved for such supplies and services. Items purchased in volume are usually competitively bid to obtain volume discounts.</p>
       <p>CTDI generally seeks out personnel to provide professional services such as programming, engineering, temporary personnel, through approved agencies. Corporate Procurement assists the Human Resources organization of CTDI to ensure competitive opportunities are provided at all times. Professionals are engaged directly only if they clearly meet the requirement for independent contractors under state and federal rules and regulations.</p>
       <p>CTDI uses Purchase Orders for most expenditures. Assume you will need one when working with CTDI.</p>
       <p>Click <a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/T_CMay2015.pdf"> here</a> to view CTDI Terms and Conditions</p>
       <p class="over-view">Best Overall Value</p>
       <p>CTDI's policy is to select suppliers that offer the best overall value. Price is only one component of overall value. Other factors considered include: the management strength of the company; ability to control overhead costs; emphasis on providing quality products and services; support services; technical depth and abilities; plus minority, women, and disabled veteran owned business enterprise participation.</p>
       <p class="over-view">CTDI Supplier Code of Conduct</p>
       <p>CTDI and its subsidiaries conduct business consistent with our long established corporate values. These values include providing exceptional service to our customers and operating with the highest standards of quality while valuing our employees and making a positive contribution to the communities in which we conduct business. Our commitment to fulfilling our social responsibilities is an extension of the way we do business and adds value to our corporation. This Supplier Code of Conduct provides our employees, customers, and suppliers with a clear understanding of our standards for business conduct and fair business practice. Click <a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/supplier_code_of_conduct_Jun2015.pdf">here</a> to view CTDI Supplier Code of Conduct.</p>
       <p class="over-view">Supplier Diversity</p>
       <p>CTDI is committed to doing business and encouraging our customers to do business with Minority, Women and Disabled Veteran Business Enterprises (MWDVBEs) as part of our responsibility to our and our employees' local communities. Our Procurement Organization works to provide the maximum practical opportunity, consistent with the Company's procurement policy, to compete for our business. All Diverse Suppliers who are seeking procurement opportunities should review the instructions on CTDI's Supplier Diversity webpage.</p>
       <p class="over-view">How to do Business</p>
       <p class="bottom">Contact the local CTDI facility in your area and ask for the person responsible for the purchasing at the branch. You may always contact the Corporate Procurement organization at the headquarters facility in West Chester, PA USA for additional information.</p>
     </div> 
      <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
  </div>
</template>

<script>
  export default {
    name: 'Procurement',
    data() {
      return {

      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },


    methods: {
          toTop: function () {
         window.scrollTo({
         top: 0,
         behavior: 'smooth',
});
    }
   }
  }
 
</script>

<style scoped>


    .caresHead h3 {
    margin-top: 100px;
    text-align: center;
    font-weight: 600;
    color: #202124;
    margin-bottom: 5%;
    font-size: 48px;
  }

    h5 {
    text-align: left;
    font-weight: 600;
    color: #202124;
    font-size: 28px;
    margin-bottom: 5%;
  }

     h6 {
    max-width: 80%;   
    text-align: center;
    font-weight: 600;
    color: #202124;
    font-size: 22px;
    padding-top: 50px;
    padding-bottom: 45px;
    margin: auto;
  }


   .flex-passion img{
    height: 270px;
    width: 400px;
    max-width: 100%;
  }


 
.flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 400px;
  padding-top: 50px;
}


.passion-item{
  width: 450px; 
  align-items: flex-start; 
}


P{
  text-align: left;
  color: #202124;
  }

  .over-view{
    font-weight: 600;
    color: #202124;
    font-size: 20px;
  }

  .bottom{
    padding-bottom: 100px;
  }

  .content{
    max-width: 80%;
  }

   .divider {
    height: 1px;
    background: #444;
    margin: auto;
    max-width: 80%;
  }

.committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: space-evenly;
  height: 325px;
}


.committee-item{
  list-style: none;
   width: 250px; 
  height: 180px; 
  margin: auto; 
}



.fa{
  font-size: 18px;
  color: #333333;
}

#to-top{
 text-align: right;
 color: #202124;
 font-size: 16px;
 line-height: 24px;
 font-weight: 500;
 margin-bottom: 40px;
}

#to-top a{
  text-decoration: none;
}

#to-top a:hover{
  cursor: pointer;
}


  @media (max-width: 667px) {
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

 h6{
   font-size: 24px;
 }
 #team-working{
    height: 300px;
    width:  600px;
 }
 #team-working-1{
    height: 300px;
    width:  600px;
 }

   .committee-flex{
    display: flex;
  flex-direction: column;
  height: 600px;
  padding-top: 5px;
  
  margin: auto;
  }

  .committee-item{
  list-style: none;
  max-width: 115px; 
  height: 125px; 
  margin: auto; 
 }
}


@media (max-width: 920px) {
  .flex-passion{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 875px;
  padding-top: 5px;
  }

   .flex-passion img{
    height: 320px;
    width: 400px;
    max-width: 100%;
  }
 
 .passion-item{
   align-items: center;
   margin: auto;
 }

   .caresHead h3 {
    font-size: 38px;
  }

  .committee-flex{
    display: flex;
  flex-direction: column;
  height: 500px;
  padding-top: 5px;
  }

  .committee-item{
  list-style: none;
   width: 150px; 
  height: 125px; 
  margin: auto; 
}
}


</style>