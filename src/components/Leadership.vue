<template>
  <div> 
    <div class="leadershipHead container">
    <a href="/#/leadership"><h5>CTDI Leadership</h5></a> 
       <h1 id="execHead">Executive Profiles</h1>
    </div>
      
        
       
       <div class="profileListWrapper">
        <ul class="profileList">
            <router-link to=/leadership/jerry-parsons><li class="profileListItem"><img src="../assets/ctdi-jerry-parsons.jpg" height="230" width="190"><h5>Jerry Parsons</h5><h6>CEO</h6></li></router-link>
            <router-link to=/leadership/leo-parsons><li class="profileListItem"><img src="../assets/ctdi-leo-parsons.jpg" height="230" width="190"><h5>Leo Parsons</h5><h6>President & COO<br></h6></li></router-link>
            <router-link to=/leadership/david-burt><li class="profileListItem"><img src="../assets/ctdi-david-burt.jpg" height="230" width="190"><h5>David W. Burt</h5><h6>Vice President<br>CTDI International</h6></li></router-link>
            <router-link to=/leadership/jonathan-friedman><li class="profileListItem"><img src="../assets/ctdi-jonathan-friedman.jpg" height="230" width="190"><h5>Jonathan Friedman</h5><h6>CFO & Vice President<br>Corporate Affairs</h6></li></router-link>
            <router-link to=/leadership/ron-hartz><li class="profileListItem"><img src="../assets/ctdi-ron-hartz.jpg" height="230" width="190"><h5>Ron Hartz</h5><h6>Vice President <br>Corporate Operations</h6></li></router-link>
            <router-link to=/leadership/dieter-hollenbach><li class="profileListItem"><img src="../assets/ctdi-dieter-hollenbach.jpg" height="230" width="190"><h5>Dieter Hollenbach</h5><h6>CEO <br> CTDI Europe</h6></li></router-link>
            <router-link to=/leadership/christopher-howe><li class="profileListItem"><img src="../assets/ctdi-christopher-howe.jpg" height="230" width="190"><h5>Christopher Howe</h5><h6>CFO & Vice President <br> Accounting</h6></li></router-link>
            <router-link to=/leadership/duane-knecht><li class="profileListItem"><img src="../assets/ctdi-duane-knecht.jpg" height="230" width="190"><h5>Duane D. Knecht</h5><h6>CFO & Vice President <br> Accounting</h6></li></router-link>
            <router-link to=/leadership/eric-miller><li class="profileListItem"><img src="../assets/ctdi-eric-miller.jpg" height="230" width="190"><h5>Eric Miller</h5><h6>Vice President <br> Supply Division</h6></li></router-link>
            <router-link to=/leadership/james-o-hara><li class="profileListItem"><img src="../assets/ctdi-james-o-hara.jpg" height="230" width="190"><h5>James O'Hara</h5><h6>Vice President <br> Marketing</h6></li></router-link>
            <router-link to=/leadership/brian-parsons><li class="profileListItem"><img src="../assets/ctdi-brian-parsons.jpg" height="230" width="190"><h5>Brian Parsons</h5><h6>Vice President <br>MCE, Products Supply Division</h6></li></router-link>
            <router-link to=/leadership/kevin-parsons><li class="profileListItem"><img src="../assets/ctdi-kevin-parsons.jpg" height="230" width="190"><h5>Kevin Parsons</h5><h6>Vice President <br>Network Program Services</h6></li></router-link>
            <router-link to=/leadership/michael-parsons><li class="profileListItem"><img src="../assets/ctdi-michael-parsons.jpg" height="230" width="190"><h5>Michael Parsons</h5><h6>Vice President <br>Set-Top Box Division</h6></li></router-link>
            <router-link to=/leadership/monika-ruth><li class="profileListItem"><img src="../assets/ctdi-monika-ruth.jpg" height="230" width="190"><h5>Monika Ruth</h5><h6>CFO <br>CTDI Europe</h6></li></router-link>
            <router-link to=/leadership/qing-wang><li class="profileListItem"><img src="../assets/ctdi-qing-wang.jpg" height="230" width="190"><h5>Qing Wang</h5><h6>Vice President <br>Corporate Quality</h6></li></router-link>
            <router-link to=/leadership/barry-young><li class="profileListItem"><img src="../assets/ctdi-barry-young.jpg" height="230" width="190"><h5>Barry Young</h5><h6>Vice President <br>Network Services Division</h6></li></router-link>

         </ul>
       </div>
    </div>
 

</template>

<script>
  export default {
    name: 'Leadership',
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
      margin-top: 100px;
      text-align: center;
      font-weight: 600;
      color: #333333;
      text-decoration: underline #D7CFCD;
       margin-bottom: 5%;
  }

    .leadershipHead a:hover{
    text-decoration: none;
}
 

#execHead{
      font-size: 30px;
      line-height: 35px;
      margin:auto;
      padding-bottom: 20px;

  }

    

    .profileList a h6{
    color: #333;
    text-transform: capitalize;
}

   .profileList a h5:hover{
    text-decoration: underline;
}

  .profileList a{
    text-decoration: none;
}

.profileList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-evenly;
    width: 70%;
    margin: auto;
   
}

.profileListItem{
   padding: 10px;
}

.profileListItem img{
   border-radius: 4px;
}



@media (max-width: 576px) { 
   #border {
        border: 1px solid #D7CFCD;
        width: 71%;
        margin: auto;
        margin-bottom: 5%;
    }
       #execHead{
      font-size: 30px;
      line-height: 35px;
      margin-right: -10%;
      padding-bottom: 20px;
  }
}

</style>