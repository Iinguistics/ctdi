<template>
<div class="mainWrap ">

  <video class="disableVid" autoplay playsinline muted loop preload>
     <source src="../assets/Tunnel.mp4">
  </video>
  <svg class="disableVid" height="100%" width="100%">
    <defs> 
     <mask id="mask" x="0" y="0" height="100%" width="100%">
       <rect x="0" y="0" height="100%" width="100%" />
      <text :id="text" x= "50%" y="50%" fill="red" text-anchor="middle">Locations</text>
      </mask>
    </defs>
      <rect class="disableVid" x="0" y="0" height="100%" width="100%" />
  </svg>
   <div class="topMid container">
       <h3>Global Operations Network</h3>
       <p>CTDI provides our clients access to an established network of over 90 global operations. Today, CTDI operates facilities in:</p>
         <div class="committee-flex container">
      <li class="committee-item fa fa-angle-right">Argentina</li>
      <li class="committee-item fa fa-angle-right">Australia</li>
      <li class="committee-item fa fa-angle-right">Belgium</li>
      <li class="committee-item fa fa-angle-right">Brazil</li>
      <li class="committee-item fa fa-angle-right">China</li>
      <li class="committee-item fa fa-angle-right">Czech Republic</li>
      <li class="committee-item fa fa-angle-right">France</li>
      <li class="committee-item fa fa-angle-right">Germany</li>
      <li class="committee-item fa fa-angle-right">Hungary</li>
      <li class="committee-item fa fa-angle-right">India</li>
      <li class="committee-item fa fa-angle-right">Italy</li>
      <li class="committee-item fa fa-angle-right">Netherlands</li>
      <li class="committee-item fa fa-angle-right">North America</li>
      <li class="committee-item fa fa-angle-right">Poland</li> 
      <li class="committee-item fa fa-angle-right">Portugal</li>
      <li class="committee-item fa fa-angle-right">Romania</li>
      <li class="committee-item fa fa-angle-right">Russia</li>
      <li class="committee-item fa fa-angle-right">Singapore</li>
      <li class="committee-item fa fa-angle-right">Spain</li>
      <li class="committee-item fa fa-angle-right">UK</li>
    </div>
   </div>
   <div class="google-map container" :id="mapName"></div>
   <div class="container hq-contact"><h5>CTDI GLOBAL HEADQUARTERS</h5>
    <p>1373 Enterprise Drive<br>
        West Chester, PA 19380<br>
        610-436-5203</p>
   </div>
       <div class="img-fluid north-img">
           <h3>North America Locations</h3>
      </div>
      <div class="location-flex container">
      <li class="location-item fa fa-angle-right">CTDI Global Headquarters <br>1373 Enterprise Drive West Chester, PA 19380 <br> 610-436-5203</li>
      <li class="location-item fa fa-angle-right">Davenport, FL <br>240 Deen Still Rd Davenport, FL 33897 <br> 863-508-1216</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">1305 West Chester <br>1305 Goshen Parkway <br>West Chester, PA 19380 <br> 610-436-5203</li>
      <li class="location-item fa fa-angle-right">Denver, CO <br>18401 E. 40th Avenue <br>Aurora, CO 80011 <br> 303-390-3582</li>
      <li class="location-item fa fa-angle-right">Oakville, ON <br>2323 Winston Park Dr<br>Oakville, ON L6H 6R7 <br> +1 905-829-0163</li>
      <li class="location-item fa fa-angle-right">1334 West Chester <br>1334 Enterpirse Drive <br>West Chester, PA 19380 <br> 610-436-5203</li>
      <li class="location-item fa fa-angle-right">Elgin, IL <br>2200 Galvin Drive <br>Elgin, IL 60124 <br> 847-783-2614</li>
      <li class="location-item fa fa-angle-right">Orlando, FL <br>9620 Air Commerce Parkway <br>Orlando, FL 32827 <br> 407-563-3482</li>
      <li class="location-item fa fa-angle-right">1336 West Chester <br>1336 Enterprise Drive <br>West Chester, PA 19380 <br> 610-436-5203</li>
      <li class="location-item fa fa-angle-right">Fenton, MO <br>2017 Corporate 44 Drive, <br>Fenton, MO 63026 <br> 314-580-8605</li>
      <li class="location-item fa fa-angle-right">Phoenix, AZ <br>8602 W Buckeye Rd, Suite 101 <br>Tolleson, AZ 85353 <br> 623-322-6412</li>
      <li class="location-item fa fa-angle-right">1339 West Chester <br>1339 Enterprise Drive <br>West Chester, PA 19380 <br> 610-436-5203</li>
      <li class="location-item fa fa-angle-right">Fontana, CA <br>14597 Baseline Ave<br>Fontana, CA 92336 <br> 909-320-6266</li>
      <li class="location-item fa fa-angle-right">Pittston, PA <br>149 Center Point Blvd. <br>Pittston, PA 18640 <br> 570-883-0116</li>
      <li class="location-item fa fa-angle-right">1381 West Chester <br>1381 Enterprise Drive <br>West Chester, PA 19380 <br> 610-436-5203</li>
      <li class="location-item fa fa-angle-right">Fort Worth, TX <br>1753 Chaplin Drive <br>Fort Worth, TX 76052<br> 972-415-1355</li>
      <li class="location-item fa fa-angle-right">Pleasant Prairie, WI<br>8801 88th Avenue, Suite B <br>Pleasant Prairie, WI 53158 <br>262-597-7355</li>
      <li class="location-item fa fa-angle-right">Albany, NY <br>2160 Amsterdam Road<br>Glenville, NY 12302<br> 518-930-0101</li>
      <li class="location-item fa fa-angle-right">Grand Junction, CO <br>830 South 12th Street, <br>Grand Junction, CO 81501 <br> 970-275-7010</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">Northborough, MA <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      <li class="location-item fa fa-angle-right">LAST <br>30 Forbes Road Suite A <br>Northborough, MA 01532 <br> 508-691-6350</li>
      </div>
  <div id="white-space"></div>
