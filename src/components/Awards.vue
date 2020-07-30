<template>
<div class="container">
  <div class="statement">
      <h5 id="statement"></h5><h5 id="statement-mobile">AWARDS & HONORS</h5>
      <p>CTDI has been making great progress in its sustainability program, and is encouraged by continuing successes. </p>
      <p>In 2016, CTDI was selected as the winner of the 2016 Oracle Sustainability Innovation Award. This was earned as a result of our efforts in transitioning to cloud-based software. This has reduced our in-house data needs and allowed for the decommissioning of IT servers, saving electricity and energy costs.</p>
</div>
<div class="shine"><figure><img class="img-fluid top-img" src="../assets/CTDI-Quality/award-3.jpg" alt="two people holding a trophy"></figure></div>
  <div class="divider"></div>

   <div class="divider"></div>
 <div class="flex-passion container">
       <div class="passion-item">
       <p>In 2015 CTDI received <a href="https://sustainableelectronics.org/" target="_blank">R2 Certification</a> for its Buford, in 2016, its Bessemer, AL facility earned followed suit, and in 2017 the CTDI branch in South Bend, IN earned this certification as well. R2 certified recyclers demonstrate to an accredited, independent third-party auditor that they meet specific standards to safely recycle and manage electronics.</p>
       </div>
        <img class="img-fluid passion-item" src="../assets/CTDI-Quality/recycle-symbol.jpg" alt="recycle symbol on phone">
     </div>

     <div class="flex-passion-2 container">
         <img class="img-fluid passion-item" src="../assets/CTDI-Quality/energy-star.png" alt="energy star">
       <div class="passion-item">
       <p>In 2016 our Coatesville, PA location received Energy Star certification for their building. ENERGY STAR buildings use 35% less energy and generate 35% fewer greenhouse gas emissions compared to similar buildings. </p>
       </div>
     </div>
     <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
</div>



</template>



<script>



  export default {
    name: 'Awards',
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

    const text = new Blotter.Text("AWARDS & HONORS", {
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
       this.toTop();
  }
}
 

</script>



<style scoped>

  .statement {
    max-width: 80%;
    margin: auto;
    padding-bottom: 35px;
  }

  .statement h5 {
    font-size: 38px;
    line-height: 49px;
    color: #111111;
    font-weight: 600;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 135px;
  }

  .statement p {
    font-size: 19px;
    line-height: 29px;
    color: #212529;
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
  }

    .flex-passion-2 img{
    height: 240px;
    width: 325px;
    max-width: 100%;
    border-radius: 4px;
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
    margin-top: 40px;
}

.flex-passion-2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 400px;
  margin-top: 75px;
  margin-bottom: 50px;
}


.passion-item-2{
  width: 450px; 
  align-items: flex-start;
}

.passion-item-2 p{
    margin-top: 40px;
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
      height: 300px;
}


    .flex-passion img{
    width: 300px;
  }

  .flex-passion {
    height: 550px;
  }

  .flex-passion-2 {
    height: 525px;
  }

 #statement{
   display: none;
 }

}

  

  @media (max-width: 820px) {



}

<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> c2d25f7b08804bed6d6512379d565ae66e4cfb13
