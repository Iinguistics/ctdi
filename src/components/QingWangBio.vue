<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>Qing Wang</h2>
          <h3>Vice President, Corporate Quality</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-qing-wang.jpg" style="height: 200px;">
       <p id="bioText1"> Qing Wang earned a Bachelor’s Degree in Chemical Engineering from Nanchang Institute of Aeronautical Technology, a Master’s Degree in Industrial Engineering from Huazhong University of Science & Technology, and a Master’s Degree in Business Administration from Boston University. Qing is a certified Six Sigma Black Belt from American Society of Quality, and a Lean Bronze certificate from Society of Manufacturing Engineers. Qing joined CTDI in 2015 with extensive background in Manufacturing, Engineering, Design & Development and Quality in the Automotive, Electronics and Aerospace & Defense Industry. <br>
       <br>She started her career working for Ford Motors Company JV in China where she worked as a Process Engineer, Engineering Manager, Director of Design & Development and Associate Vice President of Quality. She was the management representative for ISO9000, ISO14001 and QS9000 and Champion of Six Sigma & FPS/Lean implementation. She later worked for Legrand North America in the US as the Senior Director of Quality where she upgraded the Quality Program with the focus on off-shore contract manufacturing and design & development control. Most recently, she worked for TE Connectivity as the Global Director of Quality for the Aerospace & Defense Division. In her current role at CTDI as the Vice President of Corporate Quality, Qing leads worldwide Quality initiatives focusing on a global strategy in process compliance & standardization and continuous improvement.
         
       <br><br>
        <span id="community">Community:</span><br>Qing is a leadership contributor to the United Way of Chester County. She is also active in a number of fundraising events for a several charitable organizations.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'QingWangBio',
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