</div>

</template>


<script>

export default { 
  name: 'Locations',
  props: ['name'],
  data() {
      return {
      mapName: this.name + "-map",
      
    }
  },
   mounted: function () {
    const myLatlng = new google.maps.LatLng(39.989900, -75.560950);
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: myLatlng
    }
    const map = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
    position: myLatlng
});
   marker.setMap(map);

  },
   created () {
   window.scrollTo(0, 0)
       },
 
    methods: {
      
  } 
}
</script>

<style scoped>

svg{
  font-size: 7em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 1s font-size;
  position: absolute;
  left: 0;
  height: 122%;
  top: 0;
}

video{
  width: 100%;
  height: 100%;
}

svg rect {
  fill: white;
  mask: url(#mask);
}

.topMid{
  max-width: 70%;
  padding-bottom: 15px;
  text-align: center;
  margin: auto;
}


.topMid h3{
  padding-top: 60px;
  text-transform: uppercase;
  color: #111111;
  text-align: center;
  padding-bottom: 15px;
  font-size: 32px;
}

.topMid p{
  line-height: 1.75em;
}

.committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 78%;
  justify-content: space-evenly;
  height: 600px;
}


.committee-item{
  list-style: none;
  width: 130px; 
  height: 100px; 
  margin: auto; 
}



.fa{
  font-size: 18px;
  color: #333333;
}

.google-map{
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}

.hq-contact{
  padding-top: 50px;
  text-align: left;
  max-width: 60%;
  padding-bottom: 75px;
}



.north-img{
  margin: auto;
  width: 100%;
  height: 425px;
  background: url('../assets/LocationsImg/north-america.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.north-img h3 {
  color: #FC4445;
  text-align: center;
  margin: auto;
  vertical-align: middle;
  font-size: 50px;
  padding-top: 220px;
  font-weight: 600;
  text-transform: uppercase;
}

.location-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: space-evenly;
  height: 2600px;
  padding-top: 50px;
}


.location-item{
  list-style: none;
  width: 245px; 
  height: 200px; 
  margin: auto; 
}

#white-space{
  padding-top: 225px;
}


@media screen and (max-width: 1200px){
  svg{
    font-size: 4em;
  }
}


@media (max-width: 576px) { 
  .disableVid{
    display: none;
  }

  .google-map{
  width: 450px;
  height: 500px;
  margin: 0 auto;
  background: gray;
}

.topMid{
  max-width: 65%;
  padding-top: 15px;
}

 .committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 950px;
  } 

 
.committee-item{
  list-style: none;
  width: 80px; 
  margin: auto; 
}

#white-space{
  padding-top: 175px;
}
}

@media (max-width: 920px) {
  svg{
  font-size: 5em;
  height: 90%;
 }

 .committee-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  } 

 
.committee-item{
  list-style: none;
  width: 80px; 
  margin: auto; 
}
}

</style>