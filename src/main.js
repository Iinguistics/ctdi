import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App),
  router,
}).$mount('#app')
