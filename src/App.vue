<script setup>
import { ref } from "vue";
import HeroSection from './components/HeroSection/index.vue'
const firstName=ref("Zeeshan")
const lastname=ref("Latif")
</script>

<template>
 
  <HeroSection :first-Name="firstName" :last-name="lastname"/>
  <HeroSection />
</template>

<style scoped></style>
