<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <form @submit.prevent="addSkill">
        <input type="text" v-validate="'min:5'" name="skill" placeholder="Enter a skill you have.." v-model="skill" >
        {{ skill }}
         <transition name="fade">
        <p v-if="errors.has('skill')">
          <b>Please correct the following error(s):</b>
          {{ errors.first('skill')}}
        </p>
        </transition>
    </form>
    
    <div class="holder">
      <ul>
       
          <li v-for=" (data,index) in skills" :key='index'> {{index}} - {{data.skill}} <i class="fa fa-window-close" @click="deleteSkill(index)" aria-hidden="true"></i> </li>
        
      </ul>

      <p v-if="skills.length >= 1"> you have {{skills.length}} skills </p>
      <p v-else>you don't have any skills  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      skill : '',
      name : 'hachim soutra',
      skills : [
        { "skill" : "php" },
        { "skill" : "laravel" },
        { "skill" : "java" },
        { "skill" : "phyton" },
        { "skill" : "vue.js" },
      ]
    }
    
  },
  methods: {
    addSkill(){
      this.$validateAll().then((res) =>{
        if(res){
            this.skills.push({skill :this.skill});
            this.skill = ''; 
        }
      })
     
    },
    deleteSkill(index){
      this.skills.splice(index,1);
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./skills.css" >

</style>
 