<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Barry Young</h2>
          <h3>Vice President, Network Services Division</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-barry-young.jpg" style="height: 200px;">
       <p id="bioText1"> Barry Young graduated from RETS Electronics with an associate degree in Electrical Engineering. Barry joined CTDI and was promoted to wireless Program Manager in 1988, responsible for one of CTDI's fastest growing businesses. Barry held several Wireless Program Management positions before being appointed Director of Wireless in 1996. In 1999, Barry took on the new role of Director of Strategic Logistics and responsible for CTDI's global Avaya and Nortel programs. Barry was appointed Vice President, Wireline Division in 2004. <br>
       <br> In 2014, Barry assumed the role of Vice President, Network Services Division, leading the newly merged Wireline and Wireless Divisions at CTDI. Barry's responsibilities have expanded to include all divisional operational and financial aspects for CTDI's North America repair and logistics operations. This division encompasses over 1,200 employees across 20+ branch locations in the US and Canada.
         
       <br><br>
        <span id="community">Community:</span><br>He is also a leadership contributor to United Way of Chester County and is a graduate of the Leadership Chester County Board Development Program. Barry currently sits on Advisory Council for Elementary Education in Chester County. He is a member of the Chester County Advisory Council, Business Tax credit committee.
       </p>
    </div>         
  </div>

</template>

<script>

  export default {
    name: 'BarryYoungBio',
     data() {
    return {
       
      
    }
  },

   methods: { 
       
   },
      mounted () {
        window.scrollTo(0, 0)
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