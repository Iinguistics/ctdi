<template>
  <div class="container">
    <div class="caresHead">
      <h3>Corporate Culture</h3>
    </div>
      <div id="cube"></div>
     <div class="flex-passion container">
       <p class="passion-item" data-aos="fade-right" data-aos-duration="1500">CTDI was founded in 1975 by Jerry Parsons, his father, Don, and brother, Dick, in the family's garage in West Chester, PA. Since its beginning, CTDI has been a privately held, family owned business operated by the Parsons family. Following the example of their father, Jerry and Leo Parsons have developed, and continue to cultivate a family values philosophy at CTDI.</p>
       <img class="img-fluid passion-item" src="../assets/CTDI-Culture/fuel-passion.jpg" data-aos="fade-left" data-aos-duration="1500">
     </div>
      <div class="divider"></div>
     <div class="flex-passion container">
       <img class="img-fluid passion-item" src="../assets/CTDI-Culture/ctdi-culture.jpg" data-aos="fade-right" data-aos-duration="1500">
         <p class="passion-item" data-aos="fade-left" data-aos-duration="1500">Additionally, Jerry and Leo promote strong ethical business practices and encourage our employees to treat our customers and suppliers with dignity, respect and with fair business methods. Under the ownership of the Parsons Family, CTDI has also developed a very strong presence in the community and plays an active role with the United Way, YMCA, Shine Cancer Foundation, Archdiocese of Philadelphia, and hosts many community events such as the West Chester Children's Christmas party for under-privileged families.</p>
     </div>
     <div class="divider"></div>
     <div class="flex-passion container">
         <p class="passion-item " data-aos="fade-right" data-aos-duration="1500">For over 40 years, CTDI has earned a solid reputation in the communications service industry as a world-class company who displays a genuine employee focused approach to business as well as being a reliable and valued friend to many community organizations.</p>
         <img class="img-fluid passion-item" src="../assets/CTDI-Culture/ctdi-4.jpg" data-aos="fade-left" data-aos-duration="1500">
      </div>
      <div id="white-space"></div>
      <div id="to-top"><a class="fa fa-arrow-circle-o-up"  v-on:click="toTop">Back to top</a></div>
  </div>
</template>

<script>

 import * as Three from 'three'

  export default {
    name: 'CorpCulture',
    data() {
      return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
      }
    },
  
    methods: {
    init: function() {
        const container = document.getElementById('cube');

        this.camera = new Three.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000) ;
        this.camera.position.z = 4;

        this.scene = new Three.Scene();

        this.scene.background = new THREE.Color( 0xffffff );

        const geometry = new Three.BoxGeometry(2, 2, 2);
        // const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
        const texture = new Three.TextureLoader().load(require( "../assets/CTDI-Culture/ctdi-passion.jpg" ), t => this.onSuccess(t), e => this.onProgress(e), e => this.onError(e));
        const material = new Three.MeshBasicMaterial({ map: texture });

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
       
       
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        // this.mesh.rotation.z += 0.01;
        this.renderer.render(this.scene, this.camera);
    },
     toTop: function () {
         window.scrollTo({
         top: 0,
         behavior: 'smooth',
});
      }
  },
  mounted() {
      this.init();
      this.animate();
      window.scrollTo(0, 0)
  }

   
  }
</script>

<style scoped>

   #cube{
  height: 800px;
  width: 600px;
  margin: auto;
}

    .caresHead h3 {
    margin-top: 100px;
    text-align: center;
    font-weight: 600;
    color: #202124;
    padding-bottom: 30px;
    font-size: 48px;
  }


   .flex-passion img{
    height: 380px;
    width: 550px;
    max-width: 100%;
  }


 


.flex-passion{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  height: 625px;
  padding-top: 60px;
}


.passion-item{
  width: 300px; 
  align-items: flex-start; 
}


P{
  text-align: left;
  color: #202124;
  }

   .divider {
    height: 1px;
    background: #444;
    margin: auto;
    max-width: 80%;
  }

#white-space{
  padding-top: 125px;
}

#to-top{
 text-align: right;
 color: #202124;
 font-size: 16px;
 line-height: 24px;
 font-weight: 500;
 margin-bottom: 40px;
}

#to-top a{
  text-decoration: none;
}

#to-top a:hover{
  cursor: pointer;
}

  @media (max-width: 668px) {
     #cube{
  height: 800px;
  width: 600px;
  margin: auto;
}

}


@media (max-width: 920px) {
  .flex-passion{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 875px;
  padding-top: 5px;
  }

   .flex-passion img{
    height: 300px;
    width: 350px;
    max-width: 100%;
  }
 
 .passion-item{
   align-items: center;
   margin: auto;
 }

   .caresHead h3 {
    font-size: 38px;
  }
}


</style>