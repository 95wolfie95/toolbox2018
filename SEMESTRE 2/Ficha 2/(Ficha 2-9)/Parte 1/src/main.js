import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import router from './router'
// import store from './store'
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  // render: h => h(App)
  render: function(h) { return h(App)}
}).$mount('#app')
