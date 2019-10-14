<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
       <p id="border"></p>
    </div>
         <div>
          <h2>Jerry Parsons</h2>
          <h3>Chairman & Chief Executive Officer</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-jerry-parsons.jpg" style="height: 200px;">
       <p id="bioText1">As Chairman and Chief Executive Officer, Jerry is the leader of the thriving and dynamic international company CTDI. Today, CTDI is recognized as a premier service provider and strategic partner in the global communications service industry. Jerry’s vision, along with the company’s dedicated and talented employees, is a key reason why CTDI has achieved unprecedented growth and success since its founding in 1975 by Jerry, his father Donald, and his brother Richard.Jerry’s ability to identify opportunities and design innovative business strategies remains the key to guiding CTDI through a complex industry landscape with an unwavering commitment to strategic diversification, technological innovation and service excellence. <br>
       <br>
       Today, CTDI employs more than 15,500 people in over 95 locations across the world.  During his tenure as President and then CEO, Jerry has positioned CTDI as a leader for providing innovative test, repair, and logistics services for the Telecom, Cable and Consumer device industry for technologies such as LTE Wireless network equipment, Set-Top Boxes, Wireless Gateways, Modems, Tablets, and other state-of-the art devices. 
       <br><br>
        <span id="recognition">Recognition:</span><br> Jerry's business honors include induction into the Chester County Business Hall of Fame, the Chester County Chamber CEO of the Year Award and the Harold Martin Business Leadership Award from the Exton Region Chamber of Commerce. In addition, Jerry was named a Penn State Fellow in 2009, receiving the Penn State Outstanding Alumni Award.
        <br><br>
        <span id="community">Community:</span><br> Jerry is dedicated to supporting the community and encourages his employees to do the same. Jerry is recognized as a community leader and has received the St. Elizabeth Ann Seton Award given by the National Catholic Educational Association for his personal devotion to Catholic education. Also, Jerry received the Papal Honor of Sir Gregory the Great for his distinguished service to Catholic education. Jerry is a very active supporter of the United Way of Chester County and is an active participant in CTDI's annual United Way campaign and is a United Way Leadership Donor. He is also currently on the Advisory Board of Penn State Brandywine. Jerry and many other members of the Parsons family support Bishop Shanahan High School, the SHINE Cancer Foundation and the Chester County Hospital. For more than a decade, Jerry served as Chairman for the Archdiocese of Philadelphia's Board of Education. Today, he is the Executive Vice President of the Foundation for Catholic Education and Co-Chair of the Archdiocese of Philadelphia's Executive Board of Elementary Education (EBEE). Jerry and his wife, Eleanor, live in Chester Springs and have three children, Brian, Katie and Michael. They are proud grandparents to seven grandchildren, Nola and John, children of Brian and his wife Brigid; Sam, Ellie and Julie, children of Katie and husband Keith; and Mary and Sarah, daughters of Michael and his wife Christine.
       </p>
    </div>
     
  
  </div>

</template>

<script>
  export default {
    name: 'JerryParsonsBio',
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
  margin-right: 57%;
  font-size: 40px;
  color: #786D65;
}

h3{
  margin-right: 48%;
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