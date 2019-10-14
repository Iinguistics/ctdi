<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
       <p id="border"></p>
    </div>
         <div>
          <h2>David Burt</h2>
          <h3>Vice President CTDI International</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-david-burt.jpg" style="height: 200px;">
       <p id="bioText1">Dave Burt joined CTDI in 1986 in the D4 department and held numerous management positions within CTDI's wireline and wireless divisions. In 1992, Dave moved to the United Kingdom where he served as Branch Manager for our Milton Keynes, United Kingdom operation. After three years, Dave returned to headquarters and was appointed Director of Wireless Services in West Chester in 1999. In 2000, CTDI entered into a joint venture with Deutsche Telekom to form CTDI Nethouse Services (now CTDI Europe) and Dave was appointed CEO of CTDI Europe in 2002. <br>
       <br>
         Dave spent four years in Germany expanding CTDI's presence in the EMEA region and building our international customer base. Upon his return to West Chester, Dave was appointed Vice President - International and is now responsible for establishing CTDI's presence in key areas around the globe, developing and diversifying CTDI's capabilities to serve global customers, and attain profitability goals. In addition to his global role, Dave continues to serve on the Management Board of CTDI Europe as the Chief Strategic Officer (CSO).
       <br><br>
        <span id="community">Community:</span><br> In 2000, CTDI entered into a joint venture with Deutsche Telekom to form CTDI Nethouse Services (now CTDI Europe) and Dave was appointed CEO of CTDI Nethouse Services in 2002. Dave spent four years in Germany expanding CTDI's presence in the EMEA region and building our international customer base. Upon his return West Chester, Dave was appointed Vice President - International and is now responsible for establishing CTDI's presence in key areas around the globe, developing and diversifying CTDI's capabilities to serve global customers, and attain profitability goals. In addition to his global role, Dave continues to serve on the Management Board of CTDI Europe as the Chief Strategic Officer (CSO). Chester University. Dave also serves as a Board Member of the Care Center Foundation, which provides educational assistance to families in need in the borough of West Chester.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DavidBurtBio',
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
  margin-right: 50%;
  font-size: 24px;
  color: #BA9009;
  font-weight: 200;
}


 #bioPic{
    padding-right: 60px;
    padding-left: 30px;
 }

#recognition{
  color: #333333;
  font-size: 22px;
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

</style>