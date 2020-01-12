<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Brian Parsons</h2>
          <h3>Vice President, MCE Products Supply Division </h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-brian-parsons.jpg" style="height: 200px;">
       <p id="bioText1">Brian Parsons graduated from University of Notre Dame with a degree in B.S. Electrical Engineering and an MBA from the Wharton School (University of Pennsylvania), as well as certificates in Finance and Accounting (Wharton) and Wireless Telecommunications (Georgia Tech). Brian joined CTDI in 2001, working as an Electrical Engineer and as Engineering Manager. He focused on CTDI's Async product family and its transition from Nortel Networks. In 2002, Brian became the engineering manager for CTDI's UE600 IAD portfolio, followed by the IMAS DSLAM product line in 2003. In 2004 Brain was promoted to Director of the Products Division and was responsible for the engineering, sales, and operations of CTDI's Products Division <br>
       <br>
          Brian had guided seven (7) acquisitions during that time, including Alloptic, Verilink (Verso), Phoenix Wireless, GoDigital, and eLuminant. Brian was promoted to his current position of Vice President, Products Division in May 2009. With a focus on engineering and strategic acquisitions, Brian has generated significant growth and product expansion for the Division during his venture. Most recently Brian led a 100 million dollar repair acquisition, overseeing all strategic business units. Concurrently, Brian leads CTDI’s Bankgroup as Executive Leader of Finance.
       <br><br>
        <span id="community">Community:</span><br> Brian is an active volunteer in the United Way Days of Caring. Brian serves on the Board of Directors for the United Way of Chester County and was the 2013 United Way Campaign Chairman for the United Way of Chester County. Brian and his wife, Brigid, are co-chairs of CTDI's CARES Committee, a 501c3 which provides funding and support to CTDI employees or their immediate family members who are afflicted or stricken with cancer or other serious illnesses by lessening the financial burdens and helping CTDI employees confront the challenges of cancer or other serious illnesses with determination and hope.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'BrianParsonsBio',
    data() {
      return {

      }
    },
      mounted () {
   window.scrollTo(0, 0)
       },

    methods: {
     
    },

  }
</script>

<style scoped>
     .leadershipHead h5{
      text-align: center;
       margin-top: 100px;
      font-weight: 600;
      color: #333333;
      text-decoration: underline #D7CFCD;
       margin-bottom: 5%;
  }

    .leadershipHead a:hover{
    text-decoration: none;
}
 
   #border {
        border: 1px solid #D7CFCD;
        width: 67.5%;
        margin: auto;
        margin-bottom: 5%;
    }

  .bioWrapper{
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
 }   

.bioWrapper p{
  font-size: 17px;
  color: #333333;
  text-align: left;
  padding: 10px;
  color: #786D65;
}
 

h2{
  margin: auto;
  font-size: 40px;
  color: #786D65;
  padding-bottom: 10px;
}

h3{
  font-size: 24px;
  color: #BA9009;
  font-weight: 200;
}


 #bioPic{
    padding-right: 70px;  
 }

 #bioText1{
   padding-bottom: 30px;
 }


#community{
  color: #333333;
  font-size: 22px;
}

@media (max-width: 576px) { 
  .bioWrapper{
   flex-direction: column;
   justify-content: space-between;
   width: 85%;
   margin: auto;
   padding-top: 15px;
   }

  h2{
  text-align: center;
  font-size: 40px;
  color: #786D65;
}

h3{
  font-size: 24px;
  color: #BA9009;
  font-weight: 200;
}
  
#bioPic{
    width: 180px;
    margin:auto;
    padding-right:0px;
 }

 
 .leadershipHead h5{
     text-align: center;
  }
}



@media (min-width: 1380px) { 



#bioPic{
    width: 300px;
    padding-left: 70px;
 }
}

</style>