<template>
  <div class="flex-container container-fluid"> 
  <li class="item1"><h3>Contact Us</h3><h5>CTDI Global Headquaters</h5><p>Communications Test Design,Inc</p>
  <p>1373 Enterprise Drive
     West Chester, PA 19380</p>
   <p>610-436-5203</p>
   <h5>Subscribe</h5>
   <div class="g-ytsubscribe" data-channelid="UCwWTetiv-fI2PxRcstOMBWw" data-layout="default" data-theme="dark" data-count="hidden"></div><br>
   <a href="https://www.facebook.com/CTDI.USA" target = "_blank" class="fa fa-facebook"></a>
   <a href="https://twitter.com/CTDI_USA" target="_blank" class="fa fa-twitter"></a>
   <a href="https://www.linkedin.com/company/ctdi" target="_blank" class="fa fa-linkedin"></a><br>
  
</li>
  <li class="item2 "><h3>Solutions by division</h3>
   <router-link to=/services/stb-cpe>Stb/Cpe</router-link><br>
   <router-link to=/services/mobile>Mobile</router-link><br>
   <router-link to=/services/network-deployment>Network Deployment</router-link><br>
   <router-link to=/services/products>Products</router-link><br>
   <router-link to=/services/supply>Supply</router-link><br>
   <router-link to=/services/network-services>Network Services</router-link><br>
  </li>
 
  <li class="item3"><h3 id="footerAbout">About Us</h3>
   <a href="https://ctdicareers.silkroad.com/" target="_blank" id="c1">Careers</a><br>
   <router-link to=/locations>Locations</router-link><br>
   <router-link to=/culture>Corporate Culture</router-link><br>
   <router-link to=/leadership>Executive Leadership</router-link><br>
   <router-link to=/procurement>Procurement</router-link><br>
   <router-link to=/diversity>Supplier Diversity</router-link><br>
   <router-link to=/cares>CTDI Cares</router-link><br>
   <router-link to=/sustainability>Sustainability</router-link><br>
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

.flex-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 450px;
    background: #191C22;
    padding-top: 60px;
    color: #fff;
    list-style: none;
    justify-content: space-evenly;
    max-width: 100%;
    margin-bottom: -50px;
    margin-top: 25px;
}




.fa {
  padding: 10px;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

.item1 a{
    text-decoration: none;
    display: inline-block;
}

 li h3{
    padding-bottom: 10px;
    text-transform: uppercase;
}

.item2 a{
    text-decoration: none;
    padding-bottom: 15px;
    font-size: 18px;
    display: inline-block;
    color: #FFFFFF;
}

.item3 a{
     text-decoration: none;
    padding-bottom: 10px;
    font-size: 18px;
    display: inline-block;
    color: #FFFFFF;
}

.item2 h3{
    padding-bottom: 20px;
}


li a:hover{
  color: #9FA8A3;
}


.item2 a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #FFFFFF; 
    transition: width .3s;
}

.item2 a:hover::after{
  width: 100%;
  transition: width .3s;
}

.item3 a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #FFFFFF; 
    transition: width .3s;
}

.item3 a:hover::after{
  width: 100%;
  transition: width .3s;
}


@media (max-width: 820px) {
  
  .flex-container{
    display: flex;
    flex-direction: column;
    height: 1200px;
    background: #191C22;
    color: #fff;
    list-style: none;
 }
}


@media (max-width: 960px) {
    li h3{
    font-size: 20px;
}
 
      h5{
    font-size: 17px;
}
  .item2 a, .item3 a, p{
   font-size: 16px;
}

}

</style>
