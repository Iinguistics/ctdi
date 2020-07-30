<template>
<div>
  <div class="container top-wrap"> 
    <div class="img-fluid top-content">
    <img id="consume" src="../assets/CTDI-Sustainability/consume-less.jpg" alt="yellow bicyle">
     <div id="text"> <h3>CORPORATE RESPONSIBILITY</h3> <p>"CTDI will continue to be a leader in the Communication field through our commitment to best practices in business conduct and ethics, employment practices, occupational safety and health, community involvement, customer and supplier relations, community respect and our commitment to the environment."<br>- Leo Parsons, President & COO</p> </div>
    </div>
  </div>
  <div class="statement container">
      <h5>Sustainability</h5>
      <p>CTDI is committed to operating in a sustainable manner by implementing processes that minimize our negative environmental and social impacts, improve efficiency, and strengthen our competitive advantage. We embrace our corporate responsibility to integrate sustainable practices throughout all levels of our operations and, as such, CTDI's Corporate Headquarters is leading the way to a comprehensive, global CTDI sustainability mindset across all of our facilities.<br> <br> We are raising awareness of our employees, suppliers, partners and customers on important, contemporary environmental and social issues. CTDI is assessing ways to reduce our carbon footprint as a means to combatting global climate change. Through our sustainability initiatives, we are focused on strengthening our corporation for the long term and improving the communities in which we live and work.</p>
  </div>
  <div class="divider"></div>
    <div class="committee container">
      <h5>Sustainability Committee</h5>
      <h6>CTDI’s Sustainability Committee is responsible for assessing and managing the company’s social and environmental impacts.  The committee is charged with the following:</h6>
    </div>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">Assessing CTDI's social and environmental impacts, including our carbon footprint</li>
      <li class="committee-item fa fa-angle-right">Identifying priority sustainability issues</li>
      <li class="committee-item fa fa-angle-right">Educating employees and management</li>
      <li class="committee-item fa fa-angle-right">Sustainability goal setting</li>
      <li class="committee-item fa fa-angle-right">Recommending programs for implementation</li>
      <li class="committee-item fa fa-angle-right">Supporting the implementation of sustainability initiatives as appropriate</li>
    </div>
    <div class="divider"></div>
    <div class="committee container">
      <h5>Company Sustainability Committee – Employee Members</h5>
    </div>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">Joe Lutza – Director, NDS Division (Committee Chair)</li>
      <li class="committee-item fa fa-angle-right">George Ehrgott – Strategic Sourcing and Supplier Diversity Manager</li>
      <li class="committee-item fa fa-angle-right">Keith Montone – Director of Risk Management and Corporate Insurance</li>
      <li class="committee-item fa fa-angle-right">Kristin Bartholomew – Director, Human Resources</li>
      <li class="committee-item fa fa-angle-right">Heather Banchs – Safety and Risk Analyst</li>
      <li class="committee-item fa fa-angle-right">Kylie Ford – Sustainability Analyst</li>
      <li class="committee-item fa fa-angle-right">Mike Anderson – Facilities Manger</li>
      <li class="committee-item fa fa-angle-right">Mandy Allan – Marketing Specialist</li>
    </div>
    <div class="divider"></div>
    <div class="committee container">
      <h5>CTDI Sustainability Areas of Focus</h5>  <!-- make three links like off the home page of wagec.  envr, community, ethical conduct -->
    </div>
   <!-- hover overlay -->
   <div class="overlay-container">
  <div class="content">
    <router-link to=/sustainability/environment>
      <div class="content-overlay"></div>
      <img class="content-image" src="../assets/CTDI-Sustainability/nature.jpg" alt="field of flowers">
      <div class="content-details fadeIn-left">
        <h3>Environment</h3>
        <p>CTDI has made a commitment that we will continue to train and educate ourselves in waste minimization, hazardous material handling and regulatory compliance in an effort to support the longevity of the environment.</p>
      </div>
       <h6>Environment</h6>
    </router-link>
  </div>
  <div class="content">
    <router-link to=/sustainability/community>
      <div class="content-overlay"></div>
        <img class="content-image" src="../assets/CTDI-Sustainability/community.jpg" alt="community of people">     
        <div class="content-details fadeIn-top">
        <h3>Community</h3>
        <p>For over 40 years, CTDI has promoted a corporate culture of community leadership.</p>
      </div>
      <h6>Community</h6>
    </router-link>
  </div>
  <div class="content">
    <router-link to=/sustainability/ethics>
      <div class="content-overlay"></div>
      <img class="content-image" src="../assets/CTDI-Sustainability/ethics-1.jpg" alt="cabinet full of books"> 
      <div class="content-details fadeIn-right">
        <h3>Ethics</h3>
        <p>CTDI and its subsidiaries conduct business consistent with our long established corporate values.</p>
      </div>
       <h6>Ethics</h6>
    </router-link>
  </div>
