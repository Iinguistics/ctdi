<template>
  <div> 
    <h5 id="leadershipHead">CTDI Leadership</h5>
    <p id="border"></p>
       <div>
        <h1 id="execHead">Executive Profiles</h1>
       </div>
       <div class="profileListWrapper">
        <ul class="profileList">
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-jerry-parsons.jpg" height="230" width="190"><h5>Jerry Parsons</h5><h6>CEO</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-leo-parsons.jpg" height="230" width="190"><h5>Leo Parsons</h5><h6>President & COO</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-david-burt.jpg" height="230" width="190"><h5>David W.Burt</h5><h6>Vice President <br>CTDI International</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-jonathan-friedman.jpg" height="230" width="190"><h5>Jonathan Friedman</h5><h6>CFO & Vice President<br> Corporate Affairs</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-ron-hartz.jpg" height="230" width="190"><h5>Ron Hartz</h5><h6>Vice President <br> Corporate Operations</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-dieter-hollenbach.jpg" height="230" width="190"><h5>Dieter Hollenbach</h5><h6>CEO <br>CTDI Europe</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-christopher-howe.jpg" height="230" width="190"><h5>Christopher Howe</h5><h6>CFO & Vice President <br> Accounting</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-duane-knecht.jpg" height="230" width="190"><h5>Duane D. Knecht</h5><h6>Vice President <br> Marketing</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-eric-miller.jpg" height="230" width="190"><h5>Eric Miller</h5><h6>Vice President <br> Products Supply Division</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-james-o-hara.jpg" height="230" width="190"><h5>James O'Hara</h5><h6>Vice President <br> Marketing</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-brian-parsons.jpg" height="230" width="190"><h5>Brian Parsons</h5><h6>Vice President <br> MCE, Products Supply Division</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-kevin-parsons.jpg" height="230" width="190"><h5>Kevin Parsons</h5><h6>Vice President <br> Network Program Services</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-michael-parsons.jpg" height="230" width="190"><h5>Michael Parsons</h5><h6>Vice President<br>Set-Top Box Division</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-james-o-hara.jpg" height="230" width="190"><h5>Monika Ruth</h5><h6>CFO <br>CTDI Europe</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-qing-wang.jpg" height="230" width="190"><h5>Qing Wang</h5><h6>Vice President<br>Corporate Quality</h6></a></li>
            <li class="profileListItem"><a href="#"><img src="../assets/ctdi-barry-young.jpg" height="230" width="190"><h5>Barry Young</h5><h6>Vice President<br>Network Services Division</h6></a></li>

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
    methods: {
     
    },

  }
</script>

<style scoped>
  #leadershipHead{
      padding-top: 25px;
      margin-right: 42.5%;
      font-weight: 600;
  }

   #border {
        border: 1px solid #D7CFCD;
        width: 50%;
        margin: auto;
        margin-bottom: 5%;
    }

    #execHead{
      font-size: 30px;
      line-height: 35px;
      margin-right: 37%;
      padding-bottom: 20px;
  }

    .profileListWrapper{
     
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
    width: 80%;
    margin: auto;
   
}

.profileListItem{
   padding: 10px;

}




</style>