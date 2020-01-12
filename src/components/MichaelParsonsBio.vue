<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Michael Parsons</h2>
          <h3>Vice President, Set-Top Box Division</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-michael-parsons.jpg" style="height: 200px;">
       <p id="bioText1">Michael Parsons graduated in 2007 from Fairfield University with a B.S. in Electrical Engineering and received his MBA from Villanova University. Michael began his career at CTDI working in CTDI's Engineering Organization as a Set Top Box Project Engineer. In 2009, Michael was appointed Director of Set Top Box Engineering. In this role, Michael was responsible for CTDI's engineering and IT resources and was strategic in the design and development of CTDI’s patented Gen-3, Gen5, CMTx multi-unit testers. Michael led the focus and technical innovation in the development of our quickly growing Set Top Box business <br>
       <br>
         Michael has played a key role in establishing our capabilities and service development from the beginning of our entry into the cable and CPE marketplace. In 2010, Michael assumed the role of Division Head for CTDI's Set Top Box Division, responsible for managing all aspects of CTDI's Set Top Box operations, technical innovation, customer satisfaction and profitability. In December, 2012, Michael was promoted to Vice President, Set-Top Box Division, and a $300 million per year business.
       <br><br>
        <span id="community">Community:</span><br>Michael is an active supporter of CTDI's United Way Campaign and a leadership contributor to the United Way of Chester County. Michael is an active volunteer for SPARC, the Southeastern Pennsylvania Autism Resource Center, currently serving on their Board of Directors. He participates in the annual walk for SPARC. He is also an active board member for the Saints Simon and Jude School Board of Directors.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MichaelParsonsBio',
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