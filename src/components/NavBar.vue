<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navTop">
  <a class="navbar-brand" href="/"><img src="../assets/ctdi-logo.png" alt="ctdi-logo" border="0"></a><span id="logoText"> Global Engineering, Repair & Logistics</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https://ctdicareers.silkroad.com/" target="_blank"><span data-hover="Careers">Careers</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://login.etos1.ctdi.com/default.aspx" target="_blank"><span data-hover="Etos">Etos</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span data-hover="Divisions">Divisions</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" >stb/cpe</a>
          <a class="dropdown-item" href="#">Mobile</a>
          <a class="dropdown-item" href="#">Network Deployment</a>
          <a class="dropdown-item" href="#">Products</a>
          <a class="dropdown-item" href="#">Supply</a>
          <div class="dropdown-divider"></div> <!-- Maybe remove this divider/padding/dont need it -->
          <a class="dropdown-item" href="#">Network Services</a>
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

  }
</script>

<style scoped>

.navbar{
  background: rgba(45, 45, 45, 0.98) !important;
  text-transform: uppercase;
  font-size: 14px;
}
.nav-link{
  color: #FFFFFF !important;
}


.nav-item a:hover{
  color: #66BBFF !important;
 
}


#navbarDropdown span:hover{
  color: #66BBFF !important;
}

.dropdown-item{
  padding: 5px !important;
}

.dropdown-menu a:hover{
  color:#66BBFF !important;
}






#logoText{
  color: #D1D7E0;
  padding-right: 45%;
  font-weight: 500;
  
}

@media (max-width: 576px) { 
    #logoText{
    padding-right:20%;
}
 }

@media (max-width: 1376px) { 
   .dropdown-menu{
    padding: 50px !important;
  }
  .dropdown-item{
    font-size: 14px;
    
  }
  .navbar{
    padding-right: 130px;
  }
 }






</style>