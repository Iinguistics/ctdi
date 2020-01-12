<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Leo Parsons</h2>
          <h3>President & Chief Operating Officer</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-leo-parsons.jpg" style="height: 200px;">
       <p id="bioText1">As CTDI’s President and Chief Operating Officer, Leo is responsible for overseeing all operational and profitability strategies of this highly successful international corporation. Under Leo’s leadership, CTDI’s Wireless and Network Deployment divisions substantially developed and grew. Over his career, Leo’s strategic vision was also instrumental in the expansion of CTDI’s Operations network in North America, Europe, and Asia. <br>
       <br>
         Today Leo is in charge of over 40 operation’s performance, and 7 million dollars in overseas corporations. Leo continues to still take an active role in customer relationships and owns customer relationships such as ARRIS, Avaya, and VIAVI. Additionally, he is actively engaged with CTDI’s Information Technology Organization, Quality Group, Network Services and NDS Divisions. Leo provides his leadership and insight with our executive team and customers to develop and implement new service strategies and solutions. 
       <br><br>
        <span id="recognition">Recognition:</span><br> Leo is a 1982 graduate of Penn State University, earning a Bachelor’s Degree in Electrical Engineering.  Leo and his wife Maryanne were the recipients of the Service to Youth Award presented by the YMCA of Great Brandywine for their longstanding work with their Annual Dinner/Good Kids Program.  Leo was awarded the Bishop Shanahan Medal in recognition of his dedication to his alma mater. Maryanne leads Partners in Outreach which provides compassion to others in their moments of need.
        <br><br>
        <span id="community">Community:</span><br> Leo is an active member of the Bishop Shanahan High School Board and serves as Board Chairman. Leo is also leading efforts for the Bishop Shanahan “Our Team, Our Dream” Turf Campaign, which is focused on raising funds to build a new, state-of-the-art turf field, track and lighting. Leo provides his leadership on several boards and is an original member of the Chester County Advisory Council which supports the efforts of the Foundation for Catholic Education. Today, Leo serves as Chair for the Chester County Advisory Council which supports the efforts of the foundation “chair of strategic planning committee.” Additionally, Leo is a dedicated supporter of the YMCA of Greater Brandywine and he is the Chairman for the YMCA of Greater Brandywine’s association-wide 2016 Annual Campaign. He is an active participant in CTDI's annual United Way campaign and is a United Way Leadership Donor. 
        <br> Leo and Maryanne are the proud parents of four children; Matt, Mark, Leo and Megan. They are the proud grandparents of Reagan, Blakely, Louis and Kaine, children of their son Matt and his wife Megan. Leo and Maryanne live in Chester Springs, PA
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'LeoParsonsBio',
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