<template>
  <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="https://i.ibb.co/sqb3Xz6/ctdi-logo.png" alt="ctdi-logo" border="0"></a><span id="logoText"><b>Global</b> Engineering, Repair & Logistics</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https://ctdicareers.silkroad.com/" target="_blank">careers<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://login.etos1.ctdi.com/default.aspx" target="_blank">etos</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Divisions
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" v-on:click='what'>Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav> 
  <!--  more custom / might use
     <main>
  <ul class="navBar" role="navigation">
    <li><i class="fa fa-home"></i>Home</li>
    <li><i class="fa fa-bell-o"></i>Notifications</li>
    <li><i class="fa fa-envelope-o"></i>Messages</li>
    <li class="twitter__bird"><i class="fa fa-twitter"></i></li>
  </ul>
     </main> -->
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {

      }
    },
    methods: {
      what(){
        alert('whahhat');
      }
    },

  }
</script>

<style scoped>

.navbar{
  background-color: #63666A !important;
  text-transform: uppercase;
  font-size: 15px;
}
.nav-link{
  color: white !important;
}

#logoText{
  color: #D1D7E0;
  padding-right: 51%;
  font-weight: 500;
  
}

@media (max-width: 576px) { 
    #logoText{
    padding-right:20%;
}
 }

/*  more custom / might use
.navBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    margin: auto;
    position: relative; /*fixed ? nahhhh */ /*
    overflow:hidden;
    z-index: 1;
    padding:10px;
    list-style-type: none;
    background-color: #4056A1;

 li
   color:white;
 
*/


</style>