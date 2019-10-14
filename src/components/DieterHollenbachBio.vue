<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
       <p id="border"></p>
    </div>
         <div>
          <h2>Dieter Hollenbach</h2>
          <h3>Chief Executive Officer, CTDI Europe</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-dieter-hollenbach.jpg" style="height: 200px;">
       <p id="bioText1">Dieter Hollenbach received a degree of Applied Science in Business and Finance from the Universities of Cologne and Darmstadt. Additionally, he received an International Executive Education from Harvard Business School in Boston and London Business School. He started his career with Deutsche Telekom in Germany and spent the first ten years of his career in Finance, Controlling, Quality, Procurement and HR. Dieter worked in the telecommunications industry for over 25 years. <br>
       <br>
          Dieter started with CTDI as the CFO of 24 CTDI Europe operations then was promoted to Chief Executive Office of CTDI Europe. He has been the CEO of CTDI Europe for over a decade. In this role, Dieter focuses on the corporate strategies to expand and grow our current and future business in Europe. During his tenure at CTDI Europe, Dieter has been a major factor in adding over 20 new operational branches in 13 countries. Dieter works closely with David Burt, Vice President of CTDI International, on the overall direction and growth strategy for CTDI's operations in EMEA.
       <br><br>
        <span id="community">Community:</span><br> As an active member in his hometown community, Dieter supports several social projects and local non-profit organizations.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DieterHollenbachBio',
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
      padding-top: 25px;
      margin-right: 57%;
      font-weight: 600;
      color: #333333;
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
  margin-right: 52%;
  font-size: 40px;
  color: #786D65;
}

h3{
  margin-right: 47%;
  font-size: 24px;
  color: #BA9009;
  font-weight: 200;
}


 #bioPic{
    padding-right: 60px;
    padding-left: 30px;
 }


#community{
  color: #333333;
  font-size: 22px;
}

@media (max-width: 576px) { 
  .bioWrapper{
   flex-direction: column;
   justify-content: space-between;
   width: 80%;
   margin: auto;
   }

  h2{
  text-align: center;
  font-size: 40px;
  color: #786D65;
  margin-right: 20%;
}

h3{
  margin-right: 15%;
  font-size: 24px;
  color: #BA9009;
  font-weight: 200;
}
  
#bioPic{
    width: 280px;
    padding-left: 70px;
 }
 .leadershipHead h5{
      margin-right: 37%;
  }
}



@media (min-width: 1380px) { 

  h2{
  text-align: center;
  font-size: 40px;
  color: #786D65;
  margin-right: 56.5%;
}

h3{
  margin-right: 53%;
  font-size: 24px;
  color: #BA9009;
  font-weight: 200;
}
  

#bioPic{
    width: 280px;
    padding-left: 70px;
 }

  .leadershipHead h5{
      margin-right: 60%;
     
  }
}

</style>