<template>
<div class="mainWrap">
   <div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/ctdi-at-work-2.png" alt="ctdi-at-work-2" border="0" class="d-block w-100">
    </div>
    <div class="carousel-item">
       <img src="../assets/ctdi-trucks.png" alt="ctdi-trucks" border="0" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <a href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/PDF/CTDIPressRelease_2018AT&TSupplier-Award.pdf" target="_blank"><img src="../assets/ctdi-att-award.png" class="d-block w-100" alt="ctdi-att-award" border="0"></a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <div class="topMid">
     <h2>Expertise</h2><br>
      <p>World-class communications test design at your fingertips</p>
  </div>
    <section id="highlights" class="wrapper style3">			
					<div class="container">
						<div class="row aln-center">
							<div class="col-4 col-12-medium">
								<section class="highlight" data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500">
									<a href="#" class="image featured"><img src="../assets/ctdi-solutions.jpg" alt="Global Solutions" /></a>
									<h3><a href="#">Global Solutions</a></h3>
									<p id="profileQuote">CTDI provides our global customers an end-to-end service solution and supports their diverse service and product needs from our six division service solution</p>							
								</section>
							</div>
              	<div class="col-4 col-12-medium">
								<section class="highlight" data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="1500">
									<a href="#" class="image featured" ><img src="../assets/ctdi-locations.jpg" alt="Global Locations" /></a>
									<h3><a href="#">Global Locations</a></h3>
									<p id="profileQuote">CTDI provides our customers access to an established network of over 90 global operations. Today, CTDI operates facilities in Argentina, Australia, Belgium, Brazil, China, Czech Republic, France, Germany, Hungary, India, Italy, Netherlands, North America, Poland, Portugal, Romania, Russia, Singapore, Spain and UK.</p>							
								</section>
							</div>
              	<div class="col-4 col-12-medium">
								<section class="highlight" data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500">
									<a href="#" class="image featured"><img src="../assets/ctdi-design.jpg" alt="Quality" /></a>
									<h3><a href="#">Quality Commitment</a></h3>
									<p id="profileQuote">"CTDI will achieve second-to-none quality status in serving the Communications Industry by making a commitment to continual improvement throughout the company."</p>							
								</section>
							</div>
						</div>
					</div>
    </section>
     <!-- Gobal Profile -->
   
      <h3 id="globalHeader">Global Profile</h3>
      <div class="container globalProfile">
								<section  data-aos="flip-left"
                  data-aos-duration="1500">
									<img src="../assets/ctdi-2.jpg" alt="Quality" width="405px;" height="275px;" />
								</section>
                	<section  data-aos="flip-right"
                    data-aos-duration="1500">
									<img src="../assets/ctdi-passion.jpg" alt="Lead with Passion" width="405px;" height="275px;" />
								</section>
            </div>
            <div class="container">
      <p>CTDI's customers include the major wireline and wireless telecom carriers, cable service providers, and major OEMs from around the world. CTDI maintains it's corporate headquarters in West Chester, PA, and supports an expanding customer base with more than 14,000 employees in over 90 facilities worldwide.</p>
      
      <p>Founded in 1975, CTDI is a full-service, global engineering, repair and logistics company providing best-cost solutions to the communications industry. CTDI's one-stop service commitment to customers has fueled the growth from a core business <br> of network and CPE equipment repair.</p>
            </div>
    </div>

    
				
    

</template>


<script>
import axios from 'axios';


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

	body.is-preload *, body.is-preload *:before, body.is-preload *:after {
		-moz-animation: none !important;
		-webkit-animation: none !important;
		-ms-animation: none !important;
		animation: none !important;
		-moz-transition: none !important;
		-webkit-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}

	@-ms-viewport {
		width: device-width;
	}

/* Image */

	.image {
		display: inline-block;
	}

		.image img {
			display: block;
			width: 100%;
		}

		.image.fit {
			display: block;
			width: 100%;
		}

		.image.left {
			float: left;
			margin: 0 2em 2em 0;
		}

		.image.centered {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.centered img {
				margin: 0 auto;
				width: auto;
			}

		.image.featured {
			display: block;
			width: 100%;
			margin: 0 0 2em 0;
		}

/* Highlights */

	#highlights .highlight {
		text-align: center;
	}

		#highlights .highlight h3 {
			color: #e97770;
			margin: 0 0 0.75em 0;
			font-size: 1.15em;
			letter-spacing: 0.05em;
		}




body p{
  font-size: 17px;
}

.mainWrap{
   text-align: center !important;
   background-color: #FEFFFF;
 }

.slideshow-container {
  max-width: 90%;
  position: relative;
  margin: auto;
}

.trucks{
  opacity: 0.8;
}

.topMid{
  padding-top: 130px;
  text-transform: uppercase;
  line-height: 230%;
  color: #000000;
  padding-bottom: 10px;
}
.topMidP p{
  color: #222222;
}

.globalProfile {
  display: flex;
  flex-direction: row;
  height: 450px;
  justify-content: space-evenly;
  position: relative;
}



#globalHeader {
  color: #000000;
  text-transform: uppercase;
  padding-top: 50px;
}

#profileQuote{
  color: #1D1D1F;
  font-size: 15px;
 
}

.globalProfile{
  padding: 50px;
}

.globalProfile p{
  padding: 30px;
}

.globe-img{
    width: 1068px;
    height: 645px;
    background-size: 1068px 645px;
    background-repeat: no-repeat;
    background-image: url(../assets/ctdi-globe-img.jpg);
}








@media (max-width: 576px) { 
  .global{
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   height: 850px;
   }
   .locationsPic{
     width: 200px;
     height: 130px;
   }
   .right h3{
     font-size: 1.5rem;
   }
   .solutionsPic{
     width: 200px;
     height: 130px;
   }
   .left h3{
     font-size: 1.5rem;
   }
   .qualityPic{
     width: 200px;
     height: 130px;
   }
   #profilePic{
     width: 300px;
     height: 150px;
   }
   .mid h3{
     font-size: 1.5rem;
   }

 }



 @media (max-width: 1400px) { 


   .locationsPic{
     width: 400px;
     height: 275px;
   }
   .right h3{
     font-size: 1.7rem;
   }
   .solutionsPic{
     width: 400px;
     height: 275px;
   }
   #profilePic{
     width: 550px;
     height: 350px;
   }
   .left h3{
     font-size: 1.7rem;
   }
   .qualityPic{
     width: 400px;
     height: 275px;
   }
   .mid h3{
     font-size: 1.7rem;
   }
 }



</style>