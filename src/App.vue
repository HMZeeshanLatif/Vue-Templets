<script setup>
import { ref } from "vue";
import HeroSection from './components/HeroSection/index.vue'
const firstName=ref("Zeeshan")
const lastname=ref("Latif")
</script>

<template>
 
  <HeroSection :ary="['Zeeeshan','Faizan','Arman']" :obj="{name:'Zeeshan',father:'Latif'}"/>

</template>

<style scoped></style>
