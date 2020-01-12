<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Jonathan Friedman</h2>
          <h3>CPA-CFO & Vice President of Corporate Affairs</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-jonathan-friedman.jpg" style="height: 200px;">
       <p id="bioText1">Jonathan Friedman graduated from University of Delaware in 1987 with a Bachler of Science Degree in Accounting. After graduating, Jonathan played a role in the investment advisory business where he worked as an integral part in the budget and treasury functions, as well as the roll out of hedge fund and commingled vehicles worldwide. Jonathan joined CTDI in 2015 and is responsible for the financial activities related to the owners and shareholders of the company. <br>
       <br>
         With close to 30 years of financial expertise, Jonathan has utilized his experience as a trusted advisor to a wide variety of multi-generational families in the corporate arena. As a Certified Public Accountant he brings to the table the ability to coordinate the tax, estate and insurance needs of the owners. In addition, Jonathan manages the financial aspects of the family real estate partnerships and provides financial oversight for the family charitable giving and philanthropic activities.
       <br><br>
        <span id="community">Community:</span><br> Jonathan’s involvement in the community has included coaching a wide variety of youth sports including baseball and YMCA basketball. He has been involved in numerous fund raising campaigns including the United Way and also previously served as a Board member for a non-for-profit theatre company. He is a member of the Delaware Society of Certified Public Accountants and the American Institute of Certified Public Accountants.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'JonathanFriedmanBio',
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