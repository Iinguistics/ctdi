<template>
  <div> 
    <div class="leadershipHead">
    <a href="/#/leadership" ><h5>CTDI Leadership</h5></a> 
    </div>
         <div>
          <h2>James O'Hara</h2>
          <h3>Vice President, Marketing</h3>
         </div>
          <div class="bioWrapper">
      <img id="bioPic" src="../assets/ctdi-james-o-hara.jpg" style="height: 200px;">
       <p id="bioText1">Jim O’Hara graduated from West Chester University with a degree in Marketing. After 12 years in the marketing and advertising field, Jim joined CTDI's Marketing Department in 1997 as a Senior Graphics Designer, and in 1999. Jim was appointed Marketing Manager. In 2004, Jim was promoted to Director of Marketing and in December 2013, Vice President of Marketing. Jim has overall responsibility for CTDI's corporate marketing activities, developing and executing business development strategies, marketing campaigns and working with both our North American and International Executive teams. <br>
       <br>
          Under Jim's direction, the marketing department works closely with our Executive Management team to produce marketing strategies, corporate branding, industry tradeshows, social media initiatives, and business proposals, as well as employee and community relation efforts.
       <br><br>
        <span id="community">Community:</span><br> From 2007 to 2012, Jim was a member of the Archdiocese of Philadelphia's Board of Education. Today, Jim is a member of the Archdiocese's Delaware County Advisory Council and also supports the marketing efforts of the Chester, Montgomery, Bucks, and Philadelphia County Advisory Councils. Jim was an Executive member of the St. Francis Capital Campaign committee, and led their Capital Campaign in 2007 which raised over $1.8 million. Jim is an active supporter of CTDI community projects involving the United Way of Chester County, the YMCA and the Shine Organization supporting Cancer Care. Additionally, Jim provides leadership and his support to Penn States THON event and is an active supporter of the Springfield High School mini-THON organization. Currently, Jim is a member of the Penn State Brandywine marketing committee and has coached several Springfield Township baseball, soccer and basketball teams. From 2009 to 2013, Jim served as an officer for the Springfield High School Football and Baseball Booster clubs.
       </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'JamesHaraBio',
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