<template>
<div class="container">
  <div class="statement">
      <h5>Supplier Diversity</h5>
      <p>At CTDI, we're committed to doing business with minority, women, and disabled-veteran owned businesses as well as businesses who utilize people with disabilities because of our overall responsibility to the communities in which CTDI and its employees live. As it is also part of our customers' commitment to support their business and communities, CTDI will proactively assist them in meeting this commitment. The objective of CTDI's Supplier Diversity Program is to increase the amount of business awarded to minority, women, disabled-veteran owned businesses, and businesses who utilize people with disabilities by continually reviewing requirements for materials and services.<br> <br> CTDI has been a corporate member of the National Minority Supplier Development Council (NMSDC) since 1995 and actively participates in the Technology Industry Group (TIG) of the NMSDC. CTDI is also a national corporate member of the Women's Business Enterprise National Council (WBENC) and a member of the Women's Business Enterprise Council of PA-DE-sNJ (a regional partner organization of WBENC). In Canada, CTDI participates in events organized by WBE Canada and the Canadian Aboriginal Minority Supplier Council (CAMSC).</p>
</div>
<div class="shine"><figure><img class="img-fluid top-img" src="../assets/hands.jpg"></figure></div>
 <div class="contianer mid-title"><h3>How to do Business with CTDI</h3>
 <p>CTDI provides support for diverse suppliers through direct initiatives and informal assistance. Our company is always seeking to improve the procurement process and upgrade our Supply Chain partners for continuous improvement in the company bottom line and in responsiveness to our customers.</p>
 <br>
 <p>Initial contact with potential suppliers may occur at the various Business Opportunity Fairs and Supplier Diversity events located throughout the United States and Canada. We encourage attendance at these events for greater networking opportunities with CTDI and our colleagues in the industry.</p>
 <br>
 <p>CTDI can be contacted either directly through the Supplier Diversity organization or through the Procurement Group.  As Supplier Diversity is included in the Corporate Procurement Group, this information gets distributed quickly to those people active in the commodity/service areas.</p>
 <br>
 <p>We are always looking for companies who supply quality goods and services. No additional information other than contacting the Supplier Diversity organization with your diversity certificate at <a href="mailto:supplierdiversity@ctdi.com">supplierdiversity@ctdi.com</a> is necessary as CTDI does not use a separate portal – we prefer a more direct method. If you qualify as a Diverse Supplier and have been certified by a third-party certifying body, additional support is available to you in identifying opportunities within CTDI from CTDI’s Supplier Diversity program</p>
 </div>
 <div class="divider"></div>
<div class="bottom-title"><h4>Accepted third-party certifications include:</h4>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">National Minority Supplier Development Council and regional affiliates</li>
      <li class="committee-item fa fa-angle-right">Women's Business Enterprise National Council and regional partner organizations</li>
      <li class="committee-item fa fa-angle-right">California PUC Minority & Women Supplier Certifications</li>
      <li class="committee-item fa fa-angle-right">State of California Disabled Veteran Certifications</li>
      <li class="committee-item fa fa-angle-right">Department of Veterans Affairs' VetBiz Registration</li>
        </div>
</div>

<div class="bottom-title"><h4>CTDI is an active member of the following Supplier Diversity Organizations:</h4>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">NMSDC: National Minority Supplier Development Council</li>
      <li class="committee-item fa fa-angle-right">EMSDC: Eastern Minority Supplier Development Council</li>
      <li class="committee-item fa fa-angle-right">WBENC: Women's Business Enterprise National Council</li>
      <li class="committee-item fa fa-angle-right">WBEC: Women's Business Enterprise Council of PA-DE-SNJ</li>
      <li class="committee-item fa fa-angle-right">WBE Canada</li>
        </div>
</div>

<div class="bottom-title"><h4>For more information on Supplier Diversity:</h4>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">National Minority Supplier Development Council <a href="https://nmsdc.org/" target="_blank">NMSDC</a></li>
      <li class="committee-item fa fa-angle-right">Women’s Business Enterprise National Council <a href="https://wbenc.org" target="_blank">WBENC</a></li>
      <li class="committee-item fa fa-angle-right">WBE Canada <a href="https://wbecanada.org/" target="_blank">WBE Canada</a></li>
      <li class="committee-item fa fa-angle-right">Canadian Aboriginal & Minority Supplier Council <a href="https://camsc.ca/" target="_blank">CAMSC</a></li>
      <li class="committee-item fa fa-angle-right">Service Disabled Veteran Owned Small Business Council <a href="https://sdvosb-council.org/" target="_blank">SDVOSB-COUNCIL</a></li>
      <li class="committee-item fa fa-angle-right">Department of Veterans Affairs <a href="https://vetbiz.gov/" target="_blank">VETBIZ</a></li>
        </div>
  </div>
  <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
</div>
</template>



<script>



  export default {
    name: 'Diversity',
    data() {
      return {
   
    }
  },
    created() {
    
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
       window.scrollTo(0, 0);
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

   /* Shine */
.shine figure {
	position: relative;
}
.shine figure::before {
	position: absolute;
	top: 0;
	left: -70%;
	z-index: 2;
	display: block;
	content: '';
	width: 50%;
	height: 100%;
	background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
	background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
	-webkit-transform: skewX(-25deg);
	transform: skewX(-25deg);
}
.shine figure:hover::before {
	-webkit-animation: shine .75s;
	animation: shine .75s;
}
@-webkit-keyframes shine {
	100% {
		left: 125%;
	}
}

@keyframes shine {
	100% {
		left: 125%;
	}
}

.top-img{
  height: 675px;
  width: 550px;
  border-radius: 4px;
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

  .bottom-title a{
    color: #3897F0 !important;
  }

  .bottom-title a:hover{
   text-decoration: underline !important;
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



a{
  color: #202124;
  text-decoration: none !important;
}

a:hover{
  color: #202124;
}

  h6{
      font-size: 20px;
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




  @media (max-width: 667px) {
    .statement h5 {
      font-size: 34px;
      line-height: 44px;
    }

    .statement p {
      font-size: 17px;
      line-height: 27px;
    }

    .top-img{
    height: 425px;
    width: 400px;
}


   .committee-flex{
    display: flex;
  flex-direction: column;
  height: 925px;
  padding-top: 5px;
  margin: auto;
  }

  .committee-item{
  list-style: none;
  max-width: 110px; 
  height: 125px; 
  margin: auto; 
 }


}

  

  @media (max-width: 820px) {



}

</style>
