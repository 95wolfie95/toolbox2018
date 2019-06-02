import Vue from 'vue';
// import Router from 'vue-router';
import { IonicVueRouter } from '@ionic/vue';

import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

// Vue.use(Router);
Vue.use(IonicVueRouter);

// export default new Router({
export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
