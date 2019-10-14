<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
       <p id="border"></p>
    </div>
         <div>
          <h2>Ron Hartz</h2>
          <h3>Vice President, Corporate Operations</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-ron-hartz.jpg" style="height: 200px;">
       <p id="bioText1">Ron Hartz graduated from East Stroudsburg University with a bachelor’s degree in Economics and an MBA from Lehigh University. After starting his career in auditing with Deloitte, Ron spent over 16 years working for Fortune 500 companies in the telecommunications industry. His career has been focused primarily on financial operations, leading the financial planning and analysis teams at two large telecommunications companies and supporting other operating teams from a finance perspective. <br>
       <br>
          Ron joined CTDI in June of 2017 as Vice President of Corporate Operations supporting the P&L operations, collaborating with divisional leadership teams, and improving processes and procedures to assist with financial operations.
       <br><br>
        <span id="community">Community:</span><br> Ron is an active supporter of CTDI’s United Way Campaign and participates in other charitable events such as CTDI CARES activities. He has served as a volunteer coach for various youth sporting teams/events and supports community activities locally.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'RonHartzBio',
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
  margin-right: 62%;
  font-size: 40px;
  color: #786D65;
}

h3{
  margin-right: 46%;
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
  margin-right: 64%;
}

h3{
  margin-right: 52.5%;
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