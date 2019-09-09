<template>
<div class="mainWrap container">
   <div>
       <h3 class="topMid">Global Operations Network</h3>
       <p>CTDI provides our clients access to an established network of over 90 global operations.<br> Today, CTDI operates facilities in: Argentina, Australia, Belgium, Brazil, China, Czech Republic, France, Germany, Hungary, India, Italy, Netherlands, North America, Poland, Portugal, Romania, Russia, Singapore, Spain and UK.</p>
   </div>
   <div class="google-map" :id="mapName"></div>
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


  
     
    methods: {
      
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topMid{
  padding: 90px;
  text-transform: uppercase;
  color: #000000;
}

.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}


</style>