<script setup>
import { ref } from "vue";
import HeroSection from './components/HeroSection/index.vue'

const formHandler=(userName,email,password)=>{
  console.log(userName)
  console.log(email)
  console.log(password)
}

const getData=(names)=>{
  console.log(names)
}
</script>

<template>
 
  <HeroSection @Datatopaernt="getData"  @userInfo="formHandler"/>

</template>

<style scoped></style>
