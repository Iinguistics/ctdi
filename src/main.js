import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import AOS from 'aos'
import 'aos/dist/aos.css'




Vue.config.productionTip = false

new Vue({
  created(){
      AOS.init({disable: 'mobile'});
      
  },
  
 
  render: h => h(App),
  router,
}).$mount('#app')

