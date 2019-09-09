<template>
  <div>
    
      <ul class="flex-container">
  <li class="flex-item1"><h3>Contact Us</h3><h5>CTDI Global Headquaters</h5><p>Communications Test Design,Inc</p>
  <p>1373 Enterprise Drive
     West Chester, PA 19380</p>
   <p>610-436-5203</p>
   <h5>Follow Us</h5>
   <a href="https://www.facebook.com/CTDI.USA" target = "_blank" class="fa fa-facebook"></a>
   <a href="https://twitter.com/CTDI_USA" target="_blank" class="fa fa-twitter"></a>
   <a href="https://www.linkedin.com/company/ctdi" target="_blank" class="fa fa-linkedin"></a>
</li>
  <li class="flex-item2"><h3>Solutions by division</h3>
   <a href="#">stb/cpe</a>
   <a href="#">Mobile</a>
   <a href="#">Network Deployment</a>
   <a href="#">Products</a>
   <a href="#">Supply</a>
   <a href="#">Network Services</a>
  </li>
  <li class="flex-item3"><h3>About Us</h3>
   <a href="https://ctdicareers.silkroad.com/" target="_blank">Careers</a>
   <a href="#">Corporate culture</a><br>
   <a href="#">Executive Leadership</a>
   <a href="#">Procurement</a><br>
   <a href="#">Supplier Diversity</a>
   <a href="#">CTDI Cares</a><br>
   <a href="#">Sustainability</a>
   <a href="#">Locations</a>
   <h5>Subscribe</h5>
   <div class="g-ytsubscribe" data-channelid="UCwWTetiv-fI2PxRcstOMBWw" data-layout="default" data-theme="dark" data-count="hidden"></div>
  </li>
</ul>
    
  </div>
</template>

<script>

  export default {
    name: 'Footer',
    data() {
      return {
      
      }
    },
  
      
          
    methods: {
      
      }
    }
  
  
</script>

<style scoped>


.flex-container {
  flex-direction: row;
  padding: 0;
  padding-top: 150px;
  padding-bottom: 0px;
  list-style: none;
  display: flex;
   margin: 0;
  justify-content: space-around;
  height: 350px;
}

 .flex-item1 {
  background: #221F1F;
  padding: 30px;
  width: 28%;
  height: 350px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;

} 

.flex-item2 {
  background: #63666A;
  padding: 20px;
  width: 35%;
  height: 350px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;
  border-right: 1px solid #8B9DC3;
 
}

.flex-item2 h3 {
    padding-bottom: 40px;
}

.flex-item2 a {
    display: block;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 35px;   
    text-transform: capitalize;
    
}

.flex-item2 a:hover{
  color: #55ACEE;
}


.flex-item1 h3,h5{
  text-transform: uppercase;
}

.flex-item2 h3,h5{
  text-transform: uppercase;
 
}

.flex-item3 h3,h5{
  text-transform: uppercase;
}
  
.fa {
  padding: 20px;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

.flex-item3 {
  background: #63666A;
  padding-top: 30px;
  width: 38%;
  height: 350px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;

}

.flex-item3 a {
    padding: 15px;
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 50px;   
    text-transform: capitalize;
 
}

.flex-item3 a:hover{
  color: #55ACEE;
}


@media (max-width: 576px) { 
    .flex-item3,.flex-item2,.flex-item1{
    padding: 10px;
    width:300px;
    height: 450px;
    margin-top: 2px;
    text-align: center;
    line-height: 40px; 
    }
    .flex-container{
      flex-wrap: wrap;
    }
 }

 @media (max-width: 768px) { 
    .flex-item3,.flex-item2,.flex-item1{
    padding: 5px;
    width:300px;
    height: 350px;
    margin-top: 2px;
    text-align: center;
    line-height: 40px; 
    }
    .flex-container{
      flex-wrap: wrap;
    }
 }

  @media (max-width: 992px) { 
    .flex-item3,.flex-item2,.flex-item1{
    padding: 5px;
    width:300px;
    height: 450px;
    margin-top: 2px;
    text-align: center;
    line-height: 40px; 
    }
    .flex-container{
      flex-wrap: wrap;
    }
 }

</style>