</div>
<div class="divider"></div>
 <div class="shine-content">
    <a href="#" class="shine"><figure>
        <h5>Sustainability Honors & Awards</h5>
      <img class="img-fluid top-img" src="../assets/CTDI-Sustainability/awards.jpg" alt="confetti"></figure>
    <h6>CTDI has been making great progress in its sustainability program, and is encouraged by continuing successes.</h6></a>
 </div>
   <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
</div>
</template>



<script>



  export default {
    name: 'Sustainability',
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
       window.scrollTo(0, 0)
       this.toTop();
  
  }
}
 


</script>



<style scoped>

.top-wrap{
    height: 100vh;
    background-color:#FAF0DC;
    max-width: 100%;
}

.top-content{
    max-width: 85%;
    padding-top: 85px;
}

#consume{
    height: 535px;
    width: 600px;
    position: relative;
    right: 10%;
}

#text{
    position: absolute;
    height: 480px;
    width: 600px;
    background-color:#0b4141;
    top: 115px;
    right: 7%;
    padding: 50px 80px;
    color: #FAF0DC;
}

#text h3{
   font-size: 40px;
}

#text p{
   padding-top: 15px;
   font-size: 20px;
}

  .statement {
    max-width: 75%;
    text-align: center;
    padding-bottom: 35px;
  }

  .statement h5 {
    font-size: 42px;
    line-height: 49px;
    color: #111111;
    font-weight: 600;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 125px;
  }

  .statement p {
    font-size: 17px;
    line-height: 29px;
    color: #333333;
    text-align: left;
    margin-bottom: 50px;
  }

   .divider {
    height: 1px;
    background: #444;
    margin: auto;
    max-width: 75%;
  }

  .committee h5 {
    font-size: 30px;
    line-height: 49px;
    color: #111111;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 50px;
  }

  h6{
      font-size: 20px;
  }

  a{
    color: #111111;
  }

.committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 70%;
  justify-content: space-evenly;
  height: 400px;
  padding-bottom: 10px;
}


.committee-item{
  list-style: none;
  width: 190px; 
  height: 110px; 
  margin: auto; 
}

/* hover overlay */
.content {
   position: relative;
  width: 100%;
  max-width: 375px;
  margin: auto;
  overflow: hidden; 
}


.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 225px;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}


.content-image{
  width: 405px;
  height: 225px;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.9em;
}

.fadeIn-top{
  top: 20%;
}

.fadeIn-left{
  left: 20%;
}

.fadeIn-right{
  left: 80%;
}

.overlay-container{
  max-width: 85%;
  height: 600px;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  padding-bottom: 40px;
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
    border-radius: 4px;
    height: 523px;
    max-width: 70%;
  }

  .shine{
    text-decoration: none;
  }
 
  .shine-content{
    padding-top: 50px;
  }

  .shine h6{
     font-size: 19px;
     font-weight: 600;
     max-width: 55%;
     margin: auto;
     color: #757575;
     padding-bottom: 150px;
  }

  .shine h5{
    position: absolute;
    top: 140px;
    left: 16%;
    padding:  80px;
    color: #FFFFFF;
    font-size: 26px;
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


@media (min-width: 1380px) { 
  
  #consume{
    height: 585px;
    width: 650px;
    position: relative;
    right: 10%;
}
  #text{
    position: absolute;
    height: 480px;
    width: 600px;
    background-color:#0b4141;
    top: 250px;
    right: 20%;
    color: #ffffff;
    font-size: 30px;
    padding: 50px 80px;
}

.top-content{
    padding-top: 200px;
}

.top-img{
    border-radius: 4px;
    height: 810px;
    width: 75%;
  }

  .shine h5{
    position: absolute;
    top: 235px;
    left: 12%;
    padding:  80px;
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 700;
  }

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

      .committee-flex{
  display: flex;
  flex-direction: column;
  height: 825px !important;
   } 

   .committee h5{
       font-size: 26px;
       max-width: 75%;
       margin: auto;
   }

   .top-wrap{
   height: 1200px;
}

    #consume{
    height: 450px;
    width: 475px;
    position: relative;
   margin: auto;
}
  #text{
    position: relative;
    height: 450px;
    width: 475px;
    background-color:#0b4141;
    margin: auto;
    color: #ffffff;
  
}

#text h3{
   font-size: 35px;
}

#text p{
   font-size: 17px;
}

.top-img{
    border-radius: 4px;
    height: 300px;
    width: 75%;
    height: 235px;
  }

  h6{
      font-size: 18px;
  }

   .shine h5{
    position: absolute;
    top: 10px;
    left: 6%;
    padding:  80px;
    color: #FFFFFF;
    font-size: 22px;
   }
  }

  @media (max-width: 820px) {
  .committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 800px;
  }

  .overlay-container{
  max-width: 85%;
  height: 800px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-evenly;
  padding-bottom: 50px;
}


}

</style>
