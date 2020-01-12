<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
        <div><h2>Kevin Parsons</h2><h3>Vice President, Network Program Services</h3>
            </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-kevin-parsons.jpg" style="height: 200px;">
       <p id="bioText1">Kevin Parsons graduated from Virginia Tech with a Bachelor of Science degree and received his MBA from Villanova University, while he began his career working in CTDI's Network Deployment Solutions (NDS) Division as a Project Coordinator. In 2002, Kevin was appointed NDS Divisional Manager - Operations, responsible for all aspects of NDS Operations in Pennsylvania, Illinois and Connecticut. In 2004, Kevin shifted his focus to CTDI's Wireless Division and was promoted to Director, Wireless Handset Repair, with responsibility for the operation and profitability of this segment of CTDI's wireless business. In January, 2005, Kevin was appointed Director, Sprint and Embarq Programs. In this role, Kevin had direct accountability and responsibility for program performance, business relationship development and service, and capability expansion for CTDI's One-Stop Service Solutions for Sprint and Embarq. In December 2010, Kevin transitioned to the role of Director, Wireless Repair Programs, where had overall responsibility for all aspects of CTDI's Wireless Repair Operations including operational performance, customer service, program management, technical development activities, and profitability. In December 2012, Kevin was promoted to Vice President, Wireless Division. <br>
       <br>
          Most recently, Kevin was appointed Vice President, Business Development. In this role, Kevin is focused on generating new business opportunities and revenue growth for CTDI's new Network Services Division in the areas of technical repair, reverse logistics, forward logistics, distribution, and fulfillment. Kevin and his team work closely with the Network Deployment Solutions (NDS) Division, allowing CTDI to support our customers as they build out their next-generation networks.
       <br><br>
        <span id="community">Community:</span><br> Kevin is an active supporter of CTDI's United Way Campaign, and participates in United Way Days of Caring. Kevin is a 2009 Graduate of the Leadership Chester County (formerly Chester County Leadership Connection) board development program.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'KevinParsonsBio',
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