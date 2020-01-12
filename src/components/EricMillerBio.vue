<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Eric Miller</h2>
          <h3>Vice President, Supply Division</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-eric-miller.jpg" style="height: 200px;">
       <p id="bioText1">Eric Miller served in the United States Navy for 4½ years on two Nuclear Submarines specializing in Communications/Electronics. Eric graduated from Pennsylvania State University with a Bachelor of Science in Marketing in 1987 and holds an Associate's Degree from Delaware County Community College in Business Administration. Eric joined CTDI in 1988 serving as the Wireless Sales and Operations Manager, resulting in the expansion of CTDI's regional consumer wireless activity. As the growing needs of the wireline telecommunications industry changed, Eric shifted his role to CTDI's Supply Division as Operations Manager. In this capacity, <br>
       <br>
          CTDI established itself as premier Supplier of Refurbished telecommunications equipment throughout the United States. In 1992, Eric was named the Director, and in August 2000, promoted to Vice President of Supply. Under Eric's leadership, CTDI has reached new levels, providing innovative, best-in-class "End to End" Supply Chain Management, equipment and services solutions. Eric is currently serving as Vice President of the Supply Division. In this role Eric is focused on maximizing CTDI's strategic technical and logistical services to our worldwide customer base, with an emphasis on innovative asset management and Vendor Managed Inventory Solutions.
       <br><br>
        <span id="community">Community:</span><br> Eric participates in numerous volunteer and community organizations, and currently serves as YMCA- Board of Advisor Chairman, Hopewell Methodists Men's Association and Bridge of Hope Volunteer. Eric graduated from the Leadership Chester County class sponsored by the United Way of Chester County. This year long forum provides education and in-depth training to prepare its graduates for future Non-Profit Board membership.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'EricMillerBio',
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