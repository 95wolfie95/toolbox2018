import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import router from './router'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'
// import store from './store'

Vue.use(VueCookies)
Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  // render: h => h(App)
  render: function(h) { return h(App)}
}).$mount('#app')
