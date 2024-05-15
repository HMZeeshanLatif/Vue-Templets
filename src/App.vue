<script setup>
import { ref } from "vue";
import HeroSection from './components/HeroSection/index.vue'
import slotComponentVue from "./components/slotComponent.vue";



</script>

<template>
 
  <slotComponentVue>
      <h1>This is slot</h1>
  </slotComponentVue>

</template>

<style scoped></style>
