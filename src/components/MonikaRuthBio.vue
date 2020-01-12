<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Monika Ruth</h2>
          <h3>CFO, CTDI Europe</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-monika-ruth.jpg" style="height: 200px;">
       <p id="bioText1">Monika Rüth graduated from University Hagen with a master degree in economics in 1996. After receiving her degree Monika was the Head of Finance and Controlling at Vivento (a company of Deutsche Telekom AG) for four years, and Head of Group Controlling for T-Online and Marketing at Deutsche Telekom AG’s Headquarters for two years. Monika has been CTDI Europe’s Chief Financial Officer since August 2008. She manages all facets of our finances, including Balance Sheet, P&L, bank relationships, mergers and acquisitions, controlling, purchasing, quality management and annual audits. <br>
       <br>
         Additionally, Monika has worked with the CTDI Europe and CTDI US Executive Management teams to implement CTDI’s global strategy with our major European customers. In January 2015, Monika was named a Director of CTDI. Monika has been a member of the Supervisory Board of Deutsche Funkturm GmbH, a subsidiary of Deutsche Telekom AG, since October 2015.
       <br><br>
        <span id="community">Community:</span><br>Monika has been a member of the Supervisory Board of Deutsche Funkturm GmbH, a subsidiary of Deutsche Telekom AG, since October 2015. She serves on several non-profit organizations and is actively involved in her local community.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MonikaRuthBio',
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