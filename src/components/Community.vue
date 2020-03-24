<template>
<div class="container">
  <div class="statement">
      <h5 id="statement"></h5><h5 id="statement-mobile">Community</h5>
      <p>For over 45 years, CTDI has promoted a corporate culture of community leadership. We strive to be a reliable friend and community partner who provides a positive impact in the communities in which we operate. CTDI is committed to the economic and social improvement of the areas in which we live and work. We are proud of our employees who reach out to others and take active roles in their communities. <br> <br> CTDI is particularly proud of our CTDI CARES program. CTDI CARES is non-profit that is available to support employees in need. CTDI CARES was founded after the loss of an employee with three young children. Employees came together and through a variety of efforts raised funds to pay for the children to go to college. After this experience, the company decided that a permanent fund should be established to help CTDI employees and their families when needs arise. </p>
</div>
<div class="shine"><figure><img class="img-fluid top-img" src="../assets/CTDI-Community/community.jpg" alt="people with all hands in, working together"></figure></div>
  <div class="divider"></div>
 <div class="contianer mid-title"><h3>Community Partnerships</h3>
 <p>As part of our commitment to community partnerships, we work also with a variety of organizations in the locations where we have operations. Near our company headquarters in West Chester, we support the following organizations:</p><br>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right"><a href="https://www.unitedwaychestercounty.org/">The United Way of Chester County</a></li>
      <li class="committee-item fa fa-angle-right"><a href="https://www.ymcagbw.org/">YMCA of Greater Brandywine</a></li>
      <li class="committee-item fa fa-angle-right"><a href="https://www.chestercountyhospital.org/giving/support-an-event/shine">The Shine Cancer Foundation</a></li>
      <li class="committee-item fa fa-angle-right"><a href="http://archphila.org/">The Archdiocese of Philadelphia</a></li>
      <li class="committee-item fa fa-angle-right"><a href="http://www.foundationforcatholiceducation.org/">The Foundation for Catholic Education</a></li>
      <li class="committee-item fa fa-angle-right"><a href="http://www.arcofchestercounty.org/">ARC of Chester County</a></li>
      <li class="committee-item fa fa-angle-right"><a href="http://www.wcupa.edu/sparc/">SPARC</a></li>
      <li class="committee-item fa fa-angle-right"><a href="https://www.partnersinoutreach.org/">Partners in Outreach</a></li>
      <li class="committee-item fa fa-angle-right"><a href="https://ccedcpa.com/">Chester County Economic Development Council (CCEDC)</a></li>
      <li class="committee-item fa fa-angle-right"><a href="http://www.leadershipchestercounty.org/">Leadership Chester County</a></li>
        </div>
   </div>
   <div class="divider"></div>
 <div class="flex-passion container">
       <div class="passion-item">
       <p>CTDI also sources employees from work rehabilitation programs such as <a href="https://handi-crafters.org/" target="_blank">Handi-Crafters</a> & <a href="https://www.bakerindustries.org/" target="_blank">Baker Industries</a> for staffing as needed.</p>
       </div>
         <div class="divider"></div>
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
        <img class="img-fluid passion-item" src="../assets/CTDI-Community/person-working.jpg" alt="person working">
     </div>
     <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
</div>



</template>



<script>



  export default {
    name: 'Community',
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
      },

         blotterText: function() {
         const container = document.getElementById("statement");

    const text = new Blotter.Text("Community", {
        size: 100,
        fill: "#000"
    });

      let material = new Blotter.SlidingDoorMaterial();

      material.uniforms.uDivisions.value = 7;

      material.uniforms.uSpeed.value = 0.20;

      material.uniforms.uAnimateHorizontal.value = true;

    let blotter = new Blotter(material, {
        texts: text
    });

    let scope = blotter.forText(text);

    scope.appendTo(container);

      }
   },
  mounted(){
       window.scrollTo(0, 0)
       this.blotterText();
  
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
  height: 600px;
  width: 650px;
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

  .committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: space-evenly;
  height: 600px;
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


  h6{
      font-size: 20px;
  }

    .flex-passion img{
    height: 270px;
    width: 400px;
    max-width: 100%;
    transition: transform 2s ease-in-out;
  }

   .flex-passion img:hover{
    position: relative; 
    transform: scale(1.01);
    top: -1px;
}


 
.flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 400px;
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


@media (max-width: 997px) {
         .top-img{
  height: 500px;
}
}


@media (min-width: 667px){
  #statement-mobile{
       display: none;
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

  .flex-passion {
    height: 500px;
  }

 #statement{
   display: none;
 }

 .overlay-container{
  max-width: 85%;
  height: 650px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 50px;
}

}

  

  @media (max-width: 820px) {



}

</style>
