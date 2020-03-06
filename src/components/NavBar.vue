<template>
  <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="navTop">
  <a class="navbar-brand" href="/"><img id="logoPic" src="../assets/ctdi-logo.png" alt="ctdi-logo" border="0"></a><span id="logoText"> </span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
         <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span data-hover="Divisions">Divisions</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to=/locations>stb/cpe</router-link>
          <router-link class="dropdown-item" to=/locations>Mobile</router-link>
          <router-link class="dropdown-item" to=/locations>Network Deployment</router-link>
          <router-link class="dropdown-item" to=/locations>Products</router-link>
          <router-link class="dropdown-item" to=/locations>Supply</router-link>
          <router-link class="dropdown-item" to=/locations>Network Services</router-link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://login.etos1.ctdi.com/default.aspx" target="_blank"><span data-hover="Etos">Etos</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://ctdicareers.silkroad.com/" target="_blank"><span data-hover="Careers">Careers</span></a>
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
  position: fixed !important;
  width: 100%;
  top: 0 !important;
}
.nav-link{
  color: #FFFFFF !important;
}


.nav-item a:hover{
  color: #9FA8A3 !important;
 
}


#navbarDropdown span:hover{
  color:#9FA8A3 !important;
}

.dropdown-item{
  padding: 5px !important;
}

.dropdown-menu a:hover{
  color: #9FA8A3 !important;
}

#logoPic{
  height: 40px;
  width: 170px;
}


#logoText{
  padding-right: 65%;
}



@media (max-width: 667px) { 
    #logoText{
    padding-right: 20%;
}
#logoPic{
  height: 35px;
  width: 160px;
}

 }

 @media (max-width: 768px) { 
    #logoText{
    padding-right: 20%;
}
#logoPic{
  height: 30px;
  width: 125px;
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

@media (min-width: 1200px){
   .dropdown:hover .dropdown-menu {
  display: block;
  
}
}


</style>

  

