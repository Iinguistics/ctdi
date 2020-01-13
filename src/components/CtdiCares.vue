<template>
  <div class="container">
    <div class="head">
      <h3>CTDI Cares</h3>
      <div class="shine"><figure><img class="img-fluid top-img" src="../assets/ctdi-2.jpg"></figure></div>
    </div>
    <div class="statement container">
      <h5>CTDI Cares <br> Mission Statement</h5>
      <p>Our mission is to provide funding and support to CTDI employees or their immediate family members who are
        afflicted or stricken with cancer or other serious illnesses. Our goal is to lessen the financial burdens and to
        help CTDI employees or their immediate family members confront the challenges of cancer or other serious
        illnesses with determination and hope.</p>
      <br>
      <br>
      <a id="form"
        href="http://file02.ctdi.com/Corp.Internal.CTDIWebsite/assets/pdf/CTDI-CARES-Request-for-Assistance-Form_Updated-9-26-18.pdf"><img
          src="../assets/CTDI-Cares/download-form.png">Request for assistance form</a>
      <p>Areas of support include costs of care that may not be covered by healthcare such as transportation to
        treatments and in-home services. Please fill out the CARES Request for Assistance Form and email it to: <a id="ctdi-email"
         href="mailto:CTDI_CARES@ctdi.com?Subject=Assistance%20form" target="_top">CTDI_CARES@ctdi.com</a> to get
        started.</p>
    </div>
    <div class="support-anch container">
      <h5>Support & Educational Resources</h5>
      <a href="http://www.cancer.org/"><img class="support-img"
          src="../assets/CTDI-Cares/american-cancer-society.jpg"></a>
      <a href="https://www.lls.org/" target="_blank"><img class="support-img"
          src="../assets/CTDI-Cares/logo-lls.png"></a>
      <a href="https://www.cancer.gov/" target="_blank"><img class="support-img" src="../assets/CTDI-Cares/NCI.png"></a>
    </div>
    <br><br><br>
    <div class="divider"></div>
    <div class="committee container">
      <h5>Committee Members</h5>
    </div>
    <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">Co-Chairs: Brian & Brigid Parsons</li>
      <li class="committee-item fa fa-angle-right">Kim Calamaro</li>
      <li class="committee-item fa fa-angle-right">Paul Cardell</li>
      <li class="committee-item fa fa-angle-right">George Ehrgott</li>
      <li class="committee-item fa fa-angle-right">Cathy Plank</li>
      <li class="committee-item fa fa-angle-right">Jackie Farmer</li>
      <li class="committee-item fa fa-angle-right">Joe Filiaggi</li>
      <li class="committee-item fa fa-angle-right">Denise Hetzel</li>
      <li class="committee-item fa fa-angle-right">Chris Howe</li>
      <li class="committee-item fa fa-angle-right">Jerry Parsons</li>
      <li class="committee-item fa fa-angle-right">Lisa Parsons</li>
      <li class="committee-item fa fa-angle-right">Eleanor Parsons</li>
      <li class="committee-item fa fa-angle-right">Kristin Bartholomew</li>
      <li class="committee-item fa fa-angle-right">Courtney Lofgren</li> 
      <li class="committee-item fa fa-angle-right">Stephanie Wittig</li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CtdiCares',
    data() {
      return {

      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },


    methods: {

    }
  }
</script>

<style scoped>

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

  .head h3 {
    margin-top: 100px;
    text-align: center;
    font-weight: 600;
    color: #202124;
    margin-bottom: 5%;
    font-size: 48px;
  }

  .top-img{
    border-radius: 4px;
  }
 

  .head {
    padding-bottom: 75px;
  }

  .statement {
    max-width: 70%;
    text-align: center;
    padding-bottom: 35px;
  }

  .statement h5 {
    font-size: 42px;
    line-height: 49px;
    color: #111111;
    font-weight: 600;
    text-align: center;
    padding-bottom: 15px;
  }

  .statement p {
    font-size: 21px;
    line-height: 29px;
    color: #333333;
  }

  .support-anch {
    max-width: 80%;
    text-align: center;
  }

  #form img {
    padding-bottom: 5px;
  }

  #ctdi-email{
    font-size: 20px;
  }

  .support-anch h5 {
    font-size: 30px;
    line-height: 49px;
    color: #111111;
    font-weight: 600;
    text-align: center;
    padding-bottom: 15px;
  }

  .support-img {
    height: 115px;
    padding-left: 10px;
  }

  .support-img:hover {
    opacity: 0.9;
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
    padding-bottom: 50px;
    padding-top: 10px;
  }

.committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 78%;
  justify-content: space-evenly;
  height: 600px;
}


.committee-item{
  list-style: none;
  width: 125px; 
  height: 100px; 
  margin: auto; 
}

.fa{
  font-size: 18px;
  color: #333333;
}

p{
 text-align: left;
}

  @media (max-width: 576px) {
    .statement h5 {
      font-size: 34px;
      line-height: 44px;
    }

    .statement p {
      font-size: 17px;
      line-height: 27px;
    }

    .support-anch h5 {
      font-size: 29px;
    }

    .support-img {
      height: 90px;
      padding-top: 5px;
    }
    
   .committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 800px;
  } 
  
    .head h3 {
    font-size: 38px;
  }

}


@media (max-width: 820px) {
  .committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 800px;
  }
}


</style>