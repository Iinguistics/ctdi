<template>
  <div class="flex-container"> 
  <li class="flex-item1"><h3>Contact Us</h3><h5>CTDI Global Headquaters</h5><p>Communications Test Design,Inc</p>
  <p>1373 Enterprise Drive
     West Chester, PA 19380</p>
   <p>610-436-5203</p>
   <a href="https://www.facebook.com/CTDI.USA" target = "_blank" class="fa fa-facebook"></a>
   <a href="https://twitter.com/CTDI_USA" target="_blank" class="fa fa-twitter"></a>
   <a href="https://www.linkedin.com/company/ctdi" target="_blank" class="fa fa-linkedin"></a>
</li>
  <li class="flex-item2 "><h3>Solutions by division</h3>
   <a href="#">stb/cpe</a>
   <a href="#">Mobile</a>
   <a href="#">Network Deployment</a>
   <a href="#">Products</a>
   <a href="#">Supply</a>
   <a href="#">Network Services</a>
  </li>
  <li class="flex-item2a"><h3 id="footerAbout">About Us</h3>
   <a href="https://ctdicareers.silkroad.com/" target="_blank" id="c1">Careers</a>
   <a href="#">Corporate culture</a>
   <router-link to=/leadership>Executive Leadership</router-link>
   <a href="#">Procurement</a>

  </li>
  <li class="flex-item2a">
   <a  href="#">Supplier Diversity</a>
   <a href="#">CTDI Cares</a>
   <a href="#">Sustainability</a>
   <a href="#">Locations</a>
   <h5>Subscribe</h5>
   <div class="g-ytsubscribe" data-channelid="UCwWTetiv-fI2PxRcstOMBWw" data-layout="default" data-theme="dark" data-count="hidden"></div>
  </li>
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
  height: 450px;
}

 .flex-item1 {
  background: #191C22;
  padding: 30px;
  width: 28%;
  height: 375px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;

} 

.flex-item2 {
  background: rgba(45, 45, 45, 0.98);
  padding: 20px;
  width: 30%;
  height: 375px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;
  border-right: 1px solid #8B9DC3;
  display: inline-block;
}

.flex-item2 a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #FFFFFF; 
    transition: width .3s;
}

.flex-item2 a:hover::after{
  width: 100%;
  transition: width .3s;
}
.flex-item2 a:hover{
  color: #66BBFF;
}




.flex-item2a {
  background: rgba(45, 45, 45, 0.98);
  padding: 20px;
  width: 25%;
  height: 375px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;
}

.flex-item2 h3 {
    padding-bottom: 30px;
}

.flex-item2 a {
    display: block;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 35px;   
    text-transform: capitalize;
    padding: 2px;
}



.flex-item2a a {
    display: block;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 35px;
    text-transform: capitalize;
    padding: 10px;
}

.flex-item2a a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #FFFFFF; 
    transition: width .3s;
}

.flex-item2a a:hover::after{
  width: 100%;
  transition: width .3s;
}
.flex-item2a a:hover{
  color: #66BBFF;
}

.flex-item2a h5{
  text-transform: uppercase;
  padding-top: 20px;
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
  width: 20%;
  height: 375px;
  margin-top: 10px;
  color: #FFFFFF;
  text-align: center;
}

.flex-item3 a {
    padding: 10px;
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    text-transform: capitalize;
    display: block;
    
 
}



#c1{
  padding-top: 34px;
}

#footerAbout{
  padding-bottom: 10px;
}



@media (max-width: 576px) { 
    .flex-item3,.flex-item2,.flex-item1, .flex-item2a{
    padding: 10px;
    width:300px;
    height: 250px;
    margin-top: 2px;
    text-align: center;
    line-height: 35px; 
  
    
    }
    .flex-container{
      flex-wrap: wrap;
    }
 }

 @media (max-width: 768px) { 
    .flex-item3,.flex-item2,.flex-item1, .flex-item2a{
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
    .flex-item3,.flex-item2,.flex-item1, .flex-item2a{
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