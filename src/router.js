import Vue from 'vue';
import skills from './components/skills.vue'
import about from './components/about.vue'
import Router from 'vue-router';

Vue.use(Router)

const routes = [
    { path : '/',name : 'skills', component : skills},
    { path : '/about',name : 'about' ,component : about}
  ]
  
  export default new Router({
    routes
  })
