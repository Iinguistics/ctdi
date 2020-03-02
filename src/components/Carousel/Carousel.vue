<template>
<div>
    <!--==========================
    Intro Section
  ============================-->
 
  <section id="intro">
    <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/cellphone-1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/ctdi-design.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/ctdi-att-award.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
 </div>
</section>
 
  </template>

  <script>
  




  export default {

    name: 'Carousel',
    data() {
  
  }

  ,
  created() {}

  ,

  methods: {
  


     
  }, 

    

  

  mounted() {
   
  }
}



</script>

<style scoped>

/*-----------------------------
 intro / carousel 
-----------------------------*/
.carousel-item{
  max-width: 100%;
  height: 100vh;
  opacity: 1.0;
  background-position: center !important;
  background-size: cover !important;
}

.carousel-caption h5{
     color: #000;
     font-weight: bolder;
     padding-bottom: 15%;
     font-size: 28px;
     text-transform: uppercase;
}

.carousel-caption p{
     color: #000;
     font-weight: bolder;
     padding-bottom: 25%;
     font-size: 20px;
}

.carousel-caption{
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.d-block{
  opacity: 1.0;    
}

#intro{
  align-items: center !important;
  margin-top: 40px;
}


@media (max-width: 667px) { 
  .carousel-control-prev{
    margin-top: -250px;
  }
  .carousel-control-next{
    margin-top: -250px;
  }
}

</style>