<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
       <p id="border"></p>
    </div>
         <div>
          <h2>Christopher Howe</h2>
          <h3>CFO & Vice President of Accounting</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-christopher-howe.jpg" style="height: 200px;">
       <p id="bioText1">Chris Howe graduated from the University of Maryland with a BS in Accounting. Prior to joining CTDI, he worked as a CPA at Arthur Andersen & Co. in audit and advisory services. Chris joined CTDI in 1994 and currently serves as the CFO and Vice President of Accounting. Chris has responsibility for internal and external financial reporting, accounting operations and general ledger, global consolidation, financial business systems, treasury, bank and debt management, compliance, acquisition integration, and the financial control environment. <br>
       <br>
          During his tenure at CTDI, Chris has served in progressive roles within CTDI from Assistant Controller, to Controller, to Director of Accounting. Chris is a valued member and advisor to the CTDI Executive Management team. He has provided due diligence, analysis and decision support related to business acquisitions.
       <br><br>
        <span id="community">Community:</span><br> Chris is an Eagle Scout and enjoys volunteering on non-profit boards and as a coach for his children’s baseball, soccer and basketball teams. Chris serves as a board member, President and Treasurer for CTDI CARES, a 501C3 corporation that provides assistance and support to CTDI employees and their families that are experiencing difficulties due to a critical illness. Chris also serves as a board member and Treasurer for the Foundation for Catholic Education. Additionally, Chris serves as a board member for the Uptown Entertainment Alliance, a non-profit that is bringing a theatre to downtown West Chester, PA. Chris served on the West Chester Area YMCA Board of Advisors from 2007 to 2016 and served in several leadership roles, including Board Chair, and is still active with the YMCA through various committees.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ChristopherHoweBio',
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