<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Duane Knecht</h2>
          <h3>Vice President, Network Services Division</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-duane-knecht.jpg" style="height: 200px;">
       <p id="bioText1">Duane Knecht graduated from Widener University with an Engineering Degree. Duane spent the next 8 years working in the Engineering field in various positions where he designed and formatted various systems. Duane started with CTDI in September of 1989 as Director of Quality, resulting in a complete overhaul and upgrade of CTDI's Quality System. Under Duane's leadership, CTDI has achieved many awards from our client base in the areas of Quality and Cost Services. He embarked upon and achieved ISO 9001 registration from Bellcore <br>
       <br>
          He has actively participated in several industry forums including QuEST, RQM's Standards, NESAC, TRAC-F, and several MWBE committees. As Vice President of Sales & Marketing for CTDI since 1997, Duane's responsibilities included total customer relationship management and overall business growth through the development and execution of strategic marketing plans, the expansion of existing relationships, and the development of new strategic relationships with industry leading carriers and OEMs. Today, Duane services as Vice President of the Network Services Division, CTDI’s longest running mature business unit which services legacy and wireless network infrastructure equipment. NS customers include AT&T, Verizon, Verizon Wireless, Sprint and Nokia.
       <br><br>
        <span id="community">Community:</span><br> Duane is an active volunteer for various community events and is a leadership contributor to the United Way of Chester County. Duane and his wife, Patty, and their children, have created a non-profit corporation called the Holiday Hope Chest. The Holiday Hope Chest is a charity store that opens its doors once a year at the Chester County Intermediate Unit for local residents to shop, free of charge, for new and unused clothing, toys, accessories, and electronics. Duane completed the Leadership Chester County Board development program and currently serves on the Board of the Youth Leadership Program which helps to groom our local leaders of tomorrow.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DuaneKnechtBio',
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