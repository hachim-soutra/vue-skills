<template>
  <div id="app">
    
    <nav>
      <router-link to="/" > <i class="fa fa-home" aria-hidden="true"></i> Home</router-link>
      <router-link to="/about" > <i class="fa fa-question" aria-hidden="true"></i> About</router-link>
    </nav>
    <router-view/>
  </div>
  
</template>

<script>
import skills from './components/skills.vue'
import about from './components/about.vue'

export default {
  name: 'app',
  components: {
    skills,
    about
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
</style>